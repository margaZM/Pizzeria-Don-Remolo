import { Form, Formik } from "formik";
import * as Yup from 'yup';
import Image from "next/image";
import { PasswordSecurityLevel } from "../../register/components/PasswordSecurityLevel";
import { resetPasswordStepStyles } from "../styles/reset-password-styles";
import { StepTitle } from "./StepTitle";
import { BtnsContainer } from "./BtnsContainer";
import { Input } from "../../shared/Input";

export const NewPassStep = () => {
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
					<BtnsContainer 
						btn_2_text='Restablecer contraseña'
						step_3={true}
					/>
				</Form>
			)}
		</Formik>
	);
};