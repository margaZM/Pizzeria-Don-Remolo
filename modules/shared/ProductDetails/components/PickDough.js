import { useRequest } from "../../../../hooks/useRequest";
import { RequiredOption } from "./RequiredOption";

export const PickDough = () => {
	const doughs = useRequest({request: "doughs"})
	return (
		<>
			{doughs &&
				doughs.map(dough => (
					<RequiredOption
						key={dough.id}
						label={dough.name}
						value={dough.name}
						name="dough"
						type="dough"
					/>
				))
			}
		</>
	);
};