import React from 'react';
import { DefaultTheme, ThemeProvider } from 'styled-components';

const theme: DefaultTheme = {
	fonts: ['Roboto', 'sans-serif'],
	fontSizes: {
		small: '1em',
		medium: '2em',
		large: '3em',
	},
	colors: {
		dark: {
			primary: '#5106b4',
			secondary: '#6e2dc4',
			backgroundColor: '#3a3a3a',
			fontColor: '#FFFF',
		},
		light: {
			primary: '#0d9bd3',
			secondary: '#6dcbf0',
			backgroundColor: '#FFFF',
			fontColor: '#3a3a3a',
		},
	},
};

interface DefautThemeProps {
	children: React.ReactNode;
}

const DefaultThemeApp: React.FC<DefautThemeProps> = ({ children }) => (
	<ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default DefaultThemeApp;
