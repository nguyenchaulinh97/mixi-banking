import React, {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";
import storageKey from "../utils/storage-key";

export type ThemeState = "light" | "dark";

export type AppThemeContext = {
  currentTheme: ThemeState;
  toggleTheme(): void;
};

const AppThemeContexts = createContext<AppThemeContext | null>(null);

export const AppThemeProvider = ({ children }: PropsWithChildren<unknown>) => {
  const [currentTheme, setCurrentTheme] = useState<ThemeState>(() => {
    const storedTheme = localStorage.getItem(storageKey("theme")) as ThemeState;
    return storedTheme ? JSON.parse(storedTheme) : "dark";
  });

  const toggleTheme = useCallback(() => {
    setCurrentTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      localStorage.setItem(storageKey("theme"), JSON.stringify(newTheme));

      return newTheme;
    });
  }, []);

  const value = React.useMemo(
    () => ({
      currentTheme,
      toggleTheme,
    }),
    [currentTheme, toggleTheme]
  );

  return (
    <AppThemeContexts.Provider value={value}>
      {children}
    </AppThemeContexts.Provider>
  );
};

const useAppTheme = (): AppThemeContext => {
  const context = useContext(AppThemeContexts);

  if (!context) {
    throw new Error(`useAppTheme must be used within an AppThemeProvider`);
  }

  return context;
};

export default useAppTheme;
