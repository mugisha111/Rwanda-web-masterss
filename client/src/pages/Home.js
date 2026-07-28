import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Solutions from "../components/Solutions/Solutions";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Portfolio from "../components/Portfolio/Portfolio";
import Process from "../components/Process/Process";
import Testimonials from "../components/Testimonials/Testimonials";
import CTA from "../components/CTA/CTA";
import Footer from "../components/Footer/Footer";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import PortfolioPage from "../components/PortfolioPage/PortfolioPage";

function Home() {
  return (
    <>
      <Navbar />

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Solutions />
              <WhyChoose />
              <Portfolio />
              <Process />
              <Testimonials />
              <CTA />
            </>
          }
        />

        {/* ABOUT PAGE */}
        <Route path="/about" element={<About />} />

        {/* CONTACT PAGE */}
        <Route path="/contact" element={<Contact />} />

        {/* PORTFOLIO PAGE */}
        <Route path="/portfolio" element={<PortfolioPage />} />

      </Routes>

      <Footer />
    </>
  );
}

export default Home;