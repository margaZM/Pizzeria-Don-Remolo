export const ProdDetails = ({ product }) => {
	const { size, dough, detailPromo, detailPopulars } = product;

	const detailsPromo = detailPromo?.map((item, index) => (
		<p
			key={index}
			className="w-max text-gray-dark  text-[13px] md:text-[.9rem] truncate max-w-[434px]"
		>
			{item.quantity} - {item.name}
		</p>
	));
	const detailDrinks = detailPopulars?.drinks?.map((item, index) => (
		<span
			key={index}
			className=" text-gray-dark  text-[13px] md:text-[.9rem] font-medium"
		>
			{item}
			{index === detailPopulars?.drinks.length - 1 ? '.' : ', '}
		</span>
	));

	const detailIngredients = detailPopulars?.ingredients?.map((item, index) => (
		<span
			key={index}
			className=" text-gray-dark  text-[13px] md:text-[.9rem] font-medium"
		>
			{item}
			{index === detailPopulars?.ingredients?.length - 1 ? '.' : ', '}
		</span>
	));

	return (
		<>
			<p className="w-max text-gray-dark text-[13px] md:text-[.9rem]">{size}</p>
			<p className="w-max text-gray-dark  text-[13px] md:text-[.9rem]">{dough}</p>

			<div>{detailsPromo} </div>

			{detailPopulars && (
				<div>
					<p className="w-max text-gray-dark text-[13px] md:text-[.9rem]">
						{detailPopulars?.size}
					</p>
					<p className="w-max text-gray-dark  text-[13px] md:text-[.9rem]">
						{detailPopulars?.dough}
					</p>
					{detailDrinks?.length > 0 && (
						<p className="text-gray-dark  text-[13px] md:text-[.9rem] font-bold">
							Adicional: {detailDrinks}
						</p>
					)}
					{detailIngredients?.length > 0 && (
						<p className="text-gray-dark  text-[13px] md:text-[.9rem] font-bold">
							Ingredientes: {detailIngredients}
						</p>
					)}
				</div>
			)}
		</>
	);
};
