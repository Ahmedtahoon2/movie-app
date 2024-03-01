import { useMovieContext } from "../../components/context/GlobalContext";
import MovieCard from "../../components/movieCard/MovieCard";
import "./Watched.css";

const Watched = () => {
  const moviesContext = useMovieContext();
  return (
    <main className="watched">
      <div className="container">
        <div className="watch-main-heading">
          <h1>My Watched</h1>
          <span className="movies-count">
            {moviesContext.watched.length + " "}
            {moviesContext.watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {moviesContext.watched.length ? (
          <div className="movie-grid">
            {moviesContext.watched.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list, add some!</h2>
        )}
      </div>
    </main>
  );
};

export default Watched;
