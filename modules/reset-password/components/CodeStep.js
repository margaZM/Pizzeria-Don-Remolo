import { Form, Formik } from "formik";
import { useRef } from "react";
import { useState } from "react";
import { useNotification } from "../../../hooks/useNotification";
import { useOnResetPassStep } from "../../../hooks/useOnResetPassStep";
import { IsResetPasswordCodeValid, requestResetPassword } from "../../../services/authService";
import { Notification } from "../../shared/Notification";
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
	const [loading, setLoading] = useState(false);
	const [reSend, setReSend] = useState({
		sending: false,
	});
	const secondCode = useRef(null);
	const thirdCode = useRef(null);
	const fourthCode = useRef(null);
	const { isOpenNotification, setIsOpenNotification, infoNotification, setInfoNotification } = useNotification();
	const { handleChangeStep, currentState } = useOnResetPassStep();
	const codePattern = /^[0-9]{1}/;

	const handleResendEmail = async () => {
		try {
			setReSend({ sending: true });
			const response = await requestResetPassword({ email: currentState.currentEmail });
			setReSend({ sending: false });
			if(response.data === "Email sent successful") {
				setInfoNotification({
					icon: 'success',
					message: 'El código ha sido reenviado con éxito.',
				});
				setIsOpenNotification(true);
			};
		} catch (error) {
			console.error(error);
		}
	};

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
					setLoading(true);
					const response = await IsResetPasswordCodeValid({
						email: currentState.currentEmail,
						code
					});
					if(response.data) {
						setLoading(false);
						handleChangeStep({ isCode: true, code });
						setInfoNotification({
							icon: 'success',
							message: 'El código ha sido verificado con éxito.',
						});
						setIsOpenNotification(true);
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
						<button className="text-primary" type="button" onClick={handleResendEmail}>Reenviar código</button>
					</span>
					{loading && <span className="text-center">Verificando código...</span>}
					{reSend.sending && <span className="text-center">Reenviando código...</span>}
					<BtnsContainer 
						btn_2_text='Verificar'
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