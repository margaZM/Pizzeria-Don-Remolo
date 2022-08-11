import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import { handleMenuCategory } from '../../../redux/slices/menuCategories/menuCategoriesSlice';

export const MenuNavItem = ({ title, display, linkTo }) => {
	const dispatch = useDispatch();
	const currentView = useSelector(state => state.menuCategories.currentView);
	const handleCategoryDisplay = (e) => {
		const toDisplay = e.target.dataset.display;
		dispatch(handleMenuCategory(toDisplay));
	};
	return (
		<li className={`p-2 ${currentView === display ? "border-b-[3px] border-primary" : ""}`}>
			<Link 
				href={linkTo ? `#${linkTo}` : "#"}
				className={`w-max font-bold cursor-pointer p-2`}
				>
				<a
				data-display={display}
				onClick={handleCategoryDisplay}
				>{ title }</a>
			</Link>
		</li>
	);
};