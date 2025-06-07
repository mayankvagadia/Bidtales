import React from "react";
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

const Technologies = () => {
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
    <section id="technologies" className="py-20 bg-gray-50">
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
          <div className="tech-item flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <FontAwesomeIcon
              icon={faAndroid}
              className="text-5xl text-gray-400 hover:text-green-500"
            />
            <i className="fab fa-android text-5xl text-gray-400 hover:text-green-500"></i>
            <span className="mt-2 text-gray-700">Android</span>
          </div>
          <div className="tech-item flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <FontAwesomeIcon
              icon={faApple}
              className="text-5xl text-gray-400 hover:text-gray-800"
            />
            {/* <i className="fab fa-apple text-5xl text-gray-400 hover:text-gray-800"></i> */}
            <span className="mt-2 text-gray-700">iOS</span>
          </div>
          <div className="tech-item flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <FontAwesomeIcon
              icon={faReact}
              className="text-5xl text-gray-400 hover:text-blue-400"
            />
            {/* <i className="fab fa-react text-5xl text-gray-400 hover:text-blue-400"></i> */}
            <span className="mt-2 text-gray-700">React Native</span>
          </div>
          <div className="tech-item flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <FontAwesomeIcon
              icon={faReact}
              className="text-5xl text-gray-400 hover:text-blue-600"
            />
            {/* <i className="fab fa-react text-5xl text-gray-400 hover:text-blue-600"></i> */}
            <span className="mt-2 text-gray-700">React JS</span>
          </div>
          <div className="tech-item flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <FontAwesomeIcon
              icon={faMobileAlt}
              className="text-5xl text-gray-400 hover:text-blue-500"
            />
            <span className="mt-2 text-gray-700">Flutter</span>
          </div>
          <div className="tech-item flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <FontAwesomeIcon
              icon={faSwift}
              className="text-5xl text-gray-400 hover:text-orange-500"
            />
            <span className="mt-2 text-gray-700">Swift</span>
          </div>
          <div className="tech-item flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <FontAwesomeIcon
              icon={faJs}
              className="text-5xl text-gray-400 hover:text-yellow-400"
            />
            <span className="mt-2 text-gray-700">JavaScript</span>
          </div>
          <div className="tech-item flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <FontAwesomeIcon
              icon={faPhp}
              className="text-5xl text-gray-400 hover:text-indigo-600"
            />
            <span className="mt-2 text-gray-700">PHP</span>
          </div>
          <div className="tech-item flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <FontAwesomeIcon
              icon={faDatabase}
              className="text-5xl text-gray-400 hover:text-green-600"
            />
            <span className="mt-2 text-gray-700">MongoDB</span>
          </div>
          <div className="tech-item flex flex-col items-center transition-all duration-300 hover:transform hover:scale-110">
            <FontAwesomeIcon
              icon={faDatabase}
              className="text-5xl text-gray-400 hover:text-blue-500"
            />
            <span className="mt-2 text-gray-700">MySQL</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
