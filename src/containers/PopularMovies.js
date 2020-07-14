import React from "react";
import { getPopularMovies } from "../api/getPopularMovies";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

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
      return (
        <Link to={"/" + movie.id} key={movie.id}>
          <MovieCard title={movie.title} />
        </Link>
      );
    });
    return (
      <div>
        <section className="popular-movies">{popularMovies_Mapped}</section>
      </div>
    );
  }
}

export default PopularMovies;
