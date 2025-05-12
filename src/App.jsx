import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useAnimation, useInView } from 'framer-motion';
import AboutUs from './pages/AboutUs';
import LandingPage from './components/LandingPage';

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
      duration: 0.5
    }
  }
};

// Features data
const features = [
  {
    title: 'Advanced Analytics',
    description: 'Get detailed insights and analytics to track your campaign performance and make data-driven decisions.'
  },
  {
    title: 'Automated Bidding',
    description: 'Our AI-powered bidding system optimizes your ad spend to maximize ROI across all platforms.'
  },
  {
    title: 'Creative Suite',
    description: 'Access our library of high-converting ad creatives and templates designed by our expert team.'
  }
];

// Services data
const services = [
  {
    title: 'PPC Management',
    description: 'Comprehensive pay-per-click campaign management to drive targeted traffic and conversions.'
  },
  {
    title: 'Social Media Advertising',
    description: 'Strategic social media campaigns across all major platforms to engage your audience.'
  },
  {
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and organic traffic with our proven SEO strategies.'
  },
  {
    title: 'Content Marketing',
    description: 'Compelling content that resonates with your audience and drives meaningful engagement.'
  },
  {
    title: 'Email Marketing',
    description: 'Targeted email campaigns that convert and build lasting customer relationships.'
  },
  {
    title: 'Conversion Rate Optimization',
    description: 'Data-driven strategies to improve your website\'s conversion rates and maximize ROI.'
  }
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '#services' },
  { name: 'Features', href: '#features' },
  { name: 'Testimonials', href: '#testimonials' },
];

export default function App() {
  const controls = useAnimation();
  const testimonialRef = useRef(null);
  const isInView = useInView(testimonialRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
        },
      });
    }
  }, [isInView, controls]);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation */}
        <header className="fixed w-full bg-white/80 backdrop-blur-md z-50 shadow-sm">
          <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center">
                <Link to="/" className="flex-shrink-0 flex items-center">
                  <span className="text-2xl font-bold text-blue-600">BidTales</span>
                </Link>
              </div>
              <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
                <a
                  href="#join"
                  className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </a>
              </div>
              <div className="-mr-2 flex items-center md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        </header>

        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route 
            path="/" 
            element={
              <LandingPage 
                containerVariants={containerVariants}
                itemVariants={itemVariants}
                features={features}
                services={services}
                testimonialRef={testimonialRef}
                testimonialControls={controls}
              />
            } 
          />
        </Routes>

        {/* Mobile menu */}
        <div className="md:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="block py-2 pl-3 pr-4 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Router>
  );
}
