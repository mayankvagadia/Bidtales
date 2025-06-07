import React from "react";

interface CaseStudy {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  results: string[];
  link: string;
}

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
  isHovered?: boolean;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  caseStudy,
  isHovered = false,
}) => {
  return (
    <div
      className={`bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ${
        isHovered ? "shadow-lg" : "hover:shadow-lg"
      } h-full`}
    >
      <div className="relative h-48">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? "scale-110" : "hover:scale-105"
          }`}
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent ${
            isHovered ? "scale-110" : "hover:scale-105"
          } transition-transform duration-300`}
        >
          <div className="absolute bottom-4 left-4 text-white"></div>
        </div>
        <div
          className={`absolute inset-0 ${
            isHovered ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300`}
        >
          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-xl font-bold">{caseStudy.title}</h3>
            <p className="text-sm">{caseStudy.description}</p>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-col h-full">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              {caseStudy.title}
            </h3>
            <p className="text-gray-400 mb-4">{caseStudy.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {caseStudy.technologies.map((tech) => (
                <span
                  key={tech}
                  className={`px-3 py-1 rounded-full text-sm transition-all duration-200 ${
                    isHovered
                      ? "bg-blue-600 text-white"
                      : "bg-gray-200 shadow-sm text-gray-600 hover:bg-blue-600 hover:text-white"
                  }`}
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="space-y-2 h-40 overflow-y-auto">
              {caseStudy.results.map((result, index) => (
                <div key={index} className="flex items-start">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <p className="text-gray-400">{result}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <a
              href={caseStudy.link}
              className={`inline-flex items-center px-6 py-3 rounded-lg transition-all duration-200 ${
                isHovered
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white"
                  : "bg-gray-200 shadow-sm text-gray-600 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:text-white"
              }`}
            >
              View Case Study
              <svg
                className="w-5 h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;
