import React from 'react';
import './Navbar.css';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="top-navbar">
      {isAuthenticated ?
        <ul>
          <li><Link to="/home">Accueil</Link></li>
          <li><Link to="/inventory">Inventaire</Link></li>
          <li><Link to="/recipes">Recettes</Link></li>
          <li><LogoutButton /></li>
        </ul>
        :
        <ul>
          <li>Par Anne Raymond et Sucy Han</li>
        </ul>
      }

    </div>
  );
}

export default Navbar;
