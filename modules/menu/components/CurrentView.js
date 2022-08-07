import { useSelector } from "react-redux";
import { Promotions } from "./promotions/Promotions";

export const CurrentView = () => {
	const currentView = useSelector(state => state.menuCategories);
	return (
		<>
			{
				currentView?.promotions ? <Promotions />
				: null
			}
		</>
	)
};