import { DefaultTheme } from 'styled-components';

export const dark: DefaultTheme = {
	title: 'dark',
	fonts: ['Roboto', 'sans-serif'],
	fontSizes: {
		small: '1em',
		medium: '2em',
		large: '3em',
	},
	colors: {
		primary: '#5106b4',
		secondary: '#6e2dc4',
		backgroundColor: '#3a3a3a',
		fontColor: '#FFFF',
	},
};

export const light: DefaultTheme = {
	title: 'light',
	fonts: ['Roboto', 'sans-serif'],
	fontSizes: {
		small: '1em',
		medium: '2em',
		large: '3em',
	},
	colors: {
		primary: '#0d9bd3',
		secondary: '#6dcbf0',
		backgroundColor: '#FFFF',
		fontColor: '#3a3a3a',
	},
};

