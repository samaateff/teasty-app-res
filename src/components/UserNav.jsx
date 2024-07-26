import UserIcon from './icons/UserIcon';
import styles from './navbar.module.css';

function UserNav() {
	return (
		<div className={styles.userIcons}>
			<UserIcon />
		</div>
	);
}

export default UserNav;
