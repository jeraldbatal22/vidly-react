import React, { Component } from "react";

export default class TableHeader extends Component {
  raiseSort = (path) => {
    const sortColumn = { ...this.props.sortColumn };

    if (sortColumn.path === path) {
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }

    this.props.onHandleSort(sortColumn);
  };

  renderSortIcon = (column) => {
    if (column.path !== this.props.sortColumn.path) return null;
    if (this.props.sortColumn.order === "asc")
      return <i className='fa fa-sort-asc'></i>;
    else {
      return <i className='fa fa-sort-desc'></i>;
    }
  };

  render() {
    return (
      <thead>
        <tr>
          {this.props.columns.map((column, index) => (
            <th
              style={{ cursor: "pointer" }}
              onClick={() => this.raiseSort(column.path)}
              key={index}>
              {column.label} {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}
