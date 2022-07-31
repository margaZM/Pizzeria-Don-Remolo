import React from 'react';
// import PropTypes from 'prop-types';

export const Stepper = ({}) => {
	const status = 1;
	return (
		<div className="flex px-2 flex-col sm:flex-row justify-center mb-8">
			<div
				className={`${rounded} ${status >= 1 ? 'before:bg-primary' : 'before:bg-gray'}`}
			>
				<div
					className={`${border} pb-7 ${
						status > 1 ? 'before:border-primary' : 'before:border-gray'
					}`}
				>
					<p className="pl-4 sm:pl-0">Pedido recibido</p>
				</div>
			</div>
			<div
				className={`${rounded} ${status >= 2 ? 'before:bg-primary' : 'before:bg-gray'}`}
			>
				<div
					className={`${border} pb-7 ${
						status >= 3 ? 'before:border-primary' : 'before:border-gray'
					}`}
				>
					<p className="pl-4 sm:pl-0">Pedido en preparación</p>
				</div>
			</div>
			<div
				className={`${rounded} ${status >= 3 ? 'before:bg-primary' : 'before:bg-gray'}`}
			>
				<div
					className={`${border} pb-7 ${
						status >= 4 ? 'before:border-primary' : 'before:border-gray'
					}`}
				>
					<p className="pl-4 sm:pl-0">Pedido en caja</p>
				</div>
			</div>
			<div
				className={`${rounded} ${status >= 4 ? 'before:bg-primary' : 'before:bg-gray'}`}
			>
				<div
					className={`${border} pb-7 ${
						status >= 5 ? 'before:border-primary' : 'before:border-gray'
					}`}
				>
					<p className="pl-4 sm:pl-0">Pedido en camino</p>
				</div>
			</div>
			<div>
				<div
					className={`${border} pb-0 sm:pr-[0%] ${
						status >= 5 ? 'before:border-primary' : 'before:border-gray'
					}`}
				>
					<p className="hidden sm:block pl-4 sm:pl-0 sm:text-right">Pedido entregado</p>
				</div>
			</div>
			<div
				className={`${rounded} before:top-0 sm:before:-left-2 ${
					status >= 5 ? 'before:bg-primary' : 'before:bg-gray'
				}`}
			>
				<p className="sm:hidden pl-4 -mt-0 sm:pl-0 sm:text-right">Pedido entregado</p>
			</div>
		</div>
	);
};

// Main.propTypes = {
// 	status: PropTypes.number,
// };

const rounded =
	'relative before:absolute before:w-2.5 before:h-2.5 before:top-2 sm:before:top-0 before:rounded-full before:z-10 before:-translate-x-2/4 sm:before:translate-x-0';
const border =
	'relative top-0 sm:pt-3 before:absolute  before:left-0 before:top-2 sm:before:top-1 before:h-full sm:before:h-0 sm:before:w-full sm:before:border before:border-l pr-7';
