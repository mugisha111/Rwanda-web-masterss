import "./CTA.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
  FaBriefcase,
} from "react-icons/fa";
import Reveal from "../Reveal/Reveal";

function CTA() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.phone ||
      !formData.email ||
      !formData.service ||
      !formData.message
    ) {
      setStatus("Please fill in all fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setStatus("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    setStatus("");

    emailjs
      .send(
        "service_rwm", // Service ID
        "template_ihgbgct", // Template ID
        {
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          service: formData.service,
          message: formData.message,
        },
        "UG4OcPusCPPclTpCt" // Public Key
      )
      .then(
        () => {
          setLoading(false);

          setStatus("✅ Thank you! Your message has been sent successfully.");

          setFormData({
            fullName: "",
            phone: "",
            email: "",
            service: "",
            message: "",
          });
        },
        (error) => {
          console.log(error);

          setLoading(false);

          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <section className="cta">
      <div className="cta-container">

        {/* LEFT */}

        <Reveal className="cta-left">

          <span className="cta-tag">
            LET'S BUILD TOGETHER
          </span>

          <h2>
            Discuss Your
            <br />
            Next Digital
            <br />
            Solution
          </h2>

          <p>
            Tell us about your project and Rwanda Web Masters
            will help you build a professional website,
            business system or mobile application that
            grows your business.
          </p>

          <div className="cta-contact">

            <div className="contact-item">

              <FaEnvelope />

              <div>

                <small>Email</small>

                <h4>rwandawebmasters@gmail.com</h4>

              </div>

            </div>

            <div className="contact-item">

              <FaPhoneAlt />

              <div>

                <small>Phone</small>

                <h4>+250 79 377 0200</h4>

              </div>

            </div>

          </div>

        </Reveal>

        {/* RIGHT */}

        <Reveal delay={200} className="cta-form-card">

          <form className="cta-form" onSubmit={handleSubmit}>

            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <FaPhoneAlt className="input-icon" />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">

              <FaBriefcase className="input-icon" />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                <option value="Website Development">
                  Website Development
                </option>

                <option value="Business Management System">
                  Business Management System
                </option>

                <option value="Mobile Application">
                  Mobile Application
                </option>

                <option value="UI / UX Design">
                  UI / UX Design
                </option>

                <option value="Website Maintenance">
                  Website Maintenance
                </option>

                <option value="Other Digital Solution">
                  Other Digital Solution
                </option>

              </select>

            </div>

            <div className="input-group textarea">

              <textarea
                name="message"
                rows="5"
                placeholder="Tell us about your project..."
                value={formData.message}
                onChange={handleChange}
              />

            </div>

            {status && (
              <div className="cta-status">
                {status}
              </div>
            )}

            <button
              type="submit"
              className="cta-btn"
              disabled={loading}
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message <FaPaperPlane />
                </>
              )}
            </button>

          </form>

        </Reveal>

      </div>

      <div className="cta-shape shape-one"></div>
      <div className="cta-shape shape-two"></div>
      <div className="cta-shape shape-three"></div>

    </section>
  );
}

export default CTA;