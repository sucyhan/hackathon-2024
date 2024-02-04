import logo from "../assets/siteLogo.png"
import ToUseList from "../components/ToUseList";
import "./Home-page.css"


function Homepage() {
    return (
        <div className="home-page">
            <div className="info">
                <img src={logo} alt="logo"></img>
                <p id="slogan">Sauver la planète, un repas à la fois</p>
                <p>Bienvenue sur notre site de réduction des déchets alimentaires!</p>
            </div>
            <ToUseList />
        </div>

    )
}


export default Homepage;