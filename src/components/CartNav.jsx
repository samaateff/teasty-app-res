import CartIcon from './icons/CartIcon';
import styles from './navbar.module.css';

function CartNav() {
	return (
		<div className={styles.userIcons}>
			<CartIcon />
		</div>
	);
}

export default CartNav;
