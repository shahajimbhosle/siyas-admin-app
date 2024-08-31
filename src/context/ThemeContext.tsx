import { createContext, useEffect, useState } from "react";
import { CustomProvider, Loader } from "rsuite";
import { getStorageTheme, setStorageTheme } from "../helper/localStorageHelper";
import { ThemeContextType } from "../types";

export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

export const ThemeContextProvider = ({ children }: any) => {
  const [theme, setThemeToState] = useState<
    "light" | "dark" | "high-contrast" | undefined
  >("light");
  const [loadedFromStorage, setLoadedFromStorage] = useState(false);

  const setTheme = (theme: "light" | "dark" | "high-contrast" | undefined) => {
    setStorageTheme(theme);

    if (document.querySelector("meta[name='theme-color']")) {
      const metaTag: HTMLElement | null = document.querySelector(
        "meta[name='theme-color']"
      );

      if (metaTag instanceof HTMLMetaElement) {
        metaTag.content = theme === "light" ? "#ffffff" : "#0f131a";
      }
    }

    setThemeToState(theme);
  };

  useEffect(() => {
    const getThemeFromStorage = async () => {
      const storageTheme = await getStorageTheme();

      if (storageTheme) {
        setTheme(storageTheme);
      }
    };

    if (!loadedFromStorage) {
      getThemeFromStorage();
      setLoadedFromStorage(true);
    }
  }, [loadedFromStorage]);

  if (!loadedFromStorage) {
    return <Loader backdrop content="loading..." vertical />;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <CustomProvider theme={theme}>{children}</CustomProvider>
    </ThemeContext.Provider>
  );
};
