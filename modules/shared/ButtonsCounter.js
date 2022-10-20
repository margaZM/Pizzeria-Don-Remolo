import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useCounterButtons } from '/hooks/useCounterButtons';

export const ButtonsCounter = ({
	maxAmount,
	product,
	disabled,
	handlerAdd,
	handlerMinus,
	initialQuantity,
}) => {
	const { productQuantity, incrementProduct, decrementProduct } =
		useCounterButtons(initialQuantity);

	const addProduct = () => {
		!disabled?.add && (incrementProduct(maxAmount), handlerAdd(product || 'increase'));
	};

	const minusProduct = () => {
		decrementProduct();
		handlerMinus(product || 'decrease');
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
