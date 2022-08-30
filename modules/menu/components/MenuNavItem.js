export const MenuNavItem = ({ title, setViewScroll, viewScroll, interceptedElement }) => {
	const handleViewScroll = (e) => {
		const toDisplay = e.target.dataset.display;
		setViewScroll(toDisplay);
	};

	return (
		<li
			className={`p-2 ${
				viewScroll === title || title === interceptedElement
					? 'border-b-[3px] border-primary'
					: ''
			}`}
		>
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
