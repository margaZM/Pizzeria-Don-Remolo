import { useRouter } from "next/router";
import { useDispatch } from "react-redux"
import { handleStep } from "../../../redux/slices/reset-password/resetPasswordSlice";
import { registerButtonStyle } from "../../home-header/styles/buttons_styles";
import { Button } from "./Button";

export const BtnsContainer = ({ btn_2_text, step_3 }) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const handleRedirect = () => {
		dispatch(handleStep("resetSuccessful"));
		router.push("/");
	};
	return (
		<div className="btns-container flex justify-end items-end w-full h-full p-3">
			<div className="flex gap-3">
				<Button 
					style='max-w-[100px] min-h-[40px] text-[black] font-bold bg-transparent-bg border-none active:bg-white' 
					text='Cancelar'
					onClick={handleRedirect}
				/>
				<Button 
					type='submit' 
					style={`${registerButtonStyle} ${step_3 ? 'w-[200px]' : 'max-w-[81px]'} min-h-[40px]`} 
					text={btn_2_text}
				/>
			</div>
	</div>
	);
};