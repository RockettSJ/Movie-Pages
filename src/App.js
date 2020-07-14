import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PopularMovies from "./containers/PopularMovies";
import NowPlaying from "./containers/NowPlaying";
import MoviePage from "./containers/MoviePage";
import UpcomingMovies from "./containers/UpcomingMovies";
import "./App.css";
import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App text-light">
          <Header />
          <main className="container">
            <Switch>
              <Route path="/" exact component={PopularMovies} />
              <Route path="/now-playing" exact component={NowPlaying} />
              <Route path="/upcoming" exact component={UpcomingMovies} />
              <Route path="/:id" exact component={MoviePage} />
            </Switch>
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
