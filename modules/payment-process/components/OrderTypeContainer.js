import { useState } from "react";
import { OrderType } from "../../home/components/Hero/OrderType";

export const OrderTypeContainer = () => {
	const [orderType, setOrderType] = useState({
		home: true,
		local: false,
	});
	const handleOrder = (e) => {
		if(e.target.dataset.order === 'home') setOrderType({ home: true, local: false })
		else if(e.target.dataset.order === 'local') setOrderType({ home: false, local: true })
	};
	return (
		<article className="flex justify-center items-center w-full max-w-[685px] h-full p-3 desktop_bk:justify-start">
				<div className="grid grid-cols-2 gap-5 w-[280px] h-12 border border-primary rounded-[50px] p-[1px]">
					<OrderType 
						title='A domicilio'
						order='home'
						fn={handleOrder}
						styles={orderType.home && 'text-white border bg-primary'}
					/>
					<OrderType 
						title='Retiro en local'
						order='local'
						fn={handleOrder}
						styles={orderType.local && 'text-white border bg-primary'}
					/>
				</div>
			</article>
	);
};