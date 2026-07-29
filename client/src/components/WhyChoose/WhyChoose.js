import "./WhyChoose.css";

import {
  FaLaptopCode,
  FaMobileAlt,
  FaShieldAlt,
  FaRocket,
  FaHeadset,
  FaCheckCircle,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode />,
    title: "Professional Development",
    desc: "We build modern websites, web applications and custom business systems using the latest technologies — engineered to grow with your business.",
    featured: true,
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Seamless experience across desktop, tablet and mobile devices.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Solutions",
    desc: "Security integrated into every stage of development.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Performance",
    desc: "Optimized code for fast loading speeds and outstanding performance.",
  },
  {
    icon: <FaHeadset />,
    title: "Reliable Support",
    desc: "Continuous technical support and maintenance whenever you need it.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Long-Term Partnership",
    desc: "We aim to become your trusted long-term technology partner.",
  },
];

function WhyChoose() {
  return (
    <section className="why-choose">

      <div className="why-container">

        <div className="why-header">
          <span className="why-tag">WHY CHOOSE US</span>
          <h2>
            Why Businesses Choose
            <br />
            Rwanda Web Masters
          </h2>
          <p className="why-description">
            We combine creativity, innovation and modern technologies
            to build reliable digital solutions that help businesses
            grow, improve efficiency and achieve long-term success.
          </p>
        </div>

        <div className="why-bento">
          {features.map((item, index) => (
            <div
              className={`why-item ${item.featured ? "why-item-featured" : ""}`}
              key={index}
            >
              <div className="why-icon">{item.icon}</div>

              <div className="why-info">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default WhyChoose;