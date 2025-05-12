import { ArrowRightIcon, CheckIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6
    }
  }
};

const services = [
  {
    title: 'Digital Ads Management',
    description: 'Maximize your ROI with our expert-managed advertising campaigns across all major platforms.'
  },
  {
    title: 'Website & Funnel Building',
    description: 'High-converting websites and sales funnels designed to turn visitors into customers.'
  },
  {
    title: 'Influencer Marketing',
    description: 'Leverage the power of influencer partnerships to expand your brand\'s reach.'
  },
  {
    title: 'Email Campaigns',
    description: 'Engage your audience with targeted, conversion-focused email marketing strategies.'
  },
  {
    title: 'SEO & Content Creation',
    description: 'Improve your search rankings with our comprehensive SEO and content marketing services.'
  }
];

const features = [
  {
    title: 'End-to-End Execution',
    description: 'Comprehensive marketing solutions from strategy to implementation.'
  },
  {
    title: 'Vetted Professionals',
    description: 'Work with top-tier talent carefully selected for expertise and results.'
  },
  {
    title: 'Proven Results',
    description: 'Data-driven strategies that deliver measurable growth and ROI.'
  },
  {
    title: 'Transparent Process',
    description: 'Clear communication and full visibility into every campaign.'
  }
];

const AnimatedFeatureCard = ({ title, description, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.1 }
      });
    }
  }, [isInView, controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={controls}
      className="group p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all border border-gray-100"
    >
      <div className="w-12 h-12 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
        <CheckIcon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const AnimatedServiceCard = ({ title, description, index }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { delay: index * 0.1, duration: 0.5 }
      });
    }
  }, [isInView, controls, index]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <motion.div 
        className="h-2 bg-gradient-to-r from-blue-500 to-blue-600"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 + index * 0.05 }}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
        <p className="text-gray-600 mb-6">{description}</p>
        <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group">
          Learn more
          <motion.span 
            className="ml-2"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <ArrowRightIcon className="h-4 w-4" />
          </motion.span>
        </a>
      </div>
    </motion.div>
  );
};

function App() {
  const testimonialControls = useAnimation();
  const testimonialRef = useRef(null);
  const isTestimonialInView = useInView(testimonialRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isTestimonialInView) {
      testimonialControls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.6 }
      });
    }
  }, [isTestimonialInView, testimonialControls]);

  return (
    <div className="min-h-screen bg-white text-gray-700 flex flex-col">
      {/* Navigation */}
      <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <motion.div variants={itemVariants}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              <div className="text-2xl font-heading font-bold text-blue-600">BidTales</div>
              <nav className="hidden md:flex space-x-8">
                <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              </nav>
              <div className="flex items-center space-x-4">
                <a href="#" className="hidden md:inline-block px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">Log in</a>
                <a href="#join" className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Get Started</a>
              </div>
            </div>
          </div>
        </motion.div>
      </header>

      <motion.main 
        className="flex-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <section className="relative h-screen justify-center items-center align-center flex bg-white overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50 via-white to-blue-50 opacity-80"></div>
            <div className="absolute inset-0 animate-gradient-xy bg-gradient-to-r from-blue-100/30 via-purple-100/30 to-blue-100/30"></div>
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <style jsx global>{`
              @keyframes gradient-xy {
                0%, 100% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
              }
              .animate-gradient-xy {
                background-size: 200% 200%;
                animation: gradient-xy 15s ease infinite;
              }
              .bg-grid-pattern {
                background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23a5b4fc'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
              }
            `}</style>
          </div>
          <motion.div variants={itemVariants} className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 leading-tight"
                  >
                    Grow Your Business with <span className="text-blue-600">BidTales</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-gray-600"
                  >
                    We help businesses scale their digital marketing efforts with data-driven strategies and expert execution.
                  </motion.p>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                  >
                    <a 
                      href="#join" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                    >
                      Get Started
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </a>
                    <a 
                      href="#services" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors"
                    >
                      Learn More
                    </a>
                  </motion.div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                    <img 
                      src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                      alt="Digital Marketing"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-8 left-20 w-32 h-32 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Logo Cloud */}
        {/* <div className="bg-gray-50 py-12">
          <motion.div variants={itemVariants}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wider mb-8">
              Trusted by innovative companies worldwide
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {['Company 1', 'Company 2', 'Company 3', 'Company 4'].map((company, index) => (
                <div key={index} className="flex justify-center">
                  <div className="h-12 text-gray-400">{company}</div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
        </div> */}

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <motion.div variants={itemVariants}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  Powerful Features for Your Business
                </h2>
                <p className="text-lg text-gray-600">
                  Everything you need to grow your business and manage your online presence effectively.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <AnimatedFeatureCard 
                    key={index} 
                    title={feature.title} 
                    description={feature.description} 
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 bg-gray-50">
          <motion.div variants={itemVariants}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                  Our Services
                </h2>
                <p className="text-lg text-gray-600">
                  Comprehensive digital marketing solutions tailored to your business needs.
                </p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <AnimatedServiceCard 
                    key={index} 
                    title={service.title} 
                    description={service.description}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonials" className="py-20 bg-white">
          <motion.div variants={itemVariants}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div 
                ref={testimonialRef}
                initial={{ opacity: 0, y: 50, scale: 0.98 }}
                animate={testimonialControls}
                className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 md:p-12"
              >
                <div className="max-w-4xl mx-auto text-center">
                  <div className="text-blue-600 text-6xl mb-4">"</div>
                  <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
                    Our brand scaled from ₹10K to ₹1M/month in just 6 months with BidTales. Their team's expertise and dedication transformed our online presence and drove unprecedented growth.
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 font-bold text-lg">
                      S
                    </div>
                    <div className="ml-4 text-left">
                      <p className="font-medium text-gray-900">Divyam Bajaj</p>
                      <p className="text-gray-600">Founder- BidTales</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section id="join" className="py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
          <motion.div variants={itemVariants}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
                Join thousands of businesses growing with BidTales. Start your journey to success today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-medium"
                >
                  Get Started for Free
                </a>
                <a
                  href="#"
                  className="px-8 py-4 border border-white/20 rounded-lg hover:bg-white/10 transition-colors font-medium flex items-center justify-center"
                >
                  Schedule a Demo
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </motion.main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <motion.div variants={itemVariants}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Company</h3>
                <ul className="space-y-2">
                  {['About Us', 'Careers', 'Blog', 'Press'].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Product</h3>
                <ul className="space-y-2">
                  {['Features', 'Pricing', 'Case Studies', 'FAQ'].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                  {['Blog', 'Guides', 'Webinars', 'Help Center'].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-white font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  {['Privacy', 'Terms', 'Security', 'Cookie Policy'].map((item) => (
                    <li key={item}>
                      <a href="#" className="hover:text-white transition-colors">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-gray-800 text-center">
              <p>© {new Date().getFullYear()} BidTales. All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </footer>
    </div>
  );
}

export default App;
