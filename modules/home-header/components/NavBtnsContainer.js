import { useDispatch, useSelector } from "react-redux";
import { detectUser, selectUser } from "../../../redux/slices/auth";
import { handleModal } from "../../../redux/slices/modal/modalSlice";
import { logout } from '../../../redux/slices/auth/index';
import LoginForm from '../../login/Main';
import RegisterForm from '../../register/Main';
import Modal from "../../shared/Modal";
import { defaultButtonStyle, loginButtonStyle, registerButtonStyle } from "../styles/buttons_styles";
import { useEffect } from "react";

export const NavBtnsContainer = () => {
	const isUser = useSelector(selectUser);
	const isLogin = useSelector((state) => state.modal.login);
	const isRegister = useSelector((state) => state.modal.register);
	const dispatch = useDispatch();

	const handleLoginModal = (e) => dispatch(handleModal(e.target.dataset.modal));
	const handleRegisterModal = (e) => dispatch(handleModal(e.target.dataset.modal));
	const handleLogout = () => dispatch(logout());

	useEffect(() => {
		dispatch(detectUser());
		console.log(isUser)
	}, [dispatch]);

	return (
		<>
			<div className="flex flex-col justify-center items-center gap-2 nav-btns-container desktop_bk:flex-row">
				{!isUser?.token 
					? 
						<>
							<button className={`${defaultButtonStyle} ${loginButtonStyle}`} type="button" data-modal="login" onClick={handleLoginModal}>
								Ingresar
							</button>
							<button className={`${defaultButtonStyle} ${registerButtonStyle}`} type="button" data-modal="register" onClick={handleRegisterModal}>
								Registrarse
							</button>
						</>
					: 
						<>
							<p> { isUser?.name } </p>
							<button className={`${defaultButtonStyle} ${registerButtonStyle}`} type="button" data-modal="register" onClick={handleLogout}>
								Cerrar sesión
							</button>
						</>
				}
			</div>
			{isLogin && <Modal> <LoginForm /> </Modal>}
			{isRegister && <Modal> <RegisterForm /> </Modal>}
		</>
	);
};