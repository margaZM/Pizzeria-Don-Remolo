import React from 'react';
import PropTypes from 'prop-types';

export const Order = (props) => {
	return (
		<div className="bg-secondary rounded md:w-[32%] p-8 py-6 md:px-4">
			<h4 className="font-semibold">Tu pedido</h4>
			<p>(1) Pizza pepperoni - mediana</p>
			<p>(1) Pizza pepperoni - mediana</p>
		</div>
	);
};

Order.propTypes = {};
