// import { CurrentView } from './components/CurrentView';
import { MenuNavBar } from './components/MenuNavBar';
import { useRouter } from 'next/router';
import { Promotions } from '../home/sections/promotions/Promotions';
import { Pizzas } from './sections/pizzas/Pizzas';
import { Pattys } from './sections/pattys/Pattys';
import { Desserts } from './sections/desserts/Desserts';
import { Drinks } from './sections/drinks/Drinks';
import { useEffect, useRef, useState } from 'react';

const Main = () => {
	const router = useRouter();

	const [viewScroll, setViewScroll] = useState(
		router.isReady && router.query.c ? router.query.c : 'Promociones',
	);

	const promotionsRef = useRef();
	const pizzasRef = useRef();
	const pattysRef = useRef();
	const dessertsRef = useRef();
	const drinksRef = useRef();

	const handleScroll = (category) => {
		const categoriesRef = [promotionsRef, pizzasRef, pattysRef, dessertsRef, drinksRef];
		const indexRef = ['Promociones', 'Pizzas', 'Empanadas', 'Postres', 'Bebidas'];
		const indexOfCategory = indexRef.indexOf(category);
		console.log(indexOfCategory);
		const refCategory = categoriesRef[indexOfCategory];
		console.log(refCategory);
		refCategory.current.scrollIntoView({ behavior: 'smooth' });
	};

	useEffect(() => {
		handleScroll(viewScroll);
	}, [viewScroll]);

	return (
		<section className="scroll-mt-48 md:scroll-mt-60">
			<MenuNavBar setViewScroll={setViewScroll} viewScroll={viewScroll} />
			<Promotions refProp={promotionsRef} />
			<Pizzas refProp={pizzasRef} />
			<Pattys refProp={pattysRef} />
			<Desserts refProp={dessertsRef} />
			<Drinks refProp={drinksRef} />
		</section>
	);
};

export default Main;
