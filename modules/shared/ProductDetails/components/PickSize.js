import { RequiredOption } from "./RequiredOption";

export const PickSize = () => {
	return (
		<>
			<RequiredOption 
				label="Individual" 
				name="size"
				value="Individual"
				price="5.00"
				type="sizes"
			/>
			<RequiredOption 
				label="Mediana" 
				name="size"
				value="Mediana"
				price="12.00"
				type="sizes"
			/>
			<RequiredOption 
				label="Familiar" 
				name="size"
				value="Familiar"
				price="17.00"
				type="sizes"
			/>
		</>
	);
};