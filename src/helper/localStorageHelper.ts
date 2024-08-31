import localforage from "localforage";

localforage.config({
  driver: localforage.LOCALSTORAGE,
  name: "saa",
});

export const getStorageTheme = async () => localforage.getItem("theme");

export const setStorageTheme = async (
  theme: "light" | "dark" | "high-contrast" | undefined
) => localforage.setItem("theme", theme);
