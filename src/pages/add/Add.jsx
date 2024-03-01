/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useErrorBoundary } from "react-error-boundary";
import getData from "../../utils/api";
import ResultCard from "../../components/ResultCard/ResultCard";
import "./Add.css";

const Add = () => {
  const [searchValue, setSearchValue] = useState("");
  const [movies, setMovies] = useState([]);
  const { showBoundary } = useErrorBoundary();
  useEffect(() => {
    const dataFunc = async () => {
      try {
        const data = await getData(searchValue);
        data ? setMovies(data) : setMovies([]);
      } catch (error) {
        console.log(error);
        showBoundary(error);
      }
    };
    dataFunc();
  }, [searchValue]);
  return (
    <main className='add-page'>
      <div className='container'>
        <div className='add-content'>
          <h2>Movie search</h2>
          <div className='input-wrapper'>
            <input
              type='text'
              placeholder='Write a movie name'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>
          {movies.length > 0 && (
            <ul className='results'>
              {movies.map((movie) => (
                <li key={movie.imdbID}>{<ResultCard movie={movie} />}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </main>
  );
};

export default Add;
