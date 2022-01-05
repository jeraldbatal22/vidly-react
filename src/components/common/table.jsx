import React from "react";
import TableBody from "./tableBody";
import TableHeader from "./tableHeader";

const Table = (props) => {
  return (
    <table className='table'>
      <TableHeader
        columns={props.columns}
        sortColumn={props.sortColumn}
        onHandleSort={props.onHandleSort}
      />
      <TableBody
        columns={props.columns}
        data={props.currentPosts}
        onHandleDelete={props.onHandleDelete}
        onHandleLike={props.onHandleLike}
      />
    </table>
  );
};

export default Table;
