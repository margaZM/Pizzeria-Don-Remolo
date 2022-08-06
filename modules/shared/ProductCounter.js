import {useState } from 'react';
import Image from 'next/image';
import { useSelectProduct } from '../../hooks/useSelectProduct';
import { useDispatch } from 'react-redux';
import { handleCartItemQuantity } from '../../redux/slices/cart/cartSlice';

export const ProductCounter = ({ quantity, id, isInCart }) => {
	const [cartItemCounter, setCartItemCounter] = useState(quantity);
	const { handleQuantity, currentState } = useSelectProduct();
	const dispatch = useDispatch();
	const handleCartItemCounter = (e) => {
		const actionType = e.target.dataset.action;
		const id = e.target.dataset.id;
		switch (e.target.dataset.action) {
			case "increase":
				return (
					dispatch(handleCartItemQuantity({ actionType, itemID: id })),
					setCartItemCounter(cartItemCounter + 1)
					);
			case "decrease": 
				return (
					dispatch(handleCartItemQuantity({ actionType, itemID: id })),
					setCartItemCounter(cartItemCounter - 1)
				);
				default:
					break;
		};
	};
	return (
		<div className="flex items-end gap-5">
			<Image
				className={`${currentState?.selectedProduct?.quantity > 1 || cartItemCounter > 1 ? "cursor-pointer hover:translate-x-[-1px] active:translate-x-px" : ""}`}
				src={require('../../public/assets/icons/minus-btn.svg')}
				alt="minus-btn"
				data-action="decrease"
				data-id={id}
				onClick={!isInCart && currentState?.selectedProduct?.quantity > 1 
					? handleQuantity 
					: isInCart && cartItemCounter > 1 ? handleCartItemCounter
					: null
				}
				/>
			<p className="text-[1.1rem] font-bold">
				{ !isInCart 
				? currentState?.selectedProduct?.quantity 
				: cartItemCounter
				}
			</p>
			<Image
				className="cursor-pointer hover:translate-x-[1px] active:translate-x-[-1px]"
				src={require('../../public/assets/icons/plus-btn.svg')}
				alt="plus-btn"
				data-action="increase"
				data-id={id}
				onClick={!isInCart ? handleQuantity : handleCartItemCounter}
			/>
		</div>
	);
};