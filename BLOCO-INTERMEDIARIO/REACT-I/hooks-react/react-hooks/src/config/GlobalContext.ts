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

