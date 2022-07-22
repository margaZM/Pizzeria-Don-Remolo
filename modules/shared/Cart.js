import Image from 'next/image';
import { useOnModalChange } from '../../hooks/useOnModalChange';

export const Cart = ({ position }) => {
	const { handleWindow } = useOnModalChange();
	return (
			<div className={`${position || ''} relative flex justify-center w-12 h-12 hover:translate-y-[-1px] active:translate-y-px`}>
				<Image 
					className="absolute cursor-pointer" 
					src={require('../../public/assets/icons/cart.svg')} 
					alt='cart'
					data-modal="cart"
					onClick={handleWindow}
				/>
				<span className="absolute text-primary"> 0 </span>
			</div>
	);
};