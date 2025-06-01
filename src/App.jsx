import { useEffect, useRef, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useAnimation, useInView } from "framer-motion";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import JoinNow from "./pages/JoinNow";
import LandingPage from "./pages/LandingPage";
import Navigation from "./components/Navigation";
import ExplorePage from "./pages/ExplorePage ";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
};

// Features data
const features = [
  {
    title: "Advanced Analytics",
    description:
      "Get detailed insights and analytics to track your campaign performance and make data-driven decisions.",
  },
  {
    title: "Automated Bidding",
    description:
      "Our AI-powered bidding system optimizes your ad spend to maximize ROI across all platforms.",
  },
  {
    title: "Creative Suite",
    description:
      "Access our library of high-converting ad creatives and templates designed by our expert team.",
  },
];
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
      <div className="min-h-screen flex flex-col bg-blue-300 font-sans">
        <Navigation />
        <ScrollToTop />
        <div className="pt-16">
          {" "}
          {/* Add padding to account for fixed header */}
          <Routes>
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/join" element={<JoinNow />} />
            <Route path="/explore/:serviceName" element={<ExplorePage />} />
            <Route
              path="/"
              element={
                <LandingPage
                  containerVariants={containerVariants}
                  itemVariants={itemVariants}
                  features={features}
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
