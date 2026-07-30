import "./Footer.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
  FaWhatsapp,
  FaArrowUp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {

  const [showTop, setShowTop] = useState(false);

  useEffect(() => {

    const handleScroll = () => {
      setShowTop(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const scrollTop = () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  };

  return (

    <footer className="footer">

      <div className="footer-container">

        {/* COMPANY */}

        <div className="footer-col company">

          <h2 className="footer-logo">
            Rwanda <span>Web Masters</span>
          </h2>

          <p>
            Rwanda Web Masters builds premium websites,
            business management systems, mobile applications
            and modern digital solutions that help businesses
            grow faster and smarter.
          </p>

          <div className="footer-social">

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com/rwandawebmasters"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>

            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://wa.me/250793770200"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>

          </div>

        </div>

        {/* QUICK LINKS */}

        <div className="footer-col">

          <h3>Quick Links</h3>

          <ul>

            <li>
              <Link to="/">Home</Link>
            </li>

            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li>
              <Link to="/services">Services</Link>
            </li>

            <li>
              <Link to="/portfolio">Portfolio</Link>
            </li>

            <li>
              <Link to="/contact">Contact</Link>
            </li>

          </ul>

        </div>

        {/* SERVICES */}

        <div className="footer-col">

          <h3>Services</h3>

          <ul>

            <li>Website Development</li>

            <li>Business Systems</li>

            <li>Mobile Applications</li>

            <li>UI / UX Design</li>

            <li>Website Maintenance</li>

          </ul>

        </div>

        {/* CONTACT */}

        <div className="footer-col">

          <h3>Contact</h3>

          <div className="footer-contact">

            <p>

              <FaEnvelope />

              <span>rwandawebmasters@gmail.com</span>

            </p>

            <p>

              <FaPhoneAlt />

              <span>0793770200</span>

            </p>

            <p>

              <FaMapMarkerAlt />

              <span>Kigali, Rwanda</span>

            </p>

          </div>

        </div>

      </div>

      {/* FOOTER BOTTOM */}

      <div className="footer-bottom">

        <p>
          © {new Date().getFullYear()} Rwanda Web Masters.
          All Rights Reserved.
        </p>

        <div className="footer-links">

          <Link to="/privacy">
            Privacy Policy
          </Link>

          <Link to="/terms">
            Terms & Conditions
          </Link>

          <Link to="/cookies">
            Cookies Policy
          </Link>

        </div>

      </div>

      {/* BACK TO TOP */}

      {showTop && (

        <button
          className="back-top"
          onClick={scrollTop}
          aria-label="Back To Top"
        >

          <FaArrowUp />

        </button>

      )}

    </footer>

  );

}

export default Footer;