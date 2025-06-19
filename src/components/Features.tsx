import React from "react";
import { BarChart3, Zap, Palette } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description:
        "Get deep insights into your campaigns with our comprehensive analytics dashboard and reporting tools.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Automated Bidding",
      description:
        "Our AI-powered bidding algorithms optimize your ad spend in real-time for maximum ROI.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "Creative Suite",
      description:
        "Professional design tools and templates to create stunning visuals that convert.",
      gradient: "from-orange-500 to-red-500",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Powerful Features That Drive Results
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to succeed in today's competitive digital
            landscape
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div
                className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${feature.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="h-8 w-8 text-white" />
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* <div className="mt-6">
                <a
                  href="#"
                  className={`inline-flex items-center text-transparent bg-gradient-to-r ${feature.gradient} bg-clip-text font-semibold hover:opacity-80 transition-opacity`}
                >
                  Learn more →
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
