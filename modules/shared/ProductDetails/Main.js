import { CloseBtn } from "../CloseBtn";
import { Details } from "./components/Details";
import { SelectedProduct } from './components/SelectedProduct.js';
import { productDetailsSectionStyles } from "./styles/productDetailsStyles";

const Main = () => {
	return (
		<section className={productDetailsSectionStyles}>
			<header className="flex justify-end items-center w-full h-[6%] pr-4">
				<CloseBtn modal="productDetails" />
			</header>
			<div className="flex flex-wrap w-full min-h-[94%] overflow-y-auto">
				<SelectedProduct />
				<Details />
			</div>
		</section>
	);
};

export default Main;