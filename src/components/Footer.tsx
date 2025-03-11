
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#home" className="text-xl font-bold text-gradient">
              Mohd Anas
            </a>
            <p className="mt-2 text-foreground/70">
              Data Scientist & Analyst
            </p>
          </div>
          
          <div className="flex items-center">
            <button
              onClick={scrollToTop}
              className="bg-white hover:bg-gray-100 text-primary p-3 rounded-full shadow-md transition-colors duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-foreground/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Mohd Anas. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
