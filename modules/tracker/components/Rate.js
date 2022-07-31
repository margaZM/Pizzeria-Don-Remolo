import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Star from './Star';

export const Rate = () => {
	const [rating, setRating] = useState(0);
	const [hover, setHover] = useState(0);
	const router = useRouter();

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

	const handleContinue = () => {
		router.push({
			pathname: '/comments',
			query: { rate: rating },
		});
	};

	return (
		<div className="bg-secondary rounded md:w-[32%] p-8 py-6 md:px-4">
			<h4 className="font-semibold">Califica tu experiencia</h4>
			<p>¿Cómo calificas el servicio?</p>
			<div className="my-4 flex gap-4">{star}</div>
			<button className="button-border mt-8 py-1 px-12 mx-auto" onClick={handleContinue}>
				Continuar
			</button>
		</div>
	);
};
