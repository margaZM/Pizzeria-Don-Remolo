import { useOnModalChange } from "../../../hooks/useOnModalChange";
import { defaultButtonStyle, loginButtonStyle, registerButtonStyle } from "../styles/buttons_styles";

const AuthButton = ({ authType, action }) => {
	const { handleWindow } = useOnModalChange();
		return (
			<button 
				className={`${defaultButtonStyle} ${authType === "register" ? registerButtonStyle : loginButtonStyle}`}
				type="button" 
				data-modal={authType} 
				onClick={handleWindow}>
					{ action }
				</button>
			);
};

export default AuthButton;