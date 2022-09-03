import { useState, useEffect } from 'react';

export const useLoading = () => {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		setTimeout(() => setLoading(false), 6000);
	}, []);
	return {
		loading,
		setLoading,
	};
};
