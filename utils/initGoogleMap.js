import { Loader } from '@googlemaps/js-api-loader';

const initGoogleMaps = () => {
	return new Loader({
		apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID,
		version: 'weekly',
		libraries: ['places', 'localContext'],
	});
};

export const googleMaps = (googlemap, googleinput, type) => {
	const loader = initGoogleMaps();
	let map, markers, geocoder, currentPosition;

	// Obtener la geolocalización
	const centerMap = (position) => {
		currentPosition = {
			lat: position.coords.latitude,
			lng: position.coords.longitude,
		};
		map = new google.maps.Map(googlemap.current, {
			center: { position: currentPosition },
			zoom: 14,
		});
		markers = new google.maps.Marker({
			position: currentPosition,
			map,
			draggable: true,
			title: 'Posición Inicial',
		});

		if (type.local) {
			markerMultiplePlaces(currentPosition, map);
		} else {
			markers.setPosition(currentPosition);
			map.setCenter(currentPosition);
		}

		geocoder = new google.maps.Geocoder();
		geocoder.geocode(
			{
				location: {
					lat: currentPosition.lat,
					lng: currentPosition.lng,
				},
			},
			(results, status) => {
				if (status == google.maps.GeocoderStatus.OK) {
					const address = results[0].formatted_address;
				}
			},
		);

		const searchBox = new google.maps.places.SearchBox(googleinput.current);

		// map.controls[google.maps.ControlPosition.TOP_CENTER].push(googleinput.current);

		map.addListener('bounds_changed', () => {
			searchBox.setBounds(map.getBounds());
		});

		searchBoxPlaces(searchBox);
	};

	function onError(error) {
		console.error(error);
	}

	loader.load().then(() => {
		const google = window.google;
		map = new google.maps.Map(googlemap.current, {
			center: { lat: -24.345, lng: 134.46 }, // Australia.
			zoom: 10,
		});

		if (navigator.geolocation) {
			const geoLoc = navigator.geolocation;
			const options = { timeout: 60000 };
			const watchPos = geoLoc.watchPosition(centerMap, onError, options);
		} else {
			alert('Tu navegador no admite geolocalización');
		}
	});
};

const searchBoxPlaces = (searchBox) => {
	searchBox.addListener('places_changed', () => {
		const places = searchBox.getPlaces();

		if (places.length == 0) {
			return;
		}

		markers = [];

		const bounds = new google.maps.LatLngBounds();

		places.forEach((place) => {
			if (!place.geometry || !place.geometry.location) {
				console.log('Returned place contains no geometry');
				return;
			}

			const icon = {
				url: place.icon,
				size: new google.maps.Size(71, 71),
				origin: new google.maps.Point(0, 0),
				anchor: new google.maps.Point(17, 34),
				scaledSize: new google.maps.Size(25, 25),
			};

			markers.push(
				new google.maps.Marker({
					map,
					icon,
					title: place.name,
					position: place.geometry.location,
				}),
			);

			if (place.geometry.viewport) {
				bounds.union(place.geometry.viewport);
			} else {
				bounds.extend(place.geometry.location);
			}
		});
		map.fitBounds(bounds);
	});
};

function markerMultiplePlaces(currentPosition, map) {
	const places = [
		{
			lat: currentPosition.lat + 0.001,
			lng: currentPosition.lng + 0.001,
		},
		{
			lat: currentPosition.lat + 0.001,
			lng: currentPosition.lng + 0.002,
		},
		{
			lat: currentPosition.lat - 0.003,
			lng: currentPosition.lng - 0.004,
		},
	];
	places.forEach((place) => {
		const marker = new google.maps.Marker({
			position: place,
			map,
			draggable: true,
		});
		marker.setPosition(place);
		map.setCenter(place);
	});
}
