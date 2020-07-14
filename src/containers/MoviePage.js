import React from "react";

class MoviePage extends React.Component {
  state = {
    movieDetails: [],
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      const getThisMovie = async () => {
        const apiKey = process.env.REACT_APP_MY_API_KEY;
        const baseURL = "https://api.themoviedb.org/3/movie/";
        const movieID = this.props.match.params.id + "?api_key=";
        const lang = "&language=en-US";

        const getThisMovieFetchString = baseURL + movieID + apiKey + lang;
        const response_thisMovie = await fetch(getThisMovieFetchString);
        const thisMovieData = await response_thisMovie.json();
        return thisMovieData;
      };

      getThisMovie().then((movieData) => {
        this.setState({ movieDetails: movieData });
      });
    }
  }

  render() {
    let moviePage = <p>no props nor state were passed</p>;
    if (this.props.match.params.id) {
      moviePage = <p>Loading...</p>;
    }
    if (this.state.movieDetails) {
      moviePage = <h1>{this.state.movieDetails.title}</h1>;
    }
    return moviePage;
  }
}

export default MoviePage;
