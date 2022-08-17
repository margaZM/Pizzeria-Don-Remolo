import React, { useEffect, useRef, useState } from 'react';
import { googleMaps } from '/utils/initGoogleMap';

const GoogleMap = (type) => {
	const [search, setsearch] = useState('');
	const googlemap = useRef(null);
	const googleinput = useRef(null);

	const handleChange = (e) => {
		setsearch(e.target.value);
	};

	useEffect(() => {
		googleMaps(googlemap, googleinput, type);
	}, [type]);

	return (
		<div className="w-full h-96 relative mt-4">
			<div id="panel">
				<input
					type="text"
					placeholder="Ingresa la calle, ciudad, país"
					id="pac-input"
					ref={googleinput}
					name="search"
					value={search}
					onChange={handleChange}
					className="sm:mb-4 md:w-3/5 mx-auto md:mr-0 h-12 shadow-md border-none absolute top-2 left-2/4 -ml-32 z-50"
				/>
			</div>
			<div id="map" ref={googlemap} className="w-full h-full" />
			<div id="results"></div>
			<ul id="places"></ul>
		</div>
	);
};

export default GoogleMap;
