import { useCartValues } from '../../../../hooks/useCartValues';
import { Notification } from '../../Notification';
import { CartPlus } from './CartPlus';
import DetailsHeader from './DetailsHeader';
import { PickDough } from './PickDough';
import { PickDrink } from './PickDrink';
import { PickIngredients } from './PickIngredients';
import { PickSize } from './PickSize';

export const Details = () => {
	const {
		handleChange,
		handleSubmit,
		values,
		cartState,
		currentState,
		infoNotification,
		isOpenNotification,
		setIsOpenNotification,
	} = useCartValues({productDetailsContext: true});
	return (
		<form
			className="relative w-full h-max p-3 pb-[4rem] sm:w-[60%]"
			onChange={handleChange}
			onSubmit={handleSubmit}
		>
			{isOpenNotification && (
				<Notification
					message={infoNotification.message}
					icon={infoNotification.icon}
					setIsOpenNotification={setIsOpenNotification}
					successDelay={2000}
				/>
			)}
			<DetailsHeader title="Tamaños" icon="pizza" iconTitle="Icono pizza" required={true}>
				<PickSize />
			</DetailsHeader>
			<DetailsHeader
				title="Elige la masa"
				icon="dough"
				iconTitle="Icono masa"
				required={true}
			>
				<PickDough />
			</DetailsHeader>
			<DetailsHeader
				title="Añade ingredientes"
				icon="ingredients"
				iconTitle="Icono ingredientes"
			>
				<PickIngredients />
			</DetailsHeader>
			<DetailsHeader title="Añade bebidas" icon="drink" iconTitle="Icono bebidas">
				<PickDrink />
			</DetailsHeader>
			<div className="fixed bottom-0 sm:bottom-[30px] flex justify-center -mx-3 w-full bg-white sm:max-w-[370px] p-2">
				<div className="w-full max-w-[270px]">
					<button
						className="flex justify-between items-center gap-2 p-4 w-full h-[40px] text-white bg-primary rounded-[50px]"
						type="submit"
					>
						<CartPlus />
						<span>Agregar al carrito</span>
						<span>|</span>
						<span>
							$
							{currentState?.selectedProduct?.quantity
								? currentState?.selectedProduct?.quantity * +values.productPrice +
								  +currentState?.selectedProduct?.quantity * +values.additionalPrice
								: +cartState?.selectedEditItem?.quantity * +values.productPrice +
								  +cartState?.selectedEditItem?.quantity * +values.additionalPrice}
						</span>
					</button>
				</div>
			</div>
		</form>
	);
};