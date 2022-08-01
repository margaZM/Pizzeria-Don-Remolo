import { useSelector } from "react-redux";
import { useRedirect } from "../../../hooks/useRedirect";

export const Bottom = () => {
	const { handleRedirect } = useRedirect();
	const currentProducts = useSelector(state => state.cart);
	return (
		<article className="flex flex-col justify-center items-center gap-7 w-full h-[200px] sm:h-[100px] p-3 sm:flex-row sm:gap-0">
			<p className="w-max text-[1.2rem] font-bold sm:w-1/2">Subtotal: ${ currentProducts.cart.totalPrice }</p>
			<div className="w-full max-w-[350px]">
				<button className="button-primary w-1/2 h-[50px] text-[1.1rem] text-white" type="button" data-path="payment_process" onClick={handleRedirect}>Proceder al pago</button>
			</div>
		</article>
	);
};