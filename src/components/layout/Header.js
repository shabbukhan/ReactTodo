import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>ToDo in ReactJS</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
      </nav>
    </header>
  );
};

export default Header;
