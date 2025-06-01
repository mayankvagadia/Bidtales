import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Code,
  Smartphone,
  Palette,
  Globe,
  Star,
  Users,
  Clock,
  CheckCircle,
  Shield,
  Zap,
  Sparkles,
} from "lucide-react";
import { useParams } from "react-router-dom";

const ExplorePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");
  const { serviceName } = useParams();

  useEffect(() => {
    setIsLoaded(true);
    console.log(serviceName);
  }, [serviceName]);

  const services = {
    "web-development": {
      title: "Web Development",
      icon: Code,
      color: "from-emerald-400 via-cyan-400 to-blue-500",
      description: "Cutting-edge web solutions that captivate and convert",
      longDescription:
        "Transform your digital presence with lightning-fast, scalable web applications built using the latest technologies.",
      features: [
        "React & Next.js",
        "Node.js Backend",
        "Database Integration",
        "API Development",
      ],
      details: {
        overview:
          "Transform your digital presence with lightning-fast, scalable web applications built using the latest technologies. We create responsive, fast, and user-friendly websites that drive results.",
        process: [
          "Discovery & Planning",
          "Design & Prototyping",
          "Development & Testing",
          "Launch & Optimization",
        ],
        technologies: [
          "React.js & Next.js",
          "Node.js & Express",
          "MongoDB & PostgreSQL",
          "TypeScript",
          "GraphQL & REST APIs",
          "AWS & Vercel",
        ],
        pricing: [
          {
            name: "Starter",
            price: "$2,999",
            features: [
              "5 Pages",
              "Responsive Design",
              "Basic SEO",
              "1 Month Support",
            ],
          },
          {
            name: "Professional",
            price: "$5,999",
            features: [
              "10 Pages",
              "CMS Integration",
              "Advanced SEO",
              "E-commerce Ready",
              "3 Months Support",
            ],
          },
          {
            name: "Enterprise",
            price: "$12,999",
            features: [
              "Unlimited Pages",
              "Custom Features",
              "Advanced Analytics",
              "Priority Support",
              "6 Months Support",
            ],
          },
        ],
      },
    },
    "mobile-development": {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-purple-400 via-pink-400 to-red-400",
      description: "Native mobile experiences that users absolutely love",
      longDescription:
        "Create stunning mobile applications that deliver exceptional performance across all devices and platforms.",
      features: [
        "React Native",
        "Flutter",
        "Native iOS/Android",
        "Cross-platform",
        "Play Store Deployment",
        "App Store Deployment",
      ],
      details: {
        overview:
          "Create stunning mobile applications that deliver exceptional performance across all devices and platforms. Our mobile solutions are optimized for performance and user experience.",
        process: [
          "Market Research",
          "UI/UX Design",
          "Native Development",
          "Testing & Deployment",
        ],
        technologies: [
          "React Native",
          "Swift & Kotlin",
          "Flutter",
          "Firebase",
          "Push Notifications",
          "In-App Purchases",
        ],
        pricing: [
          {
            name: "Basic App",
            price: "$8,999",
            features: [
              "Single Platform",
              "Basic Features",
              "App Store Submission",
              "2 Months Support",
            ],
          },
          {
            name: "Cross-Platform",
            price: "$15,999",
            features: [
              "iOS & Android",
              "Advanced Features",
              "Backend Integration",
              "4 Months Support",
            ],
          },
          {
            name: "Enterprise",
            price: "$25,999",
            features: [
              "Custom Solutions",
              "Advanced Security",
              "Analytics Dashboard",
              "6 Months Support",
            ],
          },
        ],
      },
    },
    "ui-ux-design": {
      title: "UI/UX Design",
      icon: Palette,
      color: "from-orange-400 via-amber-400 to-yellow-400",
      description: "Designs that tell stories and drive engagement",
      longDescription:
        "Craft intuitive, beautiful interfaces that create memorable user experiences and boost conversions.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      details: {
        overview:
          "Craft intuitive, beautiful interfaces that create memorable user experiences and boost conversions. We focus on user-centered design that converts.",
        process: [
          "User Research & Analysis",
          "Information Architecture",
          "Wireframing & Prototyping",
          "Visual Design & Testing",
        ],
        technologies: [
          "Figma & Adobe XD",
          "Sketch & InVision",
          "Principle & Framer",
          "User Testing Tools",
          "Analytics Platforms",
          "Design Systems",
        ],
        pricing: [
          {
            name: "Design Audit",
            price: "$1,999",
            features: [
              "UX Audit",
              "Recommendations",
              "Style Guide",
              "2 Weeks Support",
            ],
          },
          {
            name: "Complete Design",
            price: "$4,999",
            features: [
              "Full UI/UX Design",
              "Prototyping",
              "Design System",
              "1 Month Support",
            ],
          },
          {
            name: "Design Partnership",
            price: "$8,999",
            features: [
              "Ongoing Design Support",
              "A/B Testing",
              "Conversion Optimization",
              "3 Months Support",
            ],
          },
        ],
      },
    },
    "performance-marketing": {
      title: "Performance Marketing",
      icon: Globe,
      color: "from-blue-400 via-indigo-400 to-purple-500",
      description:
        "Comprehensive pay-per-click campaigns that drive targeted traffic and conversions",
      longDescription:
        "Maximize your ROI with data-driven performance marketing strategies that deliver measurable results and accelerate business growth.",
      features: [
        "Google Ads & PPC",
        "Facebook Ads Management",
        "Conversion Optimization",
        "Analytics & Reporting",
      ],
      details: {
        overview:
          "Maximize your ROI with data-driven performance marketing strategies that deliver measurable results and accelerate business growth. We optimize every campaign for maximum ROI.",
        process: [
          "Market Analysis",
          "Campaign Strategy",
          "Implementation & Launch",
          "Optimization & Scaling",
        ],
        technologies: [
          "Google Ads & Analytics",
          "Facebook Ads Manager",
          "LinkedIn Campaign Manager",
          "Conversion Tracking",
          "A/B Testing Tools",
          "Marketing Automation",
        ],
        pricing: [
          {
            name: "Starter",
            price: "$1,999/mo",
            features: [
              "Google Ads Setup",
              "Basic Optimization",
              "Monthly Reports",
              "Email Support",
            ],
          },
          {
            name: "Growth",
            price: "$3,999/mo",
            features: [
              "Multi-Platform Ads",
              "Advanced Targeting",
              "Conversion Optimization",
              "Weekly Reports",
            ],
          },
          {
            name: "Scale",
            price: "$7,999/mo",
            features: [
              "Full Funnel Marketing",
              "Custom Attribution",
              "Dedicated Manager",
              "Daily Monitoring",
            ],
          },
        ],
      },
    },
    "social-media-management": {
      title: "Social Media Management",
      icon: Globe,
      color: "from-pink-400 via-rose-400 to-red-400",
      description:
        "Strategic social media campaigns across all major platforms to engage your audience",
      longDescription:
        "Build a powerful social presence with expert content strategy, community management, and targeted campaigns that drive engagement and growth.",
      features: [
        "Content Strategy",
        "Community Management",
        "Social Media Ads",
        "Analytics & Reporting",
      ],
      details: {
        overview:
          "Build a powerful social presence with expert content strategy, community management, and targeted campaigns that drive engagement and growth. We create engaging content that resonates with your audience.",
        process: [
          "Brand Analysis",
          "Content Planning",
          "Community Management",
          "Performance Tracking",
        ],
        technologies: [
          "Hootsuite & Buffer",
          "Canva & Adobe Creative",
          "Instagram & Facebook APIs",
          "Analytics Platforms",
          "Social Listening Tools",
          "Influencer Platforms",
        ],
        pricing: [
          {
            name: "Basic",
            price: "$999/mo",
            features: [
              "2 Platforms",
              "10 Posts/Month",
              "Basic Analytics",
              "Email Support",
            ],
          },
          {
            name: "Professional",
            price: "$2,499/mo",
            features: [
              "4 Platforms",
              "20 Posts/Month",
              "Advanced Analytics",
              "Community Management",
            ],
          },
          {
            name: "Enterprise",
            price: "$4,999/mo",
            features: [
              "All Platforms",
              "Unlimited Posts",
              "Influencer Outreach",
              "Dedicated Manager",
            ],
          },
        ],
      },
    },
    "website-funnel-development": {
      title: "Website & Funnel Development",
      icon: Code,
      color: "from-emerald-400 via-teal-400 to-cyan-500",
      description:
        "High-converting websites and sales funnels that turn visitors into customers",
      longDescription:
        "Create optimized conversion funnels and responsive websites that guide users seamlessly from discovery to purchase.",
      features: [
        "Landing Page Design",
        "Sales Funnel Optimization",
        "Responsive Development",
        "A/B Testing",
      ],
      details: {
        overview:
          "Create optimized conversion funnels and responsive websites that guide users seamlessly from discovery to purchase. Every element is optimized for conversion.",
        process: [
          "Conversion Audit",
          "Funnel Strategy",
          "Design & Development",
          "Testing & Optimization",
        ],
        technologies: [
          "React & Next.js",
          "Conversion Tracking",
          "A/B Testing Tools",
          "Analytics Platforms",
          "Payment Gateways",
          "Email Automation",
        ],
        pricing: [
          {
            name: "Landing Page",
            price: "$2,999",
            features: [
              "Single Landing Page",
              "Conversion Optimization",
              "A/B Testing Setup",
              "1 Month Support",
            ],
          },
          {
            name: "Complete Funnel",
            price: "$7,999",
            features: [
              "Multi-Step Funnel",
              "Email Automation",
              "Advanced Analytics",
              "3 Months Support",
            ],
          },
          {
            name: "Enterprise Funnel",
            price: "$15,999",
            features: [
              "Custom Funnel Strategy",
              "Advanced Integrations",
              "Ongoing Optimization",
              "6 Months Support",
            ],
          },
        ],
      },
    },
    "email-whatsapp-marketing": {
      title: "Email & WhatsApp Marketing",
      icon: Smartphone,
      color: "from-green-400 via-emerald-400 to-teal-400",
      description:
        "Targeted messaging campaigns that convert and build lasting customer relationships",
      longDescription:
        "Engage your audience with personalized email sequences and WhatsApp automation that nurture leads and drive conversions.",
      features: [
        "Email Automation",
        "WhatsApp Business API",
        "Drip Campaigns",
        "Segmentation & Personalization",
      ],
      details: {
        overview:
          "Engage your audience with personalized email sequences and WhatsApp automation that nurture leads and drive conversions. Build lasting customer relationships through targeted messaging.",
        process: [
          "Audience Segmentation",
          "Campaign Design",
          "Automation Setup",
          "Performance Analysis",
        ],
        technologies: [
          "Mailchimp & Klaviyo",
          "WhatsApp Business API",
          "Automation Tools",
          "CRM Integration",
          "Analytics Platforms",
          "A/B Testing Tools",
        ],
        pricing: [
          {
            name: "Starter",
            price: "$799/mo",
            features: [
              "Email Campaigns",
              "Basic Automation",
              "Monthly Reports",
              "Email Support",
            ],
          },
          {
            name: "Professional",
            price: "$1,999/mo",
            features: [
              "Email + WhatsApp",
              "Advanced Automation",
              "Segmentation",
              "Weekly Reports",
            ],
          },
          {
            name: "Enterprise",
            price: "$3,999/mo",
            features: [
              "Omnichannel Strategy",
              "Custom Integrations",
              "Dedicated Manager",
              "Real-time Analytics",
            ],
          },
        ],
      },
    },
    seo: {
      title: "Search Engine Optimization (SEO)",
      icon: Shield,
      color: "from-blue-400 via-indigo-400 to-purple-500",
      description:
        "Improve your search engine rankings and organic traffic with proven SEO strategies",
      longDescription:
        "Dominate search results with comprehensive SEO optimization that increases visibility, drives organic traffic, and boosts conversions.",
      features: [
        "Keyword Research",
        "On-Page Optimization",
        "Link Building",
        "Technical SEO",
      ],
      details: {
        overview:
          "Dominate search results with comprehensive SEO optimization that increases visibility, drives organic traffic, and boosts conversions. Our proven strategies deliver long-term results.",
        process: [
          "SEO Audit & Analysis",
          "Keyword Strategy",
          "On-Page Optimization",
          "Link Building & Monitoring",
        ],
        technologies: [
          "Google Analytics & Search Console",
          "SEMrush & Ahrefs",
          "Technical SEO Tools",
          "Content Optimization",
          "Local SEO Tools",
          "Performance Tracking",
        ],
        pricing: [
          {
            name: "Local SEO",
            price: "$1,299/mo",
            features: [
              "Local Optimization",
              "Google My Business",
              "Local Citations",
              "Monthly Reports",
            ],
          },
          {
            name: "National SEO",
            price: "$2,999/mo",
            features: [
              "National Keywords",
              "Content Strategy",
              "Link Building",
              "Technical SEO",
            ],
          },
          {
            name: "Enterprise SEO",
            price: "$5,999/mo",
            features: [
              "Comprehensive Strategy",
              "Advanced Analytics",
              "Dedicated Team",
              "Priority Support",
            ],
          },
        ],
      },
    },
    "creative-branding": {
      title: "Creative & Branding Services",
      icon: Palette,
      color: "from-purple-400 via-violet-400 to-indigo-400",
      description:
        "Compelling visual identity and creative content that resonates with your audience",
      longDescription:
        "Build a memorable brand with stunning visual design, consistent messaging, and creative assets that captivate and convert.",
      features: [
        "Brand Identity Design",
        "Graphic Design",
        "Video Production",
        "Creative Strategy",
      ],
      details: {
        overview:
          "Build a memorable brand with stunning visual design, consistent messaging, and creative assets that captivate and convert. We create cohesive brand experiences across all touchpoints.",
        process: [
          "Brand Discovery",
          "Creative Strategy",
          "Design Development",
          "Brand Guidelines",
        ],
        technologies: [
          "Adobe Creative Suite",
          "Figma & Sketch",
          "Video Editing Tools",
          "Brand Management Tools",
          "Asset Management",
          "Print Production",
        ],
        pricing: [
          {
            name: "Brand Identity",
            price: "$3,999",
            features: [
              "Logo Design",
              "Brand Guidelines",
              "Color Palette",
              "Typography",
            ],
          },
          {
            name: "Complete Branding",
            price: "$7,999",
            features: [
              "Full Brand Package",
              "Marketing Materials",
              "Digital Assets",
              "Brand Strategy",
            ],
          },
          {
            name: "Brand Partnership",
            price: "$12,999",
            features: [
              "Ongoing Brand Support",
              "Campaign Creative",
              "Video Production",
              "Priority Service",
            ],
          },
        ],
      },
    },
    "influencer-marketing": {
      title: "Influencer Marketing",
      icon: Zap,
      color: "from-orange-400 via-amber-400 to-yellow-400",
      description:
        "Strategic partnerships with influencers to amplify your brand reach and credibility",
      longDescription:
        "Connect with your target audience through authentic influencer collaborations that build trust and drive meaningful engagement.",
      features: [
        "Influencer Outreach",
        "Campaign Management",
        "Content Collaboration",
        "Performance Tracking",
      ],
      details: {
        overview:
          "Connect with your target audience through authentic influencer collaborations that build trust and drive meaningful engagement. We manage end-to-end influencer campaigns.",
        process: [
          "Influencer Research",
          "Partnership Negotiation",
          "Campaign Execution",
          "Performance Analysis",
        ],
        technologies: [
          "Influencer Platforms",
          "Campaign Management Tools",
          "Analytics & Tracking",
          "Content Creation Tools",
          "Social Media APIs",
          "Performance Dashboards",
        ],
        pricing: [
          {
            name: "Micro-Influencers",
            price: "$2,999/mo",
            features: [
              "5-10 Micro-Influencers",
              "Campaign Management",
              "Content Creation",
              "Basic Analytics",
            ],
          },
          {
            name: "Multi-Platform",
            price: "$5,999/mo",
            features: [
              "Macro-Influencers",
              "Multi-Platform Campaigns",
              "Advanced Analytics",
              "Dedicated Manager",
            ],
          },
          {
            name: "Celebrity Partnerships",
            price: "$15,999/mo",
            features: [
              "Celebrity Influencers",
              "Large-Scale Campaigns",
              "PR Integration",
              "Premium Support",
            ],
          },
        ],
      },
    },
    "analytics-consulting": {
      title: "Analytics & Consulting",
      icon: Sparkles,
      color: "from-cyan-400 via-sky-400 to-blue-500",
      description:
        "Data-driven insights and strategic consulting to optimize your marketing performance",
      longDescription:
        "Make informed decisions with comprehensive analytics, performance tracking, and expert consulting that maximizes your marketing ROI.",
      features: [
        "Performance Analytics",
        "Strategy Consulting",
        "ROI Optimization",
        "Custom Reporting",
      ],
      details: {
        overview:
          "Make informed decisions with comprehensive analytics, performance tracking, and expert consulting that maximizes your marketing ROI. We provide actionable insights for growth.",
        process: [
          "Data Audit & Setup",
          "Analytics Implementation",
          "Performance Analysis",
          "Strategic Recommendations",
        ],
        technologies: [
          "Google Analytics 4",
          "Data Studio & Looker",
          "Custom Dashboards",
          "Business Intelligence Tools",
          "Attribution Modeling",
          "Performance Tracking",
        ],
        pricing: [
          {
            name: "Analytics Setup",
            price: "$1,999",
            features: [
              "GA4 Setup",
              "Basic Dashboards",
              "Monthly Reports",
              "1 Month Support",
            ],
          },
          {
            name: "Performance Consulting",
            price: "$3,999/mo",
            features: [
              "Advanced Analytics",
              "Strategic Consulting",
              "Custom Reports",
              "Weekly Insights",
            ],
          },
          {
            name: "Growth Partnership",
            price: "$7,999/mo",
            features: [
              "Comprehensive Analysis",
              "Growth Strategy",
              "Dedicated Analyst",
              "Real-time Monitoring",
            ],
          },
        ],
      },
    },
  };

  const currentService = services[serviceName];
  const ServiceIcon = currentService.icon;

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "process", label: "Process" },
    { id: "technologies", label: "Technologies" },
    { id: "pricing", label: "Pricing" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Main Content */}
      <div
        className={`transform transition-all duration-1000 delay-400 ${
          isLoaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <div className="container mx-auto px-6 py-14">
          {/* Hero Section */}
          <div
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${currentService.color} p-8 mb-8`}
          >
            <div className="relative z-10">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-white/20 rounded-xl backdrop-blur-sm">
                  <ServiceIcon className="w-8 h-8" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold mb-2">
                    {currentService.title}
                  </h1>
                  <p className="text-xl opacity-90">
                    {currentService.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {currentService.features.map((feature, index) => (
                  <div
                    key={feature}
                    className="flex items-center space-x-2 bg-white/10 rounded-lg p-3 backdrop-blur-sm transform hover:scale-105 transition-all duration-300"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <CheckCircle className="w-5 h-5 text-white" />
                    <span className="font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Background Animation */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -translate-y-32 translate-x-32 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white rounded-full translate-y-24 -translate-x-24 animate-pulse delay-1000"></div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex space-x-1 bg-gray-800 rounded-xl p-1 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? "bg-white text-gray-900"
                    : "text-gray-400 hover:text-white hover:bg-gray-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-8">
            {activeTab === "overview" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-4">Service Overview</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {currentService.details.overview}
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-8">
                  <div className="text-center p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors duration-300">
                    <Users className="w-12 h-12 mx-auto mb-4 text-blue-400" />
                    <h3 className="font-bold mb-2">Expert Team</h3>
                    <p className="text-gray-300">
                      Skilled professionals with years of experience
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors duration-300">
                    <Clock className="w-12 h-12 mx-auto mb-4 text-green-400" />
                    <h3 className="font-bold mb-2">Fast Delivery</h3>
                    <p className="text-gray-300">
                      Quick turnaround without compromising quality
                    </p>
                  </div>
                  <div className="text-center p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors duration-300">
                    <Star className="w-12 h-12 mx-auto mb-4 text-yellow-400" />
                    <h3 className="font-bold mb-2">Quality Assured</h3>
                    <p className="text-gray-300">
                      Rigorous testing and quality control processes
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "process" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Our Process</h2>
                <div className="space-y-4">
                  {currentService.details.process.map((step, index) => (
                    <div
                      key={step}
                      className="flex items-center space-x-4 p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-colors duration-300"
                    >
                      <div
                        className={`w-8 h-8 rounded-full bg-gradient-to-r ${currentService.color} flex items-center justify-center font-bold`}
                      >
                        {index + 1}
                      </div>
                      <span className="text-lg font-medium">{step}</span>
                      {/* <ChevronRight className="w-5 h-5 text-gray-400 ml-auto" /> */}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "technologies" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Technologies We Use</h2>
                <div className="grid md:grid-cols-3 gap-4">
                  {currentService.details.technologies.map((tech, index) => (
                    <div
                      key={tech}
                      className="p-4 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      <span className="font-medium">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "pricing" && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold mb-6">Pricing Plans</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  {currentService.details.pricing.map((plan, index) => (
                    <div
                      key={plan.name}
                      className="p-6 bg-gray-700 rounded-xl hover:bg-gray-600 transition-all duration-300 hover:scale-105"
                      style={{
                        animationDelay: `${index * 100}ms`,
                      }}
                    >
                      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                      <div className="text-3xl font-bold mb-4 text-blue-400">
                        {plan.price}
                      </div>
                      <ul className="space-y-2 mb-6">
                        {plan.features.map((feature) => (
                          <li
                            key={feature}
                            className="flex items-center space-x-2"
                          >
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <button
                        className={`w-full py-3 rounded-lg font-medium transition-all duration-300 bg-gradient-to-r ${currentService.color} hover:shadow-lg`}
                      >
                        Choose Plan
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* CTA Section */}
          <div
            className={`text-center py-12 transform transition-all duration-1000 delay-600 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-gray-300 mb-8">
              Let's discuss your project and bring your vision to life
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                className={`px-8 py-4 bg-gradient-to-r ${currentService.color} rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                Start Your Project
              </button>
              <button className="px-8 py-4 border border-gray-600 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
