import { Link } from "react-router-dom"
import Logo from "./Logo"
import ChangeLanguage from "./ChangeLanguage"

function Navbar() {
    return (
        <nav>
            <Logo/>
            <ul>
                <li><Link to="/home">home</Link></li>
                <li><Link to="/dailyoffers">daily offers</Link></li>
                <li><Link to="/aboutus">about us</Link></li>
                <li><Link to="/menu">our menu</Link></li>
                <li><Link to="/location">location</Link></li>
                <li><Link to="/contactus">contact us</Link></li>
            </ul>
            <ChangeLanguage/>
            <button>sign up</button>
            <button>log in</button>
        </nav>
    )
}

export default Navbar
