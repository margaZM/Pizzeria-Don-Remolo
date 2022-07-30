import { useState } from "react";
import { RequiredOption } from "./RequiredOption";

export const PickSize = () => {
	const [size, setSize] = useState("");
	const handleSize = (e) => setSize(e.target.id);
	return (
		<>
			<RequiredOption 
				label="Individual" 
				name="size"
				value={size}
				price="5.00"
				onChange={handleSize}
				/>
			<RequiredOption 
				label="Mediana" 
				name="size"
				value={size}
				price="12.00"
				onChange={handleSize}
				defaultChecked
				/>
			<RequiredOption 
				label="Familiar" 
				name="size"
				value={size}
				price="17.00"
				onChange={handleSize}
			/>
		</>
	);
};