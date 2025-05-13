import { motion, useAnimation, useInView } from 'framer-motion';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import AnimatedFeatureCard from './AnimatedFeatureCard';
import AnimatedServiceCard from './AnimatedServiceCard';
import { useEffect, useRef } from 'react';

// This is a workaround to prevent unused motion lint error
const MotionMain = motion.main;

// AnimatedText component for letter-by-letter animation
const AnimatedText = ({ text, className, delay = 0, stagger = 0.02 }) => {
  const letters = Array.from(text);
  const container = useRef(null);
  const isInView = useInView(container, { once: true, amount: 0.5 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { 
        staggerChildren: stagger, 
        delayChildren: delay 
      }
    })
  };

  const childVariants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 200
      }
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: 90,
      transition: {
        type: 'spring',
        damping: 15,
        stiffness: 200
      }
    }
  };

  return (
    <motion.span
      ref={container}
      className={`inline-block ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={controls}
    >
      {letters.map((letter, index) => (
        <motion.span 
          key={index} 
          variants={childVariants}
          className="inline-block"
        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Floating element with enhanced animation
const FloatingElement = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 0 }}
      animate={{
        y: [0, -15, 0],
      }}
      transition={{
        duration: 5 + Math.random() * 3,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
        delay: delay
      }}
    >
      {children}
    </motion.div>
  );
};

export default function LandingPage({ 
  containerVariants, 
  itemVariants, 
  features, 
  services, 
  testimonialRef, 
  featuresRef,
  testimonialControls 
}) {
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
          {/* Enhanced Dark Animated Background */}
          <div className="absolute inset-0 -z-0 overflow-hidden bg-gray-900">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
            
            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 animate-gradient-xy bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/30 via-transparent to-purple-900/30"></div>
            
            {/* Animated Particles */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-white/5"
                  style={{
                    width: Math.random() * 6 + 2 + 'px',
                    height: Math.random() * 6 + 2 + 'px',
                    left: Math.random() * 100 + '%',
                    top: Math.random() * 100 + '%',
                    boxShadow: '0 0 10px 2px rgba(99, 102, 241, 0.5)'
                  }}
                  animate={{
                    y: [0, -20],
                    opacity: [0.2, 0.8, 0.2],
                  }}
                  transition={{
                    duration: 5 + Math.random() * 10,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: Math.random() * 5
                  }}
                />
              ))}
            </div>
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

            `}</style>
          </div>
          <motion.div variants={itemVariants} className="relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <motion.div className="overflow-hidden">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight">
                    <AnimatedText 
                      text="Grow Your Business with " 
                      className="inline-block"
                      stagger={0.01}
                    />
                    <AnimatedText 
                      text="BidTales" 
                      className="inline-block text-primary-600"
                      delay={0.3}
                      stagger={0.03}
                    />
                  </h1>
                </motion.div>
                <motion.div className="overflow-hidden">
                  <p className="text-lg text-gray-300 mt-6 max-w-2xl">
                    <AnimatedText 
                      text="We help businesses scale their digital marketing efforts with data-driven strategies and expert execution."
                      stagger={0.01}
                      delay={0.5}
                    />
                  </p>
                </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 pt-4"
                  >
<motion.a 
                      href="#join" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/20"
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.4)'
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.8 }
                      }}
                    >
                      <motion.span>Get Started</motion.span>
                      <motion.span 
                        className="ml-2"
                        animate={{
                          x: [0, 4, 0]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatType: 'loop'
                        }}
                      >
                        <ArrowRightIcon className="h-5 w-5" />
                      </motion.span>
                    </motion.a>
                    <motion.a 
                      href="#services" 
                      className="inline-flex items-center justify-center px-6 py-3 border border-gray-600 text-base font-medium rounded-lg text-white bg-gray-800/50 hover:bg-gray-800 transition-all duration-300 backdrop-blur-sm hover:shadow-lg hover:shadow-indigo-500/10"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: 'rgba(255, 255, 255, 0.9)'
                      }}
                      whileTap={{ scale: 0.98 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: 1, 
                        y: 0,
                        transition: { delay: 0.9 }
                      }}
                    >
                      Learn More
                    </motion.a>
                  </motion.div>
                </div>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
<motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ 
                        opacity: 1, 
                        scale: 1,
                        transition: { 
                          delay: 0.5,
                          type: 'spring',
                          stiffness: 100,
                          damping: 10
                        }
                      }}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <img 
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                        alt="Digital Marketing"
                        className="w-full h-auto rounded-xl border-2 border-white/10 shadow-2xl"
                      />
                    </motion.div>
                  </div>
<FloatingElement className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-900/30 rounded-full mix-blend-overlay filter blur-3xl opacity-40" delay={0.2} />
                  <FloatingElement className="absolute -top-16 -left-16 w-80 h-80 bg-purple-900/30 rounded-full mix-blend-overlay filter blur-3xl opacity-40" delay={0.4} />
                  <FloatingElement className="absolute -bottom-8 left-1/4 w-72 h-72 bg-indigo-900/30 rounded-full mix-blend-overlay filter blur-3xl opacity-40" delay={0.6} />
                  
                  {/* Additional floating elements for more depth */}
                  <motion.div 
                    className="absolute top-1/4 right-1/4 w-16 h-16 rounded-full bg-blue-500/20 backdrop-blur-sm"
                    animate={{
                      y: [0, -20, 0],
                      x: [0, 10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{
                      duration: 8,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut',
                      delay: 0.5
                    }}
                  />
                  <motion.div 
                    className="absolute bottom-1/3 left-1/4 w-24 h-24 rounded-full bg-indigo-500/20 backdrop-blur-sm"
                    animate={{
                      y: [0, -15, 0],
                      x: [0, -15, 0],
                      rotate: [0, 360]
                    }}
                    transition={{
                      duration: 15,
                      repeat: Infinity,
                      repeatType: 'reverse',
                      ease: 'easeInOut'
                    }}
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Features Section */}
      <section id="features" ref={featuresRef} className="py-20 bg-gray-900">
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
      <section id="testimonials" ref={testimonialRef} className="py-20 bg-gray-900 border-t border-gray-800">
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
                      D
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