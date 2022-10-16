import Image from 'next/image';
import { useSelector } from 'react-redux';
import { useOnModalChange } from '../../hooks/useOnModalChange';

export const CartIcon = ({ position }) => {
	const cartLength = useSelector((state) => state.cart.cart.cartLength);
	const { openModalDispatch } = useOnModalChange();
	return (
		<div
			className={`${
				position || ''
			} relative flex justify-center w-12 h-12 hover:translate-y-[-1px] active:translate-y-px`}
		>
			<Image
				className="absolute cursor-pointer"
				src={require('../../public/assets/icons/cart.svg')}
				alt="cart"
				data-modal="cart"
				onClick={openModalDispatch}
			/>
			<span className="absolute text-primary"> {cartLength || 0} </span>
		</div>
	);
};
