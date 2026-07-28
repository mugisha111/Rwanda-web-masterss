import "./Footer.css";
import { useEffect, useState } from "react";
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
      setShowTop(window.scrollY > 500);
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
            We build premium websites, business management systems, mobile
            applications and digital solutions that help businesses grow
            faster.
          </p>

          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>

            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>

            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn />
            </a>

            <a href="#" aria-label="GitHub">
              <FaGithub />
            </a>

            <a
              href="https://wa.me/250793770200"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* CONTACT */}
        <div className="footer-col">
          <h3>Contact Us</h3>

          <div className="footer-contact">
            <p>
              <FaEnvelope />
              <span>mugishatheophile1234@gmail.com</span>
            </p>

            <p>
              <FaPhoneAlt />
              <span>+250 79 377 0200</span>
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
          © {new Date().getFullYear()} Rwanda Web Masters. All Rights Reserved.
        </p>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Cookies Policy</a>
        </div>
      </div>

      {/* BACK TO TOP */}
      {showTop && (
        <button className="back-top" onClick={scrollTop}>
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}

export default Footer;