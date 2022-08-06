import { useState } from 'react';

export const useSwitch = () => {
	const [orderType, setOrderType] = useState({
		home: true,
		local: false,
	});
	const handleOrder = (e) => {
		if (e.target.dataset.order === 'home') setOrderType({ home: true, local: false });
		else if (e.target.dataset.order === 'local')
			setOrderType({ home: false, local: true });
	};
	return {
		orderType,
		setOrderType,
		handleOrder,
	};
};
