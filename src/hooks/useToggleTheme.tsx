import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const useToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const setLightTheme = () => {
    setTheme("light");
  };

  const setDarkTheme = () => {
    setTheme("dark");
  };

  const setHighContrastTheme = () => {
    setTheme("high-contrast");
  };

  return {
    theme,
    setLightTheme,
    setDarkTheme,
    setHighContrastTheme,
  };
};

export default useToggleTheme;
