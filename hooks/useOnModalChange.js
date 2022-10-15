import { useDispatch, useSelector } from 'react-redux';
import { openModal, closeModal } from '../redux/slices/modal/modalSlice';

export const useOnModalChange = () => {
	const dispatch = useDispatch();
	const modals = useSelector((state) => state.modal);
	const openModalDispatch = (e) => 
		dispatch(openModal(e.target ? e.target.dataset.modal : e));
	const closeModalDispatch = (e) =>
		dispatch(closeModal(e.target ? e.target.dataset.modal : e));
	return { openModalDispatch, closeModalDispatch, modals };
};