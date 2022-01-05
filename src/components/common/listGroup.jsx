import React, { Component } from "react";

export default class ListGroup extends Component {
  render() {
    return (
      <div>
        <ul>
          {/* <li
            className={
              this.props.selectedGenre === "All Genres"
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={this.props.onHandleAllGenre}>
            All Genres
          </li> */}
          {this.props.genres.map((genre, index) => (
            <div className='list-group' key={index}>
              <li
                className={
                  this.props.selectedGenre &&
                  this.props.selectedGenre.name === genre.name
                    ? "list-group-item active"
                    : "list-group-item"
                }
                onClick={() => this.props.onHandleGenreSelect(genre)}>
                {genre.name}
              </li>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}
