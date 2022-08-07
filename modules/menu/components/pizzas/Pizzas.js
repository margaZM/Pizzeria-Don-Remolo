import { useEffect, useState } from 'react';
import { productServices } from '../../../../services/product-services/productServices';
import { ProductCard } from '../../../shared/ProductCard';

export const Pizzas = () => {
	const [pizzas, setPizzas] = useState(null);

	useEffect(() => {
		productServices.getProductsByCategory({
			category: "pizzas",
			pageSize: 4,
		}).then((res) => {
			setPizzas(res.data.data);
		});
	}, []);

	return (
		<div className="flex flex-col items-center w-full h-screen max-h-[380px] pt-2 gap-2 md:max-h-[400px] lg:max-h-[450px]">
			<div className="flex w-full max-w-[1200px] px-2">
				<h2 className="text-[1.2rem] font-bold">PIZZAS</h2>
			</div>
			<section className="flex gap-3 w-full max-w-[1200px] min-h-[255px] h-full px-2 overflow-x-scroll lg:grid lg:grid-cols-4 lg:overflow-hidden">
				{pizzas &&
					pizzas.map((pizza) => (
						<ProductCard
							key={pizza.id}
							title={pizza.name}
							desc={pizza.description}
							oldPrice="15"
							newPrice="12"
							id={pizza.id}
							image={pizza.picture}
						/>
					))}
			</section>
		</div>
	);
};