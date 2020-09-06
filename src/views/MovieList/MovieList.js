import React, { useState, useEffect } from "react";
import { getPopularMovies } from "./../../api/apiModule";
import { Link } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";

export default function MovieList() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getPopularMovies().then((moviesData) => {
      setMovies(moviesData);
    });
  });

  const mappedMovies = movies.map((movie) => {
    const posterSrc = "https://image.tmdb.org/t/p/w500/" + movie.poster_path;
    return (
      <Link to={"/" + movie.id} key={movie.id}>
        <MovieCard
          title={movie.title}
          poster={posterSrc}
          released={movie.release_date}
          avgVote={movie.vote_average}
        />
      </Link>
    );
  });

  return (
    <div className="container">
      <div>{mappedMovies}</div>
    </div>
  );
}
