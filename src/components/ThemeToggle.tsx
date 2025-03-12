
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

export function ThemeToggle({ forceHideBadge = false }: { forceHideBadge?: boolean }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className={cn(
      "inline-flex items-center gap-1.5 p-0.5 rounded-full border border-border",
      theme === "dark" ? "bg-gradient-to-r from-blue-900/50 to-purple-900/50" : "bg-gradient-to-r from-blue-100 to-purple-100"
    )}>
      <button
        onClick={() => setTheme("light")}
        className={cn(
          "rounded-full p-1.5 transition-all duration-200 ease-in-out",
          theme === "light" 
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" 
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Light mode"
      >
        <Sun className="w-4 h-4" />
        {!forceHideBadge && <span className="sr-only">Light</span>}
      </button>
      
      <button
        onClick={() => setTheme("dark")}
        className={cn(
          "rounded-full p-1.5 transition-all duration-200 ease-in-out",
          theme === "dark" 
            ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg" 
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-label="Dark mode"
      >
        <Moon className="w-4 h-4" />
        {!forceHideBadge && <span className="sr-only">Dark</span>}
      </button>
    </div>
  );
}
