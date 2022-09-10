import { useEffect, useState } from 'react';
import { productServices } from '../../../../services/product-services/productServices';
import { OptionalOption } from "./OptionalOption";

export const PickIngredients = () => {
	const [ingredients, setIngredients] = useState(null);
	useEffect(() => {
		productServices.getIngredients()
			.then(res => setIngredients(res.data))
	}, []);
	return (
		<>
			{ingredients && ingredients.map(ingredient => (
				<OptionalOption
					key={ingredient.id}
					label={ingredient.name}
					price={ingredient.price}
					value={ingredient.name}
					data-id={ingredient.id}
					data-type="ingredients"
				/>
			))}
		</>
	);
};