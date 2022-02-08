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
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            {columns.map((column, index) => (
              // <td key={index}>{item[column.path]}</td>
              <td key={index}>{this.renderCell(item, column)}</td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}
