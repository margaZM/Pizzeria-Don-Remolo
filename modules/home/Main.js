import React, { useEffect, useState } from 'react';
import { Hero } from './sections/Hero/Hero';
import { Gallery } from './components/Gallery/Gallery';
import { Promotions } from './sections/promotions/Promotions';
import { Categories } from './sections/Categories/Categories';
import { BannerBenefit } from './components/banners/BannerBenefit';
import { useOnModalChange } from '/hooks/useOnModalChange';
import MostPopular from './sections/most-popular/Main';
import ShopCart from '../shop-cart/Main';
import { useSelector } from 'react-redux';
import Modal from '../shared/Modal';

export const Main = () => {
	const isCart = useSelector((state) => state.modal.cart);
	let isAuth = null;
	if (typeof window !== 'undefined') {
		isAuth = window.localStorage.getItem('auth');
	}
	const [isOpenModal, setIsOpenModal] = useState(false);

	const { handleWindow } = useOnModalChange();

	const handleRegisterModal = (e) => {
		setIsOpenModal(false);
		handleWindow(e);
	};
	useEffect(() => {
		if (isAuth === null) {
			setIsOpenModal(true);
		}
	}, [isAuth]);

	return (
		<section>
			<Hero />
			<Promotions />
			<Categories />
			<MostPopular />
			<Gallery />
			{isOpenModal && (
				<BannerBenefit
					setIsOpenModal={setIsOpenModal}
					handleRegisterModal={handleRegisterModal}
				/>
			)}
			{
				isCart && 
				<Modal>
					<ShopCart />
				</Modal>
			}
		</section>
	);
};
