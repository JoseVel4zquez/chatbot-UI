/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
		colors: {
			'side-bar-bg': '#202123',
			'light-gray': 'rgba(255, 255, 255, 0.5)',
			'app-gray': '#343541',
			'feed-gray': '#444654',
			'feed-white': 'rgba(255, 255, 255, 0.8)',
		},
	},
	plugins: [],
}
