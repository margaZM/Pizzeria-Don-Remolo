export const OptionalOption = ({ label, price, ...props }) => {
	return (
		<div className="flex justify-between pr-2 border-b border-gray-light">
			<div className="flex items-center gap-3 w-max h-max my-auto">
				<label className="p-0" htmlFor={label.toLowerCase()}>{ label }</label>
				{price && <p className="pt-[3px] text-gray-dark text-[13px]">{`$${price}`}</p>}
			</div>
			<input 
				className="w-[18px] h-[18px] accent-primary" 
				type="checkbox" 
				id={label.toLowerCase()} 
				name={label} 
				data-price={price} 
				{...props} 
			/>
		</div>
	);
};