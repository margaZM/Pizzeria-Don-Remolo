import { MenuNavBarDirection } from "./MenuNavBarDirection";
import { MenuNavItem } from "./MenuNavItem";

export const MenuNavBar = () => {
	return (
		<header className="sticky grid grid-rows-2 w-full h-[130px] top-0 left-0 z-10">
			<nav className="w-full px-2 bg-white overflow-x-auto shadow-button">
				<ul className="flex items-center gap-2 w-full h-full sm:justify-center">
					<MenuNavItem title="Promociones" display="promotions" />
					<MenuNavItem title="Pizzas" display="pizzas" />
					<MenuNavItem title="Empanadas" display="empanadas" />
					<MenuNavItem title="Bebidas" display="bebidas" />
					<MenuNavItem title="Postres" display="postres" />
				</ul>
			</nav>
			<MenuNavBarDirection />
		</header>
	);
};