import React, { Component } from "react";
import PropTypes from "prop-types";

export default class Pagination extends Component {
  render() {
    const { pageNumbers, currentPage, onHandlePaginate } = this.props;
    if (pageNumbers.length === 1) {
      return null;
    }
    return (
      <nav>
        {pageNumbers.map((number, index) => (
          <ul
            className={"pagination"}
            key={index}
            style={{ display: "inline-block" }}>
            <li
              className={
                currentPage === number
                  ? "page-item active m-1"
                  : "page-item m-1"
              }
              onClick={() => onHandlePaginate(number)}>
              <button className='page-link' href=''>
                {number}
              </button>
            </li>
            {/* <li className='page-item'>
              <button className='page-link' href=''>
                2
              </button>
            </li>
            <li className='page-item'>
              <button className='page-link' href=''>
                3
              </button>
            </li> */}
          </ul>
        ))}
      </nav>
    );
  }
}

Pagination.propTypes = {
  pageNumbers: PropTypes.arrayOf(PropTypes.number).isRequired,
  currentPage: PropTypes.number.isRequired,
  onHandlePaginate: PropTypes.func.isRequired,
};
