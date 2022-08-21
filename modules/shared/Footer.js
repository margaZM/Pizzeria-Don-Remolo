import Image from 'next/image';
import React from 'react';

export const Footer = () => {
	return (
		<footer className="bg-gray-light w-full py-8 px-2 mt-8">
			<div className="lg:w-[90%] xl:max-w-[70%] grid lg:grid-cols-5 gap-2 mx-auto leading-6 pb-4">
				<div className="col-span-5 mx-auto lg:ml-0 lg:col-span-1">
					<Image
						src={require('/public/assets/logos/logo-transparent.png')}
						alt="logo-don-remolo"
					/>
				</div>
				<div className="col-span-5 flex justify-evenly gap-2 lg:col-span-3">
					<div>
						<h4 className="font-bold mb-3 text-xxs">Servicio al cliente</h4>
						<p className="text-xxs">Comprobante electrónico</p>
						<p className="text-xxs">Contáctanos</p>
						<p className="text-xxs">Preguntas frecuentes</p>
					</div>

					<div>
						<h4 className="font-bold mb-3 text-xxs">La empresa </h4>
						<p className="text-xxs">Sobre nosotros</p>
						<p className="text-xxs">Sobre la pizza</p>
						<p className="text-xxs">Locales</p>
					</div>
					<div>
						<h4 className="font-bold mb-3 text-xxs">Legales</h4>
						<p className="text-xxs">Términos y condiciones</p>
						<p className="text-xxs">Políticas de privacidad</p>
						<p className="text-xxs">Empresas y Socios estratégicos</p>
					</div>
				</div>

				<div className="col-span-5 lg:col-span-4 flex items-end justify-center">
					<p className="text-xxs">© 2022 DON REMOLO. Todos los derechos reservados</p>
				</div>
				<div className="flex flex-col col-span-5 lg:col-span-1 lg:flex-row items-center justify-center">
					<span className="text-xxs mr-2">Síguenos en:</span>
					<div className="flex">
						<Image
							src={require('/public/assets/icons/instagram.svg')}
							alt="instagram-icon"
						/>
						<Image
							src={require('/public/assets/icons/facebook.svg')}
							alt="instagram-icon"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
};
