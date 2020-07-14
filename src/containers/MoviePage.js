import React from "react";
import { getThisClickedMovie } from "../api/getThisClickedMovie";
import { getMovieCast } from "../api/getMovieCast";
import CastMember from "../components/CastMember";

class MoviePage extends React.Component {
  state = {
    movieDetails: [],
    movieCast: [],
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      getThisClickedMovie(this.props.match.params.id).then((movieData) => {
        this.setState({ movieDetails: movieData });
      });

      getMovieCast(this.props.match.params.id).then((cast) => {
        this.setState({ movieCast: cast });
      });
    }
  }

  render() {
    const movieCast_Mapped = this.state.movieCast.map((member) => {
      const profilePhoto =
        "https://image.tmdb.org/t/p/w500/" + member.profile_path;

      return (
        <CastMember
          key={member.cast_id}
          photo={profilePhoto}
          name={member.name}
        />
      );
    });

    let moviePage = <p>no props nor state were passed</p>;
    if (this.props.match.params.id) {
      moviePage = <p>Loading...</p>;
    }
    if (this.state.movieDetails) {
      const posterSrc =
        "https://image.tmdb.org/t/p/w500/" +
        this.state.movieDetails.poster_path;

      moviePage = (
        <div className="movie-page-container">
          <img className="img" src={posterSrc} alt="Movie Poster" />
          <h1>{this.state.movieDetails.title}</h1>
        </div>
      );
    }
    return (
      <div>
        {moviePage}
        <div>{movieCast_Mapped}</div>
      </div>
    );
  }
}

export default MoviePage;
