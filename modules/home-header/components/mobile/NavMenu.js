import { NavBar } from "../NavBar";
import { NavBtnsContainer } from "../NavBtnsContainer";

export const NavMenu = () => {
	return (
		<div className="fixed top-0 left-0 w-full h-screen bg-modal_bg z-10 animate-fade_in">
			<NavBar itemsLayout='flex-col w-full h-full p-7 bg-secondary'>
				<div className="flex justify-center items-end w-full h-full">
					<NavBtnsContainer mobileMenu={true} />
				</div>
			</NavBar>
		</div>
	);
};