import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard/MovieCard";
import { getUpcomingMovies } from "../api/getUpcomingMovies";

class UpcomingMovies extends React.Component {
  state = {
    upcomingMovies: [],
  };

  componentDidMount() {
    getUpcomingMovies().then((upcomingData) => {
      this.setState({ upcomingMovies: upcomingData });
    });
  }

  render() {
    const upcomingMovies_Mapped = this.state.upcomingMovies.map((movie) => {
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
          {upcomingMovies_Mapped}
        </div>
      </div>
    );
  }
}

export default UpcomingMovies;
