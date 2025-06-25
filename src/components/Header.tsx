import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link as RouterLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Remove the unused function handleLinkClick

interface NavigationItem {
  name: string;
  href: string;
  section: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();

  // Always show solid background on About page
  const isAboutPage = location.pathname === "/about";
  const shouldShowSolidBackground = isScrolled || isAboutPage;

  const navigation: NavigationItem[] = [
    { name: "Home", href: "/", section: "home" },
    { name: "About", href: "/about", section: "about" },
    { name: "Services", href: "/#services", section: "services" },
    { name: "Contact", href: "/#contact", section: "contact" },
  ];

  const handleTellUsClick = (
    e: React.MouseEvent,
    sectionId: string,
    sectionName: string
  ) => {
    e.preventDefault();
    // Always scroll to the section
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionName);
    } else {
      // If element not found, navigate to home page
      window.location.href = `/#${sectionId}`;
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (section: string) => {
    if (location.pathname === "/about") {
      return section === "about";
    }
    return window.location.hash === `#${section}`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        shouldShowSolidBackground
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
              <RouterLink
                key={item.name}
                to={item.href}
                className={`transition-colors duration-200 ${
                  isActive(item.section)
                    ? "text-blue-400"
                    : "text-gray-300 hover:text-blue-400"
                }`}
                onClick={(e) => {
                  setIsMenuOpen(false);
                  if (item.section === "services") {
                    handleTellUsClick(e, "services", "services");
                  } else if (item.section === "contact") {
                    handleTellUsClick(e, "contact", "contact");
                  }
                }}
              >
                {item.name}
              </RouterLink>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (location.pathname === "/about") {
                  window.location.href = "/#tell-us";
                } else {
                  const tellUsElement = document.getElementById("tell-us");
                  if (tellUsElement) {
                    tellUsElement.scrollIntoView({ behavior: "smooth" });
                    setActiveSection("tell-us");
                  }
                }
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-white"
          >
            <span className="sr-only">Open navigation</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <RouterLink
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    activeSection === item.section
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                  onClick={() => {
                    setActiveSection(item.section);
                    setIsMenuOpen(false);
                  }}
                >
                  {item.name}
                </RouterLink>
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
