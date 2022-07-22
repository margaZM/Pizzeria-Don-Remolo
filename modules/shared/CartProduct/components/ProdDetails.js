export const ProdDetails = ({ size, type }) => {
	return (
		<>
			<p className="w-max text-gray-dark text-[13px] md:text-[.9rem]">{ size || "Mediana" }</p>
			<p className="w-max text-gray-dark  text-[13px] md:text-[.9rem]">{ type || "Masa normal" }</p>
		</>
	);
};