// TopNavbar.js
import React from 'react';
import './Navbar.css';
import LogoutButton from './LogoutButton';

const Navbar = () => {
  return (
    <div className="top-navbar">
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/inventaire">Inventaire</a></li>
        <li><a href="/recettes">Recettes</a></li>
        <li><LogoutButton/></li>
      </ul>
    </div>
  );
}

export default Navbar;
