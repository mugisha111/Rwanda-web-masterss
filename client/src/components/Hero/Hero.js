import "./Hero.css";
import { FaArrowDown } from "react-icons/fa";
import heroBg from "../../assets/images/hero-bg.png";
import Navbar from "../Navbar/Navbar";

function Hero() {
  return (
    <>
      <Navbar />

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

              <button className="btn-primary">
                Get Started
              </button>

              <button className="btn-secondary">
                View Portfolio
              </button>

            </div>

          </div>

        </div>

        <div className="scroll-down">
          <FaArrowDown />
        </div>

      </section>

    </>
  );
}

export default Hero;