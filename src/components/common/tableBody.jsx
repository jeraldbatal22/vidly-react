import React, { Component } from "react";
import _ from "lodash";

export default class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content) {
      return column.content(item);
    } else {
      return _.get(item, column.path);
    }
  };

  render() {
    return (
      <tbody>
        {this.props.data.map((item, index) => (
          <tr key={index}>
            {this.props.columns.map((column, index) => (
              // <td key={index}>{item[column.path]}</td>
              // Link to="movies/:id"
              <td key={index}>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
