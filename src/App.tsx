import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
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
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
