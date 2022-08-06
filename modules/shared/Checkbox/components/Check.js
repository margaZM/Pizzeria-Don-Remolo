import React from 'react';
import PropTypes from 'prop-types';

const Check = ({ width, height, checked }) => {
	return (
		<svg
			width={width ? width : '25'}
			height={height ? height : '25'}
			viewBox="0 0 14 13"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`absolute top-0 left-0`}
		>
			<path
				d="M13 1L4.75 12L1 7"
				stroke={checked ? 'white' : ''}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};

Check.propTypes = {
	checked: PropTypes.bool,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default Check;
