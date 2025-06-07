import React, { useState, useEffect, useRef } from "react";
import { Target, Users, Calendar, Award } from "lucide-react";
import bg_stat from "../assets/bg_stat.jpg";

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    team: 0,
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    {
      icon: Target,
      label: "Completed Projects",
      value: 500,
      suffix: "+",
      color: "text-blue-600",
    },
    {
      icon: Users,
      label: "Happy Clients",
      value: 150,
      suffix: "+",
      color: "text-purple-600",
    },
    {
      icon: Calendar,
      label: "Years Experience",
      value: 5,
      suffix: "+",
      color: "text-teal-600",
    },
    {
      icon: Award,
      label: "Team Size",
      value: 25,
      suffix: "+",
      color: "text-orange-600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const counters = stats.map((stat, index) => {
        const increment = stat.value / steps;
        let current = 0;

        return setInterval(() => {
          current += increment;
          if (current >= stat.value) {
            current = stat.value;
            clearInterval(counters[index]);
          }

          setCounts((prev) => ({
            ...prev,
            [index === 0
              ? "projects"
              : index === 1
              ? "clients"
              : index === 2
              ? "experience"
              : "team"]: Math.floor(current),
          }));
        }, interval);
      });

      return () => counters.forEach(clearInterval);
    }
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="relative py-20 overflow-hidden">
      {/* Background with Image Masking Effect */}
      {/* <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={bg_stat}
          alt="Stats Background"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-80"></div>
      </div> */}

      <div
        id="stats-section"
        className="relative flex items-center justify-center overflow-hidden bg-fixed bg-cover bg-center bg-no-repeat py-20"
        style={{
          backgroundImage: `url(${bg_stat})`,
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-indigo-900 bg-opacity-80"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Track Record
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Numbers that speak for our expertise and commitment to excellence
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group text-center backdrop-blur-sm rounded-2xl p-8  hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`inline-flex p-4 rounded-full bg-gradient-to-r from-white/20 to-white/10 mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="h-8 w-8 text-white" />
                </div>

                <div
                  className={`text-4xl md:text-5xl font-bold mb-2 ${stat.color.replace(
                    "text-",
                    "text-"
                  )} text-white`}
                >
                  {Object.values(counts)[index]}
                  {stat.suffix}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
