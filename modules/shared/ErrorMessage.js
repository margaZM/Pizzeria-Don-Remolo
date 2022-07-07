import Image from 'next/image';

export const ErrorMessage = ({ message }) => {
	return (
		<div className=" pl-4 -mt-3 flex items-center gap-2">
			<Image src={require('../../public/assets/icons/icon-error.svg')} alt="error-icon" />
			<span className="text-red text-xxs">{message}</span>
		</div>
	);
};
