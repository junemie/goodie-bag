import React from "react";
import Candy from "./Candy";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <nav>
        <NavBar />
      </nav>
      <main>
        <h1>Welcome to the Goodie Bag!</h1>
        <p>What a nice home page for your goodies!</p>
      </main>
      <div>
        <Switch>
          <Route exact path="/candies" component={Candy} />
        </Switch>
      </div>
    </div>
  );
};

export default Home;
