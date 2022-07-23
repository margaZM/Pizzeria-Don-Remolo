import Image from 'next/image';
import { useRouter } from 'next/router';

export const NavLogo = () => {
	const router = useRouter();
	return (
		<div className="flex justify-center">
			<div
				className="nav-logo min-w-[96px] w-24 hover:cursor-pointer"
				onClick={() => router.push('/')}
			>
				<Image
					src={require('../../../public/assets/logo-fondo-blanco.svg')}
					alt="logo don remolo"
				/>
			</div>
		</div>
	);
};
