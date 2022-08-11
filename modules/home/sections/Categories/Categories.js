import React, { useEffect, useState } from 'react';
import { getCategoriesHome } from '../../../../services/categoriesService';
import { Category } from '../../components/Categories/Category';

export const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		getCategoriesHome().then((response) => {
			console.log(response);
			setCategories(response.data);
		});
	}, []);

	return (
		<section className="px-2 md:px-0 md:w-[87%] min-h-[340px] max-w-[1200px] mx-auto py-8">
			<h2 className="text-[1.2rem] font-bold">¿QUÉ SE TE ANTOJA HOY?</h2>
			<section className="md:my-4 md:py-12 flex gap-2 flex-wrap md:flex-nowrap justify-center md:justify-between">
				{categories.length > 0 &&
					categories.map((category) => (
						<section
							className="flex-none w-[40%] md:w-[30%] mr-4 md:pb-4 rounded-lg"
							key={category.name}
						>
							<Category image={category?.picture} title={category?.name} />
						</section>
					))}
			</section>
		</section>
	);
};
