import { useRouter } from 'next/router';

export const useRedirect = () => {
	const router = useRouter();
	const handleRedirect = (e) => {
		let path = e.target.dataset.path;
		router.push(path);
	};
	return { handleRedirect };
};