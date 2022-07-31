import React from 'react';
import PropTypes from 'prop-types';

const Star = ({ setRating, index, rating, setHover, hover }) => {
	return (
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			className={`hover:cursor-pointer  ${
				index <= (rating || hover) ? 'stroke-primary' : 'stroke-black'
			}`}
			onClick={() => setRating(index)}
			onMouseEnter={() => setHover(index)}
			onMouseLeave={() => setHover(rating)}
		>
			<path
				d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
				strokeWidth="1.5"
				strokeLinecap="round"
				strokeLinejoin="round"
				fill={index <= (rating || hover) ? '#E74423' : 'none'}
			/>
		</svg>
	);
};

Star.propTypes = {
	setRating: PropTypes.func,
	setHover: PropTypes.func,
	index: PropTypes.number,
	rating: PropTypes.number,
	hover: PropTypes.number,
};

export default Star;
