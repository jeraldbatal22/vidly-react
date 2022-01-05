import React, { Component } from "react";
import { Link } from "react-router-dom";
import Like from "./common/like";
import Table from "./common/table";

export default class MoviesTable extends Component {
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
          <Like
            liked={movie.liked}
            onClick={() => this.props.onHandleLike(movie)}
          />
        ),
      },
      {
        content: (movie) => (
          <button
            onClick={() => this.props.onHandleDelete(movie)}
            className='btn btn-danger btn-sm'>
            Delete
          </button>
        ),
      },
    ],
  };

  render() {
    const {
      onHandleLike,
      onHandleDelete,
      currentPosts,
      sortColumn,
      onHandleSort,
    } = this.props;
    return (
      <Table
        columns={this.state.columns}
        currentPosts={currentPosts}
        sortColumn={sortColumn}
        onHandleSort={onHandleSort}
        onHandleLike={onHandleLike}
        onHandleDelete={onHandleDelete}
      />
    );
  }
}
