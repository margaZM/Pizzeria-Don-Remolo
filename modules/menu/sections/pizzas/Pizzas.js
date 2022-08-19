import React from 'react';
import PropTypes from 'prop-types';

export const Pizzas = (props) => {
	console.log(props.refProp);
	return (
		<div className="h-96 bg-primary" ref={props.refProp}>
			<h1>Pizzas</h1>
			<p>Nuestras clasicas</p>
		</div>
	);
};

Pizzas.propTypes = {};
