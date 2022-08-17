import { useEffect, useState } from 'react';
import { ProductCard } from '../../../shared/ProductCard';
import { productServices } from '../../../../services/product-services/productServices';

const Main = () => {
	const [popular, setPopular] = useState(null);
	useEffect(() => {
		productServices.getMostPopular().then(res => setPopular(res.data));
	}, []);
	return (
		<div className="flex flex-col h-screen max-h-[380px] lg:w-[90%] xl:max-w-[70%] mx-auto pt-2 gap-2 md:max-h-[400px] lg:max-h-[450px]">
			<div className="flex w-full max-w-[1200px] px-2">
				<h2 className="text-[1.2rem] font-bold">LO MÁS POPULAR DE DON RÉMOLO</h2>
			</div>
			<section className="px-2 flex justify-between overflow-hidden gap-4 overflow-x-scroll min-h-[255px] h-full">
				{popular &&
					popular.map((prod) => (
						<ProductCard
							key={prod.id}
							title={prod.name}
							desc={prod.description}
							oldPrice="15"
							newPrice={prod.price}
							image={prod.picture}
						/>
					))}
			</section>
		</div>
	);
};

export default Main;
