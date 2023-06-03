import { createContext, useState } from "react";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import * as eva from "@eva-design/eva";

import dark from "../themes/dark.json";
import light from "../themes/light.json";
import customMapping from "../themes/mapping.json";

type Theme = "light" | "dark";
type ThemeContextProps = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext({} as ThemeContextProps);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");
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
          theme={themes[theme]}
          customMapping={customMapping as any}
        >
          {children}
        </ApplicationProvider>
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
