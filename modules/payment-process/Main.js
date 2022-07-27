import { OrderTypeContainer } from "./components/OrderTypeContainer";
import { PaymentProcessForm } from "./components/PaymentProcessForm";

const Main = () => {
	return (
		<section className="flex flex-col w-full min-h-screen sm:items-center">
			<OrderTypeContainer />
			<PaymentProcessForm />
		</section>
	);
};

export default Main;