import React, { useState, useEffect, useMemo } from "react";
import { Menu, X } from "lucide-react";

interface NavigationItem {
  name: string;
  href: string;
  section: string;
}

interface HeaderProps {
  sectionRefs: {
    [key: string]: React.RefObject<HTMLElement>;
  };
}

const Header = ({ sectionRefs }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  const memoizedSectionRefs = useMemo(() => sectionRefs, [sectionRefs]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Check which section is currently visible
      let currentSection = 'home';
      let minDistance = Infinity;
      
      Object.entries(memoizedSectionRefs).forEach(([key, ref]) => {
        const element = ref.current;
        if (element) {
          const rect = element.getBoundingClientRect();
          const distance = Math.abs(rect.top);
          
          // Check if this section is closer to the top than the current closest
          if (distance < minDistance && rect.top <= 150 && rect.top >= -150) {
            currentSection = key;
            minDistance = distance;
          }
        }
      });
      
      // If no section is found within the visible range, use the first visible section
      if (currentSection === 'home') {
        Object.entries(memoizedSectionRefs).forEach(([key, ref]) => {
          const element = ref.current;
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top >= 0 && rect.top < window.innerHeight) {
              currentSection = key;
              return;
            }
          }
        });
      }
      
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [memoizedSectionRefs]); // Add sectionRefs to dependencies

  const navigation: NavigationItem[] = [
    { name: "Home", href: "#home", section: "home" },
    { name: "Services", href: "#services", section: "services" },
    { name: "About", href: "#about", section: "about" },
    { name: "Case Studies", href: "#case-studies", section: "caseStudies" },
    { name: "Blog", href: "#blog", section: "blog" },
    { name: "Contact", href: "#contact", section: "contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-900/95 backdrop-blur-sm shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">BidTales</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`transition-colors duration-200 ${
                  activeSection === item.section ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  setActiveSection(item.section);
                  setIsMenuOpen(false);
                  
                  // Scroll to the section
                  const element = memoizedSectionRefs[item.section as keyof typeof memoizedSectionRefs]?.current;
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-white"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    activeSection === item.section ? "text-blue-400" : "text-gray-300 hover:text-blue-400"
                  }`}
                  onClick={() => {
                    setActiveSection(item.section);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </a>
              ))}
              <button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg">
                Get a Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
