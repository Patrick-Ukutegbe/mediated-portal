"use client";

import { createContext, useEffect, useState } from "react";
import { Theme, ThemeProviderProps } from "@/src/types";

type ThemeContextType = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: Theme.INDIVIDUAL,
  setTheme: (_state: Theme) => {},
});

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(Theme.INDIVIDUAL);

  useEffect(() => {
    // Get initial state from localStorage on client side
    const localTheme = localStorage.getItem("theme");

    if (localTheme) {
      setTheme(localTheme as Theme);
    }
  }, []);

  useEffect(() => {
    // Save to localStorage whenever userState changes
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export default ThemeProvider;
