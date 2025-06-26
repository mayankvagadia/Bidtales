import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const Hero = () => {
  const handleGetStartedClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServicesClick = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const servicesButton = document.querySelector('.services-button');
    if (servicesButton) {
      servicesButton.addEventListener('click', handleServicesClick);
    }

    return () => {
      if (servicesButton) {
        servicesButton.removeEventListener('click', handleServicesClick);
      }
    };
  }, []);
  const trustedCompanies = [
    "Microsoft",
    "Adobe",
    "Shopify",
    "Slack",
    "Dropbox",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Digital workspace"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-full px-6 py-2 mb-8">
          <span className="text-gray-300 text-sm font-medium">
            Leading Digital Marketing Agency
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Grow Your Business with{" "}
          <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Bidtales
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Transform Your Brand with Strategic Digital Marketing
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button 
            onClick={handleGetStartedClick}
            className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="bg-transparent text-white px-8 py-4 rounded-lg font-semibold border border-gray-600 hover:bg-white/10 transition-all duration-300 services-button">
            Our Services
          </button>
        </div>

        {/* Trusted By Section */}
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-6 font-medium">
            Trusted by Industry Leaders
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {trustedCompanies.map((company, index) => (
              <div
                key={index}
                className="text-gray-400 font-semibold text-lg hover:text-white transition-colors duration-300 cursor-pointer"
              >
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
