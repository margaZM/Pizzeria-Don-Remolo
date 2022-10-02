import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal } from '../../../../redux/slices/modal/modalSlice';

export const CloseBtn = () => {
	const modalOpts = useSelector((state) => state.modal);
	const dispatch = useDispatch();

	const handleClose = (e) => dispatch(closeModal(e.target.dataset.modal));

	return (
		<div
			className={`${modalOpts.login && 'absolute top-2 right-2'} ${
				modalOpts.register && 'absolute top-2 right-2'
			} lg:absolute lg:right-2 flex justify-center items-center w-12 h-12`}
		>
			<div className="w-4 h-4 cursor-pointer">
				<Image
					onClick={handleClose}
					src={require('../../../../public/assets/icons/close.svg')}
					alt="close-btn"
					data-modal={
						modalOpts.register
							? 'register'
							: modalOpts.login
							? 'login'
							: modalOpts.menu
							? 'menu'
							: modalOpts.login && modalOpts.menu
							? 'login'
							: modalOpts.register && modalOpts.menu
							? 'register'
							: ''
					}
				/>
			</div>
		</div>
	);
};
