import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import AboutPage from "./pages/AboutPage";
import Footer from "./components/Footer";
import TellUs from "./components/TellUs";
import ServiceDetails from "./pages/ServiceDetails";
import ContactUs from "./pages/ContactUs";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <ScrollToTop />
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <main className="flex flex-col">
                <section id="home">
                  <Hero />
                </section>
                <section id="features">
                  <Features />
                </section>
                <section id="services">
                  <Services />
                </section>
                <section>
                  <Technologies />
                  <Stats />
                  <Testimonials />
                </section>
                <section id="contact">
                  <TellUs />
                </section>
              </main>
            }
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services/:serviceId" element={<ServiceDetails />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
