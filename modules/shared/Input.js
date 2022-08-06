import { useField, ErrorMessage } from 'formik';

export const Input = ({ label, width, ...props }) => {
	const [field, data] = useField(props);
	return (
		<div className={width ? width : 'max-w-[512px]'}>
			<label htmlFor={field.name}> {label} </label>
			<input
				type="text"
				autoComplete="off"
				className={`w-full ${data.touched && data.error && 'border-red'}`}
				{...field}
				{...props}
			/>
			<ErrorMessage name={field.name}>
				{(msg) => <span className="text-red text-xxs pl-4">{msg}</span>}
			</ErrorMessage>
		</div>
	);
};
