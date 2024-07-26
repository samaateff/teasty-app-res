import Navbar from './components/Navbar';
import Footer from './components/Footer';
import styles from './styles/layout.module.css';
import { Outlet } from 'react-router-dom';
function AppLayout() {
	return (
		<div className={styles.layout}>
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	);
}

export default AppLayout;
