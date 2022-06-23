import React, {useState} from "react";
import "./Header.css";

import { Button } from "react-bootstrap";

import { BsList } from "react-icons/bs";

import { NavLink, useNavigate } from "react-router-dom";

function Header() {

  const navigate = useNavigate()

  const [toggle, setToggle] = useState(false)

  const goToLogin = () =>{
    navigate('/login')
  }

  const toggleMenu = () =>{
    setToggle(!toggle)
  }

  return (
    <header>
      <div className="header-container">
        <NavLink to="/">
          <h1>World Capitals</h1>
        </NavLink>
        <nav className="desktop-nav">
          <NavLink to="/leaderboards">Leaderboards</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button className="button" onClick={goToLogin}>Login</Button>
        </nav>
        <BsList className="menu-icon" onClick={toggleMenu}/>
      </div>
      <nav className={toggle? "mobile-nav active" : "mobile-nav"} onClick={toggleMenu}>
          <NavLink to="/leaderboards">Leaderboards</NavLink>
          <NavLink to="/about">About</NavLink>
          <Button className="button" onClick={goToLogin}>Login</Button>
      </nav>
    </header>
  );
}

export default Header;
