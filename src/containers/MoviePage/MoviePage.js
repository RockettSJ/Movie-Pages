import React from "react";
import { getThisClickedMovie } from "../../api/getThisClickedMovie";
import { getMovieCast } from "../../api/getMovieCast";
import CastMember from "../../components/CastMember";
import "./MoviePage.css";

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

      const backdropSrc =
        "https://image.tmdb.org/t/p/original/" +
        this.state.movieDetails.backdrop_path;

      const backdropStyle = {
        backgroundImage:
          "linear-gradient" +
          "(to right, rgba(82,82,82, .8)," +
          " rgba(61,114,180, .7)), " +
          "url(" +
          backdropSrc +
          ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };

      moviePage = (
        <div className="movie-details-overall">
          <div className="backdrop-bg" style={backdropStyle}>
            <div className="container pt-3">
              <div className="poster-card card">
                <img
                  className="card-img-top"
                  src={posterSrc}
                  alt="Movie Poster"
                />
              </div>
              <h1>{this.state.movieDetails.title}</h1>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="movie-page-container">
        <div>
          {moviePage}
          <div className="container">
            <div className="d-flex flex-wrap justify-content-md-between justify-content-center">
              {movieCast_Mapped}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePage;
