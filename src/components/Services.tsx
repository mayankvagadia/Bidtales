// import { ArrowRight } from "lucide-react";

const Services = () => {
  interface Service {
    id: string;
    title: string;
    description: string;
    image: string;
  }

  const services: Service[] = [
    {
      id: "web-development",
      title: "Web Development",
      description:
        "Custom websites built with cutting-edge technologies to deliver exceptional user experiences and drive business results.",
      image:
        "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      id: "mobile-development",
      title: "Mobile Development",
      description:
        "Native and cross-platform mobile applications that provide seamless experiences across all devices.",
      image:
        "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      id: "ui-ux-design",
      title: "UI/UX Design",
      description:
        "User-centered design solutions that enhance usability, accessibility, and visual appeal of your digital products.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      id: "performance-marketing",
      title: "Performance Marketing",
      description:
        "Data-driven marketing campaigns that maximize ROI through strategic targeting and optimization.",
      image:
        "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      id: "social-media-management",
      title: "Social Media Management",
      description:
        "Complete social media strategy and content management to build your brand presence and engage audiences.",
      image:
        "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      id: "website-funnel-development",
      title: "Website & Funnel Development",
      description:
        "High-converting websites and sales funnels designed to optimize your customer journey and increase conversions.",
      image:
        "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      id: "email-whatsapp-marketing",
      title: "Email & WhatsApp Marketing",
      description:
        "Automated messaging campaigns that drive engagement and nurture customer relationships across multiple channels.",
      image:
        "https://images.pexels.com/photos/4439901/pexels-photo-4439901.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      id: "seo",
      title: "Search Engine Optimization (SEO)",
      description:
        "Comprehensive SEO strategies to improve your visibility and ranking on search engines for sustainable growth.",
      image:
        "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      id: "creative-branding",
      title: "Creative & Branding Services",
      description:
        "Brand identity and creative assets that make you stand out in the competitive digital landscape.",
      image:
        "https://images.pexels.com/photos/196645/pexels-photo-196645.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      id: "influencer-marketing",
      title: "Influencer Marketing",
      description:
        "Strategic partnerships with influencers to expand your reach and build authentic connections with your target audience.",
      image:
        "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
    {
      id: "analytics-consulting",
      title: "Analytics & Consulting",
      description:
        "Strategic insights and consulting services to help you make data-driven decisions and grow your business.",
      image:
        "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    },
  ];

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
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <a
                  href={`/services/${service.id}`}
                  className="inline-flex items-center text-blue-600 font-medium text-sm hover:text-blue-700 transition-colors group/link"
                >
                  Learn More
                  <svg
                    className="ml-1 h-4 w-4 group-hover/link:translate-x-1 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>

                {/* <a
                  href={service.link}
                  className="inline-flex items-center text-blue-600 font-semibold text-sm hover:text-blue-700 transition-colors group/link"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 ml-1 group-hover/link:translate-x-1 transition-transform" />
                </a> */}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
