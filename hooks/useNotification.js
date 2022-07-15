import { useState } from "react";

export const useNotification = () => {
	const [isOpenNotification, setIsOpenNotification] = useState(false);
	const [infoNotification, setInfoNotification] = useState({
		icon: '',
		message: '',
	});
	return {
		isOpenNotification, setIsOpenNotification,
		infoNotification, setInfoNotification,
	};
};