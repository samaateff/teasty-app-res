import { Link, useNavigate } from "react-router-dom"
import Logo from "./Logo"
import ChangeLanguage from "./ChangeLanguage"
import styles from './navbar.module.css';
import BellIcon from "./icons/BellIcon";
import CartIcon from "./icons/CartIcon";
import FavIcon from "./icons/FavIcon";
import UserIcon from "./icons/UserIcon";
import FoodIcon from "./icons/FoodIcon";
function Navbar() {
    const navigate = useNavigate()
    return (
        <nav className={styles.navbar}>
            <div  className={styles.navleft}>
            <Logo/>
            <ul className={styles.links}>
                <li><Link to="/home">home</Link></li>
                <li><Link to="/dailyoffers">daily offers</Link></li>
                <li><Link to="/aboutus">about us</Link></li>
                <li><Link to="/menu">our menu</Link></li>
                <li><Link to="/location">location</Link></li>
                <li><Link to="/contactus">contact us</Link></li>
                <ChangeLanguage/>
            </ul>
          
            </div>
            <div  className={styles.navright}>
            {/* <button className={styles.signUp} onClick={()=> navigate('/signup')}>sign up</button>
            <button className={styles.logIn}  onClick={()=> navigate('/login')}>log in</button> */}
            
                {/* <img src="/bell.svg" /> */}
                 <BellIcon/>
                 <CartIcon />
                 <FavIcon />
                 <UserIcon />
                 <div className={styles.checkMenuBtn}>
                 <FoodIcon />    
                  <span>
                  CHECK OUR MENU
                  </span>
                 </div>
            </div>
        </nav>
    )
}

export default Navbar
