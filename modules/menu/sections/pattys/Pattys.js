import React from 'react';
import PropTypes from 'prop-types';

export const Pattys = (props) => {
	return (
		<div className="h-80 bg-yellow" ref={props.refProp}>
			<h2>Empanadas</h2>
		</div>
	);
};

Pattys.propTypes = {};
