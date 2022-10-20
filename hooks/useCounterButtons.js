import { useState } from 'react';

export const useCounterButtons = (initialQuantity) => {
	const [productQuantity, setProductQuantity] = useState(initialQuantity || 0);

	const incrementProduct = (maxAmount) => {
		if (maxAmount) {
			if (productQuantity < maxAmount) {
				setProductQuantity(productQuantity + 1);
			}
		} else {
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
