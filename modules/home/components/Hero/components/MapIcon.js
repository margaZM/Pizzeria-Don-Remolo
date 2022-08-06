import React from 'react';
import PropTypes from 'prop-types';

const MapIcon = ({ color, width, height }) => {
	return (
		<svg
			width="24"
			height="25"
			viewBox="0 0 24 25"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<g clipPath="url(#clip0_1359_3331)">
				<path
					d="M21 10.4448C21 17.4448 12 23.4448 12 23.4448C12 23.4448 3 17.4448 3 10.4448C3 8.05788 3.94821 5.76869 5.63604 4.08086C7.32387 2.39304 9.61305 1.44482 12 1.44482C14.3869 1.44482 16.6761 2.39304 18.364 4.08086C20.0518 5.76869 21 8.05788 21 10.4448Z"
					stroke="black"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<path
					d="M12 13.4448C13.6569 13.4448 15 12.1017 15 10.4448C15 8.78797 13.6569 7.44482 12 7.44482C10.3431 7.44482 9 8.78797 9 10.4448C9 12.1017 10.3431 13.4448 12 13.4448Z"
					stroke="black"
					strokeWidth="1.5"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1359_3331">
					<rect width="24" height="24" fill="white" transform="translate(0 0.444824)" />
				</clipPath>
			</defs>
		</svg>
	);
};

MapIcon.propTypes = {
	color: PropTypes.string,
	width: PropTypes.number,
	height: PropTypes.number,
};

export default MapIcon;
