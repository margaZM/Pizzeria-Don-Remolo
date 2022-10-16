import { useRedirect } from "../../../../hooks/useRedirect";
import { PaymentProcessHeader } from "../../../payment-process/components/PaymentProcessHeader";
import { CartIcon } from "../../../shared/CartIcon";
import { mobileLayout } from "../../styles/layouts";
import { MenuIcon } from "./MenuIcon";
import LoginButton from '../AuthButton';
import Image from "next/image";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/slices/auth";

export const MobileNavHeader = () => {
	const { router } = useRedirect();
	const { handleRedirect } = useRedirect();
	const isUser = useSelector(selectUser);
	const splitName = (name = '') => {
		return name.split(' ').slice(0, 2).join(' ');
	};
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
					<div className="flex justify-end items-center gap-2 w-full h-full">
						{!isUser?.token ? <LoginButton authType="login" action="Ingresar" />
							: <p className="font-bold"> Hola, {isUser && splitName(isUser.name)} </p>
						}
						<CartIcon position="justify-self-end" />
					</div>
				</header>
			}
		</>
	);
};