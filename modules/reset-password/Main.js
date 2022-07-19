import { useOnResetPassStep } from "../../hooks/useOnResetPassStep";
import { CodeStep } from "./components/CodeStep";
import { MailStep } from "./components/MailStep";
import { NewPassStep } from "./components/NewPassStep";

const Main = () => {
	const { currentState } = useOnResetPassStep();

	return (
		<div className="flex items-center w-full h-screen max-h-[500px] p-1 bg-white">
			{currentState.mailStep || <MailStep />}
			{currentState.mailStep && !currentState.codeStep
			? <CodeStep />
			: currentState.mailStep && currentState.codeStep 
			? <NewPassStep />
			: null 
			}
		</div>
	);
};

export default Main;