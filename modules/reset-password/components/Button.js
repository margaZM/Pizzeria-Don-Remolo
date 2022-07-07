import { defaultButtonStyle } from "../../home-header/styles/buttons_styles";

export const Button = ({ style, text }) => {
	return (
		<button type="button" className={`${defaultButtonStyle} ${style}`}>
			{text}
		</button>
	);
};