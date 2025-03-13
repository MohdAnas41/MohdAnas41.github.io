
import { createContext, useContext, useEffect } from "react";

interface ThemeContextType {
  theme: "light";
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const theme = "light";

  useEffect(() => {
    // Set light theme on document element
    const root = window.document.documentElement;
    root.classList.remove("dark");
    root.classList.add("light");
    localStorage.setItem("theme", theme);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
