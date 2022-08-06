import Image from 'next/image';

export const CartPlus = () => {
	return (
		<Image 
			className="" 
			src={require('../../../../public/assets/icons/cart-plus.svg')} 
			alt='cart-plus'
		/>
	);
};