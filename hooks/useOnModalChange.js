import { useDispatch, useSelector } from 'react-redux';
import { handleModal } from '../redux/slices/modal/modalSlice';

export const useOnModalChange = () => {
	const dispatch = useDispatch();
	const modals = useSelector((state) => state.modal);
	const handleWindow = (e) => dispatch(handleModal(e.target ? e.target.dataset.modal : e));
	return { handleWindow, modals };
};