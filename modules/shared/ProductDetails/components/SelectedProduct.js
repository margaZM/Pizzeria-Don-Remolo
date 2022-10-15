import { useSelector } from 'react-redux';
import { useSelectProduct } from '../../../../hooks/useSelectProduct';
import { ProductCounter } from '../../ProductCounter';
import { selectedProductStyles } from '../styles/productDetailsStyles';

export const SelectedProduct = () => {
	const cartState = useSelector(state => state.cart.cart);
	const { currentState } = useSelectProduct();
	const values = {
		title: cartState?.selectedEditItem?.title || currentState?.selectedProduct?.title,
		price: cartState?.selectedEditItem?.price || currentState?.selectedProduct?.price,
		description: cartState?.selectedEditItem?.description || currentState?.selectedProduct?.description,
		img: cartState?.selectedEditItem?.img || currentState?.selectedProduct?.picture,
	};
	return (
		<article className={selectedProductStyles}>
			<img className="w-full h-[180px]" src={values.img} alt={values.title} />
			<div className="flex flex-col gap-1 p-3">
				<h3 className="font-bold">{values.title}</h3>
				<p className="text-primary font-bold">{"$" + values.price}</p>
				<p>{values.description}</p>
				<ProductCounter 
					isInCart={cartState?.selectedEditItem !== null ? "edit" : "selected"} 
				/>
			</div>
		</article>
	);
};