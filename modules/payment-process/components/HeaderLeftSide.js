import Image from 'next/image';
import { ArrowLeft } from './ArrowLeft';

export const HeaderLeftSide = () => {
	return (
		<article className="left-side flex justify-center items-center gap-2 w-max">
			<ArrowLeft className="flex justify-center items-center w-[24px] h-[24px] cursor-pointer active:translate-x-[-1px]" />
			<div className="w-[64px] h-[64px]">
				<Image 
					src={require('../../../public/assets/logos/logo-transparent.svg')}
					alt="logo"
				/>
			</div>
		</article>
	);
};