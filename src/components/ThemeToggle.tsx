
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { cn } from "@/lib/utils";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="inline-flex items-center gap-2 p-1 rounded-full border border-border bg-background/80 backdrop-blur-sm">
      <label 
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer transition-all",
          theme === "light" ? "bg-primary text-primary-foreground font-medium" : "text-foreground/70 hover:text-foreground"
        )}
      >
        <input 
          type="radio" 
          name="theme" 
          value="light" 
          checked={theme === "light"} 
          onChange={() => setTheme("light")} 
          className="sr-only" 
        />
        <Sun className="w-4 h-4" />
        <span className="text-sm">Light</span>
      </label>
      
      <label 
        className={cn(
          "inline-flex items-center gap-2 px-3 py-1.5 rounded-full cursor-pointer transition-all",
          theme === "dark" ? "bg-primary text-primary-foreground font-medium" : "text-foreground/70 hover:text-foreground"
        )}
      >
        <input 
          type="radio" 
          name="theme" 
          value="dark" 
          checked={theme === "dark"} 
          onChange={() => setTheme("dark")} 
          className="sr-only" 
        />
        <Moon className="w-4 h-4" />
        <span className="text-sm">Dark</span>
      </label>
    </div>
  );
}
