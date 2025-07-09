import { useParams, useNavigate } from "react-router-dom";
import {
  CheckCircle,
  Star,
  Rocket,
  Award,
  Zap,
  BarChart3,
  Users,
  Palette,
  Layers,
  ShieldCheck,
  TrendingUp,
  Lightbulb,
  Target,
  Briefcase,
  Globe,
  Code2,
  Smartphone,
  PieChart,
  Activity,
} from "lucide-react";

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
  category: string;
}

const services: Service[] = [
  {
    id: "web-development",
    category: "development",
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
    category: "development",
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
    category: "development",
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
    category: "marketing",
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
    category: "marketing",
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
  {
    id: "email-whatsapp-marketing",
    category: "marketing",
    title: "Email & WhatsApp Marketing",
    description:
      "Strategic email and WhatsApp marketing campaigns to engage and convert your audience.",
    image:
      "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: [
      "Email campaign design and automation",
      "WhatsApp message templates",
      "Personalized messaging",
      "Analytics and reporting",
      "A/B testing",
    ],
    benefits: [
      "Higher open rates and click-through rates",
      "Increased engagement and customer loyalty",
      "Direct communication channel",
      "Cost-effective compared to other channels",
      "Data-driven optimization",
    ],
    detailedDescription:
      "We specialize in crafting compelling email and WhatsApp marketing campaigns that resonate with your audience. Our team designs engaging content, implements automation, and provides detailed analytics to measure campaign effectiveness.",
    process: [
      "Audience analysis",
      "Campaign strategy",
      "Content creation",
      "Automation setup",
      "Testing and optimization",
    ],
    tools: [
      "Mailchimp",
      "WhatsApp Business API",
      "ActiveCampaign",
      "Sendinblue",
      "HubSpot",
    ],
    faq: [
      {
        question: "What's the difference between email and WhatsApp marketing?",
        answer:
          "Email marketing is primarily for long-form content and direct communication, while WhatsApp marketing is for quick, personalized messages and direct engagement.",
      },
      {
        question: "How do you ensure deliverability?",
        answer:
          "We use best practices for email design, segmentation, and list hygiene to maintain high deliverability rates.",
      },
    ],
  },
  {
    id: "seo",
    category: "marketing",
    title: "SEO & Content Marketing",
    description:
      "Comprehensive SEO and content marketing strategies to improve your online visibility and drive organic traffic.",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: [
      "Keyword research and optimization",
      "On-page and off-page SEO",
      "Content strategy and creation",
      "Technical SEO audits",
      "Analytics and reporting",
    ],
    benefits: [
      "Higher organic search rankings",
      "Increased organic traffic",
      "Better brand authority",
      "Long-term traffic growth",
      "Cost-effective compared to PPC",
    ],
    detailedDescription:
      "We provide comprehensive SEO and content marketing services to help your website rank higher in search engines and attract more organic traffic. Our strategies combine technical optimization, content creation, and data-driven analysis to achieve your SEO goals.",
    process: [
      "Initial audit and strategy",
      "Keyword research and planning",
      "Content creation and optimization",
      "Technical implementation",
      "Performance tracking",
    ],
    tools: [
      "Google Search Console",
      "SEMrush",
      "Ahrefs",
      "Moz",
      "Google Analytics",
    ],
    faq: [
      {
        question: "What's the ROI of SEO?",
        answer:
          "SEO can provide a high ROI when done correctly. It's a long-term investment that can significantly impact your website's traffic and revenue.",
      },
      {
        question: "How do you measure SEO success?",
        answer:
          "We use a combination of metrics including organic traffic, keyword rankings, bounce rates, and conversion rates to evaluate SEO performance.",
      },
    ],
  },
  {
    id: "creative-branding",
    category: "consulting",
    title: "Creative Branding & Design",
    description:
      "Strategic brand design and creative solutions to establish your unique identity and attract your target audience.",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: [
      "Brand strategy and positioning",
      "Logo and visual identity design",
      "Color and typography systems",
      "Brand guidelines",
      "Digital and print design",
    ],
    benefits: [
      "Strong brand recognition",
      "Differentiation from competitors",
      "Higher customer trust",
      "Increased brand loyalty",
      "Competitive advantage",
    ],
    detailedDescription:
      "We help businesses develop a strong, memorable brand through strategic design and creative solutions. Our branding services focus on establishing a unique identity, creating compelling visual assets, and ensuring consistency across all touchpoints.",
    process: [
      "Brand strategy development",
      "Logo and visual design",
      "Brand guidelines creation",
      "Implementation and rollout",
      "Ongoing brand maintenance",
    ],
    tools: ["Figma", "Adobe XD", "Canva", "Brandfolder", "Dribbble"],
    faq: [
      {
        question: "Why is branding important?",
        answer:
          "Branding is crucial for establishing trust, differentiating your business, and creating a memorable presence in your industry.",
      },
      {
        question: "How do you ensure brand consistency?",
        answer:
          "We develop comprehensive brand guidelines and ensure all design elements adhere to these standards.",
      },
    ],
  },
  {
    id: "influencer-marketing",
    category: "marketing",
    title: "Influencer Marketing",
    description:
      "Strategic partnerships with influencers to reach your target audience and drive brand awareness.",
    image:
      "https://images.pexels.com/photos/326501/pexels-photo-326501.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: [
      "Influencer selection and partnership",
      "Campaign strategy and planning",
      "Content creation and distribution",
      "Analytics and reporting",
      "ROI measurement",
    ],
    benefits: [
      "Reach a highly targeted audience",
      "Increase brand credibility",
      "Higher engagement rates",
      "Cost-effective compared to traditional ads",
      "Data-driven optimization",
    ],
    detailedDescription:
      "We help businesses leverage the power of influencers to reach their target audience and drive brand awareness. Our influencer marketing strategies combine strategic partnerships with creative content to maximize impact.",
    process: [
      "Audience analysis",
      "Influencer research and selection",
      "Campaign planning",
      "Content creation and distribution",
      "Performance tracking",
    ],
    tools: [
      "Influencer databases",
      "Google Analytics",
      "Facebook Ads Manager",
      "Hootsuite",
      "Sprout Social",
    ],
    faq: [
      {
        question: "How do you measure influencer marketing ROI?",
        answer:
          "We use a combination of metrics including reach, engagement, conversion rates, and cost per conversion to measure the effectiveness of influencer campaigns.",
      },
      {
        question:
          "What's the difference between micro, macro, and mega influencers?",
        answer:
          "Micro-influencers have smaller but more engaged followings, while mega-influencers have massive followings but might be less relevant to your target audience.",
      },
    ],
  },
  {
    id: "analytics-consulting",
    category: "consulting",
    title: "Analytics & Consulting",
    description:
      "Expert analytics consulting and data-driven decision-making to optimize your business strategies.",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    features: [
      "Data strategy and roadmap",
      "Advanced analytics implementation",
      "Custom reporting and dashboards",
      "Data-driven decision-making",
      "KPIs and OKRs",
    ],
    benefits: [
      "Data-driven insights",
      "Better decision-making",
      "Increased efficiency",
      "Cost savings",
      "Competitive advantage",
    ],
    detailedDescription:
      "We provide expert analytics consulting services to help businesses leverage their data for strategic decision-making. Our team designs and implements advanced analytics solutions, creates custom reports, and provides actionable insights to drive your business forward.",
    process: [
      "Initial audit and strategy",
      "Data architecture and infrastructure",
      "Advanced analytics implementation",
      "Custom reporting and dashboards",
      "Ongoing optimization and maintenance",
    ],
    tools: [
      "Google Analytics",
      "Google Tag Manager",
      "Mixpanel",
      "Amplitude",
      "Looker Studio",
    ],
    faq: [
      {
        question: "Why is analytics important?",
        answer:
          "Analytics is crucial for understanding your business performance, identifying opportunities, and making data-driven decisions to optimize your strategies.",
      },
      {
        question: "How do you ensure data accuracy and reliability?",
        answer:
          "We use best practices for data collection, storage, and processing to ensure accuracy and reliability of your analytics data.",
      },
    ],
  },
];

// Map features/benefits to icons for demo
const featureIcons = [
  Star,
  Rocket,
  Award,
  Zap,
  BarChart3,
  Users,
  Palette,
  Layers,
  ShieldCheck,
  TrendingUp,
  Lightbulb,
  Target,
  Briefcase,
  Globe,
  Code2,
  Smartphone,
  PieChart,
  Activity,
];

// Theme definitions for demo-style (soft blue backgrounds, white cards)
const categoryThemes = {
  development: {
    mainBg: "bg-blue-50",
    card: "bg-white border border-blue-100",
    accent: "text-blue-700",
    button: "bg-blue-600 hover:bg-blue-700",
    icon: "text-blue-500",
    sectionTitle: "text-blue-900",
  },
  marketing: {
    mainBg: "bg-pink-50",
    card: "bg-white border border-pink-100",
    accent: "text-pink-700",
    button: "bg-pink-500 hover:bg-pink-600",
    icon: "text-pink-500",
    sectionTitle: "text-pink-900",
  },
  consulting: {
    mainBg: "bg-teal-50",
    card: "bg-white border border-teal-100",
    accent: "text-teal-700",
    button: "bg-teal-500 hover:bg-teal-600",
    icon: "text-teal-500",
    sectionTitle: "text-teal-900",
  },
};

const getTheme = (category: string) => {
  if (category === "development") return categoryThemes.development;
  if (category === "marketing") return categoryThemes.marketing;
  if (category === "consulting") return categoryThemes.consulting;
  return categoryThemes.development;
};

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
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

  const theme = getTheme(service?.category || "development");

  return (
    <div className={`min-h-screen ${theme.mainBg} text-gray-900`}>
      {/* Hero Section */}
      <section className="w-full py-16 md:pt-36 md:pb-24 px-4 md:px-0 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
        <div className="flex-1 md:pr-12 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
            {service.title}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-gray-700">
            {service.description}
          </h2>
          <p className="mb-8 text-gray-600 text-base md:text-lg">
            {service.detailedDescription}
          </p>
          <button
            type="button"
            onClick={() => navigate("/contact")}
            className={`inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white ${theme.button} focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 shadow-lg`}
          >
            Get Started
          </button>
        </div>
        <div className="flex-1 flex justify-center items-center">
          <img
            src={service.image}
            alt={service.title}
            className="w-full max-w-md rounded-2xl shadow-lg bg-white"
            style={{ minHeight: 260 }}
          />
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12 space-y-20">
        {/* Features */}
        <section id="features">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-10 text-center ${theme.sectionTitle}`}
          >
            Key Features
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {service.features?.map((feature, i) => {
              const Icon = featureIcons[i % featureIcons.length];
              return (
                <div
                  key={i}
                  className={`${theme.card} rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <div
                    className={`mb-4 p-4 rounded-full bg-blue-100 flex items-center justify-center`}
                  >
                    <Icon className={`w-8 h-8 ${theme.icon}`} />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    {feature}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Benefits */}
        <section id="benefits">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-10 text-center ${theme.sectionTitle}`}
          >
            Benefits
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {service.benefits?.map((benefit, i) => {
              const Icon = featureIcons[(i + 5) % featureIcons.length];
              return (
                <div
                  key={i}
                  className={`${theme.card} rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all duration-300`}
                >
                  <div
                    className={`mb-4 p-4 rounded-full bg-purple-100 flex items-center justify-center`}
                  >
                    <Icon className={`w-8 h-8 ${theme.icon}`} />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">
                    {benefit}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Process */}
        <section id="process">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-10 text-center ${theme.sectionTitle}`}
          >
            Our Process
          </h2>
          <ol className="grid md:grid-cols-3 gap-8">
            {service.process.map((step, i) => (
              <li
                key={i}
                className={`${theme.card} rounded-2xl p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-all duration-300`}
              >
                <span
                  className={`mb-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xl`}
                >
                  {i + 1}
                </span>
                <span className="text-lg font-medium text-gray-900">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </section>

        {/* Tools & Technologies */}
        <section id="tools">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-10 text-center text-green-700`}
          >
            Tools & Technologies
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {service.tools.map((tool, i) => (
              <span
                key={i}
                className={`text-gray-900 px-4 py-2 rounded-lg font-semibold text-base shadow bg-white border border-gray-200`}
              >
                {tool}
              </span>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section id="faq">
          <h2
            className={`text-3xl md:text-4xl font-bold mb-10 text-center text-yellow-700`}
          >
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.faq.map((item, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 shadow bg-white border border-gray-200`}
              >
                <h3 className="text-lg font-semibold mb-2 flex items-center gap-2 text-blue-700">
                  <CheckCircle className="w-5 h-5 text-blue-400" />{" "}
                  {item.question}
                </h3>
                <p className="text-gray-700">{item.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServiceDetails;
