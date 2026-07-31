import "./Services.css";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
  FaArrowRight,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Reveal from "../Reveal/Reveal";

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "Professional websites built with modern technologies.",
      slug: "web-development",
    },
    {
      icon: <FaServer />,
      title: "Custom Systems",
      desc: "Business management systems tailored to your company.",
      slug: null,
    },
    {
      icon: <FaPaintBrush />,
      title: "UI / UX Design",
      desc: "Clean, attractive and user-friendly digital experiences.",
      slug: "ui-ux-design",
    },
    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      desc: "Android & iOS applications with modern performance.",
      slug: "mobile-apps",
    },
  ];

  return (
    <section className="services" id="services">

      <div className="section-title">
        <Reveal>
          <h2>What We Do?</h2>
        </Reveal>

        <Reveal delay={150}>
          <p>
            We provide modern digital solutions that help businesses
            grow, automate processes and build a strong online presence.
          </p>
        </Reveal>
      </div>

      <div className="services-grid">
        {services.map((item, index) => (
          <Reveal key={index} delay={index * 130}>
            <div
              className={`service-card ${item.slug ? "clickable" : ""}`}
              onClick={item.slug ? () => navigate(`/services/${item.slug}`) : undefined}
            >
              <div className="service-icon">{item.icon}</div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              {item.slug && (
                <span className="service-link">
                  Learn More <FaArrowRight />
                </span>
              )}
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal delay={550}>
        <button
          className="service-btn"
          onClick={() => navigate("/contact")}
        >
          See All Services
        </button>
      </Reveal>

    </section>
  );
}

export default Services;