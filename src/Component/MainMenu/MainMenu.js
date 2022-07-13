import React from "react";
import './MainMenu.css'
import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <menu className="main-menu">
      <Link to="/skils"><button type="button" className="main-menu-button">Skil</button></Link>
      <Link to="/projects"><button type="button" className="main-menu-button">Project</button></Link>
      <Link to="/contact"><button type="button" className="main-menu-button">Contact</button></Link>
    </menu>
  );
}

export default MainMenu;
