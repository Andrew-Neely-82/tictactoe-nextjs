import { createContext, useEffect, useState } from "react";

const DarkModeContext = createContext();

const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Retrieve the darkMode state from local storage on page load
    const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    if (storedDarkMode !== null) {
      setDarkMode(storedDarkMode);
    } else {
      // If no preference is stored in local storage, set based on user's preferred color scheme
      const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
      setDarkMode(prefersDarkMode);
    }
  }, []);

  // Store the current state in local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  return <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>{children}</DarkModeContext.Provider>;
};

export { DarkModeContext, DarkModeProvider };
