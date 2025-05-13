import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircleIcon, BriefcaseIcon, UserGroupIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1]
    }
  }
};

const JoinNow = () => {
  const [activeTab, setActiveTab] = useState('freelancer');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'freelancer',
    skills: '',
    experience: '',
    portfolio: '',
    company: '',
    position: '',
    companySize: '',
    projectType: '',
    budget: '',
    timeline: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const freelancerBenefits = [
    'Access to premium projects',
    'Competitive pay rates',
    'Flexible work schedule',
    'Build your portfolio',
    'Get paid securely',
    'Work with global clients'
  ];

  const clientBenefits = [
    'Access to vetted freelancers',
    'Hire for any skill set',
    'Flexible engagement models',
    'Secure payment system',
    'Project management tools',
    '24/7 support'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Join BidTales Today
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-indigo-100 max-w-3xl mx-auto mb-12"
          >
            Whether you're a talented freelancer or a business looking for top talent, 
            BidTales connects you with the best opportunities.
          </motion.p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="flex justify-center">
          <div className="inline-flex rounded-full bg-white p-1 shadow-md">
            <button
              onClick={() => setActiveTab('freelancer')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all flex items-center ${
                activeTab === 'freelancer' 
                  ? 'bg-accent-500 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <UserGroupIcon className="h-5 w-5 mr-2" />
              I'm a Freelancer
            </button>
            <button
              onClick={() => setActiveTab('client')}
              className={`px-8 py-3 rounded-full text-sm font-medium transition-all flex items-center ${
                activeTab === 'client' 
                  ? 'bg-accent-500 text-white shadow-md' 
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
            >
              <BriefcaseIcon className="h-5 w-5 mr-2" />
              I'm a Client
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Benefits Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              {activeTab === 'freelancer' ? 'Why Join as a Freelancer?' : 'Why Join as a Client?'}
            </h2>
            
            <div className="space-y-4">
              {(activeTab === 'freelancer' ? freelancerBenefits : clientBenefits).map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircleIcon className="h-6 w-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-indigo-50 p-6 rounded-xl">
              <h3 className="font-semibold text-indigo-900 mb-2">How it works</h3>
              <ol className="space-y-3 text-sm text-gray-700">
                {activeTab === 'freelancer' ? (
                  <>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                      Create your profile and showcase your skills
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                      Browse and apply for projects that match your expertise
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                      Get hired and start working on exciting projects
                    </li>
                  </>
                ) : (
                  <>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">1</span>
                      Post your project requirements
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">2</span>
                      Review proposals from talented freelancers
                    </li>
                    <li className="flex items-start">
                      <span className="bg-indigo-100 text-indigo-800 font-bold rounded-full h-6 w-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">3</span>
                      Hire the best fit and get your project started
                    </li>
                  </>
                )}
              </ol>
            </div>
          </motion.div>

          {/* Form Section */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {activeTab === 'freelancer' ? 'Join as a Freelancer' : 'Join as a Client'}
            </h2>
            <p className="text-gray-600 mb-8">Fill out the form below to get started</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="+1 (___) ___-____"
                  />
                </div>
              </div>

              {activeTab === 'freelancer' ? (
                <>
                  <div>
                    <label htmlFor="skills" className="block text-sm font-medium text-gray-700 mb-1">
                      Skills <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="e.g., Web Development, Graphic Design, Content Writing"
                      required
                    />
                    <p className="mt-1 text-xs text-gray-500">Separate skills with commas</p>
                  </div>

                  <div>
                    <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                      Years of Experience
                    </label>
                    <select
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select experience level</option>
                      <option value="entry">Entry Level (0-2 years)</option>
                      <option value="mid">Mid Level (2-5 years)</option>
                      <option value="senior">Senior Level (5+ years)</option>
                      <option value="expert">Expert (10+ years)</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="portfolio" className="block text-sm font-medium text-gray-700 mb-1">
                      Portfolio/Website
                    </label>
                    <input
                      type="url"
                      id="portfolio"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="https://yourportfolio.com"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      placeholder="Your company name"
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Position
                      </label>
                      <input
                        type="text"
                        id="position"
                        name="position"
                        value={formData.position}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                        placeholder="e.g., Project Manager"
                      />
                    </div>

                    <div>
                      <label htmlFor="companySize" className="block text-sm font-medium text-gray-700 mb-1">
                        Company Size
                      </label>
                      <select
                        id="companySize"
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select company size</option>
                        <option value="1-10">1-10 employees</option>
                        <option value="11-50">11-50 employees</option>
                        <option value="51-200">51-200 employees</option>
                        <option value="201-1000">201-1,000 employees</option>
                        <option value="1000+">1,000+ employees</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="projectType" className="block text-sm font-medium text-gray-700 mb-1">
                        Project Type
                      </label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select project type</option>
                        <option value="web">Web Development</option>
                        <option value="mobile">Mobile App Development</option>
                        <option value="design">Design & Creative</option>
                        <option value="writing">Writing & Translation</option>
                        <option value="marketing">Digital Marketing</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="budget" className="block text-sm font-medium text-gray-700 mb-1">
                        Estimated Budget
                      </label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select budget range</option>
                        <option value="<1000">Less than $1,000</option>
                        <option value="1000-5000">$1,000 - $5,000</option>
                        <option value="5000-10000">$5,000 - $10,000</option>
                        <option value="10000-50000">$10,000 - $50,000</option>
                        <option value="50000+">$50,000+</option>
                      </select>
                    </div>
                  </div>
                </>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-accent-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-accent-600 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <span>Create My {activeTab === 'freelancer' ? 'Freelancer' : 'Client'} Account</span>
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>

              <p className="text-xs text-gray-500 text-center mt-4">
                By clicking the button above, you agree to our 
                <a href="/terms" className="text-accent-600 hover:underline ml-1">Terms of Service</a> and 
                <a href="/privacy" className="text-accent-600 hover:underline ml-1">Privacy Policy</a>.
              </p>
            </form>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to get started?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of freelancers and businesses already using BidTales to work together.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setActiveTab('freelancer')}
              className="bg-accent-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-accent-600 transition-colors duration-200 flex items-center justify-center"
            >
              <UserGroupIcon className="h-5 w-5 mr-2" />
              Join as Freelancer
            </button>
            <button
              onClick={() => setActiveTab('client')}
              className="bg-white text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-50 border border-gray-200 transition-colors duration-200 flex items-center justify-center"
            >
              <BriefcaseIcon className="h-5 w-5 mr-2" />
              Hire Freelancers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
