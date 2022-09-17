import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useCounterButtons } from '/hooks/useCounterButtons';

export const ButtonsCounter = ({ maxAmount }) => {
	const { counter, increment, decrement } = useCounterButtons();

	return (
		<div className="flex gap-1 items-center">
			<button onClick={decrement}>
				<Image src={require('/public/assets/icons/minus-btn.svg')} alt="boton restar" />
			</button>

			<span className="w-8 text-center"> {counter} </span>

			<button onClick={() => increment(maxAmount)}>
				<Image src={require('/public/assets/icons/plus-btn.svg')} alt="boton sumar" />
			</button>
		</div>
	);
};

ButtonsCounter.propTypes = {
	maxAmount: PropTypes.number,
};
