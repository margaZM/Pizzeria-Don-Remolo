import RegisterForm from './components/RegisterForm';
import HeaderForm from '../shared/HeaderForm';

const Main = () => {
	return (
		<div className="w-screen h-screen md:h-auto overflow-y-auto flex flex-col items-center px-4 lg:py-4 md:px-24">
			<HeaderForm title="Regístrate para una mejor experiencia" />
			<RegisterForm />
		</div>
	);
};

export default Main;
