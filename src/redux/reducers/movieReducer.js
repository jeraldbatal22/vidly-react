// import { getGenres } from "../../services/fakeGenreService";
// import { getMovies } from "../../services/fakeMovieService";

const initialState = {
  movies: [],
  genres: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "FETCH_ALL_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };
    case "FETCH_ALL_GENRES":
      const genres = [{ name: "All Genres" }, ...action.payload];
      return {
        ...state,
        genres: genres,
      };
    case "DELETE_MOVIE":
      return {
        ...state,
        movies: action.payload,
      };
    case "LIKED_MOVIE":
      // const movies = [...this.state.movies];
      // const index = movies.indexOf(movie);
      // movies[index] = { ...movies[index] };
      // movies[index].liked = !movies[index].liked;
      // this.setState({ movies });
      const updateMovieLiked = state.movies.map((res) =>
        res._id === action.payload._id
          ? { ...res, liked: !action.payload.liked }
          : res
      );
      return {
        ...state,
        movies: updateMovieLiked,
      };
    case "GET_MOVIE":
      const findMovie = state.movies.find((res) => res._id === action.payload);
      return {
        ...state,
        movie: (state.movie = findMovie),
      };
    default:
      return state;
  }
}
