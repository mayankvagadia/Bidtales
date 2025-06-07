import React, { useState } from "react";
import CaseStudyCard from "./CaseStudyCard";

const caseStudies = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    description:
      "Transformed a legacy e-commerce platform into a modern, scalable solution that increased conversion rates by 45%",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    results: [
      "45% increase in conversion rates",
      "30% reduction in page load times",
      "99.9% uptime achieved",
      "100% mobile responsiveness",
    ],
    link: "#case-study-1",
  },
  {
    id: 2,
    title: "Fintech Dashboard",
    description:
      "Built a secure, real-time dashboard for financial data analysis with advanced visualization capabilities",
    image: "https://images.unsplash.com/photo-1551006917-3b4c078c47c9",
    technologies: ["Vue.js", "Python", "Django", "Redis"],
    results: [
      "Real-time data processing",
      "99.99% data accuracy",
      "10x faster data visualization",
      "100% GDPR compliance",
    ],
    link: "#case-study-2",
  },
  {
    id: 3,
    title: "Healthcare Management System",
    description:
      "Developed a HIPAA-compliant healthcare management system that streamlined patient care processes",
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc",
    technologies: ["Angular", ".NET Core", "SQL Server", "Azure"],
    results: [
      "50% reduction in patient wait times",
      "100% HIPAA compliance",
      "24/7 system availability",
      "Seamless integration with EHR systems",
    ],
    link: "#case-study-3",
  },
];

const CaseStudies = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isHovered, setIsHovered] = useState<number | null>(null);

  const filters = [
    { id: "all", name: "All" },
    { id: "web", name: "Web Development" },
    { id: "mobile", name: "Mobile Development" },
    { id: "enterprise", name: "Enterprise Solutions" },
  ];

  const filteredCaseStudies = caseStudies.filter((study) => {
    if (selectedFilter === "all") return true;
    return study.technologies.some((tech) =>
      tech.toLowerCase().includes(selectedFilter)
    );
  });

  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Case Studies
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our success stories and see how we've helped businesses
            transform their digital presence.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedFilter === filter.id
                    ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                    : "bg-white shadow-lg hover:bg-gray-700 text-gray-600 hover:text-white"
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((caseStudy) => (
            <div
              key={caseStudy.id}
              onMouseEnter={() => setIsHovered(caseStudy.id)}
              onMouseLeave={() => setIsHovered(null)}
              className="group relative h-full"
            >
              <CaseStudyCard
                caseStudy={caseStudy}
                isHovered={isHovered === caseStudy.id}
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="/case-studies"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            View All Case Studies
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
    </section>
  );
};

export default CaseStudies;
