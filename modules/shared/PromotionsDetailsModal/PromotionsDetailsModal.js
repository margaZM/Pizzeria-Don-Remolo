import React from 'react';
import { ProductDetailCard } from './components/ProductDetailCard';
import { OptionDetail } from './components/OptionDetail';
import Close from '/modules/shared/Close.js';
import Modal from '/modules/shared/Modal.js';
import { CartPlusIcon } from '/modules/shared/CartPlusIcon.js';
import PropTypes from 'prop-types';

export const PromotionsDetailsModal = ({ product }) => {
	const productDefault = {
		image: '/public/assets/categories/pizza.png',
		title: 'Combo para dos',
		newPrice: '24,99',
		oldPrice: '34,99',
		description: 'Pizzas medianas clásicas x2  + gaseosa de 750ml + postre x2',
	};

	const detailPromo = [
		{
			id: 1,
			icon: 'pizza',
			title: 'Elige las dos pizzas',
			options: ['Pizza Mozarella', 'Pizza Pepperoni', 'Pizza Jamón', 'Pizza vegetariana'],
			maxAmount: 2,
		},
		{
			id: 2,
			icon: 'pizza',
			title: 'Elige las dos gaseosas',
			options: ['Coca-cola 250 ml', 'Sprite 250 ml'],
			maxAmount: 2,
		},
		{
			id: 3,
			icon: 'pizza',
			title: 'Elige los dos postres',
			options: ['Torta de chocolate', 'Cheescake de frutilla'],
			maxAmount: 2,
		},
	];
	return (
		<Modal>
			<div className="w-full pt-4 flex flex-col">
				<button className="bg-transparent mb-6 self-end pr-4">
					<Close />
				</button>
				<div className="grid grid-cols-5 min-h-[500px] w-full">
					<ProductDetailCard product={productDefault} />

					<div className="col-span-3 relative">
						{detailPromo.map((detail) => (
							<OptionDetail detailPromo={detail} key={detail.id} />
						))}
						<div className="absolute bottom-0 right-0 bg-white h-16 border-t border-t-gray w-full rounded-br-xl flex justify-center items-center">
							<button
								className="bg-primary text-white rounded-full p-2 w-[70%] flex justify-center items-center gap-2"
								type="submit"
							>
								<CartPlusIcon />
								<span>Agregar al carrito</span>
								<span>|</span>
								<span>$ 20</span>
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
