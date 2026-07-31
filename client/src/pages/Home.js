import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "../components/Navbar/Navbar";
import Loader from "../components/Loader/Loader";
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
import ServiceDetail from "../components/ServiceDetail/ServiceDetail";

function Home() {
  const location = useLocation();
  const [pageLoading, setPageLoading] = useState(false);
  const [fading, setFading] = useState(false);
  const [firstRender, setFirstRender] = useState(true);

  useEffect(() => {
    if (firstRender) {
      setFirstRender(false);
      window.scrollTo(0, 0);
      return;
    }

    setPageLoading(true);
    setFading(false);
    window.scrollTo(0, 0);

    const fadeTimer = setTimeout(() => setFading(true), 450);
    const removeTimer = setTimeout(() => {
      setPageLoading(false);
      window.dispatchEvent(new Event("app-ready"));
    }, 700);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <>
      {pageLoading && <Loader fading={fading} />}

      <Navbar />

      <Routes>

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

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />

      </Routes>

      <Footer />
    </>
  );
}

export default Home;