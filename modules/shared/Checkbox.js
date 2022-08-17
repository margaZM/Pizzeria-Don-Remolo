import React, { useState } from 'react';

export const Checkbox = ({ label, checked, handleChecked }) => {
	return (
		<div>
			<label htmlFor="checkbox" className="flex gap-2 items-center relative pl-0">
				<input
					type="checkbox"
					id="checkbox"
					checked={checked}
					onChange={handleChecked}
					className="w-[18px] h-[18px] accent-primary"
				/>
				{label}
			</label>
		</div>
	);
};
