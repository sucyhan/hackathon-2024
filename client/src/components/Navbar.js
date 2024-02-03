// TopNavbar.js
import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="top-navbar">
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/inventaire">Inventaire</a></li>
        <li><a href="/recettes">Recettes</a></li>
      </ul>
    </div>
  );
}

export default Navbar;
