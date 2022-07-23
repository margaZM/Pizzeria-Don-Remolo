import { ProdAdditionalPrice } from "./ProdAdditionalPrice";

export const ProdAdditional = ({ additional }) => {
	return (
		<div className="flex justify-between">
			<p className="w-max pl-4 text-gray text-[13px] md:text-[.9rem]">{additional || "1 x Coca cola 250ml"}</p>
			<ProdAdditionalPrice />
		</div>
	);
};