import React from "react";
import { Router, Link } from "react-router-dom";
const NavBar = props => {
  // console.log("this is the props", props);
  return (
    <div id="navbar">
      <Link to="/">Home </Link>
      <Link to="/candies">All Candies </Link>
      {/* <Link to={`/candies/${props.match.params.id}`}>All Candies </Link> */}
    </div>
  );
};

export default NavBar;
