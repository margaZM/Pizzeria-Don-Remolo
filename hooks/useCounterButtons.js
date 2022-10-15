import { useState } from 'react';

export const useCounterButtons = () => {
	const [productQuantity, setProductQuantity] = useState(0);

	const incrementProduct = (maxAmount) => {
		if (maxAmount && productQuantity < maxAmount) {
			setProductQuantity(productQuantity + 1);
		}
	};
	const decrementProduct = () => {
		if (productQuantity > 0) {
			setProductQuantity(productQuantity - 1);
		}
	};

	return {
		productQuantity,
		setProductQuantity,
		incrementProduct,
		decrementProduct,
	};
};
