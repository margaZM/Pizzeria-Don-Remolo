import React, { useContext, useEffect, useState } from 'react';
import { Input } from '/modules/shared/Input';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Checkbox } from '/modules/shared/Checkbox';
import { Switch } from '../../shared/Switch/Switch';
import { useSwitch } from '/hooks/useSwitch';
import { useRouter } from 'next/router';
import GoogleMap from './GoogleMap';

export const FormAddress = () => {
	const router = useRouter();
	const { orderType, handleOrder, setOrderType } = useSwitch({});

	useEffect(() => {
		const changeOrderType = () => {
			const queryType = router.query.type && JSON.parse(router.query.type);
			queryType && setOrderType(queryType);
		};
		changeOrderType();
	}, [router.query.type, setOrderType]);

	const [checked, setChecked] = useState(false);

	const handleChecked = () => {
		setChecked(!checked);
	};

	const validate = Yup.object({
		place: Yup.string()
			.strict()
			.required('Ingresa tu lugar de entrega por favor')
			.min(2, 'Ingresa tu lugar de entrega por favor')
			.max(256, 'Tu dirección no puede superar los 256 caracteres'),
	});

	return (
		<div className="grid place-items-center gap-4 md:block">
			<Switch handleOrder={handleOrder} orderType={orderType} className="md:ml-0" />
			<GoogleMap type={orderType} />
			<p className="text-center mt-4 font-semibold">
				El <span className="text-primary">PIN</span> debe ser colocado donde se va a
				entregar el pedido
			</p>
			{orderType.home && (
				<Formik
					initialValues={{
						place: '',
						mainStreet: '',
						sideStreet: '',
						postalCode: '',
					}}
					validationSchema={validate}
					validator={() => ({})}
					onSubmit={(values, { resetForm }) => {
						console.log(values);
						// handleAddress(values);
						// console.log(address);
						router.push('/');
						resetForm({
							values: {
								place: '',
								mainStreet: '',
								sideStreet: '',
								postalCode: '',
							},
						});
					}}
				>
					{(formik) => (
						<Form className="flex flex-col gap-4 md:w-[50%] mt-8">
							<div className="flex justify-between">
								<h4 className="uppercase font-semibold">Agregar dirección de envío</h4>
								<span className="text-primary text-xxs">Requerido</span>
							</div>
							<Input
								label="Lugar de entrega"
								placeholder="Casa, departamento, suite, piso, número, etc"
								name="place"
								type="text"
								width="max-w-full"
							/>
							<Input
								label="Calle principal"
								name="mainStreet"
								type="text"
								placeholder="Nombre de la calle"
								width="max-w-full"
							/>
							<Input
								label="Calle secundaria"
								name="sideStreet"
								type="text"
								placeholder="Nombre de la calle"
								width="max-w-full"
							/>
							<Input
								label="Código postal"
								name="postalCode"
								type="text"
								placeholder="Código"
								width="max-w-full"
							/>
							<Checkbox
								label="Marcar como dirección preferida"
								handleChecked={handleChecked}
								checked={checked}
							/>
							<div className="w-full md:w-56">
								<button
									className="button-primary mt-3 disabled:bg-gray disabled:cursor-not-allowed"
									type="submit"
									disabled={!(formik.isValid && formik.dirty)}
								>
									Usar esta dirección
								</button>
							</div>
						</Form>
					)}
				</Formik>
			)}
		</div>
	);
};
