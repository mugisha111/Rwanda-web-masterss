import "./Solutions.css";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

import webImg from "../../assets/images/product-web.png";
import mobileImg from "../../assets/images/product-mobile.png";
import securityImg from "../../assets/images/mugishaads.png";
import cloudImg from "../../assets/images/client1.jpg";

const solutions = [
  {
    title: "Web Development",
    tag: "Business Websites",
    image: webImg,
    desc:
      "Professional websites, eCommerce platforms, dashboards and custom business systems designed to grow your business.",
    link: "/services/web-development",
  },
  {
    title: "Mobile Applications",
    tag: "Android & iOS",
    image: mobileImg,
    desc:
      "Modern mobile applications with beautiful UI, high performance and secure architecture for Android and iOS.",
    link: "/services/mobile-apps",
  },
  {
    title: "Cyber Security",
    tag: "Security",
    image: securityImg,
    desc:
      "Protect your business with penetration testing, website security, server protection and cyber security solutions.",
    link: "/contact",
  },
  {
    title: "Cloud & Hosting",
    tag: "Cloud Services",
    image: cloudImg,
    desc:
      "Fast hosting, domain management, cloud deployment and continuous website maintenance for your business.",
    link: "/contact",
  },
];

function Solutions() {
  const navigate = useNavigate();

  return (
    <section className="solutions">
      <div className="solutions-container">

        <div className="solutions-title">
          <span>OUR SOLUTIONS</span>
          <h2>Digital Solutions We Build</h2>
          <p>
            Rwanda Web Masters builds modern digital
            solutions that help businesses automate,
            grow and succeed online.
          </p>
        </div>

        <div className="solutions-grid">
          {solutions.map((item, index) => (
            <div
              className="solution-card"
              key={index}
              style={{ backgroundImage: `url(${item.image})` }}
            >

              <div className="solution-overlay"></div>

              <span className="solution-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <div className="solution-tag">{item.tag}</div>

              <div className="solution-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>

                <button
                  className="solution-btn"
                  onClick={() => navigate(item.link)}
                >
                  Learn More
                  <FiArrowRight />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* BOTTOM CTA BANNER */}
        <div className="solutions-cta-banner">
          <div>
            <h3>Need a custom solution?</h3>
            <p>Tell us what you're building and we'll find the right fit.</p>
          </div>
          <button onClick={() => navigate("/contact")}>
            Talk To Us
            <FiArrowRight />
          </button>
        </div>

      </div>
    </section>
  );
}

export default Solutions;