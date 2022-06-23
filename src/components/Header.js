import React from "react";
import "./Header.css";

import { Button } from "react-bootstrap";

import { NavLink, useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate()

  const goToLogin = () =>{
    navigate('/login')
  }

  return (
    <header>
      <div className="header-container">
        <NavLink to="/">
          <h1>World Capitals</h1>
        </NavLink>
        <nav>
          <NavLink to="/leaderboard">Leaderboard</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button className="button" onClick={goToLogin}>Login</Button>
        </nav>
      </div>
    </header>
  );
}

export default Header;
