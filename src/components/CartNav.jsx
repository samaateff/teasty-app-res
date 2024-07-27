import { useSelector } from 'react-redux';
import CartIcon from './icons/CartIcon';
import styles from './navbar.module.css';
import store from '../Redux/store';

function CartNav() {
  const { user } = useSelector((store) => store.user);
  return (
    <div className={styles.userIcons}>
      <CartIcon />
    </div>
  );
}

export default CartNav;
