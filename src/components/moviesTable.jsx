import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";
import { deleteMovie, likedMovie } from "../redux/actions/movieAction";

class MoviesTable extends Component {
  state = {
    columns: [
      {
        path: "title",
        label: "Title",
        content: (movie) => (
          <Link to={`/movies/${movie._id}`}>{movie.title}</Link>
        ),
      },
      {
        path: "genre.name",
        label: "Genre",
      },
      {
        path: "numberInStock",
        label: "Stock",
      },
      {
        path: "dailyRentalRate",
        label: "Rate",
      },
      {
        content: (movie) => (
          <Like liked={movie.liked} onClick={() => this.handleLike(movie)} />
        ),
      },
      {
        content: (movie) => (
          <button
            onClick={() => this.handleDelete(movie)}
            className='btn btn-danger btn-sm'>
            Delete
          </button>
        ),
      },
    ],
  };

  handleDelete = (movie) => {
    const movies = this.props.movies.filter((m) => m._id !== movie._id);
    this.props.deleteMovie(movies);
  };

  handleLike = (movie) => {
    this.props.likedMovie(movie);
  };

  render() {
    const { onHandleLike, currentPosts, sortColumn, onHandleSort } = this.props;
    return (
      <Table
        columns={this.state.columns}
        currentPosts={currentPosts}
        sortColumn={sortColumn}
        onHandleSort={onHandleSort}
        onHandleLike={onHandleLike}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  genres: state.movies.genres,
});

export default connect(mapStateToProps, { deleteMovie, likedMovie })(
  MoviesTable
);
