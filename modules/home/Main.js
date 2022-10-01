import { Hero } from './sections/Hero/Hero';
import { Gallery } from './components/Gallery/Gallery';
import { Promotions } from './sections/promotions/Promotions';
import { Categories } from './sections/Categories/Categories';
import MostPopular from './sections/most-popular/Main';
import { LoadingScreen } from '/modules/shared/loading/LoadingScreen';
import { useLoading } from '../../hooks/useLoading';

export const Main = () => {
	const { loading } = useLoading();

	return (
		<section>
			{loading ? (
				<LoadingScreen />
			) : (
				<div>
					<Hero />
					<Promotions />
					<Categories />
					<MostPopular />
					<Gallery />
				</div>
			)}
		</section>
	);
};
