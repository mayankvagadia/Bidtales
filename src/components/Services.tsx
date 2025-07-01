import { Link as RouterLink } from "react-router-dom";
interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  detailedDescription: string;
  process: string[];
  tools: string[];
  faq: { question: string; answer: string }[];
}

const services: Service[] = [
  {
    id: "web-development",
    title: "Web Development",
    description:
      "Custom websites built with cutting-edge technologies to deliver exceptional user experiences and drive business results.",
    image:
      "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    detailedDescription:
      "We create custom websites that are not only visually stunning but also highly functional and optimized for performance. Our team of expert developers uses the latest technologies to build websites that meet your specific business needs.",
    process: [
      "Requirement gathering",
      "Wireframing",
      "Development",
      "Testing",
      "Deployment",
      "Maintenance",
    ],
    tools: ["React", "Node.js", "MongoDB", "Git", "Docker"],
    faq: [
      {
        question: "What technologies do you use?",
        answer:
          "We primarily use modern technologies like React, Node.js, and MongoDB to build scalable and maintainable web applications.",
      },
      {
        question: "How long does it take to build a website?",
        answer:
          "The timeline varies based on project complexity, but typically ranges from 4-12 weeks.",
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
    detailedDescription:
      "We develop both native and cross-platform mobile applications that provide exceptional user experiences on iOS and Android. Our team follows best practices for mobile development to ensure performance and reliability.",
    process: [
      "Requirement analysis",
      "UI/UX design",
      "Development",
      "Testing",
      "Deployment",
      "Support",
    ],
    tools: ["React Native", "Swift", "Kotlin", "Xcode", "Android Studio"],
    faq: [
      {
        question: "Do you develop both iOS and Android apps?",
        answer:
          "Yes, we develop apps for both platforms using native and cross-platform technologies.",
      },
      {
        question: "What about app store submission?",
        answer:
          "We handle the entire app store submission process including optimization for app store guidelines.",
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
    detailedDescription:
      "Our design team creates user-centered interfaces that not only look great but also provide excellent user experiences. We focus on usability, accessibility, and visual appeal.",
    process: [
      "User research",
      "Wireframing",
      "Prototyping",
      "User testing",
      "Design implementation",
    ],
    tools: ["Figma", "Sketch", "Adobe XD", "InVision", "Miro"],
    faq: [
      {
        question: "What's your design process?",
        answer:
          "We follow a user-centered design process that includes research, prototyping, and testing to ensure the best possible user experience.",
      },
      {
        question: "Can you work with existing designs?",
        answer:
          "Yes, we can enhance or modify existing designs while maintaining brand consistency.",
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
    detailedDescription:
      "Our performance marketing team creates and optimizes campaigns that deliver measurable results. We focus on data-driven strategies to maximize your return on investment.",
    process: [
      "Campaign planning",
      "Target audience research",
      "Ad creation",
      "Campaign launch",
      "Performance monitoring",
      "Optimization",
    ],
    tools: [
      "Google Analytics",
      "Facebook Ads",
      "Google Ads",
      "HubSpot",
      "Salesforce",
    ],
    faq: [
      {
        question: "What metrics do you track?",
        answer:
          "We track key metrics like ROI, conversion rates, and customer acquisition cost to optimize your campaigns.",
      },
      {
        question: "How often do you optimize campaigns?",
        answer:
          "We continuously monitor and optimize campaigns based on performance data and market changes.",
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
    detailedDescription:
      "We manage your social media presence across multiple platforms to build brand awareness and engage with your audience. Our team creates engaging content and manages community interactions.",
    process: [
      "Strategy development",
      "Content creation",
      "Scheduling",
      "Engagement management",
      "Analytics",
      "Reporting",
    ],
    tools: [
      "Buffer",
      "Hootsuite",
      "Canva",
      "Adobe Creative Suite",
      "Sprout Social",
    ],
    faq: [
      {
        question: "Which platforms do you manage?",
        answer:
          "We manage all major social platforms including Facebook, Instagram, Twitter, LinkedIn, and more.",
      },
      {
        question: "How often do you post content?",
        answer:
          "We create a tailored content calendar based on your brand's needs and audience engagement patterns.",
      },
    ],
  },
  {
    id: "email-whatsapp-marketing",
    title: "Email & WhatsApp Marketing",
    description:
      "Automated messaging campaigns that drive engagement and nurture customer relationships across multiple channels.",
    image:
      "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    detailedDescription:
      "We create automated messaging campaigns that nurture leads and build lasting customer relationships through personalized communication.",
    process: [
      "Campaign planning",
      "Segmentation",
      "Content creation",
      "Automation setup",
      "Performance tracking",
      "Optimization",
    ],
    tools: [
      "HubSpot",
      "Mailchimp",
      "WhatsApp Business API",
      "Salesforce",
      "ActiveCampaign",
    ],
    faq: [
      {
        question: "How do you handle GDPR compliance?",
        answer:
          "We ensure all campaigns comply with GDPR and other relevant data protection regulations.",
      },
      {
        question: "What about deliverability?",
        answer:
          "We use best practices and tools to ensure high deliverability rates for your campaigns.",
      },
    ],
  },
  {
    id: "seo",
    title: "Search Engine Optimization (SEO)",
    description:
      "Comprehensive SEO strategies to improve your visibility and ranking on search engines for sustainable growth.",
    image:
      "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    detailedDescription:
      "Our SEO team implements comprehensive strategies to improve your website's visibility and ranking on search engines. We focus on both technical and content optimization.",
    process: [
      "Keyword research",
      "Technical audit",
      "Content optimization",
      "Link building",
      "Performance tracking",
      "Reporting",
    ],
    tools: [
      "Google Search Console",
      "SEMrush",
      "Ahrefs",
      "Moz",
      "Screaming Frog",
    ],
    faq: [
      {
        question: "How long does SEO take to show results?",
        answer:
          "SEO is a long-term strategy that typically shows significant results within 3-6 months.",
      },
      {
        question: "What metrics do you track?",
        answer:
          "We track organic traffic, keyword rankings, backlinks, and conversion rates to measure SEO success.",
      },
    ],
  },
  {
    id: "creative-branding",
    title: "Creative & Branding Services",
    description:
      "Brand identity and creative assets that make you stand out in the competitive digital landscape.",
    image:
      "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    detailedDescription:
      "We create unique brand identities and creative assets that help businesses stand out in their market. Our team focuses on consistency and brand recognition.",
    process: [
      "Brand research",
      "Identity development",
      "Asset creation",
      "Guideline development",
      "Implementation",
      "Review",
    ],
    tools: ["Adobe Creative Suite", "Figma", "Canva", "Sketch", "InVision"],
    faq: [
      {
        question: "What's included in branding?",
        answer:
          "We create complete brand identities including logos, color schemes, typography, and brand guidelines.",
      },
      {
        question: "How do you ensure brand consistency?",
        answer:
          "We develop comprehensive brand guidelines and provide training to maintain consistent brand representation.",
      },
    ],
  },
  {
    id: "influencer-marketing",
    title: "Influencer Marketing",
    description:
      "Strategic partnerships with influencers to expand your reach and build authentic connections with your target audience.",
    image:
      "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    detailedDescription:
      "We create strategic influencer marketing campaigns that build authentic connections with your target audience through trusted voices.",
    process: [
      "Influencer research",
      "Partnership development",
      "Campaign planning",
      "Content creation",
      "Performance tracking",
      "Analysis",
    ],
    tools: ["HypeAuditor", "AspireIQ", "Influencer.co", "Klear", "BuzzSumo"],
    faq: [
      {
        question: "How do you choose influencers?",
        answer:
          "We carefully select influencers based on their audience demographics, engagement rates, and brand alignment.",
      },
      {
        question: "What metrics do you track?",
        answer:
          "We track engagement rates, reach, conversions, and ROI to measure campaign success.",
      },
    ],
  },
  {
    id: "analytics-consulting",
    title: "Analytics & Consulting",
    description:
      "Strategic insights and consulting services to help you make data-driven decisions and grow your business.",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    detailedDescription:
      "Our analytics team provides strategic insights and consulting services to help businesses make data-driven decisions for growth.",
    process: [
      "Data collection",
      "Analysis",
      "Insight generation",
      "Strategy development",
      "Implementation",
      "Monitoring",
    ],
    tools: ["Google Analytics", "Tableau", "Power BI", "Looker", "Snowflake"],
    faq: [
      {
        question: "What data do you analyze?",
        answer:
          "We analyze all aspects of your digital presence including website traffic, user behavior, and marketing performance.",
      },
      {
        question: "How do you provide insights?",
        answer:
          "We deliver actionable insights through custom dashboards, reports, and strategic recommendations.",
      },
    ],
  },
];

const ServiceCard = ({ service }: { service: Service }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative">
        <img
          src={service.image}
          alt={service.title}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3">
          {service.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {service.description}
        </p>
        {/* <div className="grid grid-cols-2 gap-4 mt-6">
          {service.tools.map((tool) => (
            <div key={tool} className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
              <span className="text-gray-700">{tool}</span>
              <svg className="h-5 w-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
          ))}
        </div> */}
        <RouterLink
          to={`/services/${service.id}`}
          // href={`/services/${service.id}`}
          className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors"
        >
          Learn More
          <svg
            className="ml-1 h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </RouterLink>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
