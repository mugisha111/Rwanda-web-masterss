import "./Hero.css";
import { FaArrowDown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import heroBg from "../../assets/images/hero-bg.png";

function Hero() {
  const navigate = useNavigate();

  const scrollToNext = () => {
    const nextSection = document.getElementById("services");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className="hero"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="overlay"></div>

      <div className="hero-container">

        <div className="hero-left">

          <span className="hero-tag">
            RWANDA WEB MASTERS
          </span>

          <h1>
            We Build
            <br />
            Modern Websites
            <br />
            & Digital Solutions
          </h1>

          <p>
            Rwanda Web Masters helps businesses,
            startups and organizations build
            professional websites, business systems,
            mobile applications and digital solutions.
          </p>

          <div className="hero-buttons">

            <button
              className="btn-primary"
              onClick={() => navigate("/contact")}
            >
              Get Started
            </button>

            <button
              className="btn-secondary"
              onClick={() => navigate("/portfolio")}
            >
              View Portfolio
            </button>

          </div>

        </div>

      </div>

      <button
        className="scroll-down"
        onClick={scrollToNext}
        aria-label="Scroll to next section"
      >
        <FaArrowDown />
      </button>

    </section>
  );
}

export default Hero;