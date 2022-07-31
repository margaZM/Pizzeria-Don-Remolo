import { useRouter } from 'next/router';
import React from 'react';
import { useRating } from '/hooks/useRating';
import { StarRatings } from '/modules/shared/StarRatings/StarRatings';

export const Rate = () => {
	const router = useRouter();
	const { rating, setRating, hover, setHover } = useRating(Number(router.query.rate));

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
			<StarRatings
				rating={rating}
				setRating={setRating}
				hover={hover}
				setHover={setHover}
			/>
			<button className="button-border mt-8 py-1 px-12 mx-auto" onClick={handleContinue}>
				Continuar
			</button>
		</div>
	);
};
