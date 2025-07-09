import { motion, useInView, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUsers,
  faLightbulb,
  faRocket,
  faTrophy,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

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
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white pt-28 relative overflow-hidden">
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
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            About Us
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-600 max-w-3xl mx-auto text-lg"
          >
            At BidTales, we are passionate about creating exceptional software
            solutions that help businesses thrive in the digital age. Our team
            of experienced developers and designers work together to deliver
            high-quality, custom solutions that meet our clients' unique needs.
          </motion.p>
        </motion.div>

        {/* Mission, Vision, Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden py-16"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white opacity-20"></div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
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
              initial={{ opacity: 0, x: 20, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
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
              initial={{ opacity: 0, x: -20, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
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
                  <span className="text-green-500 mr-2">•</span>
                  Integrity - We always do what's right
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Innovation - We constantly push boundaries
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Excellence - We strive for the best
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">•</span>
                  Teamwork - We succeed together
                </li>
              </ul>
            </motion.div>
          </div>
        </motion.div>

        {/* Our Team */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8 max-w-6xl mx-auto px-4">
            {/* Team Member 1 */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
            >
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Divyam Bajaj
              </h3>
              <p className="text-gray-600">CEO & Founder</p>
              <p className="text-sm text-gray-500 mt-2">
                5+ years of experience in software development and business
                leadership
              </p>
            </motion.div>

            {/* Team Member 2
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Jane Smith
              </h3>
              <p className="text-gray-600">CTO</p>
              <p className="text-sm text-gray-500 mt-2">
                Expert in modern web technologies and scalable architectures
              </p>
            </motion.div> */}

            {/* Team Member 3
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="bg-gray-200 w-32 h-32 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Mike Johnson
              </h3>
              <p className="text-gray-600">Design Lead</p>
              <p className="text-sm text-gray-500 mt-2">
                Award-winning UI/UX designer with a passion for user-centered
                design
              </p>
            </motion.div> */}
          </div>
        </motion.div>

        {/* Our Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16 bg-gray-50"
        >
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Service 1 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FontAwesomeIcon
                  icon={faLightbulb}
                  className="w-12 h-12 text-yellow-500 mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Custom Development
                </h3>
                <p className="text-gray-600">
                  Tailored software solutions that perfectly fit your business
                  needs
                </p>
              </motion.div>

              {/* Service 2 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FontAwesomeIcon
                  icon={faUsers}
                  className="w-12 h-12 text-blue-500 mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Team Augmentation
                </h3>
                <p className="text-gray-600">
                  Extend your team with our expert developers and designers
                </p>
              </motion.div>

              {/* Service 3 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FontAwesomeIcon
                  icon={faRocket}
                  className="w-12 h-12 text-green-500 mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Digital Transformation
                </h3>
                <p className="text-gray-600">
                  Modernize your business processes with cutting-edge technology
                </p>
              </motion.div>

              {/* Service 4 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <FontAwesomeIcon
                  icon={faTrophy}
                  className="w-12 h-12 text-purple-500 mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Quality Assurance
                </h3>
                <p className="text-gray-600">
                  Ensure your software meets the highest standards of quality
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Our Journey */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="py-16"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Journey
          </h2>
          <div className="max-w-4xl mx-auto px-4">
            <div className="space-y-8">
              {/* Timeline Item 1 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="w-6 h-6 text-green-500 mr-2"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    2020 - Company Founded
                  </h3>
                </div>
                <p className="text-gray-600">
                  BidTales was born with a vision to revolutionize software
                  development
                </p>
              </motion.div>

              {/* Timeline Item 2 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="w-6 h-6 text-green-500 mr-2"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    2021 - First Major Client
                  </h3>
                </div>
                <p className="text-gray-600">
                  Successfully delivered our first enterprise-level project
                </p>
              </motion.div>

              {/* Timeline Item 3 */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <FontAwesomeIcon
                    icon={faCheckCircle}
                    className="w-6 h-6 text-green-500 mr-2"
                  />
                  <h3 className="text-xl font-semibold text-gray-900">
                    2022 - Team Expansion
                  </h3>
                </div>
                <p className="text-gray-600">
                  Grew our team to 20+ experts in various technologies
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
