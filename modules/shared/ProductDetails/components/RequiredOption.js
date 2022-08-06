export const RequiredOption = ({ label, name, price, type, ...props }) => {
	return (
		<div className="flex justify-between pr-2 border-b border-gray-light">
			<div className="flex items-center gap-3 h-max my-auto">
				<label className="p-0 sm:pl-5" htmlFor={label}>{ label }</label>
				{price && <p className="pt-[2px] text-[13px] text-gray-dark">{`$${price}`}</p>}
			</div>
			<input 
				className="w-[20px] h-[20px] accent-primary" 
				type="radio" 
				id={label} 
				name={name} 
				data-price={price || null} 
				data-type={type}
				{...props} 
				required />
		</div>
	);
};
