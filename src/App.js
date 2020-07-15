import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import PopularMovies from "./containers/PopularMovies";
import NowPlaying from "./containers/NowPlaying";
import MoviePage from "./containers/MoviePage/MoviePage";
import UpcomingMovies from "./containers/UpcomingMovies";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App text-light">
          <div className="min-vh-100">
            <Header />
            <main>
              <Switch>
                <Route path="/" exact component={PopularMovies} />
                <Route path="/now-playing" exact component={NowPlaying} />
                <Route path="/upcoming" exact component={UpcomingMovies} />
                <Route path="/:id" exact component={MoviePage} />
              </Switch>
            </main>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
