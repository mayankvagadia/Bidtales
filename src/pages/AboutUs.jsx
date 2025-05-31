import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ArrowRightIcon,
  LightBulbIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/outline";

// Motion components
const MotionDiv = motion.div;
const MotionSection = motion.section;
const MotionH2 = motion.h2;
const MotionP = motion.p;

const fadeInUp = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const FeatureCard = ({ icon, title, description, index }) => (
  <MotionDiv
    variants={fadeInUp}
    className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    transition={{ delay: index * 0.1 }}
  >
    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
      {React.createElement(icon, { className: "w-7 h-7" })}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </MotionDiv>
);

export default function AboutUs() {
  const ref = useRef();
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "100+", label: "Happy Clients" },
    { value: "5+", label: "Years Experience" },
    { value: "200+", label: "Projects Completed" },
    { value: "24/7", label: "Support" },
  ];

  const team = [
    {
      name: "Alex Johnson",
      role: "CEO & Founder",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      bio: "Marketing strategist with 10+ years of experience in digital transformation.",
    },
    {
      name: "Sarah Williams",
      role: "Creative Director",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Passionate about creating compelling brand stories that resonate with audiences.",
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
      bio: "Tech enthusiast who turns innovative ideas into seamless digital experiences.",
    },
    {
      name: "Emily Rodriguez",
      role: "Marketing Strategist",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Data-driven marketer with a talent for crafting high-conversion campaigns.",
    },
  ];

  const values = [
    {
      icon: LightBulbIcon,
      title: "Innovation",
      description:
        "We embrace change and continuously seek new ways to solve problems.",
    },
    {
      icon: ChartBarIcon,
      title: "Excellence",
      description: "We strive for the highest standards in everything we do.",
    },
    {
      icon: ShieldCheckIcon,
      title: "Integrity",
      description: "We build trust through transparency and ethical practices.",
    },
    {
      icon: RocketLaunchIcon,
      title: "Growth",
      description:
        "We are committed to the continuous improvement of our team and clients.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section with Parallax Effect */}
      <MotionSection
        ref={ref}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-900 to-primary-700 text-white"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-conic from-accent-400/20 via-transparent to-transparent animate-spin-slow"></div>
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(to_bottom,transparent,white,transparent)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-32">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <motion.div
                className="absolute -left-8 -top-8 w-32 h-32 bg-accent-500/20 rounded-full filter blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
              <motion.span
                className="inline-block px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-white/90 text-sm font-medium mb-6 border border-white/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Our Story
              </motion.span>
              <motion.h1
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Building Digital{" "}
                <span className="text-accent-400">Success</span> Stories
              </motion.h1>
              <motion.p
                className="text-xl text-white/90 mb-8 max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                We're a passionate team of strategists, creatives, and
                technologists dedicated to helping businesses thrive in the
                digital landscape.
              </motion.p>
              <motion.div
                className="flex flex-wrap gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <a
                  href="#our-team"
                  className="px-8 py-4 bg-accent-500 hover:bg-accent-600 text-white rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  Meet Our Team
                </a>
                <a
                  href="#our-values"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/20 text-white rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm"
                >
                  Our Values
                </a>
              </motion.div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                  alt="Team collaboration"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-accent-400/10 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
            </div>
          </div>
        </div>
      </MotionSection>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.span
              className="inline-block px-6 py-2 rounded-full bg-accent-500/10 text-accent-600 text-sm font-medium mb-4 border border-accent-500/20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Guiding Principles
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Values That Drive{" "}
              <span className="text-primary-600">Our Success</span>
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              These core principles guide every decision we make and every
              action we take.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="relative group bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 hover:border-accent-100"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div
                  className={`absolute top-0 left-8 w-1 h-16 bg-gradient-to-b ${
                    index % 2 === 0
                      ? "from-primary-500 to-accent-400"
                      : "from-accent-400 to-primary-500"
                  }`}
                ></div>
                <div className="pl-10">
                  <div
                    className={`w-12 h-12 ${
                      index % 2 === 0
                        ? "bg-primary-100 text-primary-600"
                        : "bg-accent-100 text-accent-600"
                    } rounded-lg flex items-center justify-center mb-6`}
                  >
                    {React.createElement(value.icon, { className: "w-6 h-6" })}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <MotionSection
        id="our-team"
        className="hidden py-24 bg-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <motion.span
              className="inline-block px-6 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Meet The Team
            </motion.span>
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              The <span className="text-primary-600">Brilliant Minds</span>{" "}
              Behind Our Success
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Our diverse team of experts brings together creativity, technical
              expertise, and business acumen.
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="relative overflow-hidden h-80">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div>
                      <p className="text-white text-sm">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-accent-600 font-medium">{member.role}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Mission Statement */}
          <motion.div
            className="mt-24 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-12 relative overflow-hidden"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 -mr-20 -mt-20 bg-accent-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
            <div className="relative z-10">
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h3>
                <p className="text-xl text-gray-700 leading-relaxed">
                  To empower businesses of all sizes with innovative digital
                  solutions that drive growth, foster meaningful connections,
                  and create lasting impact in an ever-evolving digital
                  landscape.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </MotionSection>

      {/* CTA Section */}
      <MotionSection
        id="join"
        className="py-20 bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 text-white relative overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Decorative elements */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-accent-400/10 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-accent-400/10 blur-3xl"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <button className="px-8 py-4 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors font-medium shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Get Started for Free
            </button>
          </motion.div>
        </div>
      </MotionSection>
    </div>
  );
}
