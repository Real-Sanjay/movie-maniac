import React from "react";
import Star from "../../assets/star.png";
import "./MovieCard.css";
const MovieCard = ({movie, id}) => {
  return (
    <a href="" className="movie_card">
        <img
        className="movie_poster"
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt="movie_poster"
      />
      <div className="movie_card_details">
        <h1 className="movie_card_title">{movie.original_title}</h1>
        <div className="align_items movie_data">
          <p className="movie_release_date">{movie.release_date}</p>
          <p className="align_items movie_rating">
            {movie.rate_average} <img className="movie_star_icon" src={Star} />
          </p>
        </div>
        <p className="movie_description">
        {movie.overview}
        </p>
      </div>
    </a>
  );
};

export default MovieCard;
