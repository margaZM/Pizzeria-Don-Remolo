import { useState } from 'react';

export const useCounterButtons = () => {
	const [counter, setCounter] = useState(0);

	const increment = (maxAmount) => {
		if (maxAmount && counter < maxAmount) {
			setCounter(counter + 1);
		}
	};
	const decrement = () => {
		if (counter > 0) {
			setCounter(counter - 1);
		}
	};

	return {
		counter,
		setCounter,
		increment,
		decrement,
	};
};
