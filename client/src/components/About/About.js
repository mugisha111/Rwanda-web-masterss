import "./About.css";
import { FiTarget, FiEye, FiUsers } from "react-icons/fi";

function About() {
  return (
    <div className="about-page">

      {/* PAGE INTRO */}
      <section className="about-hero">
        <span className="about-eyebrow">About Rwanda Web Masters</span>
        <h1 className="about-title">
          Building digital products <br />
          Rwandan businesses can grow on
        </h1>
        <p className="about-subtitle">
          We're a team of designers and engineers helping companies across
          Rwanda turn ideas into fast, reliable software.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section id="who-we-are" className="about-section">
        <div className="about-section-grid">
          <div className="about-section-icon">
            <FiUsers />
          </div>
          <div className="about-section-content">
            <span className="about-section-label">Who We Are</span>
            <h2>A local team with global standards</h2>
            <p>
              Rwanda Web Masters is a software development company based in
              Kigali, building websites, mobile apps, and digital platforms
              for businesses that want to compete online. We combine local
              market understanding with engineering practices used by leading
              software companies worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="about-section about-section-alt">
        <div className="about-section-grid reverse">
          <div className="about-section-icon">
            <FiTarget />
          </div>
          <div className="about-section-content">
            <span className="about-section-label">Our Mission</span>
            <h2>Make great software accessible</h2>
            <p>
              Our mission is to give businesses of every size access to
              well-built digital products — without the complexity or cost
              usually attached to enterprise software. We handle the
              technical work so our clients can focus on running their
              business.
            </p>
          </div>
        </div>
      </section>

      {/* VISION */}
      <section id="vision" className="about-section">
        <div className="about-section-grid">
          <div className="about-section-icon">
            <FiEye />
          </div>
          <div className="about-section-content">
            <span className="about-section-label">Our Vision</span>
            <h2>A trusted name in African software</h2>
            <p>
              We want to be the company Rwandan and East African businesses
              think of first when they need a digital partner they can rely
              on — known for quality work, clear communication, and results
              that last.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;