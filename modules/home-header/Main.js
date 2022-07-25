import { useEffect, useState } from 'react';
import { MobileNavHeader } from './components/mobile/MobileNavHeader';
import NavHeader from './components/NavHeader';

const Main = () => {
	const [isDesktop, setIsDesktop] = useState(false);
	const hasWindow = typeof window !== undefined;
	let width = 0;

	useEffect(() => {
		if(hasWindow) {
			width = innerWidth;
			if(width <= 902) { setIsDesktop(false) }
			else if(width >= 902) { setIsDesktop(true) }
			window.addEventListener('resize', () => {
				width = innerWidth;
				if(width <= 902) { return setIsDesktop(false) }
				else if(width >= 902) { return setIsDesktop(true) }
			});
		};
	}, []);

	return (
		<>
			{isDesktop 
				? <NavHeader /> 
				: <MobileNavHeader />
			}
		</>
	);
};

export default Main;