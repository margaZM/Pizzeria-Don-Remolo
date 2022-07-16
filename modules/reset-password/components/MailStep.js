import { useState } from "react";
import { Form, Formik } from "formik";
import * as Yup from 'yup';
import { checkingEmail, requestResetPassword } from "../../../services/resetPasswordService";
import { Input } from "../../shared/Input";
import { mailStepStyles } from "../styles/reset-password-styles";
import { BtnsContainer } from "./BtnsContainer";
import { StepTitle } from "./StepTitle";
import { useOnResetPassStep } from "../../../hooks/useOnResetPassStep";

export const MailStep = () => {
	const [isSent, setIsSent] = useState(null);
	const [isEmail, setIsEmail] = useState(null);
	const { handleChangeStep } = useOnResetPassStep();
	const validate = Yup.object({
		email: Yup.string()
			.email('Introduce un correo electrónico válido por favor')
			.matches(
				/(?!^[.+&'_-]*@.*$)(^[_\w\d+&'-]+(\.[_\w\d+&'-]*)*@[\w\d-]+(\.[\w\d-]+)*\.(([\d]{1,3})|([\w]{2,}))$)/i,
				'Introduce un correo electrónico válido por favor',
			)
			.required('El correo electrónico es obligatorio')
	});
	return (
		<Formik
			initialValues={{
				email: ''
			}}
			validationSchema={validate}
			onSubmit={async (values, { resetForm, setSubmitting }) => {
				try {
					const checkEmail = await checkingEmail(values);
					if(!checkEmail.data) {
						setIsEmail('No existe una cuenta asociada a este correo.');
						return setTimeout(() => {
							setIsEmail(null);
						}, 3000);
					};
					setIsSent('sending');
					const response = await requestResetPassword(values);
					if(response.statusText === 'OK' && response.data === 'Email sent successful') {
						setIsSent('sent');
						handleChangeStep({ isEmail: true, email: values.email });
						setTimeout(() => {
							handleChangeStep('mailStep');
						}, 3000);
					};
				} catch (error) {
					console.error(error);
				}
				finally {
					setSubmitting(false);
					resetForm();
				};
			}}
		>
			{() => (
				<Form className={`${mailStepStyles} shadow-fab`}>
					<StepTitle title='Recuperar contraseña' />
					<Input 
						label="Por favor, introduce tu correo electrónico para poder restablecer tu contraseña."
						name="email"
						type='email'
					/>
					{isEmail !== null ? <span className="text-[red] text-center">{ isEmail }</span> : null}
					{
						isSent === 'sent'
						? <span className="text-[green] text-center">Se ha enviado el código a tu correo electrónico.</span> 
						: isSent === 'sending' ? <span className="text-center">Enviando código...</span>
						: null
					}
					<BtnsContainer 
						btn_2_text='Enviar'
					/>
				</Form>
			)}
		</Formik>
	);
};