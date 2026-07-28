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
    desc: "We build modern websites, web applications and custom business systems using the latest technologies.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Every project is fully responsive and delivers a seamless experience across desktop, tablet and mobile devices.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Solutions",
    desc: "Security is integrated into every stage of development to protect your business and customer data.",
  },
  {
    icon: <FaRocket />,
    title: "Fast Performance",
    desc: "Optimized code and modern technologies ensure fast loading speeds and outstanding performance.",
  },
  {
    icon: <FaHeadset />,
    title: "Reliable Support",
    desc: "We provide continuous technical support, maintenance and updates whenever your business needs them.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Long-Term Partnership",
    desc: "Our goal is not only to build your project but also to become your trusted technology partner.",
  },
];

function WhyChoose() {
  return (
    <section className="why-choose">

      <div className="why-container">

        <div className="why-header">

          <span className="why-tag">
            WHY CHOOSE US
          </span>

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

        <div className="why-list">

          {features.map((item, index) => (

            <div
              className="why-item"
              key={index}
            >

              <div className="why-icon">
                {item.icon}
              </div>

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