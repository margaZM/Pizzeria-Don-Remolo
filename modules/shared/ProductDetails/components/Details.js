import { CartPlus } from "./CartPlus";
import DetailsHeader from "./DetailsHeader";
import { PickDough } from "./PickDough";
import { PickDrink } from "./PickDrink";
import { PickIngredients } from "./PickIngredients";
import { PickSize } from "./PickSize";

export const Details = () => {
	return (
		<form className="w-full h-max p-3 sm:w-[60%]">
			<DetailsHeader title="Tamaños" icon="pizza" iconTitle="Icono pizza" required={true}>
				<PickSize />
			</DetailsHeader>
			<DetailsHeader title="Elige la masa" icon="dough" iconTitle="Icono masa" required={true}>
				<PickDough />
			</DetailsHeader>
			<DetailsHeader title="Añade ingredientes" icon="ingredients" iconTitle="Icono ingredientes">
				<PickIngredients />
			</DetailsHeader>
			<DetailsHeader title="Añade bebidas" icon="drink" iconTitle="Icono bebidas">
				<PickDrink />
			</DetailsHeader>
			<div className="flex justify-center p-2">
				<div className="w-full max-w-[270px]">
					<button className="flex justify-between items-center gap-2 p-4 w-full h-[40px] text-white bg-primary rounded-[50px]" type="button">
						<CartPlus />
						<span>Agregar al carrito</span>
						<span>|</span>
						<span>$12.00</span>
					</button>
				</div>
			</div>
		</form>
	);
};