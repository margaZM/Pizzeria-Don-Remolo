import { useField } from "formik";
import { forwardRef } from "react";

export const CodeInput = forwardRef((props, ref) => {
	const [field] = useField(props);

	return (
		<input ref={ref} maxLength="1" {...field} {...props} />
	);
});