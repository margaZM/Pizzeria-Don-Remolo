import { Provider } from 'react-redux';
import '../styles/index.css';
import '../styles/global.css';
import { store } from '../redux/store/store';
import HomeNav from '../modules/home-header/Main';
import { Footer } from '../modules/shared/Footer';
function MyApp({ Component, pageProps }) {
	return (
		<Provider store={store}>
			<div className='min-h-screen'>
				<HomeNav />
				<Component {...pageProps} />
				<Footer />
			</div>
		</Provider>
	);
}

export default MyApp;
