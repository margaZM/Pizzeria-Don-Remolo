import { Promotions } from "../../home/sections/promotions/Promotions";
import { Desserts } from "./desserts/Desserts";
import { Drinks } from "./drinks/Drinks";
import { Empanadas } from "./empanadas/Empanadas";
import { Pizzas } from "./pizzas/Pizzas";

export const CurrentView = () => {
	return (
		<>
			<Promotions />
			<Pizzas />
			<Empanadas />
			<Desserts />
			<Drinks />
		</>
	)
};