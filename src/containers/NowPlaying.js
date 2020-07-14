import React from "react";
import { Link } from "react-router-dom";
import { getMoviesNowPlaying } from "../api/getMoviesNowPlaying";
import MovieCard from "../components/MovieCard";

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
      return (
        <Link to={"/" + movie.id} key={movie.id}>
          <MovieCard title={movie.title} />
        </Link>
      );
    });
    return (
      <div>
        <section className="now-playing-movies">
          {moviesNowPlaying_Mapped}
        </section>
      </div>
    );
  }
}

export default NowPlaying;
