import React, { useEffect, useState } from 'react';
import { ProductDetailCard } from './components/ProductDetailCard';
// import { OptionDetail } from './components/OptionDetail';
import { OptionDetailList } from '/modules/shared/PromotionsDetailsModal/components/OptionDetailList.js';

import Close from '/modules/shared/Close.js';
import Modal from '/modules/shared/Modal.js';
import { CartPlusIcon } from '/modules/shared/CartPlusIcon.js';
import PropTypes from 'prop-types';
import { useOnModalChange } from '/hooks/useOnModalChange';
import { useSelectPromotion } from '/hooks/useSelectPromotion';
import { useCartValues } from '/hooks/useCartValues';
import { Notification } from '/modules/shared/Notification';

export const PromotionsDetailsModal = () => {
	const [quantitiesByGroup, setQuantitiesByGroup] = useState([]);
	const { closeModalDispatch } = useOnModalChange();
	const { currentState } = useSelectPromotion();

	const { picture, originalPrice, title, promotionalPrice, description, ruleItems } =
		currentState.selectedProduct || {};

	const { handleSubmit, infoNotification, isOpenNotification, setIsOpenNotification } =
		useCartValues('productDetails');

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

	// console.log(detailPromo);

	useEffect(() => {
		const selectedProductsOfPromotion = currentState.selectedProduct?.detailPromo || [];
		const quantitiesSelectedProductsByGroup = () => {
			const sum = selectedProductsOfPromotion.reduce(
				(count, product) => (
					count.hasOwnProperty(product.group)
						? (count[product.group] += 1)
						: (count[product.group] = product.quantity),
					count
				),
				[],
			);
			return sum;
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

	return (
		<Modal>
			<div className="w-full pt-4 flex flex-col">
				<button className="bg-transparent mb-6 self-end pr-4" onClick={closeModal}>
					<Close />
				</button>
				<div className="grid grid-cols-5 min-h-[500px] w-full">
					{promotion.description && <ProductDetailCard product={promotion} />}

					<div className="col-span-3 relative">
						<OptionDetailList
							quantitiesByGroup={quantitiesByGroup}
							detailPromo={detailPromo}
						/>

						<div className="absolute bottom-0 right-0 bg-white h-16 border-t border-t-gray w-full rounded-br-xl flex justify-center items-center">
							<button
								className="bg-primary text-white rounded-full p-2 w-[70%] flex justify-center items-center gap-2"
								type="button"
								onClick={handleSubmit}
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
			{isOpenNotification && (
				<Notification
					message={infoNotification.message}
					icon={infoNotification.icon}
					setIsOpenNotification={setIsOpenNotification}
					successDelay={2000}
				/>
			)}
		</Modal>
	);
};

PromotionsDetailsModal.propTypes = {
	product: PropTypes.object,
};
