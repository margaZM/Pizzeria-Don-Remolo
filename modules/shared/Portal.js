import { useEffect } from 'react';
import { useOnModalChange } from '../../hooks/useOnModalChange';
import { useMountTransition } from '../../hooks/useMountTransition';
import { NavMenu } from '../home-header/components/mobile/NavMenu';
import Modal from './Modal';
import LoginForm from '../login/Main';
import RegisterForm from '../register/Main';
import ShopCart from '../shop-cart/Main';
import ProductDetails from '../shared/ProductDetails/Main';
import { BannerBenefit } from '../home/components/banners/BannerBenefit';
import { useSelector } from 'react-redux';
import { PromotionsDetailsModal } from '/modules/shared/PromotionsDetailsModal/PromotionsDetailsModal.js';

export const Portal = () => {
	const cartIsMounted = useSelector((state) => state?.modal?.cart);
	const cartTransition = useMountTransition(cartIsMounted, 250);
	const { openModalDispatch, modals } = useOnModalChange();
	let isAuth = null;
	if (typeof window !== 'undefined') {
		isAuth = window.localStorage.getItem('auth');
	}
	useEffect(() => {
		if (isAuth === null) {
			openModalDispatch('bannerBenefit');
		}
	}, [isAuth]);
	return (
		<>
			{modals.login ? (
				<Modal>
					<LoginForm />{' '}
				</Modal>
			) : modals.register ? (
				<Modal>
					<RegisterForm />{' '}
				</Modal>
			) : modals.menu ? (
				<Modal>
					<NavMenu />{' '}
				</Modal>
			) : cartTransition ? (
				<Modal>
					{
						<ShopCart
							animation={cartIsMounted ? 'animate-cart_in' : 'animate-cart_out'}
						/>
					}
				</Modal>
			) : modals.bannerBenefit ? (
				<Modal>
					<BannerBenefit />{' '}
				</Modal>
			) : modals.productDetails ? (
				<Modal>
					<ProductDetails />{' '}
				</Modal>
			) : modals.promotionDetails ? (
				<PromotionsDetailsModal />
			) : null}
		</>
	);
};
