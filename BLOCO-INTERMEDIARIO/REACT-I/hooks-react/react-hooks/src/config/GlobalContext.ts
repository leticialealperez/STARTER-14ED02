import { createContext, useContext } from "react";
import { DefaultTheme } from "styled-components/dist/types";
import { light } from "./theme/themes";

interface IMeuContextoGlobal {
  theme: DefaultTheme;
  toggleTheme: () => void;
}

export const MeuContextoGlobal = createContext<IMeuContextoGlobal>({
  theme: light,
  toggleTheme: () => {},
});

export const useMeuContext = () => useContext(MeuContextoGlobal);
