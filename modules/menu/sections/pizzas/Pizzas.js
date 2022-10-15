import React, { useEffect } from 'react';
import { getMenuByCategory } from '/redux/slices/menuCategories/categories.js';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from '/modules/shared/ProductCard.js';
import PropTypes from 'prop-types';
import { useSelectProduct } from '../../../../hooks/useSelectProduct';

export const Pizzas = ({ refProp }) => {
	const dispatch = useDispatch();
	const {handleProductSelection} = useSelectProduct();

	let { category } = useSelector((state) => state.categories);

	useEffect(() => {
		dispatch(getMenuByCategory({ category: 'pizzas' }));
	}, [dispatch]);

	return (
		<div
			ref={refProp}
			id="Pizzas"
			className="px-2 lg:w-[90%] xl:max-w-[70%] mx-auto mt-8 scroll-mt-60"
		>
			<h2 className="text-[1.2rem] font-bold uppercase">Pizzas</h2>
			<div className="h-full flex flex-wrap gap-4 gap-y-8 lg:grid lg:grid-cols-4">
				{category.pizzas?.data?.map((product) => (
					<div key={product.id} className="min-h-[320px]">
						<ProductCard
							title={`Pizza ${product.name}`}
							desc={product.description}
							oldPrice={product.price}
							newPrice={product.price}
							id={product.id}
							image={product.picture}
							isMenu={true}
							actionType='add'
							onClick={handleProductSelection}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

Pizzas.propTypes = {
	refProp: PropTypes.object,
};