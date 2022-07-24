import { Field } from 'formik';
import { DeliverFormHeader } from './DeliverFormHeader';
export const DeliverInstructions = ({ charactersLength }) => {
	return (
		<>
			<div className="flex flex-col gap-2">
				<DeliverFormHeader title="Instrucciones de entrega:" />
				<label className="p-0" htmlFor="deliverInstructions">Escribe una información adicional que pueda ser útil para el repartidor.</label>
				<div className="h-[100px] border rounded-xl">
					<Field
						className="w-full max-w-[650px] h-[65px] border-none overflow-hidden resize-none"
						as="textarea" 
						name="deliverInstructions" 
						maxLength="50" 
						placeholder="Información..."
					/>
					<div className="flex justify-end w-full h-[30px] p-1">
						<span className="text-gray-dark">
						{charactersLength}/50
						</span>
					</div>
				</div>
			</div>
		</>
	);
};