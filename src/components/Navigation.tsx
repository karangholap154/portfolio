import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home", isRoute: false },
  { name: "About", href: "#about", isRoute: false },
  { name: "Skills", href: "#skills", isRoute: false },
  { name: "Projects", href: "#projects", isRoute: false },
  { name: "Experience", href: "#experience", isRoute: false },
  { name: "Education", href: "#education", isRoute: false },
  { name: "Certifications", href: "#certifications", isRoute: false },
  { name: "Blog", href: "/blog", isRoute: true },
  { name: "Contact", href: "#contact", isRoute: false },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.filter(link => !link.isRoute).map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 pt-6" role="navigation" aria-label="Main navigation">
      <div className="container mx-auto px-1.5 md:px-6">
        {/* Desktop Navigation - Centered Pill */}
        <motion.div
          className="hidden md:flex items-center justify-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-card/80 backdrop-blur-lg border border-border rounded-full px-2 py-2 flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = link.isRoute 
                ? window.location.pathname === link.href
                : activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  aria-label={`Navigate to ${link.name} section`}
                  aria-current={isActive ? "page" : undefined}
                  className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-foreground text-background"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </motion.div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center justify-between">
          <motion.a
            href="#home"
            className="text-xl font-bold text-foreground"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            Karan
          </motion.a>

          <button
            className="text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden mt-4 bg-card/80 backdrop-blur-lg border border-border rounded-2xl p-4 flex flex-col gap-2"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  aria-label={`Navigate to ${link.name} section`}
                  className="text-muted-foreground hover:text-foreground transition-colors py-2 px-4 rounded-lg hover:bg-muted/50"
                >
                  {link.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
