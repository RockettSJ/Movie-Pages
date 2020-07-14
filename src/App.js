import React from "react";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import PopularMovies from "./containers/PopularMovies";
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
              </ul>
            </nav>
          </header>
          <Route path="/" exact component={PopularMovies} />
          <Route path="/:id" exact component={MoviePage} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
