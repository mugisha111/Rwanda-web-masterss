import "./About.css";
import { FiTarget, FiEye, FiUsers, FiLinkedin, FiTwitter, FiMail } from "react-icons/fi";
import theophileImg from "../../assets/team/theophile.png";
import Reveal from "../Reveal/Reveal";

const TEAM = [
  {
    name: "Mugisha Theophile",
    role: "Founder & Full Stack Developer",
    image: theophileImg,
    isPlaceholder: false,
  },
  {
    name: "Umukundwa Vanessa",
    role: "UI / UX Designer",
    image: null,
    isPlaceholder: true,
  },
  {
    name: "Marko Roberts",
    role: "Backend Developer",
    image: null,
    isPlaceholder: true,
  },
];

function About() {
  return (
    <div className="about-page">

      {/* PAGE INTRO */}
      <section className="about-hero">
        <Reveal>
          <span className="about-eyebrow">About Rwanda Web Masters</span>
        </Reveal>

        <Reveal delay={150}>
          <h1 className="about-title">
            Building digital products <br />
            Rwandan businesses can grow on
          </h1>
        </Reveal>

        <Reveal delay={300}>
          <p className="about-subtitle">
            We're a team of designers and engineers helping companies across
            Rwanda turn ideas into fast, reliable software.
          </p>
        </Reveal>
      </section>

      {/* WHO WE ARE */}
      <section id="who-we-are" className="about-section">
        <Reveal>
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
        </Reveal>
      </section>

      {/* MISSION */}
      <section id="mission" className="about-section about-section-alt">
        <Reveal>
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
        </Reveal>
      </section>

      {/* VISION */}
      <section id="vision" className="about-section">
        <Reveal>
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
        </Reveal>
      </section>

      {/* OUR TEAM */}
      <section id="our-team" className="about-team-section">
        <Reveal>
          <div className="about-team-header">
            <span className="about-eyebrow">Our Team</span>
            <h2>The People Behind the Work</h2>
            <p>
              A small, focused team of builders committed to delivering
              software our clients can rely on.
            </p>
          </div>
        </Reveal>

        <div className="about-team-grid">
          {TEAM.map((member, index) => (
            <Reveal key={index} delay={index * 130} className="about-team-card">
              <div className="about-team-avatar">
                {member.isPlaceholder ? (
                  <span className="about-team-avatar-placeholder">
                    {member.role.charAt(0)}
                  </span>
                ) : (
                  <img src={member.image} alt={member.name} />
                )}
              </div>

              <h3>{member.name}</h3>
              <p>{member.role}</p>

              <div className="about-team-socials">
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><FiLinkedin /></a>
                <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter"><FiTwitter /></a>
                <a href="mailto:rwandawebmasters@gmail.com" aria-label="Email"><FiMail /></a>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

    </div>
  );
}

export default About;