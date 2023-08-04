/* eslint-disable @typescript-eslint/no-unused-vars */

import { DefaultTheme, ThemeProvider } from 'styled-components';

// definição do tema
const meuTemaDark: DefaultTheme = {
	bgColor: '#3a3a3a',
	colorFont: 'white',
	colorTitulo: 'purple',
	btnColor: 'purple',
};

const meuTemaLight: DefaultTheme = {
	bgColor: '#FFFF',
	colorFont: '#3a3a3a',
	colorTitulo: '#00FFFF',
	btnColor: '#00FFFF',
};

interface TemaPadraoProps {
	children: React.ReactNode;
}
// componente que precisará ser utilizado na app
function TemaPadrao(props: TemaPadraoProps) {
	return <ThemeProvider theme={meuTemaDark}>{props.children}</ThemeProvider>;
}

export default TemaPadrao;
