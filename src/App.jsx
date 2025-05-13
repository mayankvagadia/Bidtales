import { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useAnimation, useInView } from 'framer-motion';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import JoinNow from './pages/JoinNow';
import LandingPage from './pages/LandingPage';
import Navigation from './components/Navigation';

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
    title: 'Performance Marketing',
    description: 'Comprehensive pay-per-click campaign management to drive targeted traffic and conversions.'
  },
  {
    title: 'Social Media Management',
    description: 'Strategic social media campaigns across all major platforms to engage your audience.'
  },
  {
    title: 'Website & Funnel Development',
    description: 'Improve your search engine rankings and organic traffic with our proven SEO strategies.'
  },
  {
    title: 'Email & WhatsApp Marketing',
    description: 'Compelling content that resonates with your audience and drives meaningful engagement.'
  },
  {
    title: 'Search Engine Optimization (SEO)',
    description: 'Targeted email campaigns that convert and build lasting customer relationships.'
  },
  {
    title: 'Creative & Branding Services',
    description: 'Data-driven strategies to improve your website\'s conversion rates and maximize ROI.'
  },
  {
    title: 'Influencer Marketing',
    description: 'Data-driven strategies to improve your website\'s conversion rates and maximize ROI.'
  },
  {
    title: 'Analytics & Consulting',
    description: 'Data-driven strategies to improve your website\'s conversion rates and maximize ROI.'
  }
];

// Navigation data and scroll functionality moved to Navigation component

// Wrapper component to handle scroll behavior
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  const controls = useAnimation();
  const testimonialRef = useRef(null);
  const featuresRef = useRef(null);
  const servicesRef = useRef(null);
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
      <div className="min-h-screen flex flex-col bg-white font-sans">
        <Navigation />
        <ScrollToTop />
        <div className="pt-16"> {/* Add padding to account for fixed header */}

          <Routes>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/join" element={<JoinNow />} />
            <Route 
              path="/" 
              element={
                <LandingPage 
                  containerVariants={containerVariants}
                  itemVariants={itemVariants}
                  features={features}
                  services={services}
                  testimonialRef={testimonialRef}
                  featuresRef={featuresRef}
                  servicesRef={servicesRef}
                  testimonialControls={controls}
                />
              } 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
