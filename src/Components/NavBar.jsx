import React from 'react'

import './Navbar.css'
import { Link } from 'react-scroll'; // Install react-scroll if you don't have it

/* to put navigation links for list items: <li><a href="#home">Home</a></li>*/

function NavBar() {
  return (
      <nav className="navbar-header"> 
         <span className="navbar-menu-title">MC</span>
         <ul className="navbar-menu-lists">
            <li>
            <Link to="projects" smooth={true} duration={500}>
              Projects
             </Link>
            </li>
            <li>
            <Link to="resume" smooth={true} duration={500}>
             Resume
             </Link>
            </li>
            <li>
            <Link to="contacts" smooth={true} duration={500}>
            Contacts
             </Link>
            </li>
         </ul>
      </nav>

  );
}

export default NavBar;