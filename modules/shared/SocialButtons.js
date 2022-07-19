import { ButtonGoogle } from './SocialButtons/ButtonGoogle';
import { ButtonFacebook } from './SocialButtons/ButtonFacebook';

export const SocialButtons = ({ action, setIsOpenNotification, setInfoNotification }) => {
	return (
		<div>
			<div className="flex py-1 items-center w-full max-w-[512px]">
				<span className="flex-grow border-t border-gray-dark"></span>
				<span className="flex-shrink mx-4 text-gray-400">o</span>
				<span className="flex-grow border-t border-gray-dark"></span>
			</div>
			<ButtonGoogle
				action={action}
				setInfoNotification={setInfoNotification}
				setIsOpenNotification={setIsOpenNotification}
			/>
			<ButtonFacebook
				action={action}
				setInfoNotification={setInfoNotification}
				setIsOpenNotification={setIsOpenNotification}
			/>
		</div>
	);
};
