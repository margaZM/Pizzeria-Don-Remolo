import { Type } from './components/Type';

export const Switch = ({ handleOrder, orderType }) => {
	return (
		<div className="grid grid-cols-2 gap-5 w-[280px] h-12 border border-primary rounded-[50px] p-[1px]">
			<Type
				title="A domicilio"
				order="home"
				fn={handleOrder}
				styles={orderType.home && 'text-white border bg-primary'}
			/>
			<Type
				title="Retiro en local"
				order="local"
				fn={handleOrder}
				styles={orderType.local && 'text-white border bg-primary'}
			/>
		</div>
	);
};
