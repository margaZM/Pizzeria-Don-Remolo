import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useCounterButtons } from '/hooks/useCounterButtons';
import { useSelectPromotion } from '/hooks/useSelectPromotion';

export const ButtonsCounter = ({ maxAmount, product, disabled }) => {
	const { productQuantity, incrementProduct, decrementProduct } = useCounterButtons();
	const { handleSelectedPromotionOptions, handleDeleteSelectedPromotionOptions } =
		useSelectPromotion();

	const addProduct = () => {
		!disabled?.add &&
			(incrementProduct(maxAmount), handleSelectedPromotionOptions(product));
	};

	const minusProduct = () => {
		decrementProduct();
		handleDeleteSelectedPromotionOptions(product);
	};

	return (
		<div className="flex gap-1 items-center">
			<button onClick={minusProduct}>
				<Image src={require('/public/assets/icons/minus-btn.svg')} alt="boton restar" />
			</button>
			<span className="w-8 text-center"> {productQuantity} </span>
			<button
				className={disabled?.add && 'cursor-not-allowed opacity-50'}
				onClick={addProduct}
			>
				<Image src={require('/public/assets/icons/plus-btn.svg')} alt="boton sumar" />
			</button>
		</div>
	);
};

ButtonsCounter.propTypes = {
	maxAmount: PropTypes.number,
};
