export const ProdAdditional = ({ additional, additionalPrice }) => {
	return (
		<>
			{additional &&
				<div className="flex justify-between">
					<p className="w-max pl-4 text-gray text-[13px] md:text-[.9rem]">{additional || null}</p>
					<div className="flex justify-between gap-3">
						<p className="flex justify-center items-center w-[56px] pl-3 text-gray text-[13px] md:text-[.9rem]">
							${additionalPrice || null}
						</p>
					</div>
				</div>
			}
		</>
	);
};