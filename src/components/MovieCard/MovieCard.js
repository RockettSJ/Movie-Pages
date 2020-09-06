import React from "react";
import "./_moviecard.scss";

const MovieCard = (props) => {
  return (
    <div className="movie-card card bg-dark text-light mt-2">
      <img src={props.poster} className="card-img-top" alt="Movie Poster" />
      <div className="card-body">
        <div className="card-title font-weight-bold">{props.title}</div>
        <p className="small">{props.released}</p>
        {props.avgVote === 0 ? null : (
          <span className="small">{props.avgVote}</span>
        )}
      </div>
    </div>
  );
};

export default MovieCard;
