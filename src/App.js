import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movies from "./views/MovieList";
import MoviePage from "./views/MoviePage";
import Footer from "./components/Footer";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App text-light">
          <div className="min-vh-100">
            <main>
              <Switch>
                <Route path="/" exact component={Movies} />
                <Route path="/:id" component={MoviePage} />
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
