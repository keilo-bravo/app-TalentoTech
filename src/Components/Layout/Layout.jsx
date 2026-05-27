import './Layout.css'
import Header from '../Header/Header.jsx';
import Footer from '../Footer/Footer.jsx';
import { Outlet } from 'react-router-dom';

function Layout() {
	return (
		<div className='ppal'>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer/>
		</div>
	);
}
export default Layout;