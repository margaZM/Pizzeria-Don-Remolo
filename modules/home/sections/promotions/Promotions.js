import { useEffect } from 'react';
import { useSelectedProducts } from '/hooks/useSelectedProducts.js';
import { productServices } from '../../../../services/product-services/productServices';
import { ProductCard } from '../../../shared/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { setPromotions } from '/redux/slices/products/productsSlice.js';

export const Promotions = ({ refProp, isMenu }) => {
	const { handlePromotion } = useSelectedProducts();
	const dispatch = useDispatch();
	const promotions = useSelector((state) => state.products.promotions);

	useEffect(() => {
		productServices.getPromotions().then((res) => dispatch(setPromotions(res.data)));
	}, [dispatch]);

	return (
		<div
			ref={refProp}
			className="px-2 flex flex-col h-screen max-h-[380px] lg:w-[90%] xl:max-w-[70%] mx-auto pt-2 gap-2"
		>
			<div className="flex w-full max-w-[1200px]">
				<h2 className="text-[1.2rem] font-bold">PROMOCIONES</h2>
			</div>
			<section className="wrap-cards">
				{promotions &&
					promotions.map((promo) => (
						<ProductCard
							key={promo.id}
							promotion={promo.title}
							desc={promo.description}
							oldPrice={promo.originalPrice}
							newPrice={promo.promotionalPrice}
							id={promo.id}
							image={promo.picture}
							onClick={() => handlePromotion(promo, 'promotionDetails')}
							isMenu={isMenu}
							dataModal={'promotionDetails'}
						/>
					))}
			</section>
		</div>
	);
};
