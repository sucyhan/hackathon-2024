import React from "react";
import logo from "../assets/siteLogo.png";
import ToUseList from "../components/ToUseList";
import "./Home-page.css";

function Homepage() {
    return (
        <div className="home-page">
            <div className="info">
                <img src={logo} alt="logo"></img>
                <p id="slogan">Save the planet, one meal at a time</p>
                <p>Welcome to our food waste reduction website!</p>
            </div>
            <ToUseList />
        </div>
    );
}

export default Homepage;