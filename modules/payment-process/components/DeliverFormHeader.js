export const DeliverFormHeader = ({ required, title }) => {
	return (
		<span className="flex justify-between">
			<h6 className="font-bold">{ title }</h6>
			{
			required
			? <p className="text-primary text-[.9rem] font-bold">Requerido</p>
			: <p className="text-gray-dark">Opcional</p>
			}
		</span>
	);
};