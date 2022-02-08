// import { getRequest, deleteRequest } from "../../helpers/axiosApi";

import { getRequest } from "../../helpers/axiosApi";

export const deleteMovie = (postData) => (dispatch) => {
  dispatch({
    type: "DELETE_MOVIE",
    payload: postData,
  });
};

export const likedMovie = (postData) => (dispatch) => {
  dispatch({
    type: "LIKED_MOVIE",
    payload: postData,
  });
};

export const getMovie = (postData) => (dispatch) => {
  console.log(postData);
  dispatch({
    type: "GET_MOVIE",
    payload: postData,
  });
};

export const fetchAllMovies = () => async (dispatch) => {
  const data = await getRequest("movies");
  dispatch({
    type: "FETCH_ALL_MOVIES",
    payload: data,
  });
};

export const fetchAllGenres = () => async (dispatch) => {
  const data = await getRequest("genres");
  dispatch({
    type: "FETCH_ALL_GENRES",
    payload: data,
  });
};

// export const fetchDeleteMovie = (postData) => async (dispatch) => {
//   await deleteRequest(`movies/${postData}`);
//   dispatch({
//     type: "DELETE_MOVIE",
//     payload: postData,
//   });
// };
