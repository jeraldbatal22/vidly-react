import React, { Component } from "react";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import MoviesTable from "./moviesTable";
import _ from "lodash";
import { connect } from "react-redux";
import {
  likedMovie,
  fetchAllMovies,
  fetchAllGenres,
} from "../redux/actions/movieAction";
import paginate from "../helpers/paginate";
class Movies extends Component {
  state = {
    currentPage: 1,
    postsPerPage: 4,
    sortColumn: { path: "", order: "asc" },
  };

  componentWillMount() {
    this.props.fetchAllMovies();
    this.props.fetchAllGenres();
  }
  // componentDidMount = () => {
  //   const genres = [{ name: "All Genres" }, ...this.props.genres];
  //   this.setState({ movies: this.props.movies, genres: genres });
  // };

  handlePaginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleGenreSelect = (item) => {
    this.setState({
      selectedGenre: item,
      currentPage: 1,
    });
  };

  handleSort = (sortColumn) => {
    this.setState({
      sortColumn,
    });
  };

  getPageData = () => {
    const { currentPage, postsPerPage, selectedGenre, sortColumn } = this.state;
    const { movies: allMovies } = this.props;

    const filtered =
      this.state.selectedGenre && this.state.selectedGenre.hasOwnProperty("_id")
        ? allMovies.filter((a) => a.genre._id === selectedGenre._id)
        : allMovies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);
    const { currentPosts } = paginate(sorted, currentPage, postsPerPage);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filtered.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }
    return { currentPosts, filtered, pageNumbers };
  };

  render() {
    const { length: count } = this.props.movies;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { currentPosts, filtered, pageNumbers } = this.getPageData();

    return (
      <React.Fragment>
        <div className='d-flex'>
          <ListGroup
            onHandleGenreSelect={this.handleGenreSelect}
            onHandleAllGenre={this.handleAllGenre}
            selectedGenre={this.state.selectedGenre}
            genres={this.props.genres}
          />
          <div style={{ marginLeft: "50px" }}>
            <p>Showing {filtered.length} movies in the database.</p>
            <MoviesTable
              onHandleLike={this.handleLike}
              onHandleDelete={this.handleDelete}
              currentPosts={currentPosts}
              onHandleSort={this.handleSort}
              sortColumn={this.state.sortColumn}
            />
            <Pagination
              pageNumbers={pageNumbers}
              currentPage={this.state.currentPage}
              onHandlePaginate={this.handlePaginate}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  genres: state.movies.genres,
});

export default connect(mapStateToProps, {
  likedMovie,
  fetchAllMovies,
  fetchAllGenres,
})(Movies);
