import { Bottom } from './components/Bottom';
import { Middle } from './components/Middle';
import { Top } from './components/Top';

const Main = () => {
	return (
		<section className="flex flex-col w-screen h-screen p-2 sm:h-max sm:max-w-[640px]">
			<Top />
			<Middle />
			<Bottom />
		</section>
	);
};

export default Main;