module.exports = {
	content: ['./pages/**/*.js', './components/**/*.js', './modules/**/*.{jsx,js}'],
	theme: {
		colors: {
			primary: '#e74423',
			secondary: '#f1f0de',
			white: '#ffffff',
			blue: '#0081bd',
			red: '#d20000',
			green: '#4caf50',
			'gray-dark': '#595959',
			gray: '#c5c5c5',
			'gray-light': '#e6e6e6',
			facebook: '#395185',
			yellow: 'rgb(250 204 21)',
			modal_bg: 'hsla(0, 0%, 20%, .30)',
			'transparent-bg': 'hsla(0, 0%, 70%, .30)'
		},
		fontFamily: {
			sans: ['Inter', 'sans-serif'],
		},
		fontSize: {
			xxs: '.85rem',
		},
		maxWidth: {
			xxs: '12rem',
		},
		minWidth: {
			sm: '24rem',
			md: '32rem',
			lg: '40rem',
			xl: '48rem',
		},
		extend: {
			animation: {
				fade_in: 'fade_in .2s ease forwards',
			},
			keyframes: {
				fade_in: {
					from: { opacity: '0' },
					to: { opacity: '1' },
				},
			},
			screens: {
				nav_mq: '1150px',
				desktop_bk: '902px',
			},
			boxShadow: {
				fab: '0px 0px 5px 1px rgba(0, 0, 0, 0.25)',
				button: '0px 4px 5px rgba(0, 0, 0, 0.3)',
			},
			gridTemplateColumns: {
				nav_desktop_layout: '10% 55% 25% 1fr',
			},
			backgroundImage: {
				gallery:
					"url('https://github.com/margaZM/Pizzeria-Don-Remolo/blob/main/public/assets/gallery/bg-hashtag.png?raw=true')",
			},
		},
		plugins: [],
	},
	variants: {
		extend: {
			opacity: ['disabled'],
			cursor: ['disabled'],
			backgroundColor: ['disabled', 'hover'],
			textColor: ['disabled'],
		},
	},
};
