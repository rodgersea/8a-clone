import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/home">Home</Link>
      <Link to="/userPage">User Page</Link>
    </nav>
  );
}

export default Nav;
