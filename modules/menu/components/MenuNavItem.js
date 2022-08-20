import { useEffect } from 'react';

export const MenuNavItem = ({ title, setViewScroll, viewScroll }) => {
	const handleViewScroll = (e) => {
		const toDisplay = e.target.dataset.display;
		setViewScroll(toDisplay);
	};

	return (
		<li className={`p-2 ${viewScroll === title ? 'border-b-[3px] border-primary' : ''}`}>
			<span
				className={`w-max font-bold cursor-pointer`}
				data-display={title}
				onClick={handleViewScroll}
			>
				{title}
			</span>
		</li>
	);
};
