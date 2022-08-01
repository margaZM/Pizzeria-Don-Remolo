import { useSelectProduct } from "../../../hooks/useSelectProduct";
import { CloseBtn } from "../CloseBtn";
import { Details } from "./components/Details";
import { SelectedProduct } from './components/SelectedProduct.js';
import { productDetailsSectionStyles } from "./styles/productDetailsStyles";

const Main = () => {
	const { currentState } = useSelectProduct();
	return (
		<section className={productDetailsSectionStyles}>
			<header className="w-full flex justify-end items-center w-full h-[6%] pr-4">
				<CloseBtn modal="productDetails" />
			</header>
			<div className="flex flex-wrap w-full min-h-[94%] overflow-y-auto">
				<SelectedProduct
					title={currentState?.selectedProduct?.title}
					description={currentState?.selectedProduct?.description}
					price={"$" + currentState?.selectedProduct?.promotionalPrice}
					img={currentState?.selectedProduct?.picture}
				/>
				<Details />
			</div>
		</section>
	);
};

export default Main;