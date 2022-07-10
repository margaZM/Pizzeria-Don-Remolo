import { Form, Formik } from "formik";
import { inputStyle } from "../styles/input-style";
import { codeStepStyles } from "../styles/reset-password-styles";
import { BtnsContainer } from "./BtnsContainer";
import { StepTitle } from "./StepTitle";

export const CodeStep = () => {
	return (
		<Formik
			initialValues={{
				first: '',
				second: '',
				third: '',
				fourth: ''
			}}
		>
			{(formik) => (
				<Form className={`${codeStepStyles} shadow-fab`}>
					<StepTitle title='Código de verificación' />
					<p className="p-0">Introduce el código de verificación enviado al correo electrónico.</p>
					<div className="flex justify-center w-full">
						<div className="grid grid-cols-4 justify-items-center w-1/2 min-w-[340px]">
							<input className={inputStyle} type="number" id="first" name="first" />
							<input className={inputStyle} type="number" id="second" name="second" />
							<input className={inputStyle} type="number" id="third" name="third" />
							<input className={inputStyle} type="number" id="fourth" name="fourth" />
						</div>
					</div>
					<span className="flex justify-center gap-1">
						¿No te llegó el código?
						<button className="text-primary" type="button">Reenviar código</button>
					</span>
					<BtnsContainer 
						btn_2_text='Verificar'
					/>
				</Form>
			)}
		</Formik>
	);
};