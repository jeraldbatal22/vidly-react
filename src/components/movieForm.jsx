import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getMovie } from "../redux/actions/movieAction";

const movieForm = (props) => {
  const handleSave = () => {
    console.log(props.history.replace("/movies"));
  };
  props.getMovie(props.match.params.id);
  console.log(props.movie);
  // this.props.getMovie(props.match.params.id);
  return (
    <div>
      {props.movie && (
        <div className='container'>
          <h1>Movie Details Form </h1>
          <div className='row m-0'>
            <div className='col-lg-0'>
              <div className='right-side-pro-detail border p-3 m-0'>
                <div className='row'>
                  <div className='col-lg-12'>
                    <h5>{props.movie.title}</h5>
                  </div>
                  <div className='col-lg-12'>
                    <p className='mb-2 p-0'>
                      {props.movie.numberInStock} quantity is available
                    </p>
                    <p className='mb-2 p-0'>
                      {props.movie.dailyRentalRate} Ratings
                    </p>
                  </div>
                  <div className='col-lg-12 pt-2'>
                    <h5>{props.movie.genre.name}</h5>
                  </div>
                  <div className='col-lg-12 mt-3'>
                    <div className='row'>
                      <div className='col-lg-6 pb-2'>
                        <Link to='/movies' className='btn btn-dark w-100'>
                          Back
                        </Link>
                      </div>
                      <div className='col-lg-6'>
                        <button
                          className='btn btn-primary w-100'
                          onClick={handleSave}>
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  movie: state.movies.movie,
});

export default connect(mapStateToProps, { getMovie })(movieForm);
