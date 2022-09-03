import React from 'react';
import Image from 'next/image';

export const LoadingScreen = () => {
	return (
		<div className="fixed top-0 left-0 h-screen w-screen bg-secondary grid place-items-center z-50">
			<div className="relative z-40 w-44 h-44 rounded-full animation">
				<Image
					src={require('/public/assets/pizza-pacman.png')}
					alt="pepperoni"
					className="bg-transparent z-10"
				/>
				<div className="absolute right-3 top-0 animation-slice">
					<Image src={require('/public/assets/slice-pizza.png')} alt="pepperoni" />
				</div>
			</div>
		</div>
	);
};
