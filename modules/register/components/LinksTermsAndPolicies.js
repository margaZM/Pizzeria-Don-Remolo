export const LinksTermsAndPolicies = () => {
	return (
		<div className="text-center text-[12px] lg:text-[13px]">
			<p>
				Al registrarse, aceptas nuestras{' '}
				<a
					className="text-primary hover:font-bold cursor-pointer"
					target="_blank"
					href="https://pizzeriadonremolo/terminos-privacidad"
					rel="noopener noreferrer"
				>
					Políticas de privacidad
				</a>{' '}
				y{' '}
				<a
					className="text-primary flex justify-center hover:font-bold cursor-pointer"
					target="_blank"
					href="https://pizzeriadonremolo/tyc"
					rel="noopener noreferrer"
				>
					Términos y condiciones
				</a>
			</p>
		</div>
	);
};
