export const initFacebook = () => {
	window.fbAsyncInit = function () {
		FB.init({
			appId: '1273805316692082',
			cookie: true,
			xfbml: true,
			version: 'v1.0',
		});
		// FB.AppEvents.logPageView();
	};

	(function (d, s, id) {
		var js,
			fjs = d.getElementsByTagName(s)[0];
		if (d.getElementById(id)) {
			return;
		}
		js = d.createElement(s);
		js.id = id;
		js.src = 'https://connect.facebook.net/en_US/sdk.js';
		fjs.parentNode.insertBefore(js, fjs);
	})(document, 'script', 'facebook-jssdk');
};

export const cleanup = () => {
	(function (d, id) {
		var target = d.getElementById(id);
		if (target) {
			target.parentNode.removeChild(target);
		}
	})(document, 'facebook-jssdk');

	delete window.FB;
};
