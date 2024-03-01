/* eslint-disable react/prop-types */
import { useMovieContext } from "../context/GlobalContext";
import * as actions from "../context/ActionTypes";
import "./MovieControls.css";

const MovieControls = ({ movie, type }) => {
  const movieContext = useMovieContext();
  return (
    <div className="inner-card-controls">
      {type === "watchlist" && (
        <>
          <button
            onClick={() =>
              movieContext.moviesDispatch({
                type: actions.ADD_MOVIE_TO_WATCHED,
                payload: movie,
              })
            }
            className="ctrl-btn"
          >
            <i className="fa-solid fa-eye" />
          </button>
          <button
            onClick={() =>
              movieContext.moviesDispatch({
                type: actions.REMOVE_MOVIE_FROM_WATCHLIST,
                payload: movie.imdbID,
              })
            }
            className="ctrl-btn"
          >
            <i className="fa-fw fa fa-times" />
          </button>
        </>
      )}
      {type === "watched" && (
        <>
          <button
            onClick={() =>
              movieContext.moviesDispatch({
                type: actions.MOVE_TO_WATCHLIST,
                payload: movie,
              })
            }
            className="ctrl-btn"
          >
            <i className="fa-solid fa-eye-slash"></i>
          </button>
          <button
            onClick={() =>
              movieContext.moviesDispatch({
                type: actions.REMOVE_FROM_WATCHED,
                payload: movie.imdbID,
              })
            }
            className="ctrl-btn"
          >
            <i className="fa-fw fa fa-times" />
          </button>
        </>
      )}
    </div>
  );
};

export default MovieControls;
