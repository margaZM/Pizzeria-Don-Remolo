import { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { DeliverAdress } from './DeliverAdress';
import { DeliverData } from './DeliverData';
import { DeliverInstructions } from "./DeliverInstructions";
import { DeliverTime } from './DeliverTime';
import { DeliverPayMethod } from './DeliverPayMethod';
import CartProduct from '../../shared/CartProduct/Main';

export const PaymentProcessForm = () => {
	const [charactersLength, setCharactersLength] = useState("0");
	const validate = Yup.object({
		fullName: Yup.string()
		.strict()
		.required('Ingresa tu nombre y apellido por favor')
		.min(2, 'Ingresa al menos dos caracteres')
		.matches(
			/^[a-zA-ZÀ-ÿ\s]{1,256}$/,
			'Tu nombre solo puede contener letras y espacios',
		)
		.max(256, 'Tu Nombre no puede superar los 256 caracteres'),
		phoneNumber: Yup.number()
		.required('Ingresa tu número de teléfono por favor')
		.min(10, 'Ingresa un número válido'),
		montoEfectivo: Yup.string()
		.required('Debes ingresar un monto')
		.min(2, 'Ingresa al menos dos caracteres')
	});
	return (
		<Formik
			initialValues = {{
				deliverInstructions: "",
				fullName: "",
				phoneNumber: "",
				horaEntrega: "ahora",
				metodoPago: "efectivo",
				montoEfectivo: ""
			}}
			validationSchema = {validate}
			validator = {(values) => {
				console.log(values)
			}}
			validateOnChange = {(e) => {
				if(e.target.name === "deliverInstructions") {
					setCharactersLength(e.target.value.length);
				};
			}}
		>
			{({ validateOnChange, isValid, dirty }) => (
				<Form className="grid grid-rows-payment_process_layout w-full max-w-[685px] desktop_bk:gap-5" onChange={validateOnChange}>
					<div className="flex flex-col gap-5 p-3 border-b border-gray desktop_bk:rounded-lg desktop_bk:shadow-fab">
						<DeliverAdress />
						<DeliverInstructions charactersLength={charactersLength} />
					</div>
					<DeliverData />
					<DeliverTime />
					<DeliverPayMethod />
					<div className="flex flex-col border-b border-gray desktop_bk:rounded-lg desktop_bk:shadow-fab">
						<p className="font-bold p-5">Tu pedido</p>
						<CartProduct />
					</div>
					<div className="flex justify-center p-2">
						<button
							className="w-full max-w-[270px] p-2 text-white bg-primary rounded-xl disabled:bg-gray"
							type="submit"
							disabled={!(isValid && dirty)}
						>
						FINALIZAR PEDIDO | $13.00
						</button>
					</div>
				</Form>
			)}
		</Formik>
	);
};