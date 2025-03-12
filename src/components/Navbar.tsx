
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-lg',
        {
          'bg-background/80 shadow-sm': scrolled,
          'bg-transparent': !scrolled,
        }
      )}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-xl font-bold text-gradient">
            Mohd Anas
          </a>

          {/* Desktop menu */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-200 underline-animation"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden flex items-center"
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
              className="text-foreground/80 hover:text-primary font-medium py-2 transition-colors duration-200"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <div className="py-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
