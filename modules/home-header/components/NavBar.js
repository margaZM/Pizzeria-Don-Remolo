import { NavItem } from "./NavItem";

export const NavBar = ({ itemsLayout, children, home }) => {
	return (
		<nav className="nav-bar-container flex justify-center items-center h-full nav_mq:justify-end">
			<ul className={`nav-items-list flex ${itemsLayout || ''} gap-4 font-bold`}>
				{home ? <NavItem page='/' title='Inicio' /> : null}
				<NavItem page='/menu' title='Menú' />
				<NavItem page='/tracker' title='Rastrea tu pedido' />
				<NavItem page='/locales' title='Locales' />
				<NavItem page='/comments' title='Dejar comentario' />
				{children}
			</ul>
		</nav>
	);
};