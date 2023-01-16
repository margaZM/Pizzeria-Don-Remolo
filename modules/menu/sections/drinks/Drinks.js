import React, { useEffect } from 'react';
import { getMenuByCategory } from '/redux/slices/menuCategories/categories.js';
import { useDispatch, useSelector } from 'react-redux';
import { ProductCard } from '/modules/shared/ProductCard.js';
import PropTypes from 'prop-types';
import { useProductsCart } from '/hooks/useProductsCart';

export const Drinks = ({ refProp }) => {
	const dispatch = useDispatch();

	let { category } = useSelector((state) => state.categories);

	const { setAddProduct } = useProductsCart();

	useEffect(() => {
		dispatch(getMenuByCategory({ category: 'bebidas' }));
	}, [dispatch]);

	const handleclick = (product) => {
		setAddProduct(product);
	};

	return (
		<div
			ref={refProp}
			id="Bebidas"
			className="px-2 md:px-0 lg:w-[90%] xl:max-w-[70%] mx-auto mt-8 scroll-mt-60"
		>
			<h2 className="text-[1.2rem] font-bold uppercase">Bebidas</h2>
			<div className="h-full responsive-cards">
				{category.bebidas?.data?.map((product) => (
					<div key={product.id} className="min-h-[320px]">
						<ProductCard
							key={product.id}
							title={product.name}
							desc={product.description}
							oldPrice={product.price}
							newPrice={product.price}
							id={product.id}
							image={product.picture}
							onClick={() => handleclick(product)}
							dataModal={'cart'}
						/>
					</div>
				))}
			</div>
		</div>
	);
};

Drinks.propTypes = {
	refProp: PropTypes.object,
};
