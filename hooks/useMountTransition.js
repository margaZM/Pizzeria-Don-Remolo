import { useEffect, useState } from "react";

export const useMountTransition = (isMounted, unmountDelay) => {
	const [shouldRender, setShouldRender] = useState(false);
	useEffect(() => {
		let timeoutId;
		if (isMounted && !shouldRender) {
			setShouldRender(true);
		} else if (!isMounted && shouldRender) {
			timeoutId = setTimeout(() => setShouldRender(false), unmountDelay);
		};
		return () => clearTimeout(timeoutId);
	}, [unmountDelay, isMounted, shouldRender]);
	return shouldRender;
};