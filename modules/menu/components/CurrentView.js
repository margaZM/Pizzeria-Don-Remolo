import { Promotions } from "../../home/sections/promotions/Promotions";
import { Empanadas } from "./empanadas/Empanadas";
import { Pizzas } from "./pizzas/Pizzas";

export const CurrentView = () => {
	return (
		<>
			<Promotions />
			<Pizzas />
			<Empanadas />
		</>
	)
};