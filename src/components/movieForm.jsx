import React from "react";

const movieForm = (props) => {
  const handleSave = () => {
    console.log(props.history.replace("/movies"));
  };
  return (
    <div>
      <h1>Movie Form {props.match.params.id} </h1>
      <button className='btn btn-primary btn-sm' onClick={handleSave}>
        Save
      </button>
    </div>
  );
};

export default movieForm;
