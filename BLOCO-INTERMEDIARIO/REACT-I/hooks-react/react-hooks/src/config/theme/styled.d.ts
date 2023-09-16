// import original module declarations
import "styled-components";

// and extend them!
<<<<<<< HEAD
declare module "styled-components" {
  export interface DefaultTheme {
    title: string;
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
=======
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
>>>>>>> d2b53e28fa838f9d18a15c15d01e269c4efeb96b
}
