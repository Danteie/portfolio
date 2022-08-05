import React from "react";
import './MainMenu.css'
import { Link } from "react-router-dom";
import Tilty from 'react-tilty';
import logo from '../../Assets/logo.png'

function MainMenu() {
  return (
    <menu className="main-menu">
        <Link to='/'>
          <Tilty>
            <img  src={logo} alt='project' className='project-image'/>
          </Tilty>
        </Link>
      <div className="menu-items">
        <Link to="/skils"><button type="button" className="main-menu-button">Skil</button></Link>
        <Link to="/projects"><button type="button" className="main-menu-button">Project</button></Link>
        <Link to="/contact"><button type="button" className="main-menu-button">Contact</button></Link>
      </div>
    </menu>
  );
}

export default MainMenu;
