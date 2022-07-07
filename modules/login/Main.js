import LoginForm from './components/LoginForm';
import HeaderForm from '../shared/HeaderForm';

const Main = () => {
	return (
		<div className="w-screen h-screen md:h-auto overflow-y-auto flex flex-col items-center md:py-8 px-4 md:px-24">
			<HeaderForm title="Inicio de sesión" />
			<LoginForm />
		</div>
	);
};

export default Main;
