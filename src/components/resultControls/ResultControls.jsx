/* eslint-disable react/prop-types */
import { useMovieContext } from "../context/GlobalContext";
import * as actions from "../context/ActionTypes";

const ResultControls = ({ movie }) => {
  const movieContext = useMovieContext();
  const storedMovie = movieContext.watchlist.find(
    (o) => o.imdbID === movie.imdbID
  );
  const storedMovieWatched = movieContext.watched.find(
    (o) => o.imdbID === movie.imdbID
  );
  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;
  const watchedDisabled = storedMovieWatched ? true : false;
  return (
    <div className="controls">
      <button
        onClick={() =>
          movieContext.moviesDispatch({
            type: actions.ADD_MOVIE_TO_WATCHLIST,
            payload: movie,
          })
        }
        className="btn"
        disabled={watchlistDisabled}
      >
        Add to Watchlist
      </button>
      <button
        onClick={() =>
          movieContext.moviesDispatch({
            type: actions.ADD_MOVIE_TO_WATCHED,
            payload: movie,
          })
        }
        className="btn"
        disabled={watchedDisabled}
      >
        Add to Watched
      </button>
    </div>
  );
};

export default ResultControls;
