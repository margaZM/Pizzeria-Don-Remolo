import { RequiredOption } from "./RequiredOption";

export const PickDough = () => {
	return (
		<>
			<RequiredOption
				label="Masa normal" 
				name="dough"
				value="Masa normal"
				type="dough"
				defaultChecked
				/>
			<RequiredOption 
				label="Masa fina" 
				name="dough"
				type="dough"
				value="Masa fina"
			/>
		</>
	);
};