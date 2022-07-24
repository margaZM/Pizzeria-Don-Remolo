import { useOnModalChange } from "../../../hooks/useOnModalChange";
import { defaultButtonStyle, loginButtonStyle } from "../../home-header/styles/buttons_styles";

export const HeaderRightSide = () => {
	const { handleWindow } = useOnModalChange();
	return (
		<article className="flex justify-end items-center">
			<button
				className={`${defaultButtonStyle} ${loginButtonStyle} bg-transparent`}
				type="button"
				data-modal="login"
				onClick={handleWindow}
				>
				Ingresar
			</button>
		</article>
	);
};