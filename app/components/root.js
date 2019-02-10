import React from "react";
import Candy from "./Candy";
import NavBar from "./NavBar";
import SingleCandy from "./SingleCandy";
import Home from "./Home";
import { Route, Switch } from "react-router-dom";

const Root = props => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/candies" component={Candy} />
          <Route path="/candies/:id" component={SingleCandy} />
        </Switch>
      </div>
    </div>
  );
};

export default Root;
