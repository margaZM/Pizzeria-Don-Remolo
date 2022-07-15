import { Form, Formik } from "formik";
import { useRef } from "react";
import { useState } from "react";
import { useOnResetPassStep } from "../../../hooks/useOnResetPassStep";
import { IsResetPasswordCodeValid } from "../../../services/authService";
import { codeStepStyles } from "../styles/reset-password-styles";
import { BtnsContainer } from "./BtnsContainer";
import { CodeInput } from "./CodeInput";
import { StepTitle } from "./StepTitle";

export const CodeStep = () => {
	const [codesValues, setCodesValues] = useState({
		first: '',
		second: '',
		third: '',
		fourth: '',
	});
	const secondCode = useRef(null);
	const thirdCode = useRef(null);
	const fourthCode = useRef(null);
	const { handleChangeStep, currentState } = useOnResetPassStep();
	const codePattern = /^[0-9]{1}/;

	return (
		<Formik
		initialValues = {{
			first: '',
			second: '',
			third: '',
			fourth: '',
		}}
			onSubmit = {async (values) => {
				let code = Object.values(codesValues).join('');
				try {
					const response = await IsResetPasswordCodeValid({
						email: currentState.currentEmail,
						code
					});
					if(response.data) {
						handleChangeStep({ isCode: true, code });
						setTimeout(() => {
							handleChangeStep('codeStep');
						}, 3000);
					};
				} catch (error) {
					console.error(error);
				}
			}}
			validateOnChange = {(e) => {
				if(codePattern.test(+e.target.value)) {
					setCodesValues({
						...codesValues,
						[e.target.name]: e.target.value,
					});
					console.log(codesValues)
					if(e.target.value.length > 0 && e.target.name === "first") {
						secondCode.current.focus();
					} else if(e.target.value.length > 0 && e.target.name === "second") {
						thirdCode.current.focus();
					} else if(e.target.value.length > 0 && e.target.name === "third") {
						fourthCode.current.focus();
					}
				} else { console.log('no number') }
			}}
		>
			{({ validateOnChange }) => (
				<Form className={`${codeStepStyles} shadow-fab`}>
					<StepTitle title='Código de verificación' />
					<p className="p-0">Introduce el código de verificación enviado al correo electrónico.</p>
					<div className="flex justify-center w-full">
						<div className="grid grid-cols-4 justify-items-center w-1/2 min-w-[340px]">
							<CodeInput  
								name="first" 
								value={codesValues.first}
								onChange={validateOnChange}
								/>
							<CodeInput 
								ref={secondCode}  
								name="second" 
								value={codesValues.second}
								onChange={validateOnChange}
								/>
							<CodeInput 
								ref={thirdCode}  
								name="third" 
								value={codesValues.third}
								onChange={validateOnChange}
								/>
							<CodeInput 
								ref={fourthCode}  
								name="fourth" 
								value={codesValues.fourth}
								onChange={validateOnChange}
							/>
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