import React from "react";
import "./Header.css";

import { Button } from "react-bootstrap";

import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header>
      <div className="header-container">
        <NavLink to="/">
          <h1>World Capitals</h1>
        </NavLink>
        <nav>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button className="button">Login</Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
