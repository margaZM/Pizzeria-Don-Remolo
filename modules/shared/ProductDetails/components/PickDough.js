import { useState } from "react";
import { RequiredOption } from "./RequiredOption";

export const PickDough = () => {
	const [dough, setDough] = useState("Masa normal");
	const handleDough = (e) => setDough(e.target.id);
	return (
		<>
			<RequiredOption
				label="Masa normal" 
				name="dough"
				defaultChecked
				onChange={handleDough}
			/>
			<RequiredOption 
				label="Masa fina" 
				name="dough"
				onChange={handleDough}
			/>
		</>
	);
};