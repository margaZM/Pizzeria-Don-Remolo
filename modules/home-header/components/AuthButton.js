import { useOnModalChange } from "../../../hooks/useOnModalChange";
import { defaultButtonStyle, loginButtonStyle, registerButtonStyle } from "../styles/buttons_styles";

const AuthButton = ({ authType, action, mobileMenu }) => {
	const { handleWindow } = useOnModalChange();
		return (
			<button 
				className={`${mobileMenu ? "w-full" : "w-32"} ${defaultButtonStyle} ${authType === "register" ? registerButtonStyle : loginButtonStyle}`}
				type="button" 
				data-modal={authType} 
				onClick={handleWindow}>
					{ action }
				</button>
			);
};

export default AuthButton;