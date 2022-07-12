import React from "react";
import './MainMenu.css'
import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <menu className="main-menu">
      <Link to="/skills"><button type="button" className="main-menu-button">Test</button></Link>
      <Link to="/skills"><button type="button" className="main-menu-button">Test</button></Link>
      <Link to="/skills"><button type="button" className="main-menu-button">Test</button></Link>
    </menu>
  );
}

export default MainMenu;
