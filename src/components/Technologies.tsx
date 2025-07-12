import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAndroid,
  faApple,
  faJs,
  faPhp,
  faReact,
  faSwift,
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faMobileAlt } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Technologies = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("technologies");
    if (section) {
      observer.observe(section);
    }

    return () => observer.disconnect();
  }, []);

  // const technologies = [
  //   "Android",
  //   "iOS",
  //   "React Native",
  //   "React.js",
  //   "Flutter",
  //   "Swift",
  //   "JavaScript",
  //   "PHP",
  //   "MongoDB",
  //   "MySQL",
  // ];

  // const techLogos = {
  //   Android: "🤖",
  //   iOS: "📱",
  //   "React Native": "⚛️",
  //   "React.js": "⚛️",
  //   Flutter: "🎯",
  //   Swift: "🦉",
  //   JavaScript: "🟨",
  //   PHP: "🐘",
  //   MongoDB: "🍃",
  //   MySQL: "🐬",
  // };

  return (
    <section id="technologies" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Technologies We Use
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technologies that power our solutions
          </p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <div
            className={`tech-item flex flex-col items-center bg-transparent rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-br group cursor-pointer p-4 hover:p-6 hover:from-blue-100 hover:to-purple-100 transform ${
              isVisible
                ? "animate-bounceIn opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "0ms" }}
          >
            <FontAwesomeIcon
              icon={faAndroid}
              className="tech-icon text-5xl text-gray-400 group-hover:text-green-500 transition-all duration-300 group-hover:scale-110"
            />
            <span className="mt-2 text-gray-700 group-hover:text-green-600 transition-colors duration-300">
              Android
            </span>
          </div>
          <div
            className={`tech-item flex flex-col items-center bg-transparent rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-br group cursor-pointer p-4 hover:p-6 hover:from-gray-100 hover:to-gray-300 transform ${
              isVisible
                ? "animate-flipIn opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "300ms" }}
          >
            <FontAwesomeIcon
              icon={faApple}
              className="tech-icon text-5xl text-gray-400 group-hover:text-gray-800 transition-all duration-300 group-hover:scale-110"
            />
            <span className="mt-2 text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
              iOS
            </span>
          </div>
          <div
            className={`tech-item flex flex-col items-center bg-transparent rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-br group cursor-pointer p-4 hover:p-6 hover:from-blue-100 hover:to-purple-100 transform ${
              isVisible
                ? "animate-rotateIn opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "600ms" }}
          >
            <FontAwesomeIcon
              icon={faReact}
              className="tech-icon text-5xl text-gray-400 group-hover:text-blue-400 transition-all duration-300 group-hover:scale-110"
            />
            <span className="mt-2 text-gray-700 group-hover:text-blue-500 transition-colors duration-300">
              React Native
            </span>
          </div>
          <div
            className={`tech-item flex flex-col items-center bg-transparent rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-br group cursor-pointer p-4 hover:p-6 hover:from-blue-100 hover:to-blue-300 transform ${
              isVisible
                ? "animate-fadeInZoom opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "900ms" }}
          >
            <FontAwesomeIcon
              icon={faReact}
              className="tech-icon text-5xl text-gray-400 group-hover:text-blue-600 transition-all duration-300 group-hover:scale-110"
            />
            <span className="mt-2 text-gray-700 group-hover:text-blue-700 transition-colors duration-300">
              React JS
            </span>
          </div>
          <div
            className={`tech-item flex flex-col items-center bg-transparent rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-br group cursor-pointer p-4 hover:p-6 hover:from-blue-100 hover:to-blue-200 transform ${
              isVisible
                ? "animate-bounceIn opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "1200ms" }}
          >
            <FontAwesomeIcon
              icon={faMobileAlt}
              className="tech-icon text-5xl text-gray-400 group-hover:text-blue-500 transition-all duration-300 group-hover:scale-110"
            />
            <span className="mt-2 text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
              Flutter
            </span>
          </div>
          <div
            className={`tech-item flex flex-col items-center bg-transparent rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-br group cursor-pointer p-4 hover:p-6 hover:from-orange-100 hover:to-yellow-100 transform ${
              isVisible
                ? "animate-flipIn opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "1500ms" }}
          >
            <FontAwesomeIcon
              icon={faSwift}
              className="tech-icon text-5xl text-gray-400 group-hover:text-orange-500 transition-all duration-300 group-hover:scale-110"
            />
            <span className="mt-2 text-gray-700 group-hover:text-orange-600 transition-colors duration-300">
              Swift
            </span>
          </div>
          <div
            className={`tech-item flex flex-col items-center bg-transparent rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-br group cursor-pointer p-4 hover:p-6 hover:from-yellow-100 hover:to-yellow-200 transform ${
              isVisible
                ? "animate-rotateIn opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "1800ms" }}
          >
            <FontAwesomeIcon
              icon={faJs}
              className="tech-icon text-5xl text-gray-400 group-hover:text-yellow-400 transition-all duration-300 group-hover:scale-110"
            />
            <span className="mt-2 text-gray-700 group-hover:text-yellow-600 transition-colors duration-300">
              JavaScript
            </span>
          </div>
          <div
            className={`tech-item flex flex-col items-center bg-transparent rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-br group cursor-pointer p-4 hover:p-6 hover:from-indigo-100 hover:to-indigo-200 transform ${
              isVisible
                ? "animate-fadeInZoom opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "2100ms" }}
          >
            <FontAwesomeIcon
              icon={faPhp}
              className="tech-icon text-5xl text-gray-400 group-hover:text-indigo-600 transition-all duration-300 group-hover:scale-110"
            />
            <span className="mt-2 text-gray-700 group-hover:text-indigo-700 transition-colors duration-300">
              PHP
            </span>
          </div>
          <div
            className={`tech-item flex flex-col items-center bg-transparent rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-br group cursor-pointer p-4 hover:p-6 hover:from-green-100 hover:to-green-200 transform ${
              isVisible
                ? "animate-slideInFromLeft opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "2400ms" }}
          >
            <FontAwesomeIcon
              icon={faDatabase}
              className="tech-icon text-5xl text-gray-400 group-hover:text-green-600 transition-all duration-300 group-hover:scale-110"
            />
            <span className="mt-2 text-gray-700 group-hover:text-green-700 transition-colors duration-300">
              MongoDB
            </span>
          </div>
          <div
            className={`tech-item flex flex-col items-center bg-transparent rounded-2xl transition-all duration-500 hover:scale-110 hover:shadow-xl hover:bg-gradient-to-br group cursor-pointer p-4 hover:p-6 hover:from-blue-100 hover:to-blue-200 transform ${
              isVisible
                ? "animate-slideInFromRight opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
            style={{ animationDelay: "2700ms" }}
          >
            <FontAwesomeIcon
              icon={faDatabase}
              className="tech-icon text-5xl text-gray-400 group-hover:text-blue-500 transition-all duration-300 group-hover:scale-110"
            />
            <span className="mt-2 text-gray-700 group-hover:text-blue-600 transition-colors duration-300">
              MySQL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
