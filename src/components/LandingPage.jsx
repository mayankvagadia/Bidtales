import { motion } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import AnimatedFeatureCard from './AnimatedFeatureCard';
import AnimatedServiceCard from './AnimatedServiceCard';

// This is a workaround to prevent unused motion lint error
const MotionMain = motion.main;

export default function LandingPage({ containerVariants, itemVariants, features, services, testimonialRef, testimonialControls }) {
  return (
    <>
      <MotionMain 
        className="flex-1"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero Section */}
        <section className="relative h-screen justify-center items-center align-center flex bg-white overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 -z-0 overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-50 via-white to-primary-50 opacity-80"></div>
            <div className="absolute inset-0 animate-gradient-xy bg-gradient-to-r from-primary-100/30 via-accent-100/30 to-primary-100/30"></div>
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
                    className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-neutral-900 leading-tight"
                  >
                    Grow Your Business with <span className="text-primary-600">BidTales</span>
                  </motion.h1>
                  <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-lg text-neutral-600"
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
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors"
                    >
                      Get Started
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </a>
                    <a 
                      href="#services" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-neutral-300 text-base font-medium rounded-lg text-neutral-700 bg-white hover:bg-neutral-50 transition-colors"
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
                  <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
                  <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                  <div className="absolute -bottom-8 left-20 w-32 h-32 bg-accent-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 bg-white">
          <motion.div variants={itemVariants}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-6">
                  Powerful Features for Your Business
                </h2>
                <p className="text-lg text-neutral-600">
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
        <section id="services" className="py-20 bg-neutral-50">
          <motion.div variants={itemVariants}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-6">
                  Our Services
                </h2>
                <p className="text-lg text-neutral-600">
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
                className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 md:p-12"
              >
                <div className="max-w-4xl mx-auto text-center">
                  <div className="text-primary-600 text-6xl mb-4">"</div>
                  <blockquote className="text-xl md:text-2xl text-neutral-700 mb-8 leading-relaxed">
                    Our brand scaled from ₹10K to ₹1M/month in just 6 months with BidTales. Their team's expertise and dedication transformed our online presence and drove unprecedented growth.
                  </blockquote>
                  <div className="flex items-center justify-center">
                    <div className="h-12 w-12 rounded-full bg-primary-200 flex items-center justify-center text-primary-600 font-bold text-lg">
                      S
                    </div>
                    <div className="ml-4 text-left">
                      <p className="font-medium text-neutral-900">Divyam Bajaj</p>
                      <p className="text-neutral-600">Founder- BidTales</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section id="join" className="py-20 bg-gradient-to-r from-primary-700 to-primary-900 text-white">
          <motion.div variants={itemVariants}>
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
                Join thousands of businesses growing with BidTales. Start your journey to success today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="#" 
                  className="px-8 py-4 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors font-medium shadow-md hover:shadow-lg"
                >
                  Get Started for Free
                </a>
                <a
                  href="#"
                  className="px-8 py-4 border-2 border-accent-500 text-accent-600 rounded-lg hover:bg-accent-50 transition-colors font-medium flex items-center justify-center group"
                >
                  Schedule a Demo
                  <ArrowRightIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </MotionMain>

      <footer className="bg-neutral-900 text-neutral-300">
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
            <div className="mt-12 pt-8 border-t border-neutral-800 text-center">
              <p> {new Date().getFullYear()} BidTales. All rights reserved.</p>
            </div>
          </div>
        </motion.div>
      </footer>
    </>
  );
}
