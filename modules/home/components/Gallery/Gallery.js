import Image from 'next/image';
import React from 'react';

export const Gallery = () => {
	return (
		<section className="bg-gallery w-full bg-center px-2 mt-4">
			<section className="md:px-0 lg:w-[90%] xl:max-w-[70%] mx-auto py-8">
				<section className="flex justify-center">
					<h2 className="text-center uppercase font-bold md:bg-secondary rounded-lg px-4 inline-block">
						Conoce más de nosotros @Pizzeriadonremolo
					</h2>
				</section>

				<section className="responsive-cards gap-2 mt-4">
					<Image
						src={require('/public/assets/gallery/picture1.png')}
						alt="picture-don-remolo"
					/>
					<Image
						src={require('/public/assets/gallery/picture2.png')}
						alt="picture-don-remolo"
					/>
					<Image
						src={require('/public/assets/gallery/picture3.png')}
						alt="picture-don-remolo"
					/>{' '}
					<Image
						src={require('/public/assets/gallery/picture4.png')}
						alt="picture-don-remolo"
					/>
				</section>
			</section>
		</section>
	);
};
