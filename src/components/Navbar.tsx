
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';
import { useTheme } from '@/context/ThemeContext';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Blog', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        {
          'bg-background/90 shadow-md backdrop-blur-lg': scrolled,
          [theme === 'dark' ? 'bg-gradient-to-r from-gray-900/80 to-gray-800/80 backdrop-blur-lg' : 'bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-lg']: !scrolled,
        }
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a href="#home" className={cn(
              "text-xl font-bold",
              theme === "dark" ? "text-gradient-dark" : "text-gradient"
            )}>
              Mohd Anas
            </a>
            <ThemeToggle forceHideBadge={true} />
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "font-medium transition-colors duration-200 underline-animation",
                  theme === "dark" 
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-700 hover:text-blue-600"
                )}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile menu button */}
            <button 
              className="flex items-center"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <div className="space-y-2">
                <span className={cn("block w-8 h-0.5 bg-foreground transition-all duration-300", {
                  "rotate-45 translate-y-1.5": mobileMenuOpen,
                })}></span>
                <span className={cn("block w-8 h-0.5 bg-foreground transition-all duration-300", {
                  "opacity-0": mobileMenuOpen,
                })}></span>
                <span className={cn("block w-8 h-0.5 bg-foreground transition-all duration-300", {
                  "-rotate-45 -translate-y-1.5": mobileMenuOpen,
                })}></span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn(
        "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
        {
          "max-h-screen py-4 bg-background/95": mobileMenuOpen,
          "max-h-0": !mobileMenuOpen,
        }
      )}>
        <nav className="flex flex-col space-y-4 px-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={cn(
                "font-medium py-2 transition-colors duration-200",
                theme === "dark" 
                  ? "text-gray-300 hover:text-blue-400"
                  : "text-gray-700 hover:text-blue-600"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
