import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { id: "philosophy", label: "Barakah" },
    { id: "community", label: "Jamaah" },
    { id: "token", label: "Token" },
    { id: "ramadhan", label: "Ramadhan" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-night-sky/90 backdrop-blur-md py-2 shadow-lg" 
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span 
              onClick={() => scrollToSection("hero")}
              className="text-2xl font-display font-bold cursor-pointer text-primary-foreground hover:text-gold transition-colors"
            >
              🌙 TOLY MUBARAK 🪙
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-primary-foreground hover:text-gold transition-colors font-body text-sm tracking-wide"
              >
                {link.label}
              </button>
            ))}
            
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border-gold text-gold hover:bg-gold hover:text-night-sky"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center space-x-3 md:hidden">
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="border border-gold text-gold p-2"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-primary-foreground focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-night-sky border-t border-primary-foreground/10">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="text-left py-2 text-primary-foreground hover:text-gold transition-colors font-body"
              >
                {link.label}
              </button>
            ))}
            <div className="pt-4 border-t border-primary-foreground/10">
              <a
                href="#community"
                className="block px-4 py-3 bg-primary text-primary-foreground rounded-full font-body font-semibold text-sm tracking-wide text-center hover:opacity-90 transition-opacity"
              >
                Join the Jamaah
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;