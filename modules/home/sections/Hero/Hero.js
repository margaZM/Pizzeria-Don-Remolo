import { HeroBottom } from '../../components/Hero/HeroBottom';
import { HeroTop } from '../../components/Hero/HeroTop';
import { HeroSectionStyles } from './styles/styles';
import { useSwitch } from '/hooks/useSwitch';

export const Hero = () => {
	const { orderType, handleOrder } = useSwitch();

	console.log(orderType);

	return (
		<section className={`${HeroSectionStyles}`}>
			<HeroTop />
			<HeroBottom orderType={orderType} handleOrder={handleOrder} />
		</section>
	);
};
