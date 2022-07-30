import Image from 'next/image';
import { useState } from 'react';

export const ProductCounter = () => {
	const [counter, setCounter] = useState(1);
	const handleCounter = (e) => {
		const action = e.target.dataset.action;
		if(action === "increase") { return setCounter(counter + 1) }
		else if(action === "decrease" && counter > 0) { return setCounter(counter - 1) }
	};
	return (
		<div className="flex items-end gap-5">
			<Image
				className={`${counter > 0 ? "cursor-pointer hover:translate-x-[-1px] active:translate-x-px" : ""}`}
				src={require('../../public/assets/icons/minus-btn.svg')}
				alt="minus-btn"
				data-action="decrease"
				onClick={handleCounter}
				/>
			<p className="text-[1.1rem] font-bold">{counter}</p>
			<Image
				className="cursor-pointer hover:translate-x-[1px] active:translate-x-[-1px]"
				src={require('../../public/assets/icons/plus-btn.svg')}
				alt="plus-btn"
				data-action="increase"
				onClick={handleCounter}
			/>
		</div>
	);
};