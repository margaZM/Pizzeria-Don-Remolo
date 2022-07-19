import { Formik, Form } from 'formik';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { SocialButtons } from '../../shared/SocialButtons';
import { Input } from '../../shared/Input';
import * as Yup from 'yup';
import { loginUser } from '../../../services/authService';
import { auth } from '../../../redux/slices/auth';
import { useDispatch } from 'react-redux';
import { Notification } from '../../shared/Notification';
import { ErrorMessage } from '../../shared/ErrorMessage';
import { useOnModalChange } from '../../../hooks/useOnModalChange';
import { handleModal } from '../../../redux/slices/modal/modalSlice';

export default function LoginForm() {
	const [isOpenNotification, setIsOpenNotification] = useState(false);
	const [infoNotification, setInfoNotification] = useState({
		icon: '',
		message: '',
	});
	const [errorMessage, setErrorMessage] = useState('');
	const dispatch = useDispatch();
	const router = useRouter();
	const { handleWindow } = useOnModalChange();

	const validate = Yup.object({
		email: Yup.string()
			.email('Introduce un correo electrónico válido por favor')
			.matches(
				/(?!^[.+&'_-]*@.*$)(^[_\w\d+&'-]+(\.[_\w\d+&'-]*)*@[\w\d-]+(\.[\w\d-]+)*\.(([\d]{1,3})|([\w]{2,}))$)/i,
				'Introduce un correo electrónico válido por favor',
			)
			.required(() => {
				if (errorMessage !== '') {
					setErrorMessage('');
					return 'El correo electrónico es obligatorio.';
				} else return 'El correo electrónico es obligatorio.';
			}),
		password: Yup.string().required('Ingresa tu contraseña por favor'),
	});

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={validate}
			validator={() => ({})}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				try {
					const response = await loginUser(values);
					localStorage.setItem('auth', response?.data.token);
					localStorage.setItem('userName', response?.data.name);
					dispatch(auth({ ...response.data }));
					setTimeout(() => {
						dispatch(handleModal('login-success'));
					}, 2100);
					setInfoNotification({
						icon: 'success',
						message: 'Bienvenido nuevamente!',
					});
					setErrorMessage('');
					router.push('/');
					setIsOpenNotification(true);
				} catch (error) {
					setSubmitting(false);
					if (error.response.data.message === "The user doesn't exist") {
						resetForm({
							values: {
								email: '',
								password: '',
							},
						});
						setErrorMessage(
							'Correo no registrado. Revisa si hay un error y vuelve a intentar.',
						);
						return;
					} else {
						setErrorMessage(
							'Correo o contraseña incorrectos. Revisa si hay un error y vuelve a intentar.',
						);
						return;
					}
				} finally {
					resetForm({
						values: {
							email: '',
							password: '',
						},
					});
				}
			}}
		>
			{(formik) => (
				<Form className="flex flex-col w-full">
					<div className="flex flex-col gap-4">
						<Input label="Correo electrónico" name="email" type="email" />
						{errorMessage && <ErrorMessage message={errorMessage} />}
					</div>
					<Input label="Contraseña" name="password" type="password" />
					<button
						className="button-primary w-full max-w-[512px] mt-3 disabled:opacity-50 disabled:cursor-not-allowed"
						type="submit"
						iserror={errorMessage}
						disabled={!(formik.isValid && formik.dirty)}
					>
						Iniciar Sesión
					</button>
					<SocialButtons
						action={'Iniciar sesión'}
						setInfoNotification={setInfoNotification}
						setIsOpenNotification={setIsOpenNotification}
					/>
					<div className="w-full max-w-[512px] text-center">
						<span>¿Aún no tienes una cuenta?</span> {''}
						<span
							className="font-medium text-primary hover:font-bold cursor-pointer"
							data-modal="register"
							onClick={handleWindow}
						>
							Regístrate
						</span>
					</div>
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
