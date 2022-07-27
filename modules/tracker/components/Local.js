import React from 'react';
import PropTypes from 'prop-types';

export const Local = (props) => {
	return (
		<div className="bg-secondary rounded md:w-[32%] p-8 py-6 md:px-4">
			<h4 className="font-semibold">El local que te atiende</h4>
			<p>Pizzería Don Remolo Alborada</p>
			<p>Av. Avilés y Rendón, Guayaquil, 092063, Ecuador Local #21</p>
			<p>Telf: 0994521587</p>
		</div>
	);
};

Local.propTypes = {};
