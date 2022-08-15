import { useEffect, useState } from "react";

export const useDetectWidth = () => {
	const [isDesktop, setIsDesktop] = useState(false);
	const hasWindow = typeof window !== undefined;
	let width = 0;
	const handleResize = () => {
		width = innerWidth;
		if(width <= 902) { return setIsDesktop(false) }
		else if(width >= 902) { return setIsDesktop(true) };
	};
	useEffect(() => {
		if(hasWindow) {
			width = innerWidth;
			if(width <= 902) { setIsDesktop(false) }
			else if(width >= 902) { setIsDesktop(true) }
			window.addEventListener('resize', handleResize)
		};
		return() => { window.removeEventListener('resize', handleResize) };
	}, []);
	return { isDesktop };
};