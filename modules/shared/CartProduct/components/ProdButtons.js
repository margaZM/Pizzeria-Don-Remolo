import Image from "next/image";

export const ProdButtons = ({quantity}) => {
	return (
		<div className="flex justify-between h-full">
			<div className="flex items-end gap-5">
				<Image
					className="cursor-pointer hover:translate-x-[-1px] active:translate-x-px"
					src={require('../../../../public/assets/icons/minus-btn.svg')}
					alt="minus-btn"
				/>
				<p className="text-[1.1rem] font-bold">{quantity || "1"}</p>
				<Image
					className="cursor-pointer hover:translate-x-[1px] active:translate-x-[-1px]"
					src={require('../../../../public/assets/icons/plus-btn.svg')}
					alt="plus-btn"
				/>
			</div>
			<div className="flex gap-2 items-end">
				<div className="w-[40px] h-[40px] pt-2">
					<Image
						className="cursor-pointer hover:translate-y-[-1px] active:translate-y-px"
						src={require('../../../../public/assets/icons/trash.svg')}
						alt="trash-btn"
					/>
				</div>
				<Image
					className="cursor-pointer hover:translate-y-[-1px] active:translate-y-px"
					src={require('../../../../public/assets/icons/edit.svg')}
					alt="edit-btn"
				/>
			</div>
		</div>
	);
};