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
      return <CastMember key={member.id} name={member.name} />;
    });

    let moviePage = <p>no props nor state were passed</p>;
    if (this.props.match.params.id) {
      moviePage = <p>Loading...</p>;
    }
    if (this.state.movieDetails) {
      moviePage = <h1>{this.state.movieDetails.title}</h1>;
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
