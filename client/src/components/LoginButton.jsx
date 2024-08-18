import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import "./LoginButton.css";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="button"><Link to="/home">Log In</Link></button>;
};

export default LoginButton;