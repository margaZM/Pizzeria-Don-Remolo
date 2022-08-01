import { OptionalOption } from "./OptionalOption";

export const PickDrink = () => {
	return (
		<>
			<OptionalOption label="Agua con gas" price="1.50" data-type="drinks" value="Agua con gas" />
			<OptionalOption label="Agua sin gas" price="1.50" data-type="drinks" value="Agua sin gas" />
			<OptionalOption label="Coca-Cola 250ml." price="1.50" data-type="drinks" value="Coca-Cola 250ml." />
			<OptionalOption label="Coca-Cola 1L." price="1.50" data-type="drinks" value="Coca-Cola 1L." />
			<OptionalOption label="Sprite 250ml." price="1.50" data-type="drinks" value="Sprite 250ml." />
			<OptionalOption label="Sprite 1L." price="1.50" data-type="drinks" value="Sprite 1L." />
			<OptionalOption label="Stella" price="1.50" data-type="drinks" value="Stella" />
			<OptionalOption label="Heineken" price="1.50" data-type="drinks" value="Heineken" />
		</>
	);
};