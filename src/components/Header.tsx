import { useState, useEffect } from "react";
import { Menu } from "lucide-react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";

interface NavigationItem {
  name: string;
  href: string;
  section: string;
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Always show solid background on About page and ServiceDetails page
  const isAboutPage = location.pathname === "/about";
  const isContactPage = location.pathname === "/contact";
  const isServiceDetailsPage = location.pathname.startsWith("/services/");
  const shouldShowSolidBackground =
    isScrolled || isAboutPage || isServiceDetailsPage || isContactPage;

  const handleScroll = (section: string) => {
     if (section === "home") {
       if (location.pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  const navigation: NavigationItem[] = [
    { name: "Home", href: "/", section: "home" },
    { name: "About", href: "/about", section: "about" },
    { name: "Services", href: "/services", section: "services" },
    { name: "Contact", href: "/contact", section: "contact" },
  ];

  const servicesMenu = [
    { id: "web-development", name: "Web Development" },
    { id: "mobile-development", name: "Mobile Development" },
    { id: "ui-ux-design", name: "UI/UX Design" },
    { id: "performance-marketing", name: "Performance Marketing" },
    { id: "social-media-management", name: "Social Media Management" },
    { id: "email-whatsapp-marketing", name: "Email & WhatsApp Marketing" },
    { id: "seo", name: "Search Engine Optimization (SEO)" },
    { id: "creative-branding", name: "Creative & Branding Services" },
    { id: "influencer-marketing", name: "Influencer Marketing" },
    { id: "analytics-consulting", name: "Analytics & Consulting" },
  ];

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
            {navigation.map((item) =>
              item.name === "Services" ? (
                <div
                  key={item.name}
                  className={`relative group block px-3 py-2 transition-colors duration-200 ${
                    isActive(item.section)
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                >
                  <button
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    className={`flex items-center space-x-1 transition-colors duration-200 ${
                      isActive(item.section)
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-blue-400"
                    }`}
                  >
                    <span>{item.name}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
                        isServicesDropdownOpen ? "rotate-180" : "rotate-0"
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  <div
                    className={`absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 border border-gray-700 transform origin-top-right transition-all duration-200 ${
                      isServicesDropdownOpen
                        ? "scale-100 opacity-100 visible"
                        : "scale-95 opacity-0 invisible"
                    }`}
                    onMouseEnter={() => setIsServicesDropdownOpen(true)}
                    onMouseLeave={() => setIsServicesDropdownOpen(false)}
                  >
                    <div className="py-1">
                      {servicesMenu.map((service) => (
                        <RouterLink
                          key={service.id}
                          to={`/services/${service.id}`}
                          className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                        >
                          {service.name}
                        </RouterLink>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <RouterLink
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 transition-colors duration-200 ${
                    isActive(item.section)
                      ? "text-blue-400"
                      : "text-gray-300 hover:text-blue-400"
                  }`}
                  onClick={(e) => {
                    if (item.section === "home" && location.pathname === "/") {
                      e.preventDefault();
                      handleScroll(item.section);
                    } else {
                      navigate(item.href);
                    }
                  }}
                >
                  {item.name}
                </RouterLink>
              )
            )}
          </nav>
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
              {navigation.map((item) =>
                item.name === "Services" ? (
                  <div key={item.name} className="space-y-1">
                    <button
                      onClick={() =>
                        setIsServicesDropdownOpen(!isServicesDropdownOpen)
                      }
                      className={`w-full flex justify-between items-center px-3 py-2 transition-colors duration-200 ${
                        isActive(item.section)
                          ? "text-blue-400"
                          : "text-gray-300 hover:text-blue-400"
                      }`}
                    >
                      {item.name}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isServicesDropdownOpen ? "rotate-180" : "rotate-0"
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isServicesDropdownOpen && (
                      <div className="space-y-1">
                        {servicesMenu.map((service) => (
                          <RouterLink
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="block px-6 py-2 text-sm text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200"
                            onClick={() => {
                              setIsMenuOpen(false);
                              setIsServicesDropdownOpen(false);
                            }}
                          >
                            {service.name}
                          </RouterLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <RouterLink
                    key={item.name}
                    to={item.href}
                    className={`block px-3 py-2 transition-colors duration-200 ${
                      isActive(item.section)
                        ? "text-blue-400"
                        : "text-gray-300 hover:text-blue-400"
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setIsMenuOpen(false);
                      if (
                        item.section === "contact" ||
                        item.section === "home"
                      ) {
                        handleScroll(item.section);
                      } else {
                        navigate(item.href);
                      }
                    }}
                  >
                    {item.name}
                  </RouterLink>
                )
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
