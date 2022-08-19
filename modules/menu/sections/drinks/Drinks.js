import React from 'react';
import PropTypes from 'prop-types';

export const Drinks = (props) => {
	return (
		<div className="h-80 bg-blue" ref={props.refProp}>
			<h2>Bebidas</h2>
		</div>
	);
};

Drinks.propTypes = {};
