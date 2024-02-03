import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="top-navbar">
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/inventory">Inventaire</Link></li>
        <li><Link to="/recipes">Recettes</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
