import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Pagination from "./common/pagination";
import ListGroup from "./common/listGroup";
import { getGenres } from "../services/fakeGenreService";
import MoviesTable from "./moviesTable";
import _ from "lodash";

class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    currentPage: 1,
    postsPerPage: 4,
    sortColumn: { path: "", order: "asc" },
  };

  componentDidMount = () => {
    const genres = [{ name: "All Genres" }, ...getGenres()];
    this.setState({ movies: getMovies(), genres: genres });
  };

  handleDelete = (movie) => {
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies });
  };

  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movies[index] };
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };

  handlePaginate = (pageNumber) => {
    this.setState({ currentPage: pageNumber });
  };

  handleGenreSelect = (item) => {
    this.setState({
      selectedGenre: item,
      currentPage: 1,
    });
  };

  // handleFilterGenre = (item) => {
  //   const filtered = this.state.selectedGenre
  //     ? getMovies().filter((a) => a.genre._id === item._id)
  //     : getMovies();
  //   this.setState({
  //     movies: filtered,
  //     selectedGenre: item.name,
  //   });
  //   this.handlePaginate(1);
  // };

  handleSort = (sortColumn) => {
    this.setState({
      sortColumn,
    });
  };

  getPageData = () => {
    const { movies, currentPage, postsPerPage, selectedGenre, sortColumn } =
      this.state;

    const filtered =
      this.state.selectedGenre && this.state.selectedGenre.hasOwnProperty("_id")
        ? movies.filter((a) => a.genre._id === selectedGenre._id)
        : movies;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.order]);

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = sorted.slice(indexOfFirstPost, indexOfLastPost);

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filtered.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }

    return { currentPosts, filtered, pageNumbers };
  };

  render() {
    const { length: count } = this.state.movies;

    if (count === 0) return <p>There are no movies in the database.</p>;

    const { currentPosts, filtered, pageNumbers } = this.getPageData();

    return (
      <React.Fragment>
        <div className='d-flex'>
          <ListGroup
            onHandleGenreSelect={this.handleGenreSelect}
            onHandleAllGenre={this.handleAllGenre}
            selectedGenre={this.state.selectedGenre}
            genres={this.state.genres}
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

export default Movies;
