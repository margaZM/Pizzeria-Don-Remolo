import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useState } from 'react';
import { SocialButtons } from '../../shared/SocialButtons';
import { registerUser } from '../../../services/authService';
import { auth } from '../../../redux/slices/auth';
import * as Yup from 'yup';
import { Input } from '../../shared/Input';
import { PasswordSecurityLevel } from './PasswordSecurityLevel';
import { LinksTermsAndPolicies } from './LinksTermsAndPolicies';
import { Notification } from '../../shared/Notification';
import { useDispatch } from 'react-redux';
import { ErrorMessage } from '../../shared/ErrorMessage';
import { useOnModalChange } from '../../../hooks/useOnModalChange';
import { handleModal } from '../../../redux/slices/modal/modalSlice';

export default function RegisterForm() {
	const [isOpenNotification, setIsOpenNotification] = useState(false);
	const [infoNotification, setInfoNotification] = useState({
		icon: '',
		message: '',
	});
	const [showing, setShowing] = useState(false);
	const [securityPassword, setSecurityPassword] = useState('');
	const [errorMessage, setErrorMessage] = useState('');

	const router = useRouter();
	const dispatch = useDispatch();
	const { handleWindow } = useOnModalChange();

	const NUM_PATTERN = /[0-9]/;
	const CAPITAL_PATTERN = /[A-Z]/;
	const LOWERCASE_PATTERN = /[a-z]/;
	const NON_ALPHANUMERIC_PATTERN = /[@$!%*#?&+-]/;

	const validate = Yup.object({
		name: Yup.string()
			.strict()
			.required('Ingresa tu nombre por favor')
			.min(2, 'Ingresa al menos dos caracteres')
			.matches(
				/^[a-zA-ZÀ-ÿ\s]{1,256}$/,
				'Tu nombre solo puede contener letras y espacios',
			)
			.max(256, 'Tu Nombre no puede superar los 256 caracteres'),
		email: Yup.string()
			.email('Introduce un correo electrónico válido por favor')
			.required('El correo electrónico es obligatorio')
			.matches(
				/(?!^[.+&'_-]*@.*$)(^[_\w\d+&'-]+(\.[_\w\d+&'-]*)*@[\w\d-]+(\.[\w\d-]+)*\.(([\d]{1,3})|([\w]{2,}))$)/i,
				'Introduce un correo electrónico válido por favor',
			),
		password: Yup.string()
			.required('Ingresa tu contraseña por favor')
			.min(8, 'La contraseña debe contener un mínimo de 8 caracteres')
			.matches(NUM_PATTERN, 'La contraseña debe contener al menos un número')
			.matches(CAPITAL_PATTERN, 'La contraseña debe contener al menos una mayúscula')
			.matches(LOWERCASE_PATTERN, 'La contraseña debe contener al menos una minúscula')
			.matches(
				NON_ALPHANUMERIC_PATTERN,
				'La contraseña debe contener un carácter especial',
			)
			.max(25, 'La contraseña no debe superar los 25 caracteres'),
	});

	const handleClickEye = () => {
		if (showing === false) {
			setShowing(true);
		} else {
			setShowing(false);
		}
	};

	return (
		<Formik
			initialValues={{
				name: '',
				email: '',
				password: '',
			}}
			validationSchema={validate}
			validator={() => ({})}
			onSubmit={async (values, { resetForm }) => {
				try {
					const response = await registerUser({
						fullName: values.name,
						email: values.email,
						password: values.password,
					});
					setInfoNotification({
						icon: 'success',
						message: 'Tu cuenta se ha creado de manera exitosa.',
					});
					localStorage.setItem('auth', response?.data.token);
					localStorage.setItem('userName', values.name);
					dispatch(
						auth({ name: values.name, email: values.email, token: response.data.token }),
					);
					setTimeout(() => {
						dispatch(handleModal('register-success'));
					}, 2100);
					router.push('/');
					setIsOpenNotification(true);
				} catch (error) {
					// setSubmitting(false);
					if (error.response.data.message === 'Email in use') {
						setErrorMessage(
							'Ya existe una cuenta asociada a este correo. Por favor inicia sesión o registra una cuenta nueva.',
						);
						return;
					}
					setInfoNotification({
						icon: 'error',
						message: 'Ha ocurrido un error. Inténtalo más tarde.',
					});
					setIsOpenNotification(true);
				} finally {
					resetForm({
						values: {
							name: '',
							email: '',
							password: '',
						},
					});
				}
			}}
		>
			{(formik) => (
				<Form className="w-full flex flex-col">
					<Input label="Nombre" name="name" type="text" />
					<div className="flex flex-col gap-3">
						<Input label="Correo electrónico" name="email" type="email" />
						{errorMessage && <ErrorMessage message={errorMessage} />}
					</div>
					<Input label="Contraseña" name="password" type="password" />
					<div className="flex pl-4">
						<Image
							src={require('../../../public/assets/alert-circle.svg')}
							alt="alert-circle"
						/>
						<p className="ml-2 text-xxs text-gray-dark">Debe tener mínimo 8 caracteres</p>
					</div>
					<PasswordSecurityLevel password={formik.values.password} />
					<button
						className="button-primary mt-3 disabled:opacity-50 disabled:cursor-not-allowed"
						type="submit"
						disabled={!(formik.isValid && formik.dirty)}
					>
						Registrarse
					</button>
					<LinksTermsAndPolicies />
					<SocialButtons
						action={'Registrarse'}
						setInfoNotification={setInfoNotification}
						setIsOpenNotification={setIsOpenNotification}
					/>
					<div className="text-center">
						<span>¿Ya tienes cuenta? </span>
						<span
							className="font-medium text-primary hover:font-bold cursor-pointer"
							data-modal="login"
							onClick={handleWindow}
						>
							Inicia sesión
						</span>
					</div>{' '}
					{isOpenNotification && (
						<Notification
							message={infoNotification.message}
							icon={infoNotification.icon}
							setIsOpenNotification={setIsOpenNotification}
						/>
					)}
				</Form>
			)}
		</Formik>
	);
}
