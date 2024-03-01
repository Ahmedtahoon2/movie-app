/* eslint-disable react/prop-types */
import MovieControls from "../movieControls/MovieControls";
import "./MovieCard.css";

const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>
      {movie.Poster ? (
        <img src={movie.Poster} alt={movie.Title} />
      ) : (
        <div className="filter-poster"></div>
      )}
      <MovieControls movie={movie} type={type}/>
    </div>
  );
};

export default MovieCard;
