import React from "react";
import { getPopularMovies } from "../api/getPopularMovies";
import MovieCard from "../components/MovieCard";

class PopularMovies extends React.Component {
  state = {
    popularMovies: [],
  };

  componentDidMount() {
    console.log(this.props);
    getPopularMovies().then((popularMoviesData) => {
      this.setState({ popularMovies: popularMoviesData });
    });
  }

  movieSelectedHandler = (id) => {
    this.setState({ selectedMovieId: id });
  };

  render() {
    const popularMovies_Mapped = this.state.popularMovies.map((popular) => {
      return (
        <MovieCard
          key={popular.id}
          title={popular.title}
          clicked={() => this.movieSelectedHandler(popular.id)}
        />
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
