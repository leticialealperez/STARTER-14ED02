import React, { useCallback, useState } from "react";
import { ThemeProvider } from "styled-components";
import { DefaultTheme } from "styled-components/dist/types";
import { MeuContextoGlobal } from "../GlobalContext";
import { dark, light } from "./themes";

interface DefautThemeProps {
  children: React.ReactNode;
}

function DefaultThemeApp({ children }: DefautThemeProps) {
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
}

export default DefaultThemeApp;
