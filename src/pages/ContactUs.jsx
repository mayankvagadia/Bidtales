import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { PaperAirplaneIcon, EnvelopeIcon, PhoneIcon, MapPinIcon, ClockIcon, UserGroupIcon, BriefcaseIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

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
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const form = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Replace these with your actual EmailJS service ID, template ID, and public key
    const serviceId = 'service_fkx1skm';
    const templateId = 'template_dp2kxmq';
    const publicKey = '237ue0ZMuf8ZxXSio';

    try {
      console.log('Sending form data:', formData);
      
      // Send email using EmailJS
      const result = await emailjs.sendForm(serviceId, templateId, form.current, publicKey);
      console.log('EmailJS response:', result);
      
      if (result.status === 200) {
        console.log('Form submitted successfully:', formData);
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          title: '',
          message: ''
        });
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('Error details:', {
        error,
        message: error.message,
        response: error.response,
        status: error.status,
        text: error.text
      });
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus(null), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Join Now Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Big Together – Join BidTales
          </h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto mb-12">
            Don't wait. The next opportunity is one click away.
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* For Brands */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <div className="flex items-center mb-4">
                <BriefcaseIcon className="h-8 w-8 mr-3 text-white" />
                <h2 className="text-2xl font-bold">For Brands</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-300 mt-1 mr-2 flex-shrink-0" />
                  <span>Access vetted freelancers</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-300 mt-1 mr-2 flex-shrink-0" />
                  <span>Manage projects transparently</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-300 mt-1 mr-2 flex-shrink-0" />
                  <span>Hire per project or a full team</span>
                </li>
              </ul>
            </div>

            {/* For Freelancers */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-left">
              <div className="flex items-center mb-4">
                <UserGroupIcon className="h-8 w-8 mr-3 text-white" />
                <h2 className="text-2xl font-bold">For Freelancers</h2>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-300 mt-1 mr-2 flex-shrink-0" />
                  <span>Bid on premium projects</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-300 mt-1 mr-2 flex-shrink-0" />
                  <span>Create a strong profile</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-300 mt-1 mr-2 flex-shrink-0" />
                  <span>Get paid reliably</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-5 w-5 text-green-300 mt-1 mr-2 flex-shrink-0" />
                  <span>Access project leads</span>
                </li>
              </ul>
            </div>
          </div>
          <button 
            onClick={() => navigate('/join')}
            className="mt-12 bg-white text-indigo-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-indigo-50 transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Join Now
          </button>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Contact Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Info Card */}
            <div className="bg-gray-50 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">BidTales Marketing Pvt. Ltd.</h3>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <EnvelopeIcon className="h-6 w-6 text-accent-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <a href="mailto:bidtales@gmail.com" className="text-gray-900 hover:text-accent-600">bidtales@gmail.com</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <PhoneIcon className="h-6 w-6 text-accent-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-500 text-sm">Phone</p>
                    <a href="tel:+916026767767" className="text-gray-900 hover:text-accent-600">+91 6026767767</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPinIcon className="h-6 w-6 text-accent-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="text-gray-900">Hisar, Haryana, India – 125121</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <FaInstagram className="h-6 w-6 text-accent-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-500 text-sm">Instagram</p>
                    <a href="https://instagram.com/bidtales" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-accent-600">@bidtales</a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <ClockIcon className="h-6 w-6 text-accent-600 mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-500 text-sm">Support Hours</p>
                    <p className="text-gray-900">Mon–Sat | 10 AM – 6 PM IST</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="md:col-span-2 rounded-xl overflow-hidden h-96">
              <iframe
                title="BidTales Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112027.2097627937!2d75.6796535!3d29.1533519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391233f2e7c9c8e5%3A0x7f9a6d3b3b3b3b3b!2sHisar%2C%20Haryana%20125001!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="p-8 sm:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a message</h2>
              <p className="text-gray-600 mb-8">We'll get back to you as soon as possible</p>
              
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
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
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
