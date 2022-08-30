import { Bottom } from './components/Bottom';
import { Middle } from './components/Middle';
import { Top } from './components/Top';

const Main = ({ animation }) => {
	return (
		<section className={`fixed top-0 right-0 flex flex-col w-screen h-screen p-2 bg-white sm:h-max max-h-screen sm:max-w-[640px] ${animation}`}>
			<Top />
			<Middle />
			<Bottom />
		</section>
	);
};

export default Main;