import React from 'react';
import Image from 'next/image';

export const Notification = ({ message, icon, setIsOpenNotification, ...props }) => {
	setTimeout(
		() => {
			setIsOpenNotification(false);
		},
		icon === 'success' ? props.successDelay || 1500 : props.errorDelay || 4000,
	);

	return (
		<div className="absolute top-10 right-10 z-10 flex items-center justify-between max-w-md p-2 px-8 gap-2 bg-primary rounded-3xl text-white intro-y">
			<Image src={require(`/public/assets/icons/${icon}.png`)} alt="icon-Notification" />
			<p className="ml-3 text-sm font-bold text-yellow-600"> {message} </p>
		</div>
	);
};
