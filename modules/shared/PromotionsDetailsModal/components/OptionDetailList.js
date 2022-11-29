import React from 'react';
import PropTypes from 'prop-types';
import { OptionDetail } from '/modules/shared/PromotionsDetailsModal/components/OptionDetail.js';

export const OptionDetailList = ({
	detailPromo,
	quantitiesByGroup,
	productsToUpdate,
}) => {
	return (
		detailPromo.length && (
			<div className="max-h-[93%] overflow-auto">
				{detailPromo?.map((detail) => (
					<OptionDetail
						detailPromo={detail}
						quantitiesByGroup={quantitiesByGroup}
						key={detail.categoryId}
						productsToUpdate={productsToUpdate}
					/>
				))}
			</div>
		)
	);
};

OptionDetailList.propTypes = {};
