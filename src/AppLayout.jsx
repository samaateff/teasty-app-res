import Navbar from './components/Navbar';
import Footer from './components/Footer';

import { Outlet } from 'react-router-dom';
function AppLayout() {
	return (
		<>
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default AppLayout;
