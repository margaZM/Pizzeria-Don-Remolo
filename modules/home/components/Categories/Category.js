import Image from 'next/image';
import React from 'react';

export const Category = ({ image, title }) => {
	return (
		<section
			className={
				'flex flex-col items-center p-4 relative hover:scale-110 hover:cursor-pointer'
			}
		>
			<Image
				loader={() => image}
				src={image}
				alt="category-food-image"
				width="250"
				height="150"
			/>
			<p className="mt-4 font-bold"> {title} </p>
		</section>
	);
};
