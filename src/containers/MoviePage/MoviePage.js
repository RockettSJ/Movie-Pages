import React from "react";
import { getThisClickedMovie } from "../../api/getThisClickedMovie";
import { getMovieCast } from "../../api/getMovieCast";
import { getSimilarMovies } from "../../api/getSimilarMovies";
import { Link } from "react-router-dom";
import CastMember from "../../components/CastMember/CastMember";
import MovieCard from "../../components/MovieCard/MovieCard";
import "./MoviePage.css";

class MoviePage extends React.Component {
  state = {
    movieDetails: [],
    movieCast: [],
    similarMovies: [],
  };

  componentDidMount() {
    this.loadData();
  }

  componentDidUpdate() {
    //Prevent page from automatically jumping down on some page renders
    window.scrollTo({ top: 0, behavior: "smooth" });
    this.loadData();
  }

  //This function (along with the conditional checks)
  // is the solution to make the movie page re-render
  // when a "similar movie" link is clicked
  // as it needs to process the new Router props inside componentDidUpdate()
  loadData() {
    if (this.props.match.params.id) {
      if (
        !this.state.movieDetails.title ||
        (this.state.movieDetails.title &&
          this.state.movieDetails.id !== +this.props.match.params.id)
      ) {
        getThisClickedMovie(this.props.match.params.id).then((movieData) => {
          this.setState({ movieDetails: movieData });
        });

        getMovieCast(this.props.match.params.id).then((cast) => {
          //FOR NOW, just limit the number of cast members displayed. TEMPORARY until a better solution is found
          const slicedCast = cast.slice(0, 7);
          this.setState({ movieCast: slicedCast });
        });

        getSimilarMovies(this.props.match.params.id).then((similar) => {
          this.setState({ similarMovies: similar });
        });
      }
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
          char={member.character}
        />
      );
    });

    const similarMovies_Mapped = this.state.similarMovies.map((movie) => {
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

    let moviePage = "";
    if (this.props.match.params.id) {
      moviePage = <p className="text-center">Loading...</p>;
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
          " rgba(30,55,153, .7)), " +
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
                <div className="col-lg-3 poster-container">
                  <div className="poster-card card">
                    <img
                      className="card-img-top poster-img"
                      src={posterSrc}
                      alt="Movie Poster"
                    />
                  </div>
                </div>
                <div className="col-lg-9">
                  <h2>{this.state.movieDetails.title}</h2>
                  <div>
                    <em>{this.state.movieDetails.tagline}</em>
                  </div>
                  <div className="pt-3">
                    <div className="font-weight-bold text-uppercase">Plot</div>
                    <p className="movie-overview">
                      {this.state.movieDetails.overview}
                    </p>
                  </div>
                  <div className="font-weight-bold text-uppercase pt-3">
                    Genre
                  </div>
                  <ul className="list-inline mb-0">{genresMapped}</ul>
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
        <div className="bg-light text-dark cast-list py-3">
          <div className="container">
            <h5 className="text-uppercase text-center font-weight-bold py-1">
              Main Cast
            </h5>
            <div className="d-flex flex-wrap justify-content-md-between justify-content-center">
              {movieCast_Mapped}
            </div>
          </div>
        </div>
        <div className="container py-3">
          <h5 className="text-uppercase text-center font-weight-bold py-1">
            Similar Movies
          </h5>
          <div className="d-flex flex-wrap justify-content-md-between justify-content-center">
            {similarMovies_Mapped}
          </div>
        </div>
      </div>
    );
  }
}

export default MoviePage;
