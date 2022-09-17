export const categories = [
	'Sevicio en general',
	'Atención al cliente',
	'Servicio a domicilio y retiro en el local',
	'Transparencia',
	'Mejorar diseño web',
	'Velocidad y eficiencia',
];

const emailReg =
	/(?!^[.+&'_-]*@.*$)(^[_\w\d+&'-]+(\.[_\w\d+&'-]*)*@[\w\d-]+(\.[\w\d-]+)*\.(([\d]{1,3})|([\w]{2,}))$)/i;

export const validators = {
	comment: (value) => {
		let message = '';
		if (value?.length > 100) {
			message = 'Tu mensaje supera los 100 caracteres';
		}
		return message;
	},
	email: (value) => {
		let message = '';
		if (!value) {
			message = '';
		} else if (!emailReg.test(value)) {
			message = 'Introduce un correo electrónico válido por favor';
		}
		return message;
	},
};
