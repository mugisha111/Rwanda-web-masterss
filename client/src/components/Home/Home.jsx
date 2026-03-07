import { useState, useEffect } from "react";
import {
  FaStar,
  FaChevronLeft,
  FaChevronRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

import "./Home.css";

// ASSETS
import heroImg from "../../assets/hero.png";
import about1 from "../../assets/about1.png";
import about2 from "../../assets/about2.png";
import about3 from "../../assets/about3.jpg";
import press1 from "../../assets/press1.jpg";
import contactMap from "../../assets/map.png";
import productWeb from "../../assets/product-web.png";
import productMobile from "../../assets/product-mobile.png";
import productCyber from "../../assets/product-cyber.png";

// PRODUCTS DATA
const products = [
  {
    title: "Web Applications",
    desc: "Custom web systems, dashboards and platforms built for speed, security and scalability.",
    image: productWeb,
    tag: "Websites",
  },
  {
    title: "Mobile Applications",
    desc: "Modern Android & iOS apps designed for performance and user experience.",
    image: productMobile,
    tag: "Apps",
  },
  {
    title: "Cyber Security",
    desc: "Advanced security solutions including system protection, data security and threat prevention.",
    image: productCyber,
    tag: "Security",
  },
];

// TESTIMONIALS
const testimonialsData = [
  {
    name: "Business Owner",
    comment: "Rwanda Web Masters delivered our project professionally and on time.",
  },
  {
    name: "Startup Founder",
    comment: "Highly recommended for modern digital solutions.",
  },
  {
    name: "Real Estate Manager",
    comment: "Their team is reliable, skilled, and very professional.",
  },
];

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const fullText = "Building Modern Digital Solutions in Rwanda";
  const [typedText, setTypedText] = useState("");

  /* ===== TYPING EFFECT ===== */
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  /* ===== TESTIMONIAL AUTO SLIDE ===== */
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) =>
        prev === testimonialsData.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setActiveTestimonial(
      activeTestimonial === testimonialsData.length - 1 ? 0 : activeTestimonial + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      activeTestimonial === 0 ? testimonialsData.length - 1 : activeTestimonial - 1
    );
  };

  /* ===== PROCESS STEPS ANIMATION ===== */
  useEffect(() => {
    const steps = document.querySelectorAll(".step");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.3 }
    );

    steps.forEach((step) => observer.observe(step));

    return () => steps.forEach((step) => observer.unobserve(step));
  }, []);

  return (
    <div className="home-wrapper">
      {/* ================= HERO ================= */}
      <section className="hero">
        <div className="hero-overlay"></div>

        {/* ===== TOP NAVBAR ===== */}
        <nav className="top-navbar">
          <div className="top-bar">
            <span className="typing-text">
              {typedText}
              <span className="typing-cursor">|</span>
            </span>

            <div className="top-socials">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
            </div>
          </div>

          {/* MAIN NAV */}
          <div className="main-navbar">
            <div className="nav-logo">
              <span className="logo-icon">RW</span>
              <span className="logo-text">Web Masters</span>
            </div>

            <ul className="nav-links">
              <li className="active">Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Solutions</li>
              <li>Contact</li>
            </ul>

            <div className="nav-actions">
              <div className="nav-phone">
                <FaPhoneAlt />
                <span>+250 793 770 200</span>
              </div>
              <a
                href="https://wa.me/250793770200"
                target="_blank"
                rel="noopener noreferrer"
                className="nav-btn"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </nav>

        <div className="hero-content-center">
          <span className="hero-badge">🇷🇼 Rwanda Web Masters</span>

          <h1 className="hero-big-title">
            Building <span>Modern</span>
            <br />
            Digital <span>Solutions</span>
            <br />
            For Your Business
          </h1>

          <p className="hero-sub">
            We design and develop high-performance websites, mobile apps, and
            secure digital solutions tailored to help businesses grow.
          </p>

          <div className="hero-actions">
            <button className="hero-primary-btn">
              Get Started <FiArrowRight />
            </button>
            <button className="hero-outline-btn">View Services</button>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="about-section">
        <div className="about-left">
          <div className="about-box">
            ABOUT <br /> US
          </div>
          <div className="about-images">
            <img src={about1} alt="about" className="about-img small" />
            <img src={about2} alt="about" className="about-img large" />
          </div>
        </div>

        <div className="about-right">
          <h2>
            Building Smart Digital Solutions <br />
            <span>for Modern Businesses</span>
          </h2>

          <p>
            Rwanda Web Masters is a professional digital agency specializing in
            websites, web applications, UI/UX design, branding and custom
            software solutions.
          </p>

          <button className="about-btn">Learn More →</button>
        </div>
      </section>

      {/* ================= PRODUCTS ================= */}
      <section className="products-section">
        <div className="product-cards">
          {products.map((item, index) => (
            <div
              className="product-card"
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="product-overlay"></div>
              <div className="product-tag">{item.tag}</div>
              <div className="product-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <button className="product-btn">
                  View Details <FiArrowRight />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY ================= */}
      <section className="why-section">
        <h2>
          Why <span>Choose Us</span>
        </h2>
        <div className="why-grid">
          <div>Experienced Team</div>
          <div>Modern Technologies</div>
          <div>Business-Oriented Solutions</div>
          <div>Reliable Support</div>
          <div>Secure Systems</div>
          <div>On-Time Delivery</div>
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="process-section">
        <div className="process-container">
          <div className="process-image">
            <img src={productWeb} alt="how we work" />
          </div>

          <div className="process-content">
            <small className="process-label">Our Process</small>
            <h2>
              How We <span>Work</span>
            </h2>
            <p className="process-desc">
              We follow a clear and structured process to deliver reliable and
              high-quality solutions for our clients.
            </p>

            <div className="process-steps">
              <div className="step">
                <span>01</span>
                <div>
                  <h4>Consultation</h4>
                  <p>Understanding your goals and business needs.</p>
                </div>
              </div>

              <div className="step">
                <span>02</span>
                <div>
                  <h4>Planning</h4>
                  <p>Defining strategy, scope, and execution roadmap.</p>
                </div>
              </div>

              <div className="step">
                <span>03</span>
                <div>
                  <h4>Development</h4>
                  <p>Building secure and scalable digital solutions.</p>
                </div>
              </div>

              <div className="step">
                <span>04</span>
                <div>
                  <h4>Launch & Support</h4>
                  <p>Deployment, monitoring, and continuous support.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="testimonials-section">
        <h2>
          What Clients <span>Say</span>
        </h2>

        <div className="testimonial-slider">
          <button className="arrow left" onClick={prevTestimonial}>
            <FaChevronLeft />
          </button>

          {testimonialsData.map((item, index) => (
            <div
              key={index}
              className={`testimonial-card ${
                index === activeTestimonial ? "active" : ""
              }`}
            >
              <div className="testimonial-header">
                <div className="avatar">{item.name.charAt(0)}</div>
                <div>
                  <h4>{item.name}</h4>
                  <div className="stars">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-text">“{item.comment}”</p>
            </div>
          ))}

          <button className="arrow right" onClick={nextTestimonial}>
            <FaChevronRight />
          </button>
        </div>

        <div className="dots">
          {testimonialsData.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === activeTestimonial ? "active" : ""}`}
              onClick={() => setActiveTestimonial(i)}
            />
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="footer-overlay"></div>

        <div className="footer-container">
          <div className="footer-col brand">
            <h2>Rwanda Web Masters</h2>
            <p className="tagline">Building Modern Digital Solutions</p>
            <p className="desc">
              We help businesses grow through professional websites, mobile
              applications, and secure digital solutions.
            </p>

            <div className="footer-socials">
              <FaFacebookF />
              <FaTwitter />
              <FaInstagram />
              <FaWhatsapp />
            </div>
          </div>

          <div className="footer-col links">
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>How We Work</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="footer-col contact">
            <h4>Contact Us</h4>
            <p>
              <FaPhoneAlt /> +250 793 770 200
            </p>
            <p>info@rwandawebmasters.com</p>

            <div className="footer-map">
              <iframe
                title="Rwanda Web Masters Location"
                src="https://www.google.com/maps?q=Kigali,Rwanda&output=embed"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} Rwanda Web Masters. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Home;
