import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { useOnModalChange } from '../../hooks/useOnModalChange';
import { setActionType } from '../../redux/slices/cart/cartSlice';

export const CloseBtn = ({ modal }) => {
	const { closeModalDispatch } = useOnModalChange();
	const dispatch = useDispatch();
	const handleCloseModal = (e) => {
		closeModalDispatch(e);
		if(modal === 'productDetails') {
			dispatch(setActionType('clearEditItem'));
		};
	};
	return (
		<div className="w-4 h-4 cursor-pointer">
			<Image
				src={require('../../public/assets/icons/close.svg')}
				alt="close-btn"
				data-modal={modal}
				onClick={handleCloseModal}
			/>
		</div>
	);
};