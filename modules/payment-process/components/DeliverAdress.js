import Image from "next/image";

export const DeliverAdress = () => {
	return (
		<div className="flex flex-col gap-2">
			<h6 className="text-[1.1rem] font-bold">Dirección de entrega</h6>
			<div className="flex justify-between">
				<span>Calle Falsa 123</span>
				<Image
					className="cursor-pointer active:translate-y-[-1px]"
					src={require('../../../public/assets/icons/edit.svg')}
					alt="edit-btn"
				/>
			</div>
		</div>
	);
};