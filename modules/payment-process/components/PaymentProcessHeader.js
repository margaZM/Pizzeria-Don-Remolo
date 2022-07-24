import { mobileLayout } from "../../home-header/styles/layouts";
import { HeaderLeftSide } from "./HeaderLeftSide";
import { HeaderRightSide } from "./HeaderRightSide";

export const PaymentProcessHeader = () => {
	return (
		<header className={`mobileHeader ${mobileLayout}`}>
			<HeaderLeftSide />
			<HeaderRightSide />
		</header>
	);
};