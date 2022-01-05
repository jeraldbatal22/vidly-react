import React, { Component } from "react";
import {
  BrowserRouter as Routes,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Movies from "./components/movies";
import "./App.css";
import NavBar from "./components/navBar";
import Rentals from "./components/rentals";
import Customers from "./components/customers";
import NotFound from "./components/pageNotFound";
import MovieForm from "./components/movieForm";

class App extends Component {
  render() {
    return (
      <Routes>
        <main className='container'>
          <NavBar />
          <Switch>
            <Route path='/movies/:id' component={MovieForm} />
            <Route path='/movies' component={Movies} />
            <Route path='/rentals' component={Rentals} />
            <Route path='/customers' component={Customers} />
            <Route path='/not-found' component={NotFound} />
            <Redirect from='/' exact to='/movies' />
            <Redirect to='/not-found' />
          </Switch>
        </main>
      </Routes>
    );
  }
}

export default App;
