import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Input } from '/modules/shared/Input';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { Checkbox } from '/modules/shared/Checkbox/Checkbox';
import { Loader } from '@googlemaps/js-api-loader';
import { Switch } from '../../shared/Switch/Switch';
import { useSwitch } from '/hooks/useSwitch';

export const FormAddress = (props) => {
	const [search, setsearch] = useState('');
	const { orderType, handleOrder } = useSwitch();

	const handleChange = (e) => {
		setsearch(e.target.value);
	};

	const validate = Yup.object({
		place: Yup.string()
			.strict()
			.required('Ingresa tu lugar de entrega por favor')
			.min(2, 'Ingresa tu lugar de entrega por favor')
			.max(256, 'Tu dirección no puede superar los 256 caracteres'),
	});

	const googlemap = useRef(null);
	const googleinput = useRef(null);

	useEffect(() => {
		const loader = new Loader({
			apiKey: 'AIzaSyB7r28T9zRgyJOhXVCzuxSug_Dx1G7o5zU',
			version: 'weekly',
			libraries: ['places'],
		});
		let map, marker, geocoder;
		loader.load().then(() => {
			const google = window.google;
			map = new google.maps.Map(googlemap.current, {
				center: { lat: -25.363, lng: 131.044 },
				zoom: 4,
			});

			console.log(search);

			// Obtener la geolocalización
			function centraMapa(position) {
				const currentPosition = {
					lat: position.coords.latitude,
					lng: position.coords.longitude,
				};
				marker = new google.maps.Marker({
					position: currentPosition,
					map,
					title: 'Posición Inicial',
				});

				marker.setPosition(currentPosition);
				map.setCenter(currentPosition);

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
							console.log(results);
							const address = results[0].formatted_address;
							console.log(address);
						} else {
							console.log(status);
						}
					},
				);
			}

			function onError(error) {
				console.log('Se ha producido un error y lo hemos gestionado');
				console.error(error);
			}

			if (navigator.geolocation) {
				const geoLoc = navigator.geolocation;
				const options = { timeout: 60000 };
				const watchPos = geoLoc.watchPosition(centraMapa, onError, options);
			} else {
				alert('Tu navegador no admite geolocalización');
			}

			if (search && window.google) {
				const service = new google.maps.places.AutocompleteService();
				service.getPlacePredictions(
					{ input: search, types: ['(regions)', '(cities)'] },
					function (predictions, status) {
						console.log(predictions, status);
						if (status == google.maps.places.PlacesServiceStatus.OK) {
							const results = document.getElementById('results');
							for (let i = 0, prediction; (prediction = predictions[i]); i++) {
								results.innerHTML += '<li>' + prediction.description + '</li>';
							}
						}
					},
				);
			}
		});
	});

	return (
		<div className="grid place-items-center gap-4 md:block">
			<Switch handleOrder={handleOrder} orderType={orderType} className="md:ml-0" />
			<input
				type="text"
				placeholder="Ingresa la calle, ciudad, país"
				id="pac-input"
				ref={googleinput}
				name="search"
				value={search}
				onChange={handleChange}
				className="sm:mb-4 md:w-3/5 mx-auto md:mr-0 h-12 shadow-md border-none"
			/>
			<div id="results"></div>
			<div id="map" ref={googlemap} />
			<p className="text-center mt-4 font-semibold">
				El <span className="text-primary">PIN</span> debe ser colocado donde se va a
				entregar el pedido
			</p>
			<Formik
				initialValues={{
					place: '',
					mainStreet: '',
					sideStreet: '',
					postalCode: '',
				}}
				validationSchema={validate}
				validator={() => ({})}
				onSubmit={async (values, { resetForm }) => {
					try {
						console.log(values, orderType);
					} catch (error) {
						console.log(error);
					} finally {
						resetForm({
							values: {
								place: '',
								mainStreet: '',
								sideStreet: '',
								postalCode: '',
							},
						});
					}
				}}
			>
				{(formik) => (
					<Form className="flex flex-col gap-4 md:w-[50%] mt-8">
						<div className="flex justify-between">
							<h4 className="uppercase font-semibold">Agregar dirección de envío</h4>
							<span className="text-primary text-xxs">Requerido</span>
						</div>
						<Input
							label="Lugar de entrega"
							placeholder="Casa, departamento, suite, piso, número, etc"
							name="place"
							type="text"
							width="max-w-full"
						/>
						<Input
							label="Calle principal"
							name="mainStreet"
							type="text"
							placeholder="Nombre de la calle"
							width="max-w-full"
						/>
						<Input
							label="Calle secundaria"
							name="sideStreet"
							type="text"
							placeholder="Nombre de la calle"
							width="max-w-full"
						/>
						<Input
							label="Código postal"
							name="postalCode"
							type="text"
							placeholder="Código"
							width="max-w-full"
						/>
						<Checkbox label="Marcar como dirección preferida" />
						<div className="w-full md:w-56">
							<button
								className="button-primary mt-3 disabled:bg-gray disabled:cursor-not-allowed"
								type="submit"
								disabled={!(formik.isValid && formik.dirty)}
							>
								Usar esta dirección
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	);
};

FormAddress.propTypes = {};
