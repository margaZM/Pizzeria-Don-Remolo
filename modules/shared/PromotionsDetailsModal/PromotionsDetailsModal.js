import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProductDetailCard } from './components/ProductDetailCard';
import { OptionDetail } from './components/OptionDetail';
import Close from '/modules/shared/Close.js';
import Modal from '/modules/shared/Modal.js';
import { CartPlusIcon } from '/modules/shared/CartPlusIcon.js';
import PropTypes from 'prop-types';
import { useOnModalChange } from '/hooks/useOnModalChange';
import { useSelectPromotion } from '/hooks/useSelectPromotion';
import { handleAddToCart, handleEditCartItem } from '/redux/slices/cart/cartSlice';

export const PromotionsDetailsModal = () => {
	const [quantitiesByGroup, setQuantitiesByGroup] = useState({});
	const { closeModalDispatch } = useOnModalChange();
	const { currentState } = useSelectPromotion();
	const dispatch = useDispatch();
	const cartState = useSelector((state) => state.cart);

	const { picture, originalPrice, title, promotionalPrice, description, ruleItems } =
		currentState.selectedProduct || {};

	const closeModal = () => {
		closeModalDispatch('promotionDetails');
	};

	const promotion = {
		picture,
		title,
		newPrice: promotionalPrice,
		oldPrice: originalPrice,
		description,
	};
	const detailPromo = ruleItems || [];

	console.log(detailPromo);

	useEffect(() => {
		const selectedProductsOfPromotion = currentState.selectedProduct?.detailPromo || [];
		const quantitiesSelectedProductsByGroup = () => {
			return selectedProductsOfPromotion.reduce(
				(count, product) => (
					count[product.group] ? (count[product.group] += 1) : (count[product.group] = 1),
					count
				),
				[],
			);
		};
		quantitiesSelectedProductsByGroup();
		setQuantitiesByGroup(quantitiesSelectedProductsByGroup());
	}, [currentState.selectedProduct?.detailPromo]);

	console.log(quantitiesByGroup);
	console.log(currentState.selectedProduct);

	// const disabledButton = () => {
	// 	return detailPromo.map(item => {
	// 		item.sizeId < quantitiesByGroup[item.groupName]
	// 	});
	// };

	const addToCart = () => {
		dispatch(
			handleAddToCart({
				totalPrice:
					currentState.selectedProduct?.promotionalPrice *
					currentState.selectedProduct?.quantity,
				data: {
					id: currentState?.selectedProduct?.id,
					img: currentState?.selectedProduct?.picture,
					title: currentState?.selectedProduct?.title,
					quantity: currentState?.selectedProduct?.quantity,
					productSubTotal:
						currentState.selectedProduct?.promotionalPrice *
						currentState.selectedProduct?.quantity,
					detailPromo: currentState.selectedProduct?.detailPromo,
				},
			}),
		);
	};

	return (
		<Modal>
			<div className="w-full pt-4 flex flex-col">
				<button className="bg-transparent mb-6 self-end pr-4" onClick={closeModal}>
					<Close />
				</button>
				<div className="grid grid-cols-5 min-h-[500px] w-full">
					{promotion.description && <ProductDetailCard product={promotion} />}

					<div className="col-span-3 relative">
						{detailPromo.length && (
							<div className="max-h-[93%] overflow-auto">
								{detailPromo?.map((detail) => (
									<OptionDetail
										detailPromo={detail}
										quantitiesByGroup={quantitiesByGroup}
										key={detail.categoryId}
									/>
								))}
							</div>
						)}
						<div className="absolute bottom-0 right-0 bg-white h-16 border-t border-t-gray w-full rounded-br-xl flex justify-center items-center">
							<button
								className="bg-primary text-white rounded-full p-2 w-[70%] flex justify-center items-center gap-2"
								type="button"
								onClick={addToCart}
							>
								<CartPlusIcon />
								<span>Agregar al carrito</span>
								<span>|</span>
								<span>
									{'$'}{' '}
									{currentState.selectedProduct?.promotionalPrice *
										currentState.selectedProduct?.quantity}
								</span>
							</button>
						</div>
					</div>
				</div>
			</div>
		</Modal>
	);
};

PromotionsDetailsModal.propTypes = {
	product: PropTypes.object,
};
