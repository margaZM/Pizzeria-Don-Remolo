import { ErrorMessage, Field } from "formik";
import { DeliverFormHeader } from "./DeliverFormHeader";

export const DeliverPayMethod = () => {
	return (
		<div className="flex flex-col gap-3 p-3 border-b border-gray desktop_bk:rounded-lg desktop_bk:shadow-fab">
			<fieldset className="flex flex-col gap-2">
				<DeliverFormHeader title="Elige un método de pago" required={true} />
				<div role="group" className="flex gap-5 items-center">
					<label className="flex gap-1 w-max h-max pl-1 pt-1 text-[.9rem]" htmlFor="efectivo">
						<Field
							className="w-[16px] h-[16px] accent-primary"
							type="radio"
							name="metodoPago"
							id="efectivo"
							value="efectivo"
							/>
							Efectivo
					</label>
					<label className="flex gap-1 w-max h-max pl-1 pt-1 text-[.9rem]" htmlFor="tarjeta">
						<Field
							className="w-[16px] h-[16px] accent-primary"
							type="radio"
							name="metodoPago"
							id="tarjeta"
							value="tarjeta"
						/>
						Tarjeta de crédito
					</label>
				</div>
				<fieldset>
					<label className="p-0 text-[.9rem]" htmlFor="montoEfectivo">Por favor, indica el valor total con el que vas a pagar en efectivo.</label>
					<Field
						className="w-full max-w-[438px] h-[40px]"
						type="text"
						name="montoEfectivo"
						id="montoEfectivo"
						placeholder="Valor"
					/>
					<div className="text-red text-[.9rem]">
						<ErrorMessage className="text-[.9rem] text-red" name="montoEfectivo" />
					</div>
				</fieldset>
			</fieldset>
		</div>
	);
};