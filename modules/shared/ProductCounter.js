import { useState } from 'react';
import Image from 'next/image';
import { useSelectProduct } from '../../hooks/useSelectProduct';
import { useDispatch, useSelector } from 'react-redux';
import {
	setPlusProductCart,
	setMinusProductCart,
} from '/redux/slices/cart/cartSlices.js';

export const ProductCounter = ({ quantity, id, isInCart }) => {
	const [cartItemCounter, setCartItemCounter] = useState(quantity);
	const { currentState } = useSelectProduct();
	const cartState = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	return (
		<div className="flex items-end gap-5">
			<Image
				className={`${
					currentState?.selectedProduct?.quantity > 1 ||
					cartItemCounter > 1 ||
					cartState?.cart?.selectedEditItem?.quantity > 1
						? 'cursor-pointer hover:translate-x-[-1px] active:translate-x-px'
						: ''
				}`}
				src={require('../../public/assets/icons/minus-btn.svg')}
				alt="minus-btn"
				data-action="decrease"
				data-id={id}
				onClick={() => dispatch(setMinusProductCart(id))}
			/>
			<p className="text-[1.1rem] font-bold">{quantity}</p>
			<Image
				className="cursor-pointer hover:translate-x-[1px] active:translate-x-[-1px]"
				src={require('../../public/assets/icons/plus-btn.svg')}
				alt="plus-btn"
				data-action="increase"
				data-id={id}
				onClick={() => dispatch(setPlusProductCart(id))}
			/>
		</div>
	);
};
