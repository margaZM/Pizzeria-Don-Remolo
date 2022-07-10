import React, { useEffect, useState } from 'react';
import { getCategories } from '../../../../services/categoriesService';
import { Category } from '../../components/Categories/Category';

export const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategories().then((response) => {
			setCategories(response.data);
		});
	}, []);

	return (
		<section className="md:w-[87%] min-h-[340px]' mx-auto py-8">
			<h2 className="text-[1.2rem] font-bold">¿QUÉ SE TE ANTOJA HOY?</h2>
			<section className="my-8 py-12 flex gap-4 flex-nowrap overflow-x-scroll scrolling-touch items-start">
				{categories.map((category) => (
					<section
						className="flex-none w-[45%] md:w-[30%] mr-4 md:pb-4 rounded-lg"
						key={category.name}
					>
						<Category image={category.picture} title={category.name} />
					</section>
				))}
			</section>
		</section>
	);
};
