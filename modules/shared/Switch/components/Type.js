export const Type = ({ title, styles, order, fn }) => {
	return (
		<button
			className={`w-32 text-primary text-[12px] leading-3 font-bold rounded-[50px] sm:text-[.8rem] lg:text-[.9rem] ${styles}`}
			onClick={fn}
			data-order={order}
		>
			{title}
		</button>
	);
};
