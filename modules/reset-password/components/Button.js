import { defaultButtonStyle } from "../../home-header/styles/buttons_styles";

export const Button = ({ style, text, ...props }) => {
	return (
		<button type="button" className={`${defaultButtonStyle} ${style}`} {...props}>
			{text}
		</button>
	);
};