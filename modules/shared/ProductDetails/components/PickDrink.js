import { useRequest } from '../../../../hooks/useRequest';
import { OptionalOption } from './OptionalOption';

export const PickDrink = () => {
	const drinks = useRequest({
		request: 'drinks',
		pageSize: 11,
	});
	console.log(drinks);
	return (
		<>
			{drinks &&
				drinks.map((drink) => (
					<OptionalOption
						key={drink.id}
						label={drink.name}
						value={drink.name}
						price={drink.price}
						data-type="drinks"
						data-id={drink.id}
					/>
				))}
		</>
	);
};
