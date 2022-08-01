import Image from 'next/image';
import React from 'react';
import { useOnModalChange } from '/hooks/useOnModalChange';
import Modal from '/modules/shared/Modal';
import Close from '/modules/shared/Close';

export const CommentsModal = () => {
	const { handleWindow } = useOnModalChange();

	return (
		<Modal>
			<section className="h-screen md:h-auto w-screen md:w-auto absolute rounded-xl bg-white mt-96 md:mt-auto flex flex-col md:pb-12 md:pt-8 md:px-4">
				<button
					className="bg-transparent mt-8 mr-6 md:m-4 self-end"
					data-modal="bannerBenefit"
					onClick={handleWindow}
				>
					<Close />
				</button>
				<div className="px-2 md:p-4 md:mt-4 flex flex-col gap-8 justify-center items-center h-4/6">
					<h4 className="text-2xl text-primary text-center font-bold">
						¡Gracias por tu comentario!
					</h4>
					<p className="text-center text-xl">
						Lo tendremos en cuenta para ser cada día mejores.
					</p>
				</div>
			</section>
		</Modal>
	);
};
