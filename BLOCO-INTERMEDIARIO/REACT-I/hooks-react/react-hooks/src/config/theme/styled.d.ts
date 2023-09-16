// import original module declarations
import "styled-components";

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		title: 'dark' | 'light';
		fonts: Array<string>;
		fontSizes: {
			small: string;
			medium: string;
			large: string;
		};
		colors: {
			primary: string;
			secondary: string;
			backgroundColor: string;
			fontColor: string;
		};
	}

}
