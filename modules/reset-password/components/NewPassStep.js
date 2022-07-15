import { Form, Formik } from "formik";
import * as Yup from 'yup';
import Image from "next/image";
import { PasswordSecurityLevel } from "../../register/components/PasswordSecurityLevel";
import { resetPasswordStepStyles } from "../styles/reset-password-styles";
import { StepTitle } from "./StepTitle";
import { BtnsContainer } from "./BtnsContainer";
import { Input } from "../../shared/Input";
import { resetPassword } from "../../../services/authService";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { handleModal } from "../../../redux/slices/modal/modalSlice";
import { Notification } from "../../shared/Notification";
import { useOnResetPassStep } from "../../../hooks/useOnResetPassStep";

export const NewPassStep = () => {
	const [noMatchPassword, setNoMatchPassword] = useState(false);
	const [reqState, setReqState] = useState({
		loading: false,
	});
	const [isOpenNotification, setIsOpenNotification] = useState(false);
	const [infoNotification, setInfoNotification] = useState({
		icon: '',
		message: '',
	});
	const { currentState, handleChangeStep } = useOnResetPassStep();
	const dispatch = useDispatch();
	const NUM_PATTERN = /[0-9]/;
	const CAPITAL_PATTERN = /[A-Z]/;
	const LOWERCASE_PATTERN = /[a-z]/;
	const NON_ALPHANUMERIC_PATTERN = /[@$!%*#?&+-]/;
	const validate = Yup.object({
		newPassword: Yup.string()
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
		confirmNewPassword: Yup.string()
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
	return (
		<Formik
			initialValues={{
				newPassword: '',
				confirmNewPassword: ''
			}}
			validationSchema={validate}
			onSubmit = {async (values, { resetForm }) => {
				if(values.newPassword !== values.confirmNewPassword) return setNoMatchPassword(true);
				setReqState({ loading: true, finish: false })
				const response = await resetPassword({
					email: currentState.currentEmail,
					code: currentState.currentCode,
					password: values.confirmNewPassword,
				});
				if(response.data === "Password reset successful") {
					setReqState({ loading: false, finish: true });
					resetForm();
					setInfoNotification({
						icon: 'success',
						message: 'Contraseña restablecida con éxito.',
					});
					setIsOpenNotification(true);
					setTimeout(() => {
						dispatch(handleModal("forgot-password"));
						handleChangeStep("resetSuccessful")
					}, 2000);
				}
			}}
		>
			{(formik) => (
				<Form className={`${resetPasswordStepStyles} shadow-fab`}>
					<StepTitle title="Restablecer contraseña" />
					<div className="flex w-full">
						<div className="flex flex-col gap-1 w-1/2 min-w-[340px]">
							<Input label="Nueva contraseña" name="newPassword" type="password" />
							<div className="flex pl-4">
								<Image
									src={require('../../../public/assets/alert-circle.svg')}
									alt="alert-circle"
								/>
								<p className="ml-2 text-xxs text-gray-dark">Debe tener mínimo 8 caracteres</p>
							</div>
							<PasswordSecurityLevel password={formik.values.newPassword} />
							<Input label="Repetir nueva contraseña" name="confirmNewPassword" type="password" />
						</div>
					</div>
					{reqState.loading && <span className="text-center">Solicitando nueva contraseña...</span>}
					{noMatchPassword && <span className="text-[red] text-center">Las contraseñas deben ser iguales</span>}
					<BtnsContainer 
						btn_2_text='Restablecer contraseña'
						step_3={true}
					/>
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
};