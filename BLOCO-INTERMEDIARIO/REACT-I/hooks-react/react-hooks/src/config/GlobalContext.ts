<<<<<<< HEAD
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
=======
import { createContext, useContext } from 'react';
import { DefaultTheme } from 'styled-components/dist/types';
import { dark } from './theme/themes';

interface GlobalContextType {
	theme: DefaultTheme;
	toggleTheme: () => void;
}

export const GlobalContext = createContext<GlobalContextType>({
	theme: dark,
	toggleTheme: () => {},
});

export const useGlobalContext = () => useContext(GlobalContext);
>>>>>>> d2b53e28fa838f9d18a15c15d01e269c4efeb96b
