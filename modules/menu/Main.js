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

	const [interceptedElement, setInterceptedElement] = useState('');
	const [viewScroll, setViewScroll] = useState(
		router.isReady && router.query.c ? router.query.c : '',
	);

	const promotionsRef = useRef();
	const pizzasRef = useRef();
	const pattysRef = useRef();
	const dessertsRef = useRef();
	const drinksRef = useRef();
	const containerRef = useRef();

	const handleScroll = (category) => {
		const categoriesRef = [promotionsRef, pizzasRef, pattysRef, dessertsRef, drinksRef];
		const indexRef = ['Promociones', 'Pizzas', 'Empanadas', 'Postres', 'Bebidas'];
		const indexOfCategory = indexRef.indexOf(category ? category : 'Promociones');
		return categoriesRef[indexOfCategory];
	};

	useEffect(() => {
		const refCategory = handleScroll(viewScroll);
		refCategory.current.scrollIntoView({ behavior: 'smooth' });
	}, [viewScroll]);

	useEffect(() => {
		const container = containerRef?.current;
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				const { target, intersectionRatio, isIntersecting } = entry;
				if (intersectionRatio > 0 && isIntersecting) {
					const elementVisible = target.id;
					setInterceptedElement(elementVisible);
				}
			});
		});
		container.childNodes.forEach((child) => {
			observer.observe(child);
		});
		return () => observer.disconnect();
	}, []);

	return (
		<section>
			<MenuNavBar
				setViewScroll={setViewScroll}
				viewScroll={viewScroll}
				interceptedElement={interceptedElement}
			/>
			<div ref={containerRef}>
				<div ref={promotionsRef} id="Promociones" className="scroll-mt-60">
					<Promotions />
				</div>
				<Pizzas refProp={pizzasRef} />
				<Pattys refProp={pattysRef} />
				<Drinks refProp={drinksRef} />
				<Desserts refProp={dessertsRef} />
			</div>
		</section>
	);
};

export default Main;
