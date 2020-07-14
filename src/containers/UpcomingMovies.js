import React from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
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
      return (
        <Link to={"/" + movie.id} key={movie.id}>
          <MovieCard title={movie.title} />
        </Link>
      );
    });
    return (
      <div>
        <section className="upcoming-movies-container">
          {upcomingMovies_Mapped}
        </section>
      </div>
    );
  }
}

export default UpcomingMovies;
