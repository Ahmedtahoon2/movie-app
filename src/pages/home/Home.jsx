import { Link } from "react-router-dom";
import moviePng from "../../assets/movie_icon.png";
import "./Home.css";

const Home = () => {
  return (
    <main className="home">
      <div className="container">
        <div className="page-layout">
          <img className="movie-img" src={moviePng} alt="movie-icon" />
          <h2>Movie app</h2>
          <p>Explore the movies as you want.</p>
          <Link className="btn" to="/add">
            Add some movies
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Home;
