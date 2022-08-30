import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ProductCounter } from '../../ProductCounter';
import { selectedProductStyles } from '../styles/productDetailsStyles';

export const SelectedProduct = ({ img, title, description, price }) => {
	const cartState = useSelector(state => state.cart);
	return (
		<article className={selectedProductStyles}>
			<img className="w-full h-[180px]" src={img} alt={title} />
			<div className="flex flex-col gap-1 p-3">
				<h3 className="font-bold">{ title }</h3>
				<p className="text-primary font-bold">{ price }</p>
				<p>{ description }</p>
				<ProductCounter 
					isInCart={cartState?.cart?.selectedEditItem !== null ? "edit" : "selected" } 
				/>
			</div>
		</article>
	);
};