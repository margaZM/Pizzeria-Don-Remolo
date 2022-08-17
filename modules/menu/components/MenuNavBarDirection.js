export const MenuNavBarDirection = () => {
	return (
		<div className="row-start-1 flex justify-center w-full h-full p-2 px-3 bg-gray-light sm:row-start-auto sm:px-9">
			<div className="flex flex-col gap-1 w-full max-w-[850px] sm:flex-row sm:items-center sm:justify-between">
				<span>
					<span>Entrega a: </span>
					<span className="underline">*dirección de entrega*</span>
				</span>
				<span>Te atiende: *Pizzería x*</span>
			</div>
		</div>
	);
};