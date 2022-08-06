export const ProdTitle = ({ title, productPrice, quantity }) => {
	return (
		<div className="flex justify-between">
			<h4 className="w-max h-max font-bold text-[1rem] md:text-[1.2rem]">{ title || "Pizza pepperoni"}</h4>
			<div className="flex justify-between gap-3">
				<p className="flex justify-center items-center text-[1rem] font-bold md:text-[1.1rem]">${+productPrice * +quantity || "13.00"}</p>
			</div>
		</div>
	);
};