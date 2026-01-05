import React, { useEffect, useState } from "react";
import _ from 'lodash';

import "./MovieList.css";
import Fire from "../../assets/fire.png";
import MovieCard from "./MovieCard.jsx";
import MovieFilter from "./MovieFilter.jsx";

const MovieList = ({type, icon, title}) => {
  const [movieData, setMovieData] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filterRate, setFilterRate] = useState(0);
  const [sortedMovies, setSortedMovies] = useState({by:'default', sort:'asc'});
  const handleFilter = rating => {
   if(rating !== filterRate) {
    setFilterRate(rating);
    const filteredMovies = movieData.filter(movie => movie.vote_average >= rating);
    setFilteredMovies(filteredMovies);
   } else if(rating === filterRate) {
    setFilterRate(0);
    setFilteredMovies(movieData);
   }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  useEffect(() => {
    if(sortedMovies.by !== 'default') {
      const sortedData = _.orderBy(filteredMovies, [sortedMovies.by], [sortedMovies.sort] );
      console.log('soreted data', sortedData);
      setFilteredMovies(sortedData);
    }
  }, [sortedMovies])

  const handleSorting = (e) => {
    const {name, value} = e.target;
    setSortedMovies(prev => ({...prev, [name]:value}));
    
  }
  useEffect(() => {
  console.log('sort config', sortedMovies);
}, [sortedMovies]);

  const fetchMovies = async () => {
    try {
      const response = await fetch(
        `http://api.themoviedb.org/3/movie/${type}?api_key=71fa8c8dd44bddee8b7116798607c7ab`
      );
      const data = await response.json();
      console.log("data", data.results);
      setMovieData(data.results);
      setFilteredMovies(data.results);
    } catch (error) {
      console.error("failed to fetch data", error);
    }
  };
  return (
    <section  id={type}>
      <header className="align_items movie_list">
        <h2 className="align_items movie_list_heading">
          {title} <img src={icon} alt={`${icon} icon`} />
        </h2>
        <div className="align_items movie_list_fc">
        <MovieFilter filterRate={filterRate} handleFilter={handleFilter} ratingRange={[8,7,6]}/>
         <select  name="by" id="" className="movie_list_sortby" onChange={handleSorting} value={sortedMovies.by}>
            <option value="default" className="movie_list_sortby_item">
              Sort by
            </option>
            <option value="vote_average" className="movie_list_sortby_item">
              Rating
            </option>
            <option value="release_date" className="movie_list_sortby_item">
              Release Date
            </option>
          </select>
          <select name="sort" id="" className="movie_list_sortby" onChange={handleSorting}  value={sortedMovies.order}>
            <option value="asc" className="movie_list_sortby_item">
              Ascending
            </option>
            <option value="desc" className="movie_list_sortby_item">
              Descending
            </option>
          </select>
          </div>
      </header>

      <div className="movie_cards">
        {filteredMovies.map((movie) => {
          return <MovieCard movie={movie} key={movie.id} />;
        })}
      </div>
    </section>
  );
};

export default MovieList;
