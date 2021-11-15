import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./home/Home";
import Music from "./music/Music";
import Navbar from "./Navbar";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/music">
          <Music />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
