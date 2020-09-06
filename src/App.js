import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MovieList from "./views//MovieList/MovieList";
import MoviePage from "./views/MoviePage/MoviePage";
import Footer from "./components/Footer/Footer";
import "./sass/App.scss";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <main className="App__wrapper">
          <Switch>
            <Route path="/" exact component={MovieList} />
            <Route path="/:id" component={MoviePage} />
          </Switch>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
