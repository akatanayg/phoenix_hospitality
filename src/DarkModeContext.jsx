import { createContext, useEffect, useState, useContext } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark"); // Adds 'dark' to <html>
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark"); // Removes 'dark' from <html>
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]); // Triggers re-render on darkMode change

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const useDarkMode = () => useContext(DarkModeContext);
