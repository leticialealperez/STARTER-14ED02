<<<<<<< HEAD
import React, { useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";
import { MeuContextoGlobal } from "../GlobalContext";
import { dark, light } from "./themes";
=======
import { useCallback, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalContext } from '../GlobalContext';
import { dark, light } from './themes';
>>>>>>> d2b53e28fa838f9d18a15c15d01e269c4efeb96b

interface DefautThemeProps {
  children: React.ReactNode;
}

function DefaultThemeApp({ children }: DefautThemeProps) {
<<<<<<< HEAD
  const [theme, setTheme] = useState<DefaultTheme>(light);

  const toggleTheme = useCallback(() => {
    console.log("Toggle useCallback");
    setTheme((prev) => (prev.title === "light" ? dark : light));
  }, []);

  return (
    <MeuContextoGlobal.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MeuContextoGlobal.Provider>
  );
=======
	const [theme, setTheme] = useState(light);

	const toggleTheme = useCallback(() => {
		setTheme((prev) => (prev.title === 'light' ? dark : light));
	}, []);

	return (
		<GlobalContext.Provider value={{ theme, toggleTheme }}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</GlobalContext.Provider>
	);
>>>>>>> d2b53e28fa838f9d18a15c15d01e269c4efeb96b
}

export default DefaultThemeApp;
