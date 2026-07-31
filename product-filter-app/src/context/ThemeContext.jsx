import { createContext, useState, useMemo, useEffect } from "react";

export const ThemeContext = createContext();

function ThemeProvider({ children }) {

  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const value = useMemo(() => ({
    theme,
    toggleTheme
  }), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;