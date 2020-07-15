import React from "react";
import { Link } from "react-router-dom";
import { getMoviesNowPlaying } from "../api/getMoviesNowPlaying";
import MovieCard from "../components/MovieCard/MovieCard";

class NowPlaying extends React.Component {
  state = {
    moviesNowPlaying: [],
  };

  componentDidMount() {
    getMoviesNowPlaying().then((moviesNowPlayingData) => {
      this.setState({ moviesNowPlaying: moviesNowPlayingData });
    });
  }

  render() {
    const moviesNowPlaying_Mapped = this.state.moviesNowPlaying.map((movie) => {
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
          {moviesNowPlaying_Mapped}
        </div>
      </div>
    );
  }
}

export default NowPlaying;
