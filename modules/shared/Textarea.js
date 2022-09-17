import React from 'react';
import PropTypes from 'prop-types';

export const Textarea = ({ value, onChange, onBlur, onFocus }) => {
	return (
		<textarea
			className="w-full h-44"
			name={value}
			value={value}
			placeholder="Cuéntanos qué te gustó de tu experiencia"
			onChange={onChange}
			onBlur={onBlur}
			onFocus={onFocus}
		></textarea>
	);
};

// Textarea.propTypes = {
// 	value: PropTypes.string,
// 	onChange: PropTypes.func,
// 	onBlur: PropTypes.number,
// 	onFocus: PropTypes.func,
// };
