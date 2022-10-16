import { CartIcon } from "../../shared/CartIcon";
import { CloseBtn } from "../../shared/CloseBtn";

export const Top = () => {
	return (
		<article className="flex justify-between max-h-[50px]">
			<CartIcon />
			<p className="flex justify-center items-center text-[1.4rem] font-bold">Tu carrito</p>
			<div className="flex justify-center items-center max-h-[45px] pb-1">
				<CloseBtn modal="cart" />
			</div>
		</article>
	);
};