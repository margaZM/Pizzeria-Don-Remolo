import { useEffect, useState } from 'react';
import { productServices } from '../../../../services/product-services/productServices';
import { ProductCard } from '../../../shared/ProductCard';

export const Desserts = () => {
	const [desserts, setDesserts] = useState(null);

	useEffect(() => {
		productServices.getProductsByCategory({
			category: "postres",
			pageSize: 4,
		}).then((res) => {
			setDesserts(res.data.data);
		});
	}, []);

	return (
		<div id="postres" className="flex flex-col items-center w-full h-screen max-h-[380px] pt-2 gap-2 md:max-h-[400px] lg:max-h-[450px] scroll-mt-[195px] desktop_bk:scroll-mt-[242px]">
			<div className="flex w-full max-w-[1200px] px-2">
				<h2 className="text-[1.2rem] font-bold">POSTRES</h2>
			</div>
			<section className="flex gap-3 w-full max-w-[1200px] min-h-[255px] h-full px-2 overflow-x-scroll lg:grid lg:grid-cols-4 lg:overflow-hidden">
				{desserts &&
					desserts.map((dessert) => (
						<ProductCard
							key={dessert.id}
							title={dessert.name}
							desc={dessert.description}
							oldPrice="1.50"
							newPrice="1.20"
							id={dessert.id}
							image={dessert.picture}
						/>
					))}
			</section>
		</div>
	);
};