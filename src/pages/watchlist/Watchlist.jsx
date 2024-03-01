import { useMovieContext } from "../../components/context/GlobalContext";
import MovieCard from "../../components/movieCard/MovieCard";
import "./Watchlist.css";

const Watchlist = () => {
  const moviesContext = useMovieContext();
  return (
    <main className="watch-list">
      <div className="container">
        <div className="watch-main-heading">
          <h1>My Watchlist</h1>
          <span className="movies-count">
            {moviesContext.watchlist.length + " "}
            {moviesContext.watchlist.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>
        {moviesContext.watchlist.length ? (
          <div className="movie-grid">
            {moviesContext.watchlist.map((movie) => (
              <MovieCard key={movie.imdbID} movie={movie} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list, add some!</h2>
        )}
      </div>
    </main>
  );
};

export default Watchlist;
