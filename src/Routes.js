import React from "react";
import { Switch, Route } from "react-router-dom";
import Cards from "./Components/Cards";
import Pagination from "./Components/Pagination";
import Navigation from "./Components/Navigation";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/cards" component={Cards} />
      <Route exact path="/pagination" component={Pagination} />
      <Route excat path="navigation" component={Navigation} />
    </Switch>
  );
};

export default Routes;
