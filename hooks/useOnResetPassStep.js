import { useDispatch, useSelector } from "react-redux";
import { handleStep } from "../redux/slices/reset-password/resetPasswordSlice";

export const useOnResetPassStep = () => {
	const dispatch = useDispatch();
	const currentState = useSelector((state) => state.resetPassword);
	const handleChangeStep = (step) => dispatch(handleStep(step));
	return {
		handleChangeStep,
		currentState,
	};
};