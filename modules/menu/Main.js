// import { CurrentView } from './components/CurrentView';
import { MenuNavBar } from './components/MenuNavBar';
import { useRouter } from 'next/router';
import { Promotions } from '../home/sections/promotions/Promotions';
import { Pizzas } from './sections/pizzas/Pizzas';
import { Pattys } from './sections/pattys/Pattys';
import { Desserts } from './sections/desserts/Desserts';
import { Drinks } from './sections/drinks/Drinks';
import { useEffect, useRef } from 'react';

const Main = () => {
	const router = useRouter();
	const viewScroll = router.query.c ?? null;

	const promotionsRef = useRef();
	const pizzasRef = useRef();
	const pattysRef = useRef();
	const dessertsRef = useRef();
	const drinksRef = useRef();

	useEffect(() => {
		const categoriesRef = [promotionsRef, pizzasRef, pattysRef, dessertsRef, drinksRef];
		const indexRef = ['Promociones', 'Pizzas', 'Empanadas', 'Postres', 'Bebidas'];

		if (viewScroll) {
			const scrollToRef = (ref) => ref.current.scrollIntoView({ behavior: 'smooth' });
			const scrollToPane = (index) => scrollToRef(categoriesRef[index]);

			scrollToPane(indexRef.indexOf(viewScroll));
		}
	}, [viewScroll]);

	return (
		<section>
			<MenuNavBar />
			<Promotions refProp={promotionsRef} />
			<Pizzas refProp={pizzasRef} />
			<Pattys refProp={pattysRef} />
			<Desserts refProp={dessertsRef} />
			<Drinks refProp={drinksRef} />
		</section>
	);
};

export default Main;
