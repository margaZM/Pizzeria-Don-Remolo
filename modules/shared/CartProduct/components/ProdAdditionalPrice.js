import Image from 'next/image';

export const ProdAdditionalPrice = ({additionalPrice}) => {
	return (
		<div className="flex justify-between gap-3">
			<p className="flex justify-center items-center w-[56px] pl-3 text-gray text-[13px] md:text-[.9rem]">{additionalPrice || "$1.00"}</p>
		</div>
	);
};