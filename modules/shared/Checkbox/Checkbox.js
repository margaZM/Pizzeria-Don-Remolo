import React, { useState } from 'react';
import Check from './components/Check';

export const Checkbox = ({ label }) => {
	const [checked, setChecked] = useState(false);

	const handleChange = () => {
		setChecked(!checked);
	};

	return (
		<div>
			<label htmlFor="checkbox" className="flex gap-2 relative pl-0">
				<input
					type="checkbox"
					id="checkbox"
					checked={checked}
					onChange={handleChange}
					className={`${
						checked ? 'border-primary bg-primary' : 'border'
					}  w-6 h-6 appearance-none rounded-md focus:ring-0`}
				/>
				<Check checked={checked} />
				{label}
			</label>
			{/* <p>Is "My Value" checked? {checked.toString()}</p> */}
		</div>
	);
};
