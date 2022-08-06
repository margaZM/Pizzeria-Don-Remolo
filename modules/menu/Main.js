import { CurrentView } from "./components/CurrentView";
import { MenuNavBar } from "./components/MenuNavBar";

const Main = () => {
	return (
		<section>
			<MenuNavBar />
			<CurrentView />
		</section>
	);
};

export default Main;