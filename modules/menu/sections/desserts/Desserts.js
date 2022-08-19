import React from 'react';
import PropTypes from 'prop-types';

export const Desserts = (props) => {
	return (
		<div className="h-80 bg-green" ref={props.refProp}>
			<h2>Postres</h2>
		</div>
	);
};

Desserts.propTypes = {};
