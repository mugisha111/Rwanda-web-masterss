import "./Hero.css";
import { useState, useEffect, useRef } from "react";
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/images/hero-bg.png";

function Hero() {
  const navigate = useNavigate();
  const [appReady, setAppReady] = useState(false);
  const [inView, setInView] = useState(false);
  const heroLeftRef = useRef(null);

  // Wait for the loader to fully disappear before allowing any animation
  useEffect(() => {
    const handleReady = () => setAppReady(true);
    window.addEventListener("app-ready", handleReady);
    return () => window.removeEventListener("app-ready", handleReady);
  }, []);

  // Once the loader is gone, watch the hero text block: fade it in
  // when visible, fade it out when scrolled away, every time.
  useEffect(() => {
    if (!appReady) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.35 }
    );

    const current = heroLeftRef.current;
    if (current) observer.observe(current);

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [appReady]);

  const scrollToNext = () => {
    const nextSection = document.getElementById("services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const activeClass = appReady && inView ? "hero-start" : "";

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="overlay"></div>

      <div className="hero-container">

        <div className="hero-left" ref={heroLeftRef}>

          <span className={`hero-tag hero-anim hero-anim-1 ${activeClass}`}>
            RWANDA WEB MASTERS
          </span>

          <h1 className={`hero-anim hero-anim-2 ${activeClass}`}>
            We Build
            <br />
            Modern Websites
            <br />
            & Digital Solutions
          </h1>

          <p className={`hero-anim hero-anim-3 ${activeClass}`}>
            Rwanda Web Masters helps businesses,
            startups and organizations build
            professional websites, business systems,
            mobile applications and digital solutions.
          </p>

          <div className={`hero-buttons hero-anim hero-anim-4 ${activeClass}`}>

            <button
              className="btn-primary"
              onClick={() => navigate("/contact")}
            >
              Get Started
            </button>

            <button
              className="btn-secondary"
              onClick={() => navigate("/portfolio")}
            >
              View Portfolio
            </button>

          </div>

        </div>

      </div>

      <button
        className="scroll-down"
        onClick={scrollToNext}
        aria-label="Scroll to next section"
      >
        <FaArrowDown />
      </button>

    </section>
  );
}

export default Hero;