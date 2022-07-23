import { useRedirect } from "../../../../hooks/useRedirect";
import { PaymentProcessHeader } from "../../../payment-process/components/PaymentProcessHeader";
import { Cart } from "../../../shared/Cart";
import { mobileLayout } from "../../styles/layouts";
import { MenuIcon } from "./MenuIcon";

export const MobileNavHeader = () => {
	const { router } = useRedirect();
	return (
		<>
			{
			router.pathname === "/payment_process"
			? 	
				<PaymentProcessHeader />
			:  
				<header className={`mobileHeader ${mobileLayout}`}>
					<MenuIcon />
					<div className="grid items-center w-full h-full">
						<Cart position="justify-self-end" />
					</div>
				</header>
			}
		</>
	);
};