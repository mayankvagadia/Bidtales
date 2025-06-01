import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Shield,
  Zap,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);
  const navigate = useNavigate();

  const services = [
    {
      id: "web-development",
      icon: <Code className="w-7 h-7" />,
      title: "Web Development",
      description: "Cutting-edge web solutions that captivate and convert",
      longDescription:
        "Transform your digital presence with lightning-fast, scalable web applications built using the latest technologies.",
      features: [
        "React & Next.js",
        "Node.js Backend",
        "Database Integration",
        "API Development",
      ],
      gradient: "from-emerald-400 via-cyan-400 to-blue-500",
      bgGradient: "from-emerald-50 to-cyan-50",
      glowColor: "emerald",
    },
    {
      id: "mobile-development",
      icon: <Smartphone className="w-7 h-7" />,
      title: "Mobile Development",
      description: "Native mobile experiences that users absolutely love",
      longDescription:
        "Create stunning mobile applications that deliver exceptional performance across all devices and platforms.",
      features: [
        "React Native",
        "Native iOS/Android",
        "Cross-platform",
        "App Store Deployment",
      ],
      gradient: "from-purple-400 via-pink-400 to-red-400",
      bgGradient: "from-purple-50 to-pink-50",
      glowColor: "purple",
    },
    {
      id: "ui-ux-design",
      icon: <Palette className="w-7 h-7" />,
      title: "UI/UX Design",
      description: "Designs that tell stories and drive engagement",
      longDescription:
        "Craft intuitive, beautiful interfaces that create memorable user experiences and boost conversions.",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Design Systems",
      ],
      gradient: "from-orange-400 via-amber-400 to-yellow-400",
      bgGradient: "from-orange-50 to-amber-50",
      glowColor: "orange",
    },
    {
      id: "performance-marketing",
      icon: <Globe className="w-7 h-7" />,
      title: "Performance Marketing",
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
      gradient: "from-blue-400 via-indigo-400 to-purple-500",
      bgGradient: "from-blue-50 to-indigo-50",
      glowColor: "blue",
    },
    {
      id: "social-media-management",
      icon: <Globe className="w-7 h-7" />,
      title: "Social Media Management",
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
      gradient: "from-pink-400 via-rose-400 to-red-400",
      bgGradient: "from-pink-50 to-rose-50",
      glowColor: "pink",
    },
    {
      id: "website-funnel-development",
      icon: <Code className="w-7 h-7" />,
      title: "Website & Funnel Development",
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
      gradient: "from-emerald-400 via-teal-400 to-cyan-500",
      bgGradient: "from-emerald-50 to-teal-50",
      glowColor: "emerald",
    },
    {
      id: "email-whatsapp-marketing",
      icon: <Smartphone className="w-7 h-7" />,
      title: "Email & WhatsApp Marketing",
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
      gradient: "from-green-400 via-emerald-400 to-teal-400",
      bgGradient: "from-green-50 to-emerald-50",
      glowColor: "green",
    },
    {
      id: "seo",
      icon: <Shield className="w-7 h-7" />,
      title: "Search Engine Optimization (SEO)",
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
      gradient: "from-blue-400 via-indigo-400 to-purple-500",
      bgGradient: "from-blue-50 to-indigo-50",
      glowColor: "blue",
    },
    {
      id: "creative-branding",
      icon: <Palette className="w-7 h-7" />,
      title: "Creative & Branding Services",
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
      gradient: "from-purple-400 via-violet-400 to-indigo-400",
      bgGradient: "from-purple-50 to-violet-50",
      glowColor: "purple",
    },
    {
      id: "influencer-marketing",
      icon: <Zap className="w-7 h-7" />,
      title: "Influencer Marketing",
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
      gradient: "from-orange-400 via-amber-400 to-yellow-400",
      bgGradient: "from-orange-50 to-amber-50",
      glowColor: "orange",
    },
    {
      id: "analytics-consulting",
      icon: <Sparkles className="w-7 h-7" />,
      title: "Analytics & Consulting",
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
      gradient: "from-cyan-400 via-sky-400 to-blue-500",
      bgGradient: "from-cyan-50 to-sky-50",
      glowColor: "cyan",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleServiceClick = (service) => {
    console.log(service.id);
    navigate(`/explore/${service.id}`);
  };

  return (
    <section
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-br bg-gray-900 min-h-screen overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-1200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-cyan-300 text-sm font-medium">
              Premium Services
            </span>
          </div>

          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 leading-tight">
            What We
            <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Deliver
            </span>
          </h2>

          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Transforming ideas into digital masterpieces with cutting-edge
            technology and unparalleled creativity
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-16"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Card */}
              <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 overflow-hidden group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                {/* Glow Effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.gradient} blur-3xl -z-10 transform scale-150`}
                ></div>

                {/* Gradient Border on Hover */}
                <div
                  className={`absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.gradient} p-[1px]`}
                >
                  <div className="bg-slate-900/90 backdrop-blur-xl rounded-3xl h-full w-full"></div>
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div
                    className={`inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-br ${service.gradient} text-white group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                  >
                    {service.icon}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 mb-6 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                    {hoveredCard === index
                      ? service.longDescription
                      : service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div
                        key={featureIndex}
                        className={`flex items-center text-sm text-slate-400 group-hover:text-slate-300 transition-all duration-300 transform ${
                          hoveredCard === index ? "translate-x-2" : ""
                        }`}
                        style={{
                          transitionDelay: `${featureIndex * 50}ms`,
                        }}
                      >
                        <div
                          className={`w-2 h-2 rounded-full mr-3 bg-gradient-to-r ${service.gradient} group-hover:scale-150 transition-transform duration-300`}
                        ></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`flex items-center gap-2 text-white font-semibold py-3 px-6 rounded-xl bg-gradient-to-r ${service.gradient} opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:scale-105 shadow-lg hover:shadow-xl`}
                    onClick={() => handleServiceClick(service)}
                  >
                    Explore
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>

                {/* Floating Orbs */}
                <div className="absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-gradient-to-tr from-white/5 to-transparent rounded-full blur-lg group-hover:scale-125 transition-transform duration-700 delay-100"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div
          className={`text-center transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="relative bg-gradient-to-r from-purple-900/50 via-slate-800/50 to-cyan-900/50 backdrop-blur-xl border border-white/10 rounded-3xl p-12 max-w-4xl mx-auto overflow-hidden">
            {/* Background Animation */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 via-transparent to-cyan-600/10 animate-pulse"></div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-white mb-4">
                Ready to Build Something
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {" "}
                  Extraordinary?
                </span>
              </h3>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                Let's transform your vision into reality with our expert team
                and cutting-edge solutions
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-bold hover:from-cyan-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl">
                  Start Your Project
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/10 transition-all duration-300 backdrop-blur-sm">
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
