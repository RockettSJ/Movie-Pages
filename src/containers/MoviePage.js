import React from "react";
import { getThisClickedMovie } from "../api/getThisClickedMovie";

class MoviePage extends React.Component {
  state = {
    movieDetails: [],
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      getThisClickedMovie(this.props.match.params.id).then((movieData) => {
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
