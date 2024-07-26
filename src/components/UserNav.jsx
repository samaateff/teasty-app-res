import { useState } from 'react';
import UserIcon from './icons/UserIcon';
import styles from './navbar.module.css';
import { FaArrowRight } from 'react-icons/fa';

function UserNav() {
	const [droped, setDroped] = useState(false);
	return (
		<div
			className={styles.userIcons}
			onMouseEnter={() => setDroped(true)}
			onMouseLeave={() => setDroped(false)}>
			<UserIcon />
			{droped && (
				<div className={styles.userMenu}>
					<ul>
						<li>
							<div>
								<img src='/Rectangle157.jpg' />
								<span>MY PROFILE</span>
							</div>
							<div>
								<FaArrowRight />
							</div>
						</li>
						<li>2</li>
						<li>3</li>
					</ul>
				</div>
			)}
		</div>
	);
}

export default UserNav;
