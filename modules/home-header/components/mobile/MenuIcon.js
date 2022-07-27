import Image from "next/image";
import { useDispatch } from "react-redux";
import { handleModal } from "../../../../redux/slices/modal/modalSlice";

export const MenuIcon = () => {
	const dispatch = useDispatch();
	const handleMenu = (e) => dispatch(handleModal(e.target.dataset.modal));
	return (
		<>
			<div className="flex items-center">
				<div className="w-8 h-8 cursor-pointer">
					<Image 
						src={require('../../../../public/assets/icons/menu.svg')} 
						alt='menu-icon'
						onClick={handleMenu} 
						data-modal='menu'
					/>
				</div>
			</div>
		</>
	);
};