import { MenuNavBarDirection } from "./MenuNavBarDirection";
import { MenuNavItem } from "./MenuNavItem";

export const MenuNavBar = () => {
	return (
		<header className="sticky grid grid-rows-2 w-full h-[130px] top-[64px] left-0 z-10 desktop_bk:top-[112px]">
			<nav className="w-full px-2 bg-white overflow-x-auto shadow-button">
				<ul className="flex items-center gap-2 w-full h-full sm:justify-center">
					<MenuNavItem title="Promociones" display="promotions" />
					<MenuNavItem title="Pizzas" display="pizzas" linkTo="pizzas" />
					<MenuNavItem title="Empanadas" display="empanadas" linkTo="empanadas" />
					<MenuNavItem title="Bebidas" display="bebidas" linkTo="bebidas" />
					<MenuNavItem title="Postres" display="postres" linkTo="postres" />
				</ul>
			</nav>
			<MenuNavBarDirection />
		</header>
	);
};