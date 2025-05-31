import React, { useState, useEffect, useRef } from "react";
import {
  Smartphone,
  Apple,
  Atom,
  Code,
  Database,
  Server,
  Zap,
  Globe,
  Layers,
  HardDrive,
} from "lucide-react";

const TechnologiesSection = () => {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [isLoading, setIsLoading] = useState(true);
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  const technologies = [
    {
      name: "Android",
      icon: Smartphone,
      color: "from-green-400 to-green-600",
      animation: "bounce",
    },
    {
      name: "iOS",
      icon: Apple,
      color: "from-gray-400 to-gray-600",
      animation: "pulse",
    },
    {
      name: "React Native",
      icon: Atom,
      color: "from-cyan-400 to-blue-500",
      animation: "spin",
    },
    {
      name: "React JS",
      icon: Code,
      color: "from-blue-400 to-blue-600",
      animation: "swing",
    },
    {
      name: "Flutter",
      icon: Zap,
      color: "from-orange-400 to-orange-600",
      animation: "float",
    },
    {
      name: "Swift",
      icon: Layers,
      color: "from-orange-500 to-red-500",
      animation: "wobble",
    },
    {
      name: "Javascript",
      icon: Globe,
      color: "from-yellow-400 to-yellow-600",
      animation: "rotate",
    },
    {
      name: "PHP",
      icon: Server,
      color: "from-purple-400 to-purple-600",
      animation: "shake",
    },
    {
      name: "Mongo DB",
      icon: Database,
      color: "from-green-500 to-green-700",
      animation: "flip",
    },
    {
      name: "MySQL",
      icon: HardDrive,
      color: "from-blue-500 to-blue-700",
      animation: "glow",
    },
  ];

  // Simulate loading
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(loadingTimer);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const cardIndex = parseInt(entry.target.dataset.index);

          if (entry.isIntersecting) {
            // Card is entering viewport
            setVisibleCards((prev) => new Set([...prev, cardIndex]));
          } else {
            // Card is leaving viewport
            setVisibleCards((prev) => {
              const newSet = new Set(prev);
              newSet.delete(cardIndex);
              return newSet;
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "50px 0px -50px 0px",
      }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [isLoading]);

  const getCardAnimation = (index, tech) => {
    if (isLoading) return "loading-shimmer";

    const isVisible = visibleCards.has(index);

    // Entry animations based on position
    const entryAnimations = [
      "slide-in-left",
      "slide-in-right",
      "slide-in-top",
      "slide-in-bottom",
      "zoom-in",
      "rotate-in",
      "flip-in",
      "bounce-in",
      "fade-in-up",
      "scale-rotate-in",
    ];

    // Exit animations based on position (opposite of entry)
    const exitAnimations = [
      "slide-out-right",
      "slide-out-left",
      "slide-out-bottom",
      "slide-out-top",
      "zoom-out",
      "rotate-out",
      "flip-out",
      "bounce-out",
      "fade-out-down",
      "scale-rotate-out",
    ];

    if (!isVisible) {
      return `${exitAnimations[index % exitAnimations.length]}`;
    }

    return `${
      entryAnimations[index % entryAnimations.length]
    } ${getHoverAnimation(tech.animation)}`;
  };

  const getHoverAnimation = (animation) => {
    const animationClasses = {
      bounce: "hover-bounce",
      pulse: "hover-pulse",
      spin: "hover-spin",
      swing: "hover-swing",
      float: "hover-float",
      wobble: "hover-wobble",
      rotate: "hover-rotate",
      shake: "hover-shake",
      flip: "hover-flip",
      glow: "hover-glow",
    };

    return animationClasses[animation] || "";
  };

  return (
    <div className="bg-gray-900 px-4 py-20" ref={containerRef}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isLoading ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
          }`}
        >
          <h1 className="text-5xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Our Technologies
          </h1>
          <p className="text-gray-300 text-lg max-w-4xl mx-auto leading-relaxed">
            Our technologies are at the forefront of innovation, shaping the
            future with cutting-edge solutions. As a leading IT development
            company in Jaipur, we specialize in delivering advanced automation
            and intelligent systems. Our IT development services enhance
            efficiency, performance, and sustainability for businesses of all
            sizes.
          </p>
        </div>

        {/* Technologies Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon;
            return (
              <div
                key={tech.name}
                ref={(el) => (cardRefs.current[index] = el)}
                data-index={index}
                className={`
                  relative group cursor-pointer transform transition-all duration-700 ease-out
                  ${getCardAnimation(index, tech)}
                `}
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animationFillMode: "both",
                }}
              >
                {isLoading ? (
                  // Loading skeleton
                  <div className="bg-slate-700/30 animate-pulse rounded-2xl p-6 h-32 flex flex-col items-center justify-center">
                    <div className="w-12 h-12 bg-slate-600/50 rounded-lg mb-2 animate-pulse"></div>
                    <div className="w-16 h-3 bg-slate-600/50 rounded animate-pulse"></div>
                  </div>
                ) : (
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-6 h-32 flex flex-col items-center justify-center hover:bg-slate-700/50 transition-all duration-300 relative overflow-hidden group-hover:scale-105">
                    {/* Background gradient effect */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${tech.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}
                    ></div>

                    {/* Icon */}
                    <div className="text-white mb-2 transform group-hover:scale-110 transition-transform duration-300">
                      <IconComponent size={32} />
                    </div>

                    {/* Technology name */}
                    <h3 className="text-white text-sm font-semibold text-center group-hover:text-cyan-400 transition-colors duration-300">
                      {tech.name}
                    </h3>

                    {/* Hover effect border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-cyan-400/30 transition-all duration-300"></div>

                    {/* Particle effect on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute top-2 left-2 w-1 h-1 bg-cyan-400 rounded-full animate-ping"></div>
                      <div
                        className="absolute top-4 right-3 w-1 h-1 bg-blue-400 rounded-full animate-ping"
                        style={{ animationDelay: "0.5s" }}
                      ></div>
                      <div
                        className="absolute bottom-3 left-4 w-1 h-1 bg-purple-400 rounded-full animate-ping"
                        style={{ animationDelay: "1s" }}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Custom CSS Animations */}
      <style jsx>{`
        /* Loading Animation */
        @keyframes shimmer {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }

        .loading-shimmer {
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.1),
            transparent
          );
          background-size: 200px 100%;
          animation: shimmer 1.5s infinite;
        }

        /* Entry Animations */
        @keyframes slideInLeft {
          0% {
            transform: translateX(-100px) rotate(-10deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotate(0);
            opacity: 1;
          }
        }

        @keyframes slideInRight {
          0% {
            transform: translateX(100px) rotate(10deg);
            opacity: 0;
          }
          100% {
            transform: translateX(0) rotate(0);
            opacity: 1;
          }
        }

        @keyframes slideInTop {
          0% {
            transform: translateY(-100px) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes slideInBottom {
          0% {
            transform: translateY(100px) scale(0.8);
            opacity: 0;
          }
          100% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          0% {
            transform: scale(0) rotate(180deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(0);
            opacity: 1;
          }
        }

        @keyframes rotateIn {
          0% {
            transform: rotate(-360deg) scale(0);
            opacity: 0;
          }
          100% {
            transform: rotate(0) scale(1);
            opacity: 1;
          }
        }

        @keyframes flipIn {
          0% {
            transform: perspective(400px) rotateY(-90deg);
            opacity: 0;
          }
          100% {
            transform: perspective(400px) rotateY(0);
            opacity: 1;
          }
        }

        @keyframes bounceIn {
          0% {
            transform: scale(0.3) translateY(-50px);
            opacity: 0;
          }
          50% {
            transform: scale(1.1) translateY(-10px);
            opacity: 0.8;
          }
          100% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
        }

        @keyframes fadeInUp {
          0% {
            transform: translateY(30px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes scaleRotateIn {
          0% {
            transform: scale(0) rotate(45deg);
            opacity: 0;
          }
          100% {
            transform: scale(1) rotate(0);
            opacity: 1;
          }
        }

        /* Exit Animations */
        @keyframes slideOutLeft {
          0% {
            transform: translateX(0) rotate(0);
            opacity: 1;
          }
          100% {
            transform: translateX(-100px) rotate(-10deg);
            opacity: 0;
          }
        }

        @keyframes slideOutRight {
          0% {
            transform: translateX(0) rotate(0);
            opacity: 1;
          }
          100% {
            transform: translateX(100px) rotate(10deg);
            opacity: 0;
          }
        }

        @keyframes slideOutTop {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(-100px) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes slideOutBottom {
          0% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(100px) scale(0.8);
            opacity: 0;
          }
        }

        @keyframes zoomOut {
          0% {
            transform: scale(1) rotate(0);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotate(-180deg);
            opacity: 0;
          }
        }

        @keyframes rotateOut {
          0% {
            transform: rotate(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: rotate(360deg) scale(0);
            opacity: 0;
          }
        }

        @keyframes flipOut {
          0% {
            transform: perspective(400px) rotateY(0);
            opacity: 1;
          }
          100% {
            transform: perspective(400px) rotateY(90deg);
            opacity: 0;
          }
        }

        @keyframes bounceOut {
          0% {
            transform: scale(1) translateY(0);
            opacity: 1;
          }
          20% {
            transform: scale(1.1) translateY(-10px);
            opacity: 0.8;
          }
          100% {
            transform: scale(0.3) translateY(50px);
            opacity: 0;
          }
        }

        @keyframes fadeOutDown {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          100% {
            transform: translateY(30px);
            opacity: 0;
          }
        }

        @keyframes scaleRotateOut {
          0% {
            transform: scale(1) rotate(0);
            opacity: 1;
          }
          100% {
            transform: scale(0) rotate(-45deg);
            opacity: 0;
          }
        }

        /* Hover Animations */
        /* @keyframes bounceHover {
          0%,
          20%,
          53%,
          80%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          40%,
          43% {
            transform: translate3d(0, -8px, 0);
          }
          70% {
            transform: translate3d(0, -4px, 0);
          }
        }

        @keyframes pulseHover {
          0% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }

        @keyframes spinHover {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        @keyframes swingHover {
          0%,
          100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(5deg);
          }
          75% {
            transform: rotate(-5deg);
          }
        }

        @keyframes floatHover {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes wobbleHover {
          0%,
          100% {
            transform: rotate(0deg) scale(1);
          }
          25% {
            transform: rotate(2deg) scale(1.02);
          }
          50% {
            transform: rotate(-1deg) scale(0.98);
          }
          75% {
            transform: rotate(1deg) scale(1.01);
          }
        }

        @keyframes rotateHover {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(180deg);
          }
        }

        @keyframes shakeHover {
          0%,
          100% {
            transform: translateX(0);
          }
          25% {
            transform: translateX(-2px);
          }
          75% {
            transform: translateX(2px);
          }
        }

        @keyframes flipHover {
          0% {
            transform: perspective(400px) rotateY(0);
          }
          100% {
            transform: perspective(400px) rotateY(180deg);
          }
        }

        @keyframes glowHover {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(59, 130, 246, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.6);
          }
        } */

        /* Animation Classes */
        .slide-in-left {
          animation: slideInLeft 0.8s ease-out;
        }
        .slide-in-right {
          animation: slideInRight 0.8s ease-out;
        }
        .slide-in-top {
          animation: slideInTop 0.8s ease-out;
        }
        .slide-in-bottom {
          animation: slideInBottom 0.8s ease-out;
        }
        .zoom-in {
          animation: zoomIn 0.8s ease-out;
        }
        .rotate-in {
          animation: rotateIn 0.8s ease-out;
        }
        .flip-in {
          animation: flipIn 0.8s ease-out;
        }
        .bounce-in {
          animation: bounceIn 0.8s ease-out;
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }
        .scale-rotate-in {
          animation: scaleRotateIn 0.8s ease-out;
        }

        .slide-out-left {
          animation: slideOutLeft 0.6s ease-in;
        }
        .slide-out-right {
          animation: slideOutRight 0.6s ease-in;
        }
        .slide-out-top {
          animation: slideOutTop 0.6s ease-in;
        }
        .slide-out-bottom {
          animation: slideOutBottom 0.6s ease-in;
        }
        .zoom-out {
          animation: zoomOut 0.6s ease-in;
        }
        .rotate-out {
          animation: rotateOut 0.6s ease-in;
        }
        .flip-out {
          animation: flipOut 0.6s ease-in;
        }
        .bounce-out {
          animation: bounceOut 0.6s ease-in;
        }
        .fade-out-down {
          animation: fadeOutDown 0.6s ease-in;
        }
        .scale-rotate-out {
          animation: scaleRotateOut 0.6s ease-in;
        }

        /* Hover Animation Classes */
        /* .hover-bounce:hover {
          animation: bounceHover 2s infinite;
        }
        .hover-pulse:hover {
          animation: pulseHover 2s infinite;
        }
        .hover-spin:hover {
          animation: spinHover 4s linear infinite;
        }
        .hover-swing:hover {
          animation: swingHover 3s ease-in-out infinite;
        }
        .hover-float:hover {
          animation: floatHover 3s ease-in-out infinite;
        }
        .hover-wobble:hover {
          animation: wobbleHover 2s ease-in-out infinite;
        }
        .hover-rotate:hover {
          animation: rotateHover 4s ease-in-out infinite;
        }
        .hover-shake:hover {
          animation: shakeHover 2s ease-in-out infinite;
        }
        .hover-flip:hover {
          animation: flipHover 3s ease-in-out infinite;
        }
        .hover-glow:hover {
          animation: glowHover 2s ease-in-out infinite;
        } */
      `}</style>
    </div>
  );
};

export default TechnologiesSection;
