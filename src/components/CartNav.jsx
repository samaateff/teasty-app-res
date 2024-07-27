import { useSelector } from 'react-redux';
import CartIcon from './icons/CartIcon';
import styles from './navbar.module.css';
import { useState } from 'react';
import TrashIcon from './icons/TrashIcon';

function CartNav() {
	const { user } = useSelector((store) => store.user);
	const [droped, setDroped] = useState(false);
	return (
		<div
			className={styles.userIcons}
			onMouseEnter={() => setDroped(true)}
			onMouseLeave={() => setDroped(false)}>
			<CartIcon />
			{droped && (
				<div className={styles.userMenu}>
					<ul>
						{user.cart.map((item) => (
							<li key={item.id}>
								<div>
									<img src='/Rectangle157.jpg' />
								</div>
								<div className={styles.cartPrice}>
									<span>{item.name}</span>
									<span>{item.price}</span>
								</div>
								<div className={styles.cartIcon}>
									<TrashIcon />
								</div>
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
}

export default CartNav;
