import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = ({ columns, sortColumn, onHandleSort, currentPosts }) => {
  return (
    <table className='table'>
      <TableHeader
        columns={columns}
        sortColumn={sortColumn}
        onHandleSort={onHandleSort}
      />
      <TableBody columns={columns} data={currentPosts} />
    </table>
  );
};

export default Table;
