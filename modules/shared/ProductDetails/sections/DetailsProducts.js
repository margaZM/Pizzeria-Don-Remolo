import { useCartValues } from '/hooks/useCartValues';
import { Notification } from '/modules/shared/Notification';
import { CartPlus } from '/modules/shared/ProductDetails/components/CartPlus.js';
import DetailsHeader from '/modules/shared/ProductDetails/components/DetailsHeader';
import { PickDough } from '/modules/shared/ProductDetails/components/PickDough';
import { PickDrink } from '/modules/shared/ProductDetails/components/PickDrink';
import { PickIngredients } from '/modules/shared/ProductDetails/components/PickIngredients';
import { PickSize } from '/modules/shared/ProductDetails/components/PickSize';

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
	} = useCartValues('productDetails');
	return (
		<form
			className="col-span-3 relative px-2"
			onChange={handleChange}
			onSubmit={handleSubmit}
		>
			<div className="max-h-[600px] overflow-auto">
				{isOpenNotification && (
					<Notification
						message={infoNotification.message}
						icon={infoNotification.icon}
						setIsOpenNotification={setIsOpenNotification}
						successDelay={2000}
					/>
				)}
				<DetailsHeader
					title="Tamaños"
					icon="pizza"
					iconTitle="Icono pizza"
					required={true}
				>
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
			</div>
			<div className="absolute z-50 bottom-0 right-0 bg-white h-16 border-t border-t-gray w-full rounded-br-xl flex justify-center items-center">
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
