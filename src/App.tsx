import { useRef } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Services from "./components/Services";
import Technologies from "./components/Technologies";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import About from "./components/About";
// import CaseStudies from "./components/CaseStudies";
// import Blog from "./components/Blog";
import Footer from "./components/Footer";

function App() {
  const homeRef = useRef(null);
  const servicesRef = useRef(null);
  const aboutRef = useRef(null);
  const caseStudiesRef = useRef(null);
  const blogRef = useRef(null);
  const contactRef = useRef(null);

  return (
    <div className="min-h-screen  bg-white">
      <Header
        sectionRefs={{
          home: homeRef,
          services: servicesRef,
          about: aboutRef,
          caseStudies: caseStudiesRef,
          blog: blogRef,
          contact: contactRef,
        }}
      />
      <main className="flex flex-col">
        <section ref={homeRef} id="home">
          <Hero />
        </section>
        <section ref={servicesRef} id="services">
          <Features />
          <Services />
        </section>
        <section ref={aboutRef} id="about">
          <About />
        </section>
        {/* <section ref={caseStudiesRef} id="case-studies">
          <CaseStudies />
        </section> */}
        {/* <section ref={blogRef} id="blog">
          <Blog />
        </section> */}
        <section ref={contactRef} id="contact">
          <Technologies />
          <Stats />
          <Testimonials />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
