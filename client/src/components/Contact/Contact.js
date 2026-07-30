import "./Contact.css";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FaPaperPlane,
  FaPhoneAlt,
  FaEnvelope,
  FaUser,
} from "react-icons/fa";
import { FiMapPin, FiClock } from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
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
        "service_rwm",
        "template_ihgbgct",
        {
          fullName: formData.fullName,
          phone: formData.phone,
          email: formData.email,
          service: "General Inquiry (Contact Page)",
          message: formData.message,
        },
        "UG4OcPusCPPclTpCt"
      )
      .then(
        () => {
          setLoading(false);
          setStatus("✅ Thank you! Your message has been sent successfully.");
          setFormData({ fullName: "", phone: "", email: "", message: "" });
        },
        (error) => {
          console.log(error);
          setLoading(false);
          setStatus("❌ Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="contact-page">

      {/* HERO */}
      <section className="contact-hero">
        <span className="contact-eyebrow">Get In Touch</span>
        <h1 className="contact-title">
          Let's Talk About Your <span>Next Project</span>
        </h1>
        <p className="contact-subtitle">
          Have a project in mind or a question about our services? Fill in
          the form below or reach us directly — our team responds within 24
          hours.
        </p>
      </section>

      {/* FORM + INFO CARD */}
      <section className="contact-main">
        <div className="contact-main-grid">

          {/* FORM */}
          <div className="contact-form-card">
            <form className="contact-form" onSubmit={handleSubmit}>

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

              <div className="input-group textarea">
                <textarea
                  name="message"
                  rows="5"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {status && <div className="contact-status">{status}</div>}

              <button
                type="submit"
                className="contact-btn"
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
          </div>

          {/* INFO CARD */}
          <div className="contact-info-card">
            <FiClock className="contact-info-card-icon" />
            <h3>Office Hours</h3>
            <p>
              Our team is available to answer your questions and discuss
              your project during the following hours.
            </p>

            <div className="contact-hours-list">
              <div className="contact-hours-row">
                <span>Monday – Friday</span>
                <span>8:00 AM – 6:00 PM</span>
              </div>
              <div className="contact-hours-row">
                <span>Saturday</span>
                <span>9:00 AM – 2:00 PM</span>
              </div>
              <div className="contact-hours-row">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>

            <a href="tel:+250700000000" className="contact-info-card-btn">
              Call Us Now
            </a>
          </div>

        </div>
      </section>

      {/* QUICK INFO CARDS */}
      <section className="contact-details">
        <div className="contact-details-grid">

          <div className="contact-detail-item">
            <span className="contact-detail-icon">
              <FaPhoneAlt />x
            </span>
            <h4>Phone Number</h4>
            <p>+250 79 377 0200</p>
          </div>

          <div className="contact-detail-item">
            <span className="contact-detail-icon">
              <FaEnvelope />
            </span>
            <h4>Email Address</h4>
            <p>rwandawebmasters@gmail.com</p>
          </div>

          <div className="contact-detail-item">
            <span className="contact-detail-icon">
              <FiMapPin />
            </span>
            <h4>Office Location</h4>
            <p>Kigali, Rwanda</p>
          </div>

        </div>
      </section>

      {/* MAP */}
      <section className="contact-map">
        <iframe
          title="Rwanda Web Masters Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255281.6!2d30.0343!3d-1.9536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19dca4258ed8e797%3A0xf32b36a5411d0bc8!2sKigali!5e0!3m2!1sen!2srw!4v1700000000000"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

    </div>
  );
}

export default Contact;