import { ProdPrice } from "./ProdPrice";

export const ProdTitle = ({ title }) => {
	return (
		<div className="flex justify-between">
			<h4 className="w-max h-max font-bold text-[1rem] md:text-[1.2rem]">{ title || "Pizza pepperoni"}</h4>
			<ProdPrice />
		</div>
	);
};