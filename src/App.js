import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Movies from "./containers/Movies";
import MoviePage from "./containers/MoviePage/MoviePage";
import Footer from "./components/Footer/Footer";
import "./App.css";

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
