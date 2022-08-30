import Image from 'next/image';

export const CartPlus = (props) => {
	return (
		<Image 
			src={require('../../../../public/assets/icons/cart-plus.svg')} 
			alt="cart-plus"
			{...props}
		/>
	);
};