import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { ButtonsCounter } from '/modules/shared/ButtonsCounter';

export const OptionDetail = ({ detailPromo }) => {
	const { icon, title, options, maxAmount } = detailPromo;

	return (
		<div>
			<div className="flex items-center pl-1 pr-4">
				<Image src={require(`/public/assets/icons/${icon}.svg`)} alt={icon} />
				<span className="uppercase font-bold ml-2">{title} </span>
				<span className="ml-auto text-primary text-xxs">{`0/${maxAmount}`}</span>
			</div>
			<div className="mb-2">
				{options.map((option) => (
					<div key={option}>
						<div className="pl-12 pr-4 flex justify-between items-center">
							<span>{option} </span>
							<ButtonsCounter maxAmount={maxAmount} />
						</div>
						<hr className="ml-12 mr-4 my-1 text-gray-light" />
					</div>
				))}
			</div>
		</div>
	);
};

OptionDetail.propTypes = {
	detailPromo: PropTypes.object,
};
