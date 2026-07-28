import "./Services.css";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaPaintBrush,
  FaServer,
} from "react-icons/fa";

function Services() {

  const services = [

    {
      icon: <FaLaptopCode />,
      title: "Web Development",
      desc: "Professional websites built with modern technologies."
    },

    {
      icon: <FaServer />,
      title: "Custom Systems",
      desc: "Business management systems tailored to your company."
    },

    {
      icon: <FaPaintBrush />,
      title: "UI / UX Design",
      desc: "Clean, attractive and user-friendly digital experiences."
    },

    {
      icon: <FaMobileAlt />,
      title: "Mobile Apps",
      desc: "Android & iOS applications with modern performance."
    }

  ];

  return (

    <section className="services">

      <div className="section-title">

        <h2>What We Do?</h2>

        <p>
          We provide modern digital solutions that help businesses
          grow, automate processes and build a strong online presence.
        </p>

      </div>

      <div className="services-grid">

        {
          services.map((item,index)=>(

            <div className="service-card" key={index}>

              <div className="service-icon">

                {item.icon}

              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>

            </div>

          ))
        }

      </div>

      <button className="service-btn">

        See All Services

      </button>

    </section>

  );

}

export default Services;