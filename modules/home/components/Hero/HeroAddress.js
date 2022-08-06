import React from 'react';
import MapIcon from './components/MapIcon';
import { useRouter } from 'next/router';

export const HeroAddress = ({ orderType }) => {
	const router = useRouter();

	const handleContinue = () => {
		router.push({
			pathname: '/address',
			query: { type: JSON.stringify(orderType) },
		});
	};

	return (
		<div className="flex gap-2 my-4">
			<MapIcon />
			<p className="underline font-medium cursor-pointer" onClick={handleContinue}>
				Añade tu dirección aquí
			</p>
		</div>
	);
};
