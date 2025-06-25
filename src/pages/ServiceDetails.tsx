import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  features: string[];
  benefits: string[];
}

const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites built with cutting-edge technologies to deliver exceptional user experiences and drive business results.",
    image:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: [
      "Custom website design and development",
      "Responsive and mobile-friendly",
      "SEO optimized",
      "Modern UI/UX practices",
      "Fast loading and performance",
    ],
    benefits: [
      "Increased online presence",
      "Better user engagement",
      "Higher conversion rates",
      "Scalable solutions",
      "24/7 support",
    ]
  },
  {
    id: "mobile-development",
    title: "Mobile Development",
    description:
      "Native and cross-platform mobile applications that provide seamless experiences across all devices.",
    image:
      "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: [
      "Native app development",
      "Cross-platform solutions",
      "Performance optimization",
      "Push notifications",
      "In-app purchases",
    ],
    benefits: [
      "Better user engagement",
      "Increased customer loyalty",
      "24/7 availability",
      "Push notifications",
      "Analytics integration",
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description:
      "User-centered design solutions that enhance usability, accessibility, and visual appeal of your digital products.",
    image:
      "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: [
      "User research and analysis",
      "Wireframes and prototypes",
      "Interactive designs",
      "Accessibility compliance",
      "Brand consistency",
    ],
    benefits: [
      "Improved user experience",
      "Higher conversion rates",
      "Better brand perception",
      "Increased customer satisfaction",
      "Competitive advantage",
    ]
  },
  {
    id: "performance-marketing",
    title: "Performance Marketing",
    description:
      "Data-driven marketing campaigns that maximize ROI through strategic targeting and optimization.",
    image:
      "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: [
      "SEO optimization",
      "PPC campaigns",
      "Social media marketing",
      "Email marketing",
      "Analytics tracking",
    ],
    benefits: [
      "Increased website traffic",
      "Higher conversion rates",
      "Better ROI",
      "Data-driven decisions",
      "Brand awareness",
    ]
  },
  {
    id: "social-media-management",
    title: "Social Media Management",
    description:
      "Complete social media strategy and content management to build your brand presence and engage audiences.",
    image:
      "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: [
      "Content creation",
      "Social media scheduling",
      "Analytics tracking",
      "Community management",
      "Campaign management",
    ],
    benefits: [
      "Increased brand awareness",
      "Better customer engagement",
      "Higher conversion rates",
      "24/7 support",
      "Analytics integration",
    ]
  },
];

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h2>
          <p className="text-gray-600">The service you're looking for doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {service.title}
              </h1>
              <p className="text-gray-600 mb-8 leading-relaxed">{service.description}</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-start"
                        >
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  <div className="mb-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      Benefits
                    </h3>
                    <ul className="space-y-2">
                      {service.benefits.map((benefit, index) => (
                        <li
                          key={index}
                          className="flex items-start"
                        >
                          <span className="text-blue-600 mr-2">•</span>
                          <span className="text-gray-600">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <div className="mt-8">
                  <a
                    href="#contact"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;
