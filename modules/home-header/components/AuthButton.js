import { useOnModalChange } from '../../../hooks/useOnModalChange';
import {
	defaultButtonStyle,
	loginButtonStyle,
	registerButtonStyle,
} from '../styles/buttons_styles';

const AuthButton = ({ authType, action, mobileMenu }) => {
	const { openModalDispatch } = useOnModalChange();
	return (
		<button
			className={`${mobileMenu ? 'w-full' : 'w-32'} ${defaultButtonStyle} ${
				authType === 'register' ? registerButtonStyle : loginButtonStyle
			}`}
			type="button"
			data-modal={authType}
			onClick={openModalDispatch}
		>
			{action}
		</button>
	);
};

export default AuthButton;
