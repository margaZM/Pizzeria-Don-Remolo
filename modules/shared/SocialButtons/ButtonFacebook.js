import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../../../redux/slices/auth';
import { loginWithFacebook, registerWithFacebook } from '../../../services/authService';
import { initFacebook, cleanup } from '/utils/initFacebook';
import { handleModal } from '/redux/slices/modal/modalSlice';

export const ButtonFacebook = ({
	action,
	setIsOpenNotification,
	setInfoNotification,
}) => {
	useEffect(() => {
		initFacebook();
	}, []);

	const user = {
		token: '',
	};

	const dispatch = useDispatch();

	const authWithFacebook = () => {
		FB.login(
			function (response) {
				user.token = response.authResponse.accessToken;
				if (response.authResponse) {
					testAPI();
				} else {
					setInfoNotification({
						icon: 'error',
						message: 'Ha ocurrido un error. Inténtalo más tarde.',
					});
					setIsOpenNotification(true);
				}
			},
			{ scope: 'public_profile,email' },
		);
	};

	const testAPI = () => {
		FB.api(
			'/me',
			{
				locale: 'tr_TR',
				fields: 'name, email',
			},
			async function () {
				try {
					const { data } =
						action === 'Registrarse'
							? await registerWithFacebook(user)
							: await loginWithFacebook(user);
					onSuccess(data);
				} catch (error) {
					console.log(error);
					onError(error);
				}
			},
		);
	};

	const onSuccess = (data) => {
		setInfoNotification({
			icon: 'success',
			message:
				action === 'Registrarse'
					? 'Tu cuenta se ha creado de manera exitosa.'
					: 'Bienvenido nuevamente!',
		});
		localStorage.setItem(
			'auth',
			JSON.stringify({ token: data?.token, provider: 'facebook' }),
		);
		localStorage.setItem('userName', data?.fullName);
		dispatch(
			auth({
				name: data?.fullName,
				email: data?.email,
				token: data?.token,
			}),
		);
		setTimeout(() => {
			dispatch(
				handleModal(action === 'Registrarse' ? 'register-success' : 'login-success'),
			);
		}, 2100);
		setIsOpenNotification(true);
	};

	const onError = (error) => {
		if (error.response.data.message === 'Email in use') {
			setInfoNotification({
				icon: 'error',
				message:
					'Ya existe una cuenta asociada a este correo. Por favor inicia sesión o registra una cuenta nueva.',
			});
			setIsOpenNotification(true);
			return;
		}
		if (error.response.data.message === "The user doesn't exist") {
			setInfoNotification({
				icon: 'error',
				message: 'Correo no registrado. Revisa si hay un error y vuelve a intentar.',
			});
			setIsOpenNotification(true);
			return;
		}
		setInfoNotification({
			icon: 'error',
			message: 'Ha ocurrido un error. Inténtalo más tarde.',
		});
		setIsOpenNotification(true);
	};

	return (
		<button
			className="relative button w-full max-w-[512px] bg-facebook mt-2 text-white fb-login-button"
			onClick={authWithFacebook}
			type="button"
		>
			<div className="w-max absolute">
				<Image src={require('/public/assets/iconFacebook.png')} alt="facebookIcon" />
			</div>
			<span>{action} con Facebook</span>
		</button>
	);
};
