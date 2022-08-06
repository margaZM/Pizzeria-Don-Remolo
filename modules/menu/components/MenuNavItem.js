import { useDispatch, useSelector } from 'react-redux';
import { handleMenuCategory } from '../../../redux/slices/menuCategories/menuCategoriesSlice';

export const MenuNavItem = ({ title, display }) => {
	const dispatch = useDispatch();
	const currentView = useSelector(state => state.menuCategories.currentView);
	const handleCategoryDisplay = (e) => {
		const toDisplay = e.target.dataset.display;
		dispatch(handleMenuCategory(toDisplay));
	};
	return (
		<li className={`p-2 ${currentView === display ? "border-b-[3px] border-primary" : ""}`}>
			<span 
				className={`w-max font-bold cursor-pointer`}
				data-display={display}
				onClick={handleCategoryDisplay}
			>
				{ title }
			</span>
		</li>
	);
};