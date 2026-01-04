import React, { useEffect, useState } from "react";
import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard.jsx";

const MovieList = () => {
  useEffect(() => {
    fetchMovies();
  }, []);

  const [movieData, setMovieData] = useState([]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        "http://api.themoviedb.org/3/movie/popular?api_key=71fa8c8dd44bddee8b7116798607c7ab"
      );
      const data = await response.json();
      console.log("data", data);
      setMovieData(data.results);
    } catch (error) {
      console.error("failed to fetch data", error);
    }
  };
  return (
    <section>
      <header className="align_items movie_list">
        <h2 className="align_items movie_list_heading">
          Popular <img src={Fire} alt="" />
        </h2>
        <div className="align_items movie_list_fc">
          <ul className=" align_items movie_list_sorting">
            <li className="movie_list_sort_item active">8+ star</li>
            <li className="movie_list_sort_item">7+ star</li>
            <li className="movie_list_sort_item">6+ star</li>
          </ul>
          <select name="" id="" className="movie_list_sortby">
            <option value="" className="movie_list_sortby_item">
              Sort by
            </option>
            <option value="" className="movie_list_sortby_item">
              Rating
            </option>
            <option value="" className="movie_list_sortby_item">
              Release Date
            </option>
          </select>
          <select name="" id="" className="movie_list_sortby">
            <option value="" className="movie_list_sortby_item">
              Ascending
            </option>
            <option value="" className="movie_list_sortby_item">
              Descending
            </option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
       {
        movieData.map((movie) => {
             return <MovieCard movie={movie} id={movie.id} />
        })
       }
      </div>
    </section>
  );
};

export default MovieList;
