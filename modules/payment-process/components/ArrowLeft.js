import Image from 'next/image'
import { useOnModalChange } from '../../../hooks/useOnModalChange';
import { useRedirect } from '../../../hooks/useRedirect';

export const ArrowLeft = (props) => {
	const { handleRedirect } = useRedirect();
	const { handleWindow } = useOnModalChange();
	const handleBackwards = (e) => {
		handleRedirect(e);
		handleWindow(e);
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