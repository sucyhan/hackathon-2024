import LoginButton from "../LoginButton";
import LogoutButton from "../LogoutButton";
import logo from "../assets/siteLogo.png"
import "./Home-page.css"

function Homepage() {
    return (
        <div class="home-page">
            <img src={logo} alt="logo"></img>
            <p id="slogan">Sauver la planète, un repas à la fois</p>
            <p>Bienvenue sur notre site de réduction des déchets alimentaires!</p>
            <LoginButton/>
            <LogoutButton/>
        </div>
    )
}


export default Homepage;