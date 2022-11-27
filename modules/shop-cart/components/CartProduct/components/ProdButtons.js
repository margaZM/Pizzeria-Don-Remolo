import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { useOnModalChange } from '../../../../../hooks/useOnModalChange';
import {
	handleDeleteCartItem,
	setActionType,
} from '../../../../../redux/slices/cart/cartSlice';
import { ProductCounter } from '../../../../shared/ProductCounter';

export const ProdButtons = ({ quantity, id, context }) => {
	const { openModalDispatch } = useOnModalChange();
	const dispatch = useDispatch();
	const handleDeleteItem = () => dispatch(handleDeleteCartItem(id));
	const handleEditItem = (e) => {
		dispatch(setActionType({ type: e.target.dataset.action_type, id }));
		openModalDispatch(e.target.dataset.modal);
	};
	return (
		<div className="flex justify-between h-full">
			<ProductCounter quantity={quantity} id={id} isInCart="cart" />
			<div className="flex gap-2 items-end">
				<div className="delete-btn w-[40px] h-[40px] pt-2">
					<Image
						className="cursor-pointer hover:translate-y-[-1px] active:translate-y-px"
						src={require('../../../../../public/assets/icons/trash.svg')}
						alt="trash-btn"
						data-id={id}
						onClick={handleDeleteItem}
					/>
				</div>
				<Image
					className="edit-btn cursor-pointer hover:translate-y-[-1px] active:translate-y-px"
					src={require('../../../../../public/assets/icons/edit.svg')}
					alt="edit-btn"
					data-id={id}
					data-action_type="edit"
					data-modal={context}
					onClick={handleEditItem}
				/>
			</div>
		</div>
	);
};
