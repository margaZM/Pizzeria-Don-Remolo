import { MenuNavBarDirection } from './MenuNavBarDirection';
import { MenuNavItem } from './MenuNavItem';

export const MenuNavBar = ({ setViewScroll, viewScroll, interceptedElement }) => {
	return (
		<header className="sticky grid grid-rows-2 w-full h-[130px] top-[64px] left-0 z-10 desktop_bk:top-[112px]">
			<nav className="w-full px-2 bg-white overflow-x-auto shadow-button">
				<ul className="flex items-center gap-2 w-full h-full sm:justify-center">
					<MenuNavItem
						title="Promociones"
						setViewScroll={setViewScroll}
						viewScroll={viewScroll}
						interceptedElement={interceptedElement}
					/>
					<MenuNavItem
						title="Pizzas"
						setViewScroll={setViewScroll}
						viewScroll={viewScroll}
						interceptedElement={interceptedElement}
					/>
					<MenuNavItem
						title="Empanadas"
						setViewScroll={setViewScroll}
						viewScroll={viewScroll}
						interceptedElement={interceptedElement}
					/>
					<MenuNavItem
						title="Bebidas"
						setViewScroll={setViewScroll}
						viewScroll={viewScroll}
						interceptedElement={interceptedElement}
					/>
					<MenuNavItem
						title="Postres"
						setViewScroll={setViewScroll}
						viewScroll={viewScroll}
						interceptedElement={interceptedElement}
					/>
				</ul>
			</nav>
			<MenuNavBarDirection />
		</header>
	);
};
