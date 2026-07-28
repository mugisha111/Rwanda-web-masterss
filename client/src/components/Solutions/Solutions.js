import "./Solutions.css";

import {
  FiArrowRight,
} from "react-icons/fi";

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

  },

  {

    title: "Mobile Applications",

    tag: "Android & iOS",

    image: mobileImg,

    desc:
      "Modern mobile applications with beautiful UI, high performance and secure architecture for Android and iOS.",

  },

  {

    title: "Cyber Security",

    tag: "Security",

    image: securityImg,

    desc:
      "Protect your business with penetration testing, website security, server protection and cyber security solutions.",

  },

  {

    title: "Cloud & Hosting",

    tag: "Cloud Services",

    image: cloudImg,

    desc:
      "Fast hosting, domain management, cloud deployment and continuous website maintenance for your business.",

  },

];

function Solutions() {

  return (

    <section className="solutions">

      <div className="solutions-container">

        <div className="section-title">

          <span>
            OUR SOLUTIONS
          </span>

          <h2>

            Digital Solutions We Build

          </h2>

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
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >

              <div className="solution-overlay"></div>

              <div className="solution-tag">

                {item.tag}

              </div>

              <div className="solution-content">

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.desc}

                </p>

                <button className="solution-btn">

                  Learn More

                  <FiArrowRight />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>

  );

}

export default Solutions;