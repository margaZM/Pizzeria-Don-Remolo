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
	productsToUpdate,
}) => {
	const { productQuantity, incrementProduct, decrementProduct } =
		useCounterButtons(initialQuantity);

	let productUpdated;

	if (productsToUpdate?.length) {
		productUpdated = productsToUpdate.find((item) => {
			return item.productId === product.productId;
		});
	}

	const addProduct = () => {
		!disabled?.add && (incrementProduct(maxAmount), handlerAdd(product || 'increase'));
	};

	const minusProduct = () => {
		decrementProduct();
		handlerMinus(product || 'decrease');
	};
	const quantity = productUpdated?.quantity || productQuantity;

	return (
		<div className="flex gap-1 items-center">
			<button
				onClick={minusProduct}
				className={
					disabled?.minus || quantity === 0
						? 'cursor-not-allowed text-gray-dark'
						: 'text-primary'
				}
				disabled={disabled?.minus || quantity === 0}
			>
				<Image src={require('/public/assets/icons/minus-btn.svg')} alt="boton restar" />
			</button>
			<span className="w-8 text-center">{quantity}</span>
			<button
				className={disabled?.add ? 'cursor-not-allowed text-gray-dark' : 'text-primary'}
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
