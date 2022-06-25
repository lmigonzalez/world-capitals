import React, { useState } from "react";
import "./Header.css";

import { Button } from "react-bootstrap";

import { BsList } from "react-icons/bs";
import { useStateContext } from "../context/StateContext";
import { NavLink, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const { isLogin, setToken, userId, setUserId, setUserName, setUserPoints, setGamesPlayed, setCorrectAnswers} = useStateContext();

  const [toggle, setToggle] = useState(false);

  const goToLogin = () => {
    navigate("/login");
  };

  const Logout = () => {
    localStorage.removeItem("userData");
    setToken(null);
    setUserId(null);
    setUserName(null)
    setUserPoints(null)
    setGamesPlayed(null)
    setCorrectAnswers(null)
    navigate("/");
  };

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (
    <header>
      <div className="header-container">
        <NavLink to="/">
          <h1>World Capitals</h1>
        </NavLink>
        <nav className="desktop-nav">
          <NavLink to="/leaderboards">Leaderboards</NavLink>
          {isLogin && <NavLink to={`/profile/${userId}`}>Profile</NavLink>}
          
          {!isLogin ? (
            <Button className="button" onClick={goToLogin}>
              Login
            </Button>
          ) : (
            <Button className="button logout" onClick={Logout}>
              Log out
            </Button>
          )}
        </nav>
        <BsList className="menu-icon" onClick={toggleMenu} />
      </div>
      <nav
        className={toggle ? "mobile-nav active" : "mobile-nav"}
        onClick={toggleMenu}
      >
        <NavLink to="/leaderboards">Leaderboards</NavLink>
        {isLogin && <NavLink to={`/profile/${userId}`}>Profile</NavLink>}
        {!isLogin ? (
          <Button className="button" onClick={goToLogin}>
            Login
          </Button>
        ) : (
          <Button className="button logout" onClick={Logout}>
            Log out
          </Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
