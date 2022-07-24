import Image from 'next/image'
import { useRedirect } from '../../../hooks/useRedirect';

export const ArrowLeft = (props) => {
	const { handleRedirect } = useRedirect();
	const handleBackwards = (e) => {
		handleRedirect(e);
	};
	return (
		<div {...props}>
			<Image 
				src={require('../../../public/assets/icons/arrow-left.svg')} 
				alt="arrow-left" 
				data-path="/"
				data-modal="cart"
				onClick={handleBackwards}
			/>
		</div>
	);
};