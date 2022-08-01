import React, { useState } from 'react';
import Star from './components/Star';
import PropTypes from 'prop-types';

export const StarRatings = ({ rating, setRating, hover, setHover }) => {
	const star = [...Array(5)].map((star, index) => {
		index += 1;
		return (
			<Star
				key={index}
				setRating={setRating}
				index={index}
				rating={rating}
				setHover={setHover}
				hover={hover}
			/>
		);
	});

	return <div className="my-2 flex gap-4">{star}</div>;
};

StarRatings.propTypes = {
	rate: PropTypes.number,
};
