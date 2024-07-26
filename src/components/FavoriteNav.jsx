import FavIcon from './icons/FavIcon';
import styles from './navbar.module.css';

function FavoriteNav() {
	return (
		<div className={styles.userIcons}>
			<FavIcon />
		</div>
	);
}

export default FavoriteNav;
