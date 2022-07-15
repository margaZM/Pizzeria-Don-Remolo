import { useField } from "formik";
import { forwardRef } from "react";
import { codeInputStyle } from "../styles/code-input-style";

export const CodeInput = forwardRef((props, ref) => {
	const [field] = useField(props);

	return (
		<input ref={ref} className={codeInputStyle} type="text" maxLength="1" autoComplete="off" {...field} {...props} />
	);
});