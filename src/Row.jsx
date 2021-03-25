import React from "react";
import axios from "./axios";
import './Row.css'

const base_url = "https://image.tmdb.org/t/p/original";

function Row({ title, fetchUrl, isLargRow }) {
  const [movies, setMovies] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      console.log(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.log(movies);

  return (
    <div className="row">
      
      <h3>{title}</h3>
      
      <div className="row__posters">
        {/* serveral row poster(s)*/}

        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row_poster"
            src={`${base_url}${movie.poster_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;
