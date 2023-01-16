export const ProdAdditional = ({ additional, additionalPrice, quantity }) => {
	return (
		<>
			{additional && (
				<div className="flex justify-between">
					<p className="w-max pl-4 text-gray text-[13px] md:text-[.9rem]">
						{additional && `${quantity} x ${additional}`}
					</p>
					<div className="flex justify-between gap-3">
						<p className="flex justify-center items-center w-[56px] pl-3 text-gray text-[13px] md:text-[.9rem]">
							$ {''} {+additionalPrice * +quantity || null}
						</p>
					</div>
				</div>
			)}
		</>
	);
};
