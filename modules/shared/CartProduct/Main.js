import { ProdDescription } from "./components/ProdDescription";
import { ProdImage } from "./components/ProdImage";

const Main = () => {
	return (
		<article className="grid grid-cols-product_cart_mobile h-max h-[200px] p-3 sm:p-5 sm:grid-cols-product_cart_desktop">
			<ProdImage />
			<ProdDescription />
		</article>
	);
};

export default Main;