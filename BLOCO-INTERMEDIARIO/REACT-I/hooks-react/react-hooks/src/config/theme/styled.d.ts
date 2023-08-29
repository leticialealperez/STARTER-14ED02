// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		fonts: Array<string>;
		fontSizes: {
			small: string;
			medium: string;
			large: string;
		};
		colors: {
			dark: {
				primary: string;
				secondary: string;
				backgroundColor: string;
				fontColor: string;
			};
			light: {
				primary: string;
				secondary: string;
				backgroundColor: string;
				fontColor: string;
			};
		};
	}
}
