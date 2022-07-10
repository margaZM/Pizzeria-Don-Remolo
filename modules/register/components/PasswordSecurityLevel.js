export const PasswordSecurityLevel = ({ password }) => {
	return (
		<div>
			{password.length >= 8 && password.length <= 9 && (
				<div>
					<p className="text-xs">Seguridad:</p>
					<hr className="w-1/4 border-red border-4" />
				</div>
			)}

			{password.length >= 10 && password.length <= 12 && (
				<div>
					<p className="text-xs">Seguridad:</p>
					<hr className="w-1/2 border-yellow border-4" />
				</div>
			)}
			{password.length >= 13 && password.length <= 25 && (
				<div>
					<p className="text-xs">Seguridad:</p>
					<hr className="w-full border-green border-4" />
				</div>
			)}
			{password.length >= 26 && (
				<div>
					<p className="text-xs text-red text-[13.6px] pl-4">La contraseña supera los 25 caracteres</p>
				</div>
			)}
		</div>
	);
};
