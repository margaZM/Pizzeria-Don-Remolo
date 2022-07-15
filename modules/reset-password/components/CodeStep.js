import { Form, Formik } from "formik";
import { useRef } from "react";
import { useState } from "react";
import { codeInputStyle } from "../styles/code-input-style";
import { codeStepStyles } from "../styles/reset-password-styles";
import { BtnsContainer } from "./BtnsContainer";
import { CodeInput } from "./CodeInput";
import { StepTitle } from "./StepTitle";

export const CodeStep = () => {
	const [codesValues, setCodes] = useState({
		first: '',
		second: '',
		third: '',
		fourth: '',
	});
	const secondCode = useRef(null);
	const thirdCode = useRef(null);
	const fourthCode = useRef(null);
	const codePattern = /^[0-9]{1}/;

	return (
		<Formik
			initialValues = {{
				first: '',
				second: '',
				third: '',
				fourth: ''
			}}
			onSubmit = {(values) => {
				console.log('submiting');
			}}
			validateOnChange = {(e) => {
				if(codePattern.test(+e.target.value)) {
					setCodes({
						...codesValues,
						[e.target.name]: e.target.value,
					});
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
								className={codeInputStyle} 
								type="text" name="first" 
								value={codesValues.first}
								autoFocus
								onChange={validateOnChange} 
							/>
							<CodeInput 
								ref={secondCode} 
								className={codeInputStyle} 
								type="text" name="second" 
								value={codesValues.second} 
								onChange={validateOnChange} 
							/>
							<CodeInput 
								ref={thirdCode} 
								className={codeInputStyle} 
								type="text" 
								name="third" 
								value={codesValues.third}
								onChange={validateOnChange} />
							<CodeInput 
								ref={fourthCode} 
								className={codeInputStyle} 
								type="text" 
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