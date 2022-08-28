import { useRequest } from "../../../../hooks/useRequest";
import { RequiredOption } from "./RequiredOption";

export const PickSize = () => {
	const sizes = useRequest({request: "sizes"});
	return (
		<>
			{sizes &&
				sizes.map(size => (
					<RequiredOption
						key={size.id}
						label={size.name} 
						value={size.name}
						price={size.price}
						name="size"
						type="sizes"
					/>
				))
			}
		</>
	);
};