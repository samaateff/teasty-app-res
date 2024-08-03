import { Link, useNavigate } from 'react-router-dom';
import styles from './navbar.module.css';
import Logo from './Logo';
import ChangeLanguage from './ChangeLanguage';
import NotifactionNav from './NotifactionNav';
import FavoriteNav from './FavoriteNav';
import CartNav from './CartNav';
import UserNav from './UserNav';
import MenuBtnNav from './MenuBtnNav';
import { useSelector } from 'react-redux';

function Navbar() {
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((store) => store.user);
  return (
    <nav className={styles.navbar}>
      <div className={styles.navleft}>
        <Logo />
        <ul className={styles.links}>
          <li>
            <Link to='/home'>home</Link>
          </li>
          <li>
            <Link to='/dailyoffers'>daily offers</Link>
          </li>
          <li>
            <Link to='/aboutus'>about us</Link>
          </li>
          <li>
            <Link to='/menu'>our menu</Link>
          </li>
          <li>
            <Link to='/location'>location</Link>
          </li>
          <li>
            <Link to='/contactus'>contact us</Link>
          </li>
          <ChangeLanguage />
        </ul>
      </div>
      <div className={styles.navright}>
        {isAuthenticated ? (
          <>
            <NotifactionNav />
            <CartNav />
            <FavoriteNav />
            <UserNav />
            <MenuBtnNav />
          </>
        ) : (
          <div className={styles.btnReg}>
            <button
              className={styles.signUp}
              onClick={() => navigate('/signup')}
            >
              sign up
            </button>
            <button className={styles.logIn} onClick={() => navigate('/login')}>
              log in
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
