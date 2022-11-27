import { useDispatch, useSelector } from 'react-redux';
import { detectUser, selectUser } from '../../../redux/slices/auth';
import { openModal } from '../../../redux/slices/modal/modalSlice';
import { logout } from '../../../redux/slices/auth/index';
import {
	defaultButtonStyle,
	loginButtonStyle,
	registerButtonStyle,
} from '../styles/buttons_styles';
import { useEffect } from 'react';
import { cleanup } from '/utils/initFacebook';
import { useDetectWidth } from '../../../hooks/useDetectWidth';

export const NavBtnsContainer = ({ mobileMenu }) => {
	const { isDesktop } = useDetectWidth();
	const isUser = useSelector(selectUser);
	const dispatch = useDispatch();
	let logged;
	if (typeof window !== 'undefined') {
		logged = JSON.parse(window.localStorage.getItem('auth'));
	}
	const handleLoginModal = (e) => dispatch(openModal(e.target.dataset.modal));
	const handleRegisterModal = (e) => dispatch(openModal(e.target.dataset.modal));
	const handleLogout = () => {
		if (logged.provider === 'google') {
			google.accounts.id.disableAutoSelect();
		} else {
			facebookLogout();
		}
		dispatch(logout());
	};
	useEffect(() => {
		dispatch(detectUser());
	}, [dispatch]);
	function facebookLogout() {
		FB.getLoginStatus(function (response) {
			if (response.status === 'connected') {
				FB.logout(function (response) {
					cleanup();
				});
			}
		});
	}
	const splitName = (name = '') => {
		return name.split(' ').slice(0, 2).join(' ');
	};
	return (
		<>
			<div
				className={`flex flex-col ${
					isDesktop ? 'justify-center items-center' : ''
				} w-full max-w-[300px] gap-2 desktop_bk:flex-row`}
			>
				{!isUser?.token ? (
					<>
						<button
							className={`${
								mobileMenu ? 'w-full' : 'w-32'
							} ${defaultButtonStyle} ${loginButtonStyle}`}
							type="button"
							data-modal="login"
							onClick={handleLoginModal}
						>
							Ingresar
						</button>
						<button
							className={`${
								mobileMenu ? 'w-full' : 'w-32'
							} ${defaultButtonStyle} ${registerButtonStyle}`}
							type="button"
							data-modal="register"
							onClick={handleRegisterModal}
						>
							Registrarse
						</button>
					</>
				) : (
					<>
						<p> {isUser && splitName(isUser.name)} </p>
						<button
							className={`${defaultButtonStyle} ${registerButtonStyle}`}
							type="button"
							data-modal="register"
							onClick={handleLogout}
						>
							Cerrar sesión
						</button>
					</>
				)}
			</div>
		</>
	);
};
