import { useSelector } from "react-redux";
import { useSelectProduct } from "../../../hooks/useSelectProduct";
import { CloseBtn } from "../CloseBtn";
import { Details } from "./components/Details";
import { SelectedProduct } from './components/SelectedProduct.js';
import { productDetailsSectionStyles } from "./styles/productDetailsStyles";

const Main = () => {
	const { currentState } = useSelectProduct();
	const cartState = useSelector(state => state.cart);
	const actionType = cartState.cart.actionType;
	return (
		<section className={productDetailsSectionStyles}>
			<header className="w-full flex justify-end items-center w-full h-[6%] pr-4">
				<CloseBtn modal="productDetails" />
			</header>
			<div className="flex flex-wrap w-full min-h-[94%] overflow-y-auto">
				{actionType === "add"
					? <SelectedProduct
							title={currentState?.selectedProduct?.title}
							description={currentState?.selectedProduct?.description}
							price={"$" + currentState?.selectedProduct?.promotionalPrice}
							img={currentState?.selectedProduct?.picture}
						/>
						: <SelectedProduct
								title={cartState?.cart?.selectedEditItem?.title}
								description={cartState?.cart?.selectedEditItem?.description}
								price={cartState?.cart?.selectedEditItem?.price}
								img={cartState?.cart?.selectedEditItem?.img}
							/>
				}
				<Details />
			</div>
		</section>
	);
};

export default Main;