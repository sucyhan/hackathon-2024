import React from 'react';
import './Navbar.css';
import LogoutButton from './LogoutButton';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const { isAuthenticated } = true;
  return (
    <div className="top-navbar">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/recipes">Recipes</Link></li>
          {/* <li><LogoutButton /></li> */}
        </ul>
        {/* <ul>
          <li>Par Anne Raymond et Sucy Han</li>
        </ul> */}

    </div>
  );
}

export default Navbar;
