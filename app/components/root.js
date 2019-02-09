import React from "react";
import Candy from "./Candy";
import { Route, Switch } from "react-router-dom";

const Root = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <nav>Goodie Bag</nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
      </main>
      <div>
        <Switch>
          <Route exact path="/candies" component={Candy} />
          <Route exact path="/" component={Candy} />
        </Switch>
      </div>
    </div>
  );
};

export default Root;
