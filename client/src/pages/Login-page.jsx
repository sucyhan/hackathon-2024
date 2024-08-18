import LoginButton from "../components/LoginButton";
import logo from "../assets/siteLogo.png"
import "./Home-page.css"

function LoginPage() {
    return (
        <div className="Login-page">
            <img src={logo} alt="logo"></img>
            <p id="slogan">Sauver la planète, un repas à la fois</p>
            <p>Bienvenue sur notre site de réduction des déchets alimentaires!</p>
            {/* <p>Cliquez sur le bouton ci-dessous pour vous connecter:</p>
            <LoginButton/> */}
        </div>
    )
}


export default LoginPage;