import Image from 'next/image'
import React from 'react'
import { DeliverFormHeader } from '../../../payment-process/components/DeliverFormHeader'

const DetailsHeader = ({ icon, iconTitle, required, title, children }) => {
	return (
		<>
			<div className="grid grid-cols-[8%_1fr] gap-2">
				<span className="w-[25px] h-[25px]">
					<Image src={require(`../../../../public/assets/icons/${icon}.svg`)} alt={iconTitle} />
				</span>
				<DeliverFormHeader title={title.toUpperCase()} required={required} />
			</div>
			<div className="flex flex-col gap-2 mt-1 mb-2">
				{ children }
			</div>
		</>
	);
};

export default DetailsHeader;