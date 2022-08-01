import { ProdAdditional } from "./components/ProdAdditional";
import { ProdButtons } from "./components/ProdButtons";
import { ProdDetails } from "./components/ProdDetails";
import { ProdTitle } from "./components/ProdTitle";

const Main = (props) => {
	return (
		<article className="grid grid-cols-product_cart_mobile h-max h-[200px] p-3 sm:p-5 sm:grid-cols-product_cart_desktop">
			<section className="flex justify-center w-full h-full">
				<div className="w-[74px] h-[74px] sm:w-full sm:h-full rounded-xl">
					<img 
						className="w-full h-full"
						src={props.img}
						alt="imagen"
					/>
				</div>
			</section>
			<section className="description-section flex flex-col sm:pl-4">
				<ProdTitle title={props.title} productPrice={props.productPrice} />
				<ProdDetails size={props.size} dough={props.dough} />
				{props.additional.map(additional => (
					<ProdAdditional key={props.additional.length + Math.random()} additional={additional.drink || additional.ingredient} additionalPrice={additional.price} />
				))}
				<article className="flex flex-col sm:pl-4">
					<ProdButtons />
				</article>
			</section>
		</article>
	);
};

export default Main;