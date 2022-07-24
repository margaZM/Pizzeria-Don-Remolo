import { Field } from "formik";
import { useState } from "react";
import { DeliverFormHeader } from "./DeliverFormHeader";

export const DeliverTime = () => {
	const [isLater, setIsLater] = useState(false);
	const handleDeliver = () => setIsLater(!isLater)
	return (
		<div className="flex flex-col gap-3 p-3 border-b border-gray desktop_bk:rounded-lg desktop_bk:shadow-fab">
			<fieldset className="flex flex-col gap-2">
				<DeliverFormHeader title="Elige la hora de entrega" required={true} />
				<p className="text-[.9rem]">
					<span>Si eliges </span>
					<span className="font-bold">ahora, </span>
					<span>el tiempo estimado de entrega es de </span>
					<span className="text-primary">45 minutos</span>
				</p>
				<p className="text-[.9rem]">
					<span>Si eliges </span>
					<span className="font-bold">después, </span>
					<span>los horarios que aparecen en rojo son por la alta demanda, por lo que la entrega puede tomar +15 minutos máximo</span>
				</p>
				<div role="group" className="flex gap-5 items-center">
					<label className="flex gap-1 w-max h-max pl-1 pt-1 text-[.9rem]" htmlFor="ahora">
						<Field
							className="w-[16px] h-[16px] accent-primary"
							type="radio"
							name="horaEntrega"
							id="ahora"
							value="ahora"
							onClick={handleDeliver}
							/>
							Ahora
					</label>
					<label className="flex gap-1 w-max h-max pl-1 pt-1 text-[.9rem]" htmlFor="despues">
						<Field
							className="w-[16px] h-[16px] accent-primary"
							type="radio"
							name="horaEntrega"
							id="despues"
							value="despues"
							onClick={handleDeliver}
						/>
						Después
					</label>
					<Field className="w-[90px] p-1" as="select" id="deliverTime" disabled={!isLater}>
						<option value="15:00">15:00</option>
					</Field>
				</div>
			</fieldset>
		</div>
	);
};