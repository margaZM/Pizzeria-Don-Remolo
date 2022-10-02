import Image from 'next/image';
import { useOnModalChange } from '../../hooks/useOnModalChange';

export const CloseBtn = ({ modal }) => {
	const { closeModalDispatch } = useOnModalChange();
	return (
		<div className="w-4 h-4 cursor-pointer">
			<Image
				src={require('../../public/assets/icons/close.svg')}
				alt="close-btn"
				data-modal={modal}
				onClick={closeModalDispatch}
			/>
		</div>
	);
};
