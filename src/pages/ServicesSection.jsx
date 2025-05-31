import React, { useState, useEffect, useRef } from "react";

const ServicesSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [exitingCards, setExitingCards] = useState(new Set());
  const servicesRef = useRef(null);
  const cardRefs = useRef([]);

  const services = [
    {
      id: "app",
      icon: "📱",
      title: "App Development",
      description:
        "As a leading IT development company in Jaipur, we scale your reach and traffic with high-performing mobile applications for both Android and iOS, designed for next-level user experience and business growth.",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      id: "web",
      icon: "💻",
      title: "Web Development",
      description:
        "As a top IT development services, we creating a strong online presence with the latest, cutting-edge, responsive, and SEO-friendly site increases user engagement and lowers bounce rates.",
      gradient: "from-orange-400 to-red-500",
    },
    {
      id: "mean",
      icon: "🛡️",
      title: "MEAN Stack Development",
      description:
        "We are dominant IT development company in India, our solutions are created using time-tested practices and industry-accepted methodologies, which bring enriched user experiences.",
      gradient: "from-purple-500 to-pink-400",
    },
    {
      id: "ecommerce",
      icon: "🛒",
      title: "E-commerce Development",
      description:
        "IT development company help launch a feature-rich e-commerce platform with advanced functionalities like payment gateway integration, inventory management, and user-friendly design.",
      gradient: "from-green-400 to-green-300",
    },
    {
      id: "ui",
      icon: "🎨",
      title: "UI/UX Development",
      description:
        "A great user experience is crucial to an online presence. Our IT development services in Jaipur, India emphasize intuitive designs, which enhance usability and user engagement of UI/UX.",
      gradient: "from-pink-500 to-pink-300",
    },
    {
      id: "crm",
      icon: "⚙️",
      title: "CRM Solutions",
      description:
        "As a trusted IT Development company in India, we streamline customer interactions with our advanced CRM solutions, which help businesses manage leads and automate workflows while improving customer relationships.",
      gradient: "from-yellow-400 to-yellow-200",
    },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: [0, 0.2, 0.8, 1],
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const cardIndex = parseInt(entry.target.dataset.index);

        if (entry.intersectionRatio >= 0.8) {
          // Card is mostly visible - add entry animation
          setVisibleCards((prev) => new Set([...prev, cardIndex]));
          setExitingCards((prev) => {
            const newSet = new Set(prev);
            newSet.delete(cardIndex);
            return newSet;
          });
        } else if (
          entry.intersectionRatio <= 0.2 &&
          entry.intersectionRatio > 0
        ) {
          // Card is 20% hidden - add exit animation
          setExitingCards((prev) => new Set([...prev, cardIndex]));
          setVisibleCards((prev) => {
            const newSet = new Set(prev);
            newSet.delete(cardIndex);
            return newSet;
          });
        } else if (entry.intersectionRatio === 0) {
          // Card is completely out of view - reset to initial state
          setVisibleCards((prev) => {
            const newSet = new Set(prev);
            newSet.delete(cardIndex);
            return newSet;
          });
          setExitingCards((prev) => {
            const newSet = new Set(prev);
            newSet.delete(cardIndex);
            return newSet;
          });
        }
      });
    }, observerOptions);

    // Observe all service cards
    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  const ServiceCard = ({ service, index }) => {
    const isVisible = visibleCards.has(index);
    const isExiting = exitingCards.has(index);

    const cardClasses = `
      relativez overflow-hidden rounded-3xl p-8 text-center
      bg-white bg-opacity-5 backdrop-blur-lg border border-white border-opacity-10
      transition-all duration-700 ease-out transform-gpu
      hover:scale-105 hover:-translate-y-3 hover:shadow-2xl hover:border-opacity-20
      ${!isVisible && !isExiting ? "translate-y-20 scale-75 opacity-0" : ""}
      ${isVisible ? "translate-y-0 scale-100 opacity-100" : ""}
      ${isExiting ? "-translate-y-12 scale-90 opacity-0 blur-sm" : ""}
    `;

    const iconClasses = `
      w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center text-4xl
      bg-gradient-to-br ${service.gradient} transition-all duration-400
      hover:scale-110 hover:rotate-12 hover:shadow-lg
    `;

    return (
      <div
        ref={(el) => (cardRefs.current[index] = el)}
        data-index={index}
        className={cardClasses}
        style={{
          transitionDelay: `${index * 100}ms`,
        }}
      >
        {/* Animated top border */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${
            service.gradient
          } transform transition-transform duration-800 ${
            isVisible ? "translate-x-0" : "-translate-x-full"
          }`}
        ></div>

        <div className={iconClasses}>{service.icon}</div>

        <h3
          className={`text-2xl font-bold mb-5 transition-all duration-300 ${
            isVisible
              ? "hover:bg-gradient-to-r hover:from-red-400 hover:to-blue-400 hover:bg-clip-text hover:text-transparent"
              : ""
          }`}
        >
          {service.title}
        </h3>

        <p className="text-gray-300 leading-relaxed opacity-90">
          {service.description}
        </p>
      </div>
    );
  };

  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800">
      {/* Services Section */}
      <section ref={servicesRef} className="py-20 px-5 max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-red-400 to-blue-400 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Comprehensive digital marketing solutions tailored to your business
            needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;
