import React from 'react';
import PropTypes from 'prop-types';

export const TrackOtherOrder = (props) => {
	return (
		<div className="py-4 self-start">
			<h4 className="font-semibold">¿Deseas rastrear otro pedido?</h4>
			<span className="text-xxs text-gray-dark">
				Ingresa el código del pedido que fue enviado al correo electrónico de la persona
				que ordenó.
			</span>
			<div className="flex flex-col md:flex-row gap-4 md:items-center mt-4">
				<input placeholder="Código" />
				<div className="w-24 flex justify-center items-center self-end">
					<button className="button-primary">Rastrear</button>
				</div>
			</div>
		</div>
	);
};

TrackOtherOrder.propTypes = {};
