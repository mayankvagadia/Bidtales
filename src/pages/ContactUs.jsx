import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { PaperAirplaneIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';

// Animation variants
const ITEM_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

// Reusable Contact Card Component
const ContactCard = ({ icon: Icon, title, children }) => (
  <Motion.div 
    variants={ITEM_VARIANTS}
    className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
  >
    <div className="flex items-start space-x-4">
      <div className="p-3 rounded-lg bg-accent-50 text-accent-600">
        {Icon && <Icon className="h-6 w-6" />}
      </div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <div className="mt-2 text-gray-600">
          {children}
        </div>
      </div>
    </div>
  </Motion.div>
);

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [activeTab, setActiveTab] = useState('form');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setTimeout(() => setSubmitStatus(null), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white pt-10">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <Motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get in Touch
          </Motion.h1>
          <Motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-indigo-100 max-w-2xl mx-auto"
          >
            We're here to help and answer any questions you might have.
          </Motion.p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-white p-1 shadow-md">
            <button
              onClick={() => setActiveTab('form')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'form' 
                  ? 'bg-accent-600 text-white shadow-md' 
                  : 'text-gray-700 hover:text-accent-600'
              }`}
            >
              Send a Message
            </button>
            <button
              onClick={() => setActiveTab('info')}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-colors ${
                activeTab === 'info' 
                  ? 'bg-accent-600 text-white shadow-md' 
                  : 'text-gray-700 hover:text-accent-600'
              }`}
            >
              Contact Info
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <AnimatePresence mode="wait">
          {activeTab === 'form' ? (
            <Motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-3xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 sm:p-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
                  <p className="text-gray-600 mb-8">We'll get back to you as soon as possible</p>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="How can we help?"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows="5"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="Your message here..."
                        required
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-accent-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-accent-600 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-70"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <PaperAirplaneIcon className="h-5 w-5 mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>

                    <AnimatePresence>
                      {submitStatus === 'success' && (
                        <Motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 p-4 bg-green-50 border border-green-100 rounded-lg">
                            <p className="text-green-800 font-medium">Message sent successfully!</p>
                            <p className="text-sm text-green-700 mt-1">We'll get back to you soon.</p>
                          </div>
                        </Motion.div>
                      )}
                      {submitStatus === 'error' && (
                        <Motion.div 
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 p-4 bg-red-50 border border-red-100 rounded-lg">
                            <p className="text-red-800 font-medium">Something went wrong</p>
                            <p className="text-sm text-red-700 mt-1">Please try again later or contact us directly.</p>
                          </div>
                        </Motion.div>
                      )}
                    </AnimatePresence>
                  </form>
                </div>
              </div>
            </Motion.div>
          ) : (
            <Motion.div
              key="info"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-8 sm:p-10">
                  <h2 className="text-2xl font-bold text-gray-900 mb-8">Contact Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    <ContactCard
                      icon={EnvelopeIcon}
                      title="Email Us"
                    >
                      <a
                        href="mailto:contact@bidtales.com"
                        className="text-accent-600 hover:text-accent-800 transition-colors"
                      >
                        contact@bidtales.com
                      </a>
                    </ContactCard>
                    
                    <ContactCard
                      icon={PhoneIcon}
                      title="Call Us"
                    >
                      <a href="tel:+1234567890" className="text-indigo-600 hover:text-indigo-800 transition-colors">
                        +1 (234) 567-890
                      </a>
                    </ContactCard>
                    
                    <ContactCard
                      icon={MapPinIcon}
                      title="Visit Us"
                    >
                      <p>123 Business Street<br />City, State 12345<br />United States</p>
                    </ContactCard>
                    
                    <ContactCard
                      icon={FaInstagram}
                      title="Follow Us"
                    >
                      <div className="flex space-x-4">
                        <a
                          href="#" 
                          className="h-12 w-12 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-accent-50 hover:text-accent-600 transition-colors"
                          aria-label="Instagram"
                        >
                          <FaInstagram className="h-5 w-5" />
                        </a>
                        <a href="#" className="h-12 w-12 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-accent-50 hover:text-accent-600 transition-colors" aria-label="LinkedIn">
                          <FaLinkedin className="h-5 w-5" />
                        </a>
                        <a href="#" className="h-12 w-12 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-accent-50 hover:text-accent-600 transition-colors" aria-label="Twitter">
                          <FaTwitter className="h-5 w-5" />
                        </a>
                        <a href="#" className="h-12 w-12 rounded-full bg-white shadow-sm border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-accent-50 hover:text-accent-600 transition-colors" aria-label="GitHub">
                          <FaGithub className="h-5 w-5" />
                        </a>
                      </div>
                    </ContactCard>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-xl font-semibold text-gray-900">Business Hours</h3>
                      <div className="h-10 w-10 rounded-full bg-accent-50 flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="text-gray-700 font-medium">Monday - Friday</span>
                        <span className="text-gray-600 font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="text-gray-700 font-medium">Saturday</span>
                        <span className="text-gray-600 font-medium">10:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <span className="text-gray-700 font-medium">Sunday</span>
                        <span className="text-gray-400">Closed</span>
                      </div>
                    </div>
                    
                    <div className="rounded-lg overflow-hidden border border-gray-200 h-48 w-full">
                      <iframe
                        title="Our Location"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.215019101879!2d-73.9878449240179!3d40.75798597158998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1623456789012!5m2!1sen!2sus"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="rounded-b-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ContactUs;
