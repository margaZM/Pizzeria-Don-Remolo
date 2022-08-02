import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const NavItem = ({ page, title }) => {
	const [focus, setFocus] = useState(false);
	const router = useRouter();
	useEffect(() => {
		if(router.pathname === page) { return setFocus(true) }
		else if(router.pathname !== page) { return setFocus(false) }
		
	}, [router.pathname]);
	return (
		<li className={`hover:text-primary ${focus ? 'text-primary' : ''}`}>
			<Link href={page || '/'} className='font-sans'>{title.toUpperCase()}</Link>
		</li>
	);
};