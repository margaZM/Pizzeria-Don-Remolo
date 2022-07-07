import Image from 'next/image';
import React from 'react';
import Modal from '../../../shared/Modal';

export const BannerBenefit = ({ setIsOpenModal, handleRegisterModal }) => {
	const handleGoBack = () => {
		setIsOpenModal(false);
	};

	return (
		<Modal>
			<section className="grid md:grid-cols-2 h-screen md:h-auto w-screen md:w-auto absolute rounded-xl bg-white mt-80 md:mt-auto">
				<section className="md:hidden -mt-16 relative">
					<Image
						src={require('/public/assets/logos/logo-transparent.svg')}
						alt="logo Don Rémolo"
						layout="fill"
					/>
				</section>
				<section className="hidden md:block -mt-16 md:-mb-20 md:-mr-20 relative">
					<Image
						src={require('/public/assets/logos/logo-transparent.svg')}
						alt="logo Don Rémolo"
						layout="fill"
						objectFit="cover"
					/>
				</section>

				<section className="md:mt-auto px-4 sm:px-8 md:py-4 text-center">
					<h2 className="text-primary text-lg mb-4 font-bold"> ¡Más beneficios! </h2>
					<p>
						Créate un perfil de Pizza Don Remolo para compras más rápidas, ser el primero
						en enterarte de descuentos especiales y acceder a pedidos anteriores.
					</p>
					<button
						className="button-primary mt-8"
						data-modal="register"
						onClick={handleRegisterModal}
					>
						Registrarme
					</button>
					<button
						className="bg-transparent underline text-gray-dark mt-3"
						onClick={handleGoBack}
					>
						Por ahora no
					</button>
				</section>
			</section>
		</Modal>
	);
};
