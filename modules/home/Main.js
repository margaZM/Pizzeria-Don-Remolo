import React, { useEffect, useState } from 'react';
import { Hero } from './sections/Hero/Hero';
import { Gallery } from './components/Gallery/Gallery';
import { Promotions } from './sections/promotions/Promotions';
import { Categories } from './sections/Categories/Categories';
import { BannerBenefit } from './components/banners/BannerBenefit';
import { useSelector } from 'react-redux';
import { useOnModalChange } from '/hooks/useOnModalChange';

export const Main = () => {
	let { user } = useSelector((state) => state.user);
	const [isOpenModal, setIsOpenModal] = useState(false);

	const { handleWindow } = useOnModalChange();

	const handleRegisterModal = (e) => {
		console.log(e);
		setIsOpenModal(false);
		handleWindow(e);
	};
	useEffect(() => {
		if (user === null) {
			setIsOpenModal(true);
		}
	}, [user]);

	return (
		<section>
			<Hero />
			<Promotions />
			<Categories />
			<Gallery />
			{isOpenModal && (
				<BannerBenefit
					setIsOpenModal={setIsOpenModal}
					handleRegisterModal={handleRegisterModal}
				/>
			)}
		</section>
	);
};
