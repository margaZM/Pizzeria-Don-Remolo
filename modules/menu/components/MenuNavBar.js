import { MenuNavItem } from "./MenuNavItem";

export const MenuNavBar = () => {
	return (
		<header>
			<nav>
				<ul className="flex items-center gap-2 w-full h-[65px] px-2 overflow-x-auto sm:justify-center shadow-button">
					<MenuNavItem title="Promociones" display="promotions" />
					<MenuNavItem title="Pizzas" display="pizzas" />
					<MenuNavItem title="Empanadas" display="empanadas" />
					<MenuNavItem title="Bebidas" display="bebidas" />
					<MenuNavItem title="Postres" display="postres" />
				</ul>
			</nav>
		</header>
	);
};