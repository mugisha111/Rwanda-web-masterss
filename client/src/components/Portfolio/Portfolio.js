import "./Portfolio.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaChevronDown } from "react-icons/fa";
import Reveal from "../Reveal/Reveal";

import project1 from "../../assets/portfolio/project1.png";
import project2 from "../../assets/portfolio/project2.png";
import project3 from "../../assets/portfolio/project3.png";
import project4 from "../../assets/portfolio/project4.png";
import project5 from "../../assets/portfolio/project5.png";
import project6 from "../../assets/portfolio/project6.png";

const portfolioData = [
  {
    id: 1,
    image: project1,
    title: "Rwanda Web Masters",
    category: "Business Website",
    description:
      "Professional company website designed with modern UI and excellent performance.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    image: project2,
    title: "School Management System",
    category: "Web Application",
    description:
      "Complete digital platform for managing students, teachers and courses.",
    tech: ["React", "Firebase", "Cloud"],
  },
  {
    id: 3,
    image: project3,
    title: "E-Commerce Platform",
    category: "Online Store",
    description:
      "Modern online shopping platform with secure payment integration.",
    tech: ["React", "Express", "Stripe"],
  },
  {
    id: 4,
    image: project4,
    title: "Hospital Management",
    category: "Dashboard",
    description:
      "Healthcare management software built for hospitals and clinics.",
    tech: ["React", "Laravel", "MySQL"],
  },
  {
    id: 5,
    image: project5,
    title: "Restaurant Website",
    category: "Restaurant",
    description:
      "Modern restaurant website with online reservation system.",
    tech: ["React", "Node.js", "API"],
  },
  {
    id: 6,
    image: project6,
    title: "Real Estate Platform",
    category: "Property",
    description:
      "Professional real estate platform with advanced property search.",
    tech: ["React", "Express", "MongoDB"],
  },
];

const INITIAL_COUNT = 3;

function Portfolio() {
  const [showAll, setShowAll] = useState(false);
  const navigate = useNavigate();

  const visibleProjects = showAll
    ? portfolioData
    : portfolioData.slice(0, INITIAL_COUNT);

  return (
    <section className="portfolio">

      <div className="portfolio-container">

        {/* HEADER */}
        <Reveal>
          <div className="portfolio-header">
            <span className="portfolio-tag">OUR PORTFOLIO</span>
            <h2>
              Some of Our
              <br />
              Recent Projects
            </h2>
            <p>
              We build premium websites, business systems and digital
              solutions that help businesses grow faster through modern
              technology and creative design.
            </p>
          </div>
        </Reveal>

        {/* FILTER (visual only here — full filtering lives on /portfolio) */}
        <Reveal delay={150}>
          <div className="portfolio-filter">
            <button className="active">All</button>
            <button>Websites</button>
            <button>Web Apps</button>
            <button>E-Commerce</button>
            <button>Branding</button>
          </div>
        </Reveal>

        {/* GRID */}
        <div className="portfolio-grid">
          {visibleProjects.map((project, index) => (
            <Reveal key={project.id} delay={(index % INITIAL_COUNT) * 130}>
              <div className="portfolio-card">

                <div className="portfolio-image">
                  <img src={project.image} alt={project.title} />
                  <span className="portfolio-category">{project.category}</span>
                </div>

                <div className="portfolio-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="portfolio-tech">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex}>{tech}</span>
                    ))}
                  </div>

                  <button
                    className="portfolio-btn"
                    onClick={() => navigate("/portfolio")}
                  >
                    View Project
                    <FaArrowRight />
                  </button>
                </div>

              </div>
            </Reveal>
          ))}
        </div>

        {/* VIEW MORE TOGGLE */}
        {!showAll && portfolioData.length > INITIAL_COUNT && (
          <div className="portfolio-more">
            <button
              className="portfolio-more-btn"
              onClick={() => setShowAll(true)}
            >
              View More Projects
              <FaChevronDown />
            </button>
          </div>
        )}

      </div>

    </section>
  );
}

export default Portfolio;