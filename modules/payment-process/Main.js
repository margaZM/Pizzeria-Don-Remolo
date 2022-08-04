import { useSelector } from "react-redux";
import { OrderTypeContainer } from "./components/OrderTypeContainer";
import { PaymentProcessForm } from "./components/PaymentProcessForm";

const Main = () => {
	const cartLength = useSelector(state => state.cart.cart.cartLength);
	return (
		<section className="flex flex-col w-full min-h-screen sm:items-center">
			{
				cartLength > 0
				? 	
					<>
						<OrderTypeContainer />
						{/* <PaymentProcessForm /> */}
					</>
				: 
					<div className="flex justify-center items-center w-full h-[300px] text-primary text-[1.5rem]">Debes ingresar, al menos, un producto en el carrito...</div>
			}
		</section>
	);
};

export default Main;