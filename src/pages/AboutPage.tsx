import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import TellUs from "../components/TellUs";

const AboutPage = () => {
  const containerRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white pt-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={containerRef}
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            About Us
          </h1>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            At BidTales, we are passionate about creating exceptional software
            solutions that help businesses thrive in the digital age. Our team
            of experienced developers and designers work together to deliver
            high-quality, custom solutions that meet our clients' unique needs.
          </p>
        </motion.div>

        {/* Mission, Vision, Values Section */}
        <div className="relative overflow-hidden py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-20"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-blue-600">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative software solutions that
                drive growth and efficiency. We strive to deliver exceptional
                results through our expertise, dedication, and commitment to
                excellence.
              </p>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-purple-600">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the go-to software development partner for businesses
                worldwide, known for our exceptional quality, reliability, and
                customer satisfaction.
              </p>
            </motion.div>

            {/* Values */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white p-8 rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-2xl font-bold text-green-600">✨</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Values
              </h3>
              <ul className="text-gray-600 list-disc list-inside space-y-2">
                <li className="flex items-center">
                  <span className="w-4 h-4 mr-2 bg-blue-500 rounded-full" />
                  Customer Focus
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 mr-2 bg-purple-500 rounded-full" />
                  Innovation
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 mr-2 bg-green-500 rounded-full" />
                  Quality
                </li>
                <li className="flex items-center">
                  <span className="w-4 h-4 mr-2 bg-yellow-500 rounded-full" />
                  Teamwork
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Contact Form Section */}
      <div className="bg-gray-100 py-10" id="contact">
        <TellUs />
      </div>
    </div>
  );
};

export default AboutPage;
