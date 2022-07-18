import { useRouter } from 'next/router';

export const useRedirect = () => {
	const router = useRouter();
	const handleRedirect = (e) => {
		let path = e.target ? e.target.dataset.path : e;
		router.push(path);
	};
	return { handleRedirect };
};