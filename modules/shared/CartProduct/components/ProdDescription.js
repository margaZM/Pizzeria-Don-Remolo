import { ProdAdditional } from "./ProdAdditional";
import { ProdButtons } from "./ProdButtons";
import { ProdDetails } from "./ProdDetails";
import { ProdTitle } from "./ProdTitle";

export const ProdDescription = () => {
	return (
		<section className="flex flex-col sm:pl-4">
			<ProdTitle />
			<ProdDetails />
			<ProdAdditional />
			<ProdButtons />
		</section>
	);
};