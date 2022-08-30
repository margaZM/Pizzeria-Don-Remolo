import React, { useEffect, useState } from 'react';
import { getCategoriesHome } from '../../../../services/categoriesService';
import { Category } from '../../components/Categories/Category';
import { useRouter } from 'next/router';

export const Categories = () => {
	const [categories, setCategories] = useState([]);
	const router = useRouter();

	useEffect(() => {
		getCategoriesHome().then((response) => {
			setCategories(response.data);
		});
	}, []);

	const redirect = (category) => {
		console.log(category);
		router.push({
			pathname: '/menu',
			query: { c: category },
		});
	};

	return (
		<section className="px-2 md:px-0 lg:w-[90%] xl:max-w-[70%] min-h-[340px] mx-auto py-8 lg:max-h-[450px]">
			<h2 className="text-[1.2rem] font-bold">¿QUÉ SE TE ANTOJA HOY?</h2>
			<section className="md:my-4 md:pt-12 flex flex-wrap gap-x-6 lg:gap-x-10 md:flex-nowrap justify-center md:justify-between">
				{categories.length > 0 &&
					categories.map((category) => (
						<section
							className="flex-none w-[40%] md:w-[30%] mr-4 md:pb-4 rounded-lg md:odd:-mb-4 md:even:-mt-16"
							key={category.name}
							onClick={() => redirect(category.name)}
						>
							<Category image={category?.picture} title={category?.name} />
						</section>
					))}
			</section>
		</section>
	);
};
