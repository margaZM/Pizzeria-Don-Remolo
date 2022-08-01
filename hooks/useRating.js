import { useState } from 'react';

export const useRating = (rate) => {
	const [rating, setRating] = useState(rate ? rate : 0);
	const [hover, setHover] = useState(0);
	return {
		rating,
		setRating,
		hover,
		setHover,
	};
};
