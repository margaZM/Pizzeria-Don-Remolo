import { Hero } from './components/Hero';
import { FormComment } from './components/FormComment';

export const Main = ({}) => {
	return (
		<div className="md:mx-auto flex flex-col gap-4 items-center">
			<Hero />
			<FormComment />
		</div>
	);
};
