import { useEffect } from "react";
import { useOnModalChange } from "../../hooks/useOnModalChange";
import { NavMenu } from "../home-header/components/mobile/NavMenu";
import Modal from "./Modal";
import LoginForm from '../login/Main';
import RegisterForm from '../register/Main';
import ShopCart from '../shop-cart/Main';
import { BannerBenefit } from "../home/components/banners/BannerBenefit";

export const Portal = () => {
	const { modals } = useOnModalChange();
	let isAuth = null;
	if (typeof window !== 'undefined') {
		isAuth = window.localStorage.getItem('auth');
	}
	const { handleWindow } = useOnModalChange();
	useEffect(() => {
		if (isAuth === null) {
			handleWindow("bannerBenefit");
		};
	}, [isAuth]);
	return (
		<>
			{
			modals.login ? <Modal> <LoginForm /> </Modal>
			: modals.register ? <Modal> <RegisterForm /> </Modal>
			: modals.menu ? <Modal> <NavMenu /> </Modal>
			: modals.cart ? <Modal> <ShopCart /> </Modal>
			: modals.bannerBenefit ? <Modal> <BannerBenefit /> </Modal>
			: null
			}
		</>
	);
};