/** @type {import('next').NextConfig} */
const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');
const nextConfig = {
	reactStrictMode: true,
};

module.exports = (phase) => {
	const isDevelopment = phase === PHASE_DEVELOPMENT_SERVER;
	const env = {
		WEB_API: isDevelopment
			? 'http://localhost:44390'
			: 'https://donremolo.azurewebsites.net/',
		NEXT_PUBLIC_GOOGLE_MAPS_ID: process.env.NEXT_PUBLIC_GOOGLE_MAPS_ID,
		NEXT_PUBLIC_GOOGLE_CLIENT_ID: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
	};
	return {
		nextConfig,
		env,
	};
};
