import React from "react";
import { getThisClickedMovie } from "../../api/getThisClickedMovie";
import { getMovieCast } from "../../api/getMovieCast";
import CastMember from "../../components/CastMember/CastMember";
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
      if (member.profile_path) {
        var profilePhoto =
          "https://image.tmdb.org/t/p/w500/" + member.profile_path;
      }

      return (
        <CastMember
          key={member.cast_id}
          photo={profilePhoto}
          name={member.name}
        />
      );
    });

    let moviePage = "";
    if (this.props.match.params.id) {
      moviePage = <p>Loading...</p>;
    }
    //Format all data and assign variables here
    if (this.state.movieDetails.title) {
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
          " rgba(6,82,221, .7)), " +
          "url(" +
          backdropSrc +
          ")",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      };

      //Must use if statement here as the movie's genres retrieved from async code.
      if (this.state.movieDetails.genres) {
        //Using var so it can be reused in return statement later
        var genresMapped = this.state.movieDetails.genres.map((genre) => {
          return (
            <li key={genre.id} className="genre-tag list-inline-item pr-3">
              {genre.name}
            </li>
          );
        });
      }

      const formatRunTime = (n) => {
        const hours = Math.floor(n / 60);
        const minutes = n % 60;
        return hours + "h : " + minutes + "m";
      };

      const formatBudget = () => {
        return this.state.movieDetails.budget.toLocaleString();
      };

      moviePage = (
        <div className="movie-details-overall">
          <div className="backdrop-bg py-5" style={backdropStyle}>
            <div className="container pt-3">
              <div className="row justify-content-center">
                <div className="col-lg-6 poster-container">
                  <div className="poster-card card">
                    <img
                      className="card-img-top"
                      src={posterSrc}
                      alt="Movie Poster"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <h2>{this.state.movieDetails.title}</h2>
                  <div>
                    <em>{this.state.movieDetails.tagline}</em>
                  </div>
                  <div className="pt-3">
                    <div className="font-weight-bold text-uppercase">Plot</div>
                    <p className="mb-0">{this.state.movieDetails.overview}</p>
                  </div>
                  <div className="pt-3">
                    <div className="font-weight-bold text-uppercase">Genre</div>
                    <ul className="list-inline mb-0">{genresMapped}</ul>
                  </div>
                  <div className="movie-stats d-flex justify-content-between align-items-center pt-3">
                    <div>Release: {this.state.movieDetails.release_date}</div>
                    <div>
                      Runtime: {formatRunTime(this.state.movieDetails.runtime)}
                    </div>
                    <div>Budget: ${formatBudget()}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="movie-page-container">
        {moviePage}
        <div className="container">
          <div className="d-flex flex-wrap justify-content-md-between justify-content-center">
            {movieCast_Mapped}
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePage;
