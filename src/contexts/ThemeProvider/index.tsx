import { createContext, ReactNode, useState } from 'react';

import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';

import dark from '../../themes/dark.json';
import light from '../../themes/light.json';
import customMapping from '../../themes/mapping.json';

type Theme = 'light' | 'dark';
type ThemeContextProps = {
	theme: Theme;
	setTheme: (theme: Theme) => void;
};
type ThemeProviderProps = {
	children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextProps);

ApplicationProvider['defaultProps'] = {
	customMapping,
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	const [theme, setTheme] = useState<Theme>('light');
	const themes = {
		light,
		dark,
	};

	return (
		<>
			<IconRegistry icons={EvaIconsPack} />

			<ThemeContext.Provider value={{ theme, setTheme }}>
				<ApplicationProvider
					{...eva}
					theme={{ ...eva[theme], ...themes[theme] }}
				>
					{children}
				</ApplicationProvider>
			</ThemeContext.Provider>
		</>
	);
};

export default ThemeProvider;
