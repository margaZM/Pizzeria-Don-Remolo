import Head from 'next/head';
import { Main } from '../modules/home/Main';

export default function Home() {
	return (
		<div>
			<Head>
				<title>Pizzeria Don Rémolo</title>
				<meta name="description" content="El mejor servicio es nuestra especialidad" />
				<script src="https://accounts.google.com/gsi/client" async defer></script>
			</Head>
			<Main />
		</div>
	);
}
