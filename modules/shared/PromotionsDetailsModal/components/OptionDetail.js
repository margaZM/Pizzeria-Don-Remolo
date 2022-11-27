import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { ButtonsCounter } from '/modules/shared/ButtonsCounter';
import { useSelectPromotion } from '/hooks/useSelectPromotion';

export const OptionDetail = ({ detailPromo, quantitiesByGroup }) => {
	const { groupName, products, quantity } = detailPromo;
	const { handleSelectedPromotionOptions, handleDeleteSelectedPromotionOptions } =
		useSelectPromotion();

	return (
		<div>
			<div className="flex items-center pl-1 pr-4">
				<Image
					src={require(`/public/assets/icons/icons-detail/${groupName}.svg`)}
					alt={groupName}
				/>
				<span className="uppercase font-bold ml-2">
					{`Elige ${quantity > 1 ? 'las' : 'la'} ${
						quantity > 1 ? quantity : ''
					} ${groupName}`}
				</span>
				<span className="ml-auto text-primary text-xxs">{`${
					quantitiesByGroup[groupName] || 0
				}/${quantity || 1}`}</span>
			</div>
			<div className="mb-2">
				{products.map((option) => (
					<div key={option.id}>
						<div className="pl-12 pr-4 flex justify-between items-center">
							<span>{option.name} </span>
							<ButtonsCounter
								maxAmount={quantity || 1}
								product={{ ...option, group: groupName, maxQuantityGroup: quantity }}
								disabled={{ add: quantitiesByGroup[groupName] >= quantity }}
								handlerAdd={handleSelectedPromotionOptions}
								handlerMinus={handleDeleteSelectedPromotionOptions}
							/>
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
