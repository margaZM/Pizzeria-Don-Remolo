import { useOnModalChange } from '../../../hooks/useOnModalChange';
import {
	defaultButtonStyle,
	loginButtonStyle,
} from '../../home-header/styles/buttons_styles';

export const HeaderRightSide = () => {
	const { openModalDispatch } = useOnModalChange();
	return (
		<article className="flex justify-end items-center">
			<button
				className={`${defaultButtonStyle} ${loginButtonStyle} bg-transparent`}
				type="button"
				data-modal="login"
				onClick={openModalDispatch}
			>
				Ingresar
			</button>
		</article>
	);
};
