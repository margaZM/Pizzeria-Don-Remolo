import { Cart } from "../../../shared/Cart";
import { mobileLayout } from "../../styles/layouts";
import { MenuIcon } from "./MenuIcon";

export const MobileNavHeader = () => {
	return (
		<header className={`mobileHeader ${mobileLayout}`}>
			<MenuIcon />
			<div className="grid items-center w-full h-full">
				<Cart position="justify-self-end" />
			</div>
		</header>
	);
};