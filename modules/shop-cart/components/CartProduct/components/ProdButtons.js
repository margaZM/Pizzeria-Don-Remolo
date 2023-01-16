import Image from 'next/image';
import { useOnModalChange } from '../../../../../hooks/useOnModalChange';
import { setDeleteProductCart } from '/redux/slices/cart/cartSlices.js';
import { setSelectedProduct } from '/redux/slices/selectedProduct/selectedProductsSlice.js';
import { ProductCounter } from '../../../../shared/ProductCounter';
import { useDispatch } from 'react-redux';
import { useProductsCart } from '/hooks/useProductsCart';

export const ProdButtons = ({ product }) => {
	const { quantity, id, context, detailPopulars } = product;
	const { openModalDispatch } = useOnModalChange();

	const dispatch = useDispatch();
	const { cartState } = useProductsCart();

	const handleEditItem = (e) => {
		const productToUpdate = cartState.find((product) => product.id === id);
		dispatch(
			setSelectedProduct({
				...productToUpdate,
				totalPrice: productToUpdate.totalPrice,
				picture: productToUpdate.img,
				action: 'edit',
				ruleItems: productToUpdate.ruleItems,
			}),
		);
		openModalDispatch(e.target.dataset.modal);
	};

	return (
		<div className="flex justify-between h-full">
			<ProductCounter quantity={quantity} id={id} isInCart="cart" />
			<div className="flex gap-2 items-end">
				{(context === 'promotionDetails' || detailPopulars?.dough) && (
					<Image
						className="edit-btn cursor-pointer hover:translate-y-[-1px] active:translate-y-px"
						src={require('../../../../../public/assets/icons/edit.svg')}
						alt="edit-btn"
						data-id={id}
						data-action_type="edit"
						data-modal={context}
						onClick={handleEditItem}
					/>
				)}
				<div className="delete-btn w-[40px] h-[40px] pt-2">
					<Image
						className="cursor-pointer hover:translate-y-[-1px] active:translate-y-px"
						src={require('../../../../../public/assets/icons/trash.svg')}
						alt="trash-btn"
						data-id={id}
						onClick={() => dispatch(setDeleteProductCart(id))}
					/>
				</div>
			</div>
		</div>
	);
};
