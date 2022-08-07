import { useEffect, useState } from 'react';
import { useSelectProduct } from '../../../../hooks/useSelectProduct';
import { productServices } from '../../../../services/product-services/productServices';
import { ProductCard } from '../../../shared/ProductCard';

export const Promotions = () => {
	const [promotions, setPromotions] = useState(null);
	const { handlePromotion } = useSelectProduct();

	useEffect(() => {
		productServices.getPromotions().then((res) => setPromotions(res.data));
	}, []);

	return (
		<div className="flex flex-col items-center w-full h-screen max-h-[380px] pt-2 gap-2 md:max-h-[400px] lg:max-h-[450px]">
			<div className="flex w-full max-w-[1200px] px-2">
				<h2 className="text-[1.2rem] font-bold">PROMOCIONES</h2>
			</div>
			<section className="flex gap-3 w-full max-w-[1200px] min-h-[255px] h-full px-2 overflow-x-scroll lg:grid lg:grid-cols-4 lg:overflow-hidden">
				{promotions &&
					promotions.map((promo) => (
						<ProductCard
							key={promo.id}
							title={promo.title}
							desc={promo.description}
							oldPrice={promo.originalPrice}
							newPrice={promo.promotionalPrice}
							id={promo.id}
							image={promo.picture}
							onClick={handlePromotion}
						/>
					))}
			</section>
		</div>
	);
};