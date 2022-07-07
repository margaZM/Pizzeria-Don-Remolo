const Modal = ({ children }) => {
	return (
		<div className="flex justify-center items-center w-screen h-screen top-0 left-0 bg-modal_bg animate-fade_in z-20 fixed overflow-hidden">
			<div className="relative flex justify-center items-center max-w-[640px] bg-white sm:rounded-xl md:min-w-lg md:min-h-min md:w-40">
				{children}
			</div>
		</div>
	);
};

export default Modal;
