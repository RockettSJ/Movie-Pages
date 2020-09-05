import React from "react";
import { getPopularMovies } from "../api/getPopularMovies";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";

class PopularMovies extends React.Component {
  state = {
    popularMovies: [],
  };

  componentDidMount() {
    getPopularMovies().then((popularMoviesData) => {
      this.setState({ popularMovies: popularMoviesData });
    });
  }

  render() {
    const popularMovies_Mapped = this.state.popularMovies.map((movie) => {
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
        <div className="d-flex flex-wrap justify-content-md-between justify-content-center">
          {popularMovies_Mapped}
        </div>
      </div>
    );
  }
}

export default PopularMovies;
