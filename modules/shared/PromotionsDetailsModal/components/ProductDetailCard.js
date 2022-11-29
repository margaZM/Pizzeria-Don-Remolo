import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { ButtonsCounter } from '/modules/shared/ButtonsCounter';
import { useSelectPromotion } from '/hooks/useSelectPromotion';

export const ProductDetailCard = ({ product }) => {
	const { picture, title, newPrice, oldPrice, description } = product;
	const { handleQuantity } = useSelectPromotion();

	return (
		<div className="border-r-2 border-r-gray col-span-2">
			<div className="h-40 w-full max-h-[230px] relative bg-secondary">
				{picture && (
					<Image
						loader={() => picture}
						src={require('/public/assets/categories/pizza.png')}
						alt="promociones de pizzas"
						layout="fill"
					/>
				)}
			</div>
			<div className="px-2 flex flex-col gap-2">
				<p className="font-bold"> {title} </p>
				<div className="flex gap-4">
					<span className="text-gray font-medium line-through">$/{oldPrice} </span>
					<span className="text-primary font-medium"> $/{newPrice} </span>
				</div>
				<p>{description} </p>
				<ButtonsCounter
					handlerAdd={handleQuantity}
					handlerMinus={handleQuantity}
					initialQuantity={1}
				/>
			</div>
		</div>
	);
};

ProductDetailCard.propTypes = {
	product: PropTypes.object,
};
