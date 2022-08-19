import Image from 'next/image';
import { useDispatch } from 'react-redux';
import { loginWithGoogle, registerWithGoogle } from '../../../services/authService';
import { auth } from '../../../redux/slices/auth';
import { handleModal } from '/redux/slices/modal/modalSlice';

export const ButtonGoogle = ({ action, setIsOpenNotification, setInfoNotification }) => {
	const dispatch = useDispatch();

	const handleCredentialResponse = async (response) => {
		try {
			const { data } =
				action === 'Registrarse'
					? await registerWithGoogle({ token: response.credential })
					: await loginWithGoogle({ token: response.credential });
			onSuccess(data);
		} catch (error) {
			console.log(error);
			onError(error);
		}
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
			JSON.stringify({ token: data?.token, provider: 'google' }),
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

	const authWithGoogle = () => {
		google.accounts.id.initialize({
			client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
			callback: handleCredentialResponse,
		});
		google.accounts.id.prompt(); // also display the One Tap dialog
	};

	return (
		<button
			className="relative button w-full max-w-[512px] border border-gray-dark mt-2 text-black"
			onClick={authWithGoogle}
			type="button"
		>
			<div className="w-max absolute">
				<Image src={require('/public/assets/iconGoogle.png')} alt="googleIcon" />
			</div>
			<span>{action} con Google</span>
		</button>
	);
};
