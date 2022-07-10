import { CodeStep } from "./components/CodeStep";
import { MailStep } from "./components/MailStep";
import { NewPassStep } from "./components/NewPassStep";

const Main = () => {
	return (
		<div className="flex items-center w-full h-screen bg-white">
			<MailStep />
			{/* <CodeStep /> */}
			{/* <NewPassStep /> */}
		</div>
	);
};

export default Main;