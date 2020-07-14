import React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import PopularMovies from "./containers/PopularMovies";
import NowPlaying from "./containers/NowPlaying";
import MoviePage from "./containers/MoviePage";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" exact>
                    Popular
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/in-cinemas-now" exact>
                    Now Playing
                  </NavLink>
                </li>
              </ul>
            </nav>
          </header>
          {/*Switch will ensure that only one Route is loaded at a time when clicked, preventing a previous component from being rendered to the new route*/}
          <Switch>
            <Route path="/" exact component={PopularMovies} />
            <Route path="/now-playing" exact component={NowPlaying} />
            <Route path="/:id" exact component={MoviePage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
