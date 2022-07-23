import Image from "next/image";

export const ProdPrice = ({ price }) => {
	return (
		<div className="flex justify-between gap-3">
			<p className="flex justify-center items-center text-[1rem] font-bold md:text-[1.1rem]">{price || "$13.00"}</p>
		</div>
	);
};