import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

    
  };

  return (
    <div className="navbar">
        
    <h4 className="app-title">
        <Link to="/">PetFinder</Link>
    </h4>
    <div className="menu-icon" onClick={toggleMenu}>
        <span className={`navbar-icon ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`navbar-icon ${isMenuOpen ? "open" : ""}`}></span>
        <span className={`navbar-icon ${isMenuOpen ? "open" : ""}`}></span>
    
    </div>     
      <ul className={`animal-btns ${isMenuOpen ? "open" : ""}`}>
        <li className="hide-on-mobile animal-btn text-purple-600 font-bold hover:text-purple-500">
          <Link to="/">PetFinder</Link>
        </li>
        <li className="animal-btn">
          <Link to="dogs">Dogs</Link>
        </li>
        <li className="animal-btn">
          <Link to="cats">Cats</Link>
        </li>
        <li className="animal-btn">
          <Link to="/">Home</Link>
        </li>
        <li className="animal-btn">
          <Link to="horses">Horses</Link>
        </li>
        <li className="animal-btn">
          <Link to="birds">Birds</Link>
        </li>
        <li className="animal-btn">
          <Link to="rabbits">Rabbits</Link>
        </li>
        <li className="animal-btn">
          <Link to="/favorites">Favorites</Link>
        </li>
      </ul>
       
    </div>
  );
}
