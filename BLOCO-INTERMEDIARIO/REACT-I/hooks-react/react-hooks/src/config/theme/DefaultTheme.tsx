
import { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalContext } from '../GlobalContext';
import { dark, light } from './themes';


interface DefautThemeProps {
  children: React.ReactNode;
}

function DefaultThemeApp({ children }: DefautThemeProps) {

	const [theme, setTheme] = useState(light);

	const toggleTheme = useCallback(() => {
		setTheme((prev) => (prev.title === 'light' ? dark : light));
	}, []);

	return (
		<GlobalContext.Provider value={{ theme, toggleTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</GlobalContext.Provider>
	);

}

export default DefaultThemeApp;
