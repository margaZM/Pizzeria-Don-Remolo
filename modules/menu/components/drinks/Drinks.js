import { useEffect, useState } from 'react';
import { productServices } from '../../../../services/product-services/productServices';
import { ProductCard } from '../../../shared/ProductCard';

export const Drinks = () => {
	const [drinks, setDrinks] = useState(null);

	useEffect(() => {
		productServices.getProductsByCategory({
			category: "bebidas",
			pageSize: 4,
		}).then((res) => {
			setDrinks(res.data.data);
		});
	}, []);

	return (
		<div className="flex flex-col items-center w-full h-screen max-h-[380px] pt-2 gap-2 md:max-h-[400px] lg:max-h-[450px]">
			<div className="flex w-full max-w-[1200px] px-2">
				<h2 className="text-[1.2rem] font-bold">BEBIDAS</h2>
			</div>
			<section className="flex gap-3 w-full max-w-[1200px] min-h-[255px] h-full px-2 overflow-x-scroll lg:grid lg:grid-cols-4 lg:overflow-hidden">
				{drinks &&
					drinks.map((drink) => (
						<ProductCard
							key={drink.id}
							title={drink.name}
							desc={drink.description}
							oldPrice="1.50"
							newPrice="1.20"
							id={drink.id}
							image={drink.picture}
						/>
					))}
			</section>
		</div>
	);
};