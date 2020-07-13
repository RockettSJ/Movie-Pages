import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import PopularMovies from "./containers/PopularMovies";
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
                  <Link to="/">Popular</Link>
                </li>
              </ul>
            </nav>
          </header>
          <Route path="/" exact component={PopularMovies} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
