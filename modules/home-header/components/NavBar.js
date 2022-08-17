import Image from "next/image";
import { useDetectWidth } from "../../../hooks/useDetectWidth";
import { CloseBtn } from "./mobile/CloseBtn";
import { NavItem } from "./NavItem";

export const NavBar = ({ itemsLayout, children}) => {
	const { isDesktop } = useDetectWidth();
	return (
		<nav className="nav-bar-container flex justify-center items-center h-full nav_mq:justify-end">
			<ul className={`nav-items-list flex ${itemsLayout || ''} gap-4 font-bold`}>
				{!isDesktop ? (
					<div className="flex items-center">
						<CloseBtn /> 
						<div className="w-[60px] h-auto">
							<Image src={require('../../../public/assets/logos/logo-transparent.svg')} alt="Logo Don Rémolo" />
						</div>
					</div>
				)
				: null
				}
				<NavItem page='/menu' title='Menú' />
				<NavItem page='/tracker' title='Rastrea tu pedido' />
				<NavItem page='/locales' title='Locales' />
				<NavItem page='/comments' title='Dejar comentario' />
				{children}
			</ul>
		</nav>
	);
};