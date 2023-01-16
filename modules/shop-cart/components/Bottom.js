import { useSelector } from 'react-redux';
import { useRedirect } from '../../../hooks/useRedirect';
import { selectTotalProductPrice } from '/redux/slices/cart/cartSlices.js';

export const Bottom = () => {
	const { handleRedirect } = useRedirect();
	const cartLength = useSelector((state) => state.cart.cart.cartLength);
	const totalProductPrice = useSelector(selectTotalProductPrice);

	return (
		<article className="flex flex-col justify-center items-center gap-7 w-full h-[200px] sm:h-[100px] p-3 sm:flex-row sm:gap-0">
			<p className="w-max text-[1.2rem] font-bold sm:w-1/2">
				Subtotal: $ {''} {totalProductPrice?.toFixed(2)}
			</p>
			<div className="w-full max-w-[350px]">
				<button
					className="button-primary w-1/2 h-[50px] text-[1.1rem] text-white disabled:bg-gray disabled:cursor-not-allowed"
					type="button"
					data-path="payment_process"
					disabled={cartLength > 0 ? false : true}
					onClick={handleRedirect}
				>
					Proceder al pago
				</button>
			</div>
		</article>
	);
};
