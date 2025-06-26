import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import TellUs from "../components/TellUs";

interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  detailedDescription: string;
  process: string[];
  tools: string[];
  faq: { question: string; answer: string }[];
  features?: string[];
  benefits?: string[];
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
    ],
    detailedDescription:
      "Our web development services go beyond just creating websites. We focus on building digital solutions that not only look great but also perform exceptionally well. Our team of expert developers uses the latest technologies and best practices to create custom websites that meet your specific business needs. From initial consultation to launch and beyond, we provide comprehensive support to ensure your website succeeds.",
    process: [
      "Initial consultation and requirements gathering",
      "Wireframing and design",
      "Development and testing",
      "Deployment and launch",
      "Post-launch support and maintenance",
    ],
    tools: [
      "React.js",
      "Node.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "MongoDB",
      "AWS",
      "Docker",
    ],
    faq: [
      {
        question: "What technologies do you use for web development?",
        answer:
          "We primarily use React.js, Node.js, and Next.js for building modern web applications. We also utilize TypeScript for better code quality and maintainability.",
      },
      {
        question: "How long does it take to develop a website?",
        answer:
          "The development time varies based on the complexity of the project. Simple websites can be completed in 4-6 weeks, while more complex applications may take 8-12 weeks.",
      },
      {
        question: "Do you provide maintenance support?",
        answer:
          "Yes, we offer comprehensive maintenance and support packages to ensure your website continues to perform well after launch.",
      },
    ],
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
    ],
    detailedDescription:
      "We specialize in creating high-performance mobile applications that deliver exceptional user experiences. Our team has expertise in both native (iOS and Android) and cross-platform development frameworks.",
    process: [
      "Requirement gathering",
      "UI/UX design",
      "Development",
      "Testing",
      "Deployment",
      "Maintenance",
    ],
    tools: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Xcode",
      "Android Studio",
    ],
    faq: [
      {
        question: "What platforms do you support?",
        answer:
          "We support both iOS and Android platforms, as well as cross-platform solutions.",
      },
      {
        question: "How long does app development take?",
        answer:
          "The development timeline depends on the complexity of the app, but typically ranges from 3 to 6 months.",
      },
    ],
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
    ],
    detailedDescription:
      "Our UI/UX design services focus on creating intuitive and visually appealing interfaces that enhance user satisfaction and business outcomes. We follow a user-centered approach, combining aesthetic design with functional excellence to deliver exceptional digital experiences.",
    process: [
      "User research and analysis",
      "Wireframing and prototyping",
      "Design implementation",
      "User testing",
      "Final adjustments",
    ],
    tools: ["Figma", "Sketch", "Adobe XD", "UserTesting", "Hotjar"],
    faq: [
      {
        question: "What is your design process?",
        answer:
          "We follow a user-centered design process that includes research, prototyping, testing, and iteration to create the best possible user experience.",
      },
      {
        question: "Do you handle responsive design?",
        answer:
          "Yes, we ensure all our designs are fully responsive and work seamlessly across all devices and screen sizes.",
      },
    ],
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
    ],
    detailedDescription:
      "We specialize in creating high-performance marketing campaigns that deliver measurable results. Our data-driven approach ensures every marketing dollar is spent effectively to achieve your business goals.",
    process: [
      "Market research and analysis",
      "Campaign planning",
      "Implementation",
      "Performance tracking",
      "Optimization",
    ],
    tools: [
      "Google Analytics",
      "Google Ads",
      "Facebook Ads Manager",
      "Mailchimp",
      "SEMrush",
    ],
    faq: [
      {
        question: "How do you measure campaign success?",
        answer:
          "We use a combination of metrics including ROI, conversion rates, engagement rates, and customer acquisition costs to evaluate campaign performance.",
      },
      {
        question: "What's your approach to SEO?",
        answer:
          "We focus on both technical SEO and content optimization to improve organic search visibility and drive relevant traffic to your website.",
      },
    ],
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
    ],
    detailedDescription:
      "We help businesses build and maintain strong social media presence through strategic content creation, community engagement, and data-driven optimization.",
    process: [
      "Strategy development",
      "Content planning",
      "Content creation",
      "Community management",
      "Performance analysis",
    ],
    tools: [
      "Hootsuite",
      "Buffer",
      "Canva",
      "Sprout Social",
      "Google Analytics",
    ],
    faq: [
      {
        question: "How often do you post on social media?",
        answer:
          "We create a custom posting schedule based on your audience's engagement patterns and industry best practices.",
      },
      {
        question: "How do you handle social media crises?",
        answer:
          "We have a comprehensive crisis management plan in place to handle any negative situations professionally and effectively.",
      },
    ],
  },
];

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const service = services.find((s) => s.id === serviceId);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Service Not Found
          </h2>
          <p className="text-gray-600">
            The service you're looking for doesn't exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-12xl pt-16">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-64">
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
          <div className="py-8 px-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-3xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                {service.title}
              </h1>
              <div className="space-y-6 mb-6">
                <p className="text-gray-600 mb-8 leading-relaxed">
                  {service.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {service.detailedDescription}
                </p>
              </div>

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
                      {service.features?.map((feature, index) => (
                        <li key={index} className="flex items-start">
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
                      {service.benefits?.map((benefit, index) => (
                        <li key={index} className="flex items-start">
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
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>

          <div className="mt-16 px-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Our Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.process.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-6 rounded-lg"
                >
                  <div className="flex items-center mb-2">
                    <span className="text-2xl font-bold text-blue-600 mr-2">
                      {index + 1}.
                    </span>
                    <span className="text-gray-900">{step}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 px-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Tools & Technologies
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {service.tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-50 p-4 rounded-lg text-center"
                >
                  <span className="text-gray-900">{tool}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 px-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Frequently Asked Questions
            </h2>
            {service.faq.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600">{item.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      <TellUs id="tell-us" />
    </div>
  );
};

export default ServiceDetails;
