import React from "react";
import { Router, Link } from "react-router-dom";
const NavBar = () => {
  return (
    <div id="navbar">
      <Link to="/">Home </Link>
      <Link to="/candies">All Candies </Link>
    </div>
  );
};

export default NavBar;
