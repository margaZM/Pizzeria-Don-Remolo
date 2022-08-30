import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const OptionalOption = ({ label, price, ...props }) => {
	const [check, setCheck] = useState(false);
	const rawIngredients = useSelector(state => state?.cart?.cart?.selectedEditItem?.rawIngredients);
	const rawDrinks = useSelector(state => state?.cart?.cart?.selectedEditItem?.rawDrinks);
	const handleCheck = (e) => {
		if(rawIngredients?.includes(e.target.name) || rawDrinks?.includes(e.target.name)) return setCheck(!check);
		setCheck(!check);
	};
	useEffect(() => {
		if(rawIngredients?.includes(label) || rawDrinks?.includes(label)) return setCheck(!check);
	}, []);
	return (
		<div className="flex justify-between pr-2 border-b border-gray-light">
			<div className="flex items-center gap-3 w-max h-max my-auto">
				<label className="p-0 sm:pl-5" htmlFor={label.toLowerCase()}>{ label }</label>
				{price && <p className="pt-[3px] text-gray-dark text-[13px]">{`$${price}`}</p>}
			</div>
			<input 
				className="w-[18px] h-[18px] accent-primary" 
				type="checkbox" 
				id={label.toLowerCase()} 
				name={label} 
				data-price={price}
				onChange={handleCheck} 
				checked={check}
				{...props}
			/>
		</div>
	);
};