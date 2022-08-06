import { Switch } from '/modules/shared/Switch/Switch';
import { HeroAddress } from './HeroAddress';

export const HeroBottom = ({ orderType, handleOrder }) => {
	return (
		<article className="hero-bottom flex flex-col w-full max-w-[440px] h-full md:items-center lg:max-w-[550px] xl:max-w-[800px]">
			<p className="w-[300px] text-[14px] text-center font-bold lg:text-[1.1rem]">
				¿Cómo deseas ordenar hoy?
			</p>
			<div className="flex items-center w-full h-full p-3 md:justify-center">
				<Switch orderType={orderType} handleOrder={handleOrder} />
			</div>
			{orderType.home && <HeroAddress orderType={orderType} />}
		</article>
	);
};
