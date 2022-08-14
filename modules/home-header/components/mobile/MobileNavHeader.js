import { useRedirect } from "../../../../hooks/useRedirect";
import { PaymentProcessHeader } from "../../../payment-process/components/PaymentProcessHeader";
import { Cart } from "../../../shared/Cart";
import { mobileLayout } from "../../styles/layouts";
import { MenuIcon } from "./MenuIcon";
import LoginButton from '../AuthButton';
import Image from "next/image";

export const MobileNavHeader = () => {
	const { router } = useRedirect();
	const { handleRedirect } = useRedirect();
	return (
		<>
			{
			router.pathname === "/payment_process"
			? 	
				<PaymentProcessHeader />
			:  
				<header className={`mobileHeader ${mobileLayout}`}>
					<div className="flex gap-3">
						<MenuIcon />
						<span className="flex items-center w-[60px] h-auto">
							<Image
								src={require('../../../../public/assets/logos/logo-transparent.svg')} 
								alt="Logo Don Rémolo" 
								data-path="/" 
								onClick={handleRedirect}
							/>
						</span>
					</div>
					<div className="flex items-center gap-2 w-full h-full">
						<LoginButton authType="login" action="Ingresar" />
						<Cart position="justify-self-end" />
					</div>
				</header>
			}
		</>
	);
};