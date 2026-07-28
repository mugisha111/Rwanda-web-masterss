import "./Testimonials.css";
import { useState, useEffect } from "react";

import {
  FaQuoteLeft,
  FaStar,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

import heroClient from "../../assets/testimonials/client-main.png";

import client1 from "../../assets/testimonials/client1.jpg";
import client2 from "../../assets/testimonials/client2.jpg";
import client3 from "../../assets/testimonials/client3.jpg";
import client4 from "../../assets/testimonials/client4.jpg";
import client5 from "../../assets/testimonials/client5.jpg";

const testimonials = [
  {
    id: 1,
    name: "Jean Claude Habimana",
    position: "CEO • Kigali Business Group",
    image: client1,
    hero: heroClient,
    message:
      "Rwanda Web Masters transformed our business with a modern website that completely changed how customers discover our company online. Their professionalism, creativity and support exceeded our expectations.",
  },

  {
    id: 2,
    name: "Alice Uwimana",
    position: "Director • Bright Future School",
    image: client2,
    hero: heroClient,
    message:
      "The school management system they built is fast, secure and very easy to use. Teachers, parents and students can now access information anytime from anywhere.",
  },

  {
    id: 3,
    name: "Patrick Niyomugabo",
    position: "Founder • Smart Shop Rwanda",
    image: client3,
    hero: heroClient,
    message:
      "Our online sales increased after launching our e-commerce platform. The website is beautiful, responsive and gives our customers an excellent shopping experience.",
  },

  {
    id: 4,
    name: "Divine Mukamana",
    position: "Manager • Health Plus Clinic",
    image: client4,
    hero: heroClient,
    message:
      "Their hospital management system simplified our daily operations and improved patient services. Rwanda Web Masters delivered beyond our expectations.",
  },

  {
    id: 5,
    name: "Eric Mugisha",
    position: "Owner • Dream Homes Ltd",
    image: client5,
    hero: heroClient,
    message:
      "Working with Rwanda Web Masters was one of the best investments we have ever made. They understand modern design, business needs and technology.",
  },
];

function Testimonials() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const active = testimonials[current];

  return (
    <section className="testimonials">

      <div className="testimonial-container">

        <div className="testimonial-header">

          <span className="testimonial-tag">
            CLIENT TESTIMONIALS
          </span>

          <h2>
            Customer Say
            <br />
            About Our Services
          </h2>

          <p>
            Discover what our happy clients say about Rwanda Web Masters
            after working with us on websites, business systems,
            mobile apps and digital solutions.
          </p>

        </div>

        <div className="testimonial-wrapper">          {/* LEFT SIDE */}

          <div className="testimonial-left">

            <div className="testimonial-image-box">

              <img
                src={active.hero}
                alt={active.name}
                className="testimonial-main-image"
              />

              <div className="trusted-box">

                <span>Trusted Clients</span>

                <div className="trusted-users">

                  <img src={client1} alt="" />
                  <img src={client2} alt="" />
                  <img src={client3} alt="" />
                  <img src={client4} alt="" />

                  <div className="trusted-more">
                    +1
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="testimonial-right">

            <div className="testimonial-card">

              <div className="testimonial-top">

                <FaQuoteLeft className="quote-icon" />

                <div className="testimonial-stars">

                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />

                </div>

              </div>

              <p className="testimonial-message">
                {active.message}
              </p>

              <div className="testimonial-client">

                <img
                  src={active.image}
                  alt={active.name}
                />

                <div className="testimonial-info">

                  <h4>{active.name}</h4>

                  <span>{active.position}</span>

                </div>

              </div>
                            {/* BOTTOM */}

              <div className="testimonial-bottom">

                <div className="testimonial-dots">

                  {testimonials.map((item, index) => (

                    <span
                      key={item.id}
                      className={
                        current === index
                          ? "dot active"
                          : "dot"
                      }
                      onClick={() => setCurrent(index)}
                    ></span>

                  ))}

                </div>

                <div className="testimonial-arrows">

                  <button
                    onClick={prevSlide}
                    className="arrow-btn"
                  >
                    <FaChevronLeft />
                  </button>

                  <button
                    onClick={nextSlide}
                    className="arrow-btn active-arrow"
                  >
                    <FaChevronRight />
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Testimonials;