import { useEffect } from "react";
import { useOnModalChange } from "../../hooks/useOnModalChange";
import { useMountTransition } from '../../hooks/useMountTransition';
import { NavMenu } from "../home-header/components/mobile/NavMenu";
import Modal from "./Modal";
import LoginForm from '../login/Main';
import RegisterForm from '../register/Main';
import ShopCart from '../shop-cart/Main';
import ProductDetails from '../shared/ProductDetails/Main';
import { BannerBenefit } from "../home/components/banners/BannerBenefit";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const Portal = () => {
	const { modals } = useOnModalChange();
	const cartIsMounted = useSelector(state => state?.modal?.cart);
	const cartTransition = useMountTransition(cartIsMounted, 250);
	const router = useRouter();
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
	useEffect(() => {
		handleWindow("pathChange");
	}, [router.pathname]);
	return (
		<>
			{
			modals.login ? <Modal> <LoginForm /> </Modal>
			: modals.register ? <Modal> <RegisterForm /> </Modal>
			: modals.menu ? <Modal> <NavMenu /> </Modal>
			: cartTransition ? <Modal>{<ShopCart animation={cartIsMounted ? "animate-cart_in" : "animate-cart_out"} />}</Modal>
			: modals.bannerBenefit ? <Modal> <BannerBenefit /> </Modal>
			: modals.productDetails ? <Modal> <ProductDetails /> </Modal>
			: null
			}
		</>
	);
};