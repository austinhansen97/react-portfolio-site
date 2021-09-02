import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Contact from "../Pages/Contact";

// projects linked to Home page
import Planets from "../Pages/Projects/Planets";

const Main = () => {
  return (
    <Switch>
      {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/About" component={About}></Route>
      <Route exact path="/Contact" component={Contact}></Route>
      <Route exact path="/Planets" component={Planets}></Route>
    </Switch>
  );
};

export default Main;
