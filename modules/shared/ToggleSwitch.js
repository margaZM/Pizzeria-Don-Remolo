import React from 'react';
import PropTypes from 'prop-types';

const ToggleSwitch = (props) => {
	return (
		<div className="flex items-center justify-center w-full mb-12">
			<label htmlFor="toggle" className="flex items-center cursor-pointer">
				<div className="relative">
					<input type="checkbox" id="toggle" className="sr-only" />
					<div className="block border border-primary w-48 h-8 rounded-full">
						<span> A domicilio</span>
					</div>
					<div className="dot absolute left-1 top-1 bg-primary w-24 h-6 rounded-full transition">
						{/* <span> Retiro en el local</span> */}
					</div>
				</div>
			</label>
		</div>
	);
};

ToggleSwitch.propTypes = {};

export default ToggleSwitch;
