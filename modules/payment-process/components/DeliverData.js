import Image from "next/image";
import { ErrorMessage, Field } from "formik";
import { DeliverFormHeader } from "./DeliverFormHeader";

export const DeliverData = () => {
	return (
		<div className="flex flex-col gap-3 p-3 border-b border-gray desktop_bk:rounded-lg desktop_bk:shadow-fab">
			<DeliverFormHeader title="Datos del contacto" required={true} />
			<fieldset>
				<label className="p-0 text-[.8rem] font-bold" htmlFor="fullName">Nombres y apellido de la persona que recibe el pedido.</label>
				<Field
					className="w-full h-[50px]"
					type="text"
					name="fullName"
					id="fullName"
					placeholder="Nombres y apellido"
				/>
				<div className="text-red text-[.9rem]">
					<ErrorMessage className="text-[.9rem] text-red" name="fullName" />
				</div>
			</fieldset>
			<fieldset>
				<div className="flex justify-between" >
					<label className="p-0 text-[.8rem] font-bold" htmlFor="phoneNumber">Número de teléfono</label>
					<p className="flex items-center text-[.7rem] text-blue font-bold">
						<span>¿Por qué?</span>
						<Image
							className="rotate-[-90deg]"
							src={require('../../../public/assets/icons/arrow-left.svg')}
							alt="arrow-down"
						/>
					</p>
				</div>
				<Field
					className="w-full h-[50px]"
					type="number"
					name="phoneNumber"
					id="phoneNumber"
					placeholder="Número de teléfono"
				/>
				<div className="text-red text-[.9rem]">
					<ErrorMessage className="text-[.9rem] text-red" name="phoneNumber" />
				</div>
			</fieldset>
		</div>
	);
};