import { Form, Formik } from "formik";
import { mailStepStyles } from "../styles/reset-password-styles";
import { BtnsContainer } from "./BtnsContainer";
import { StepTitle } from "./StepTitle";

export const MailStep = () => {
	return (
		<>
			<Formik
				initialValues={{
					email: ''
				}}
			>
				{(formik) => (
					<Form className={mailStepStyles}>
						<StepTitle title='Recuperar contraseña' />
						<div>
							<label className="w-[397px] p-0 text-[16px]" htmlFor="email-recovery">
								Por favor, introduce tu correo electrónico para poder restablecer tu contraseña.
							</label>
							<input className="w-full mt-2" type="text" name='email-recovery' id='email-recovery' />
						</div>
						<BtnsContainer 
							btn_2_text='Enviar'
						/>
					</Form>
				)}
			</Formik>
		</>
	);
};