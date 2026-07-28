import "./PortfolioPage.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight, FaTimes, FaCheckCircle } from "react-icons/fa";

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
    group: "Websites",
    description:
      "Professional company website designed with modern UI and excellent performance.",
    details:
      "A full company website built to establish credibility online, showcase services clearly, and generate leads through an optimized contact flow.",
    tech: ["React", "Node.js", "MongoDB"],
  },
  {
    id: 2,
    image: project2,
    title: "School Management System",
    category: "Web Application",
    group: "Web Apps",
    description:
      "Complete digital platform for managing students, teachers and courses.",
    details:
      "A centralized system that lets administrators manage enrollment, grades, and staff records, while giving teachers and students their own dashboards.",
    tech: ["React", "Firebase", "Cloud"],
  },
  {
    id: 3,
    image: project3,
    title: "E-Commerce Platform",
    category: "Online Store",
    group: "E-Commerce",
    description:
      "Modern online shopping platform with secure payment integration.",
    details:
      "An online store built for speed and conversion, with secure checkout, order tracking, and an easy-to-manage product catalog.",
    tech: ["React", "Express", "Stripe"],
  },
  {
    id: 4,
    image: project4,
    title: "Hospital Management",
    category: "Dashboard",
    group: "Web Apps",
    description:
      "Healthcare management software built for hospitals and clinics.",
    details:
      "A dashboard that helps hospital staff manage patient records, appointments, and billing in one secure, easy-to-use system.",
    tech: ["React", "Laravel", "MySQL"],
  },
  {
    id: 5,
    image: project5,
    title: "Restaurant Website",
    category: "Restaurant",
    group: "Websites",
    description:
      "Modern restaurant website with online reservation system.",
    details:
      "A restaurant website designed to showcase the menu beautifully while letting customers book tables online without a phone call.",
    tech: ["React", "Node.js", "API"],
  },
  {
    id: 6,
    image: project6,
    title: "Real Estate Platform",
    category: "Property",
    group: "Websites",
    description:
      "Professional real estate platform with advanced property search.",
    details:
      "A property listing platform with advanced search filters, helping buyers find homes that match their exact criteria faster.",
    tech: ["React", "Express", "MongoDB"],
  },
];

const FILTERS = ["All", "Websites", "Web Apps", "E-Commerce", "Branding"];

const STATS = [
  { value: "6+", label: "Projects Delivered" },
  { value: "5+", label: "Industries Served" },
  { value: "100%", label: "Client Satisfaction" },
  { value: "24h", label: "Average Response Time" },
];

function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [animKey, setAnimKey] = useState(0);
  const [selectedProject, setSelectedProject] = useState(null);
  const navigate = useNavigate();

  const filteredProjects =
    activeFilter === "All"
      ? portfolioData
      : portfolioData.filter((project) => project.group === activeFilter);

  // Re-trigger fade-in animation whenever the filter changes
  useEffect(() => {
    setAnimKey((prev) => prev + 1);
  }, [activeFilter]);

  // Lock body scroll while modal is open, close on Escape
  useEffect(() => {
    document.body.style.overflow = selectedProject ? "hidden" : "";

    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEsc);
    };
  }, [selectedProject]);

  return (
    <div className="pf-page">

      {/* HERO */}
      <section className="pf-hero">
        <span className="pf-tag">OUR PORTFOLIO</span>
        <h1>
          Work We're <span>Proud Of</span>
        </h1>
        <p>
          A closer look at the websites, platforms, and digital products
          we've built for businesses across Rwanda and beyond.
        </p>
      </section>

      {/* STATS */}
      <section className="pf-stats">
        {STATS.map((stat, index) => (
          <div className="pf-stat-item" key={index}>
            <h3>{stat.value}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </section>

      <div className="pf-container">

        {/* FILTER */}
        <div className="pf-filter">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              className={activeFilter === filter ? "active" : ""}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* RESULTS COUNTER */}
        <p className="pf-results-count">
          Showing {filteredProjects.length}{" "}
          {filteredProjects.length === 1 ? "project" : "projects"}
          {activeFilter !== "All" ? ` in ${activeFilter}` : ""}
        </p>

        {/* GRID */}
        {filteredProjects.length > 0 ? (
          <div className="pf-grid" key={animKey}>
            {filteredProjects.map((project, index) => (
              <div
                className="pf-card pf-fade-in"
                key={project.id}
                style={{ animationDelay: `${index * 0.08}s` }}
              >

                <div className="pf-image">
                  <img src={project.image} alt={project.title} />
                  <span className="pf-category">{project.category}</span>
                </div>

                <div className="pf-content">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="pf-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i}>{tech}</span>
                    ))}
                  </div>

                  <button
                    className="pf-btn"
                    onClick={() => setSelectedProject(project)}
                  >
                    View Project
                    <FaArrowRight />
                  </button>
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="pf-empty">
            <p>No projects in this category yet — check back soon.</p>
          </div>
        )}

        {/* BOTTOM CTA BANNER */}
        <div className="pf-cta-banner">
          <div>
            <h3>Have a project in mind?</h3>
            <p>Let's build something your business can grow on.</p>
          </div>
          <button onClick={() => navigate("/contact")}>
            Start a Project
            <FaArrowRight />
          </button>
        </div>

      </div>

      {/* PROJECT MODAL */}
      {selectedProject && (
        <div
          className="pf-modal-overlay"
          onClick={() => setSelectedProject(null)}
        >
          <div className="pf-modal" onClick={(e) => e.stopPropagation()}>

            <button
              className="pf-modal-close"
              onClick={() => setSelectedProject(null)}
              aria-label="Close"
            >
              <FaTimes />
            </button>

            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="pf-modal-image"
            />

            <div className="pf-modal-body">
              <span className="pf-category">{selectedProject.category}</span>
              <h2>{selectedProject.title}</h2>
              <p>{selectedProject.details}</p>

              <div className="pf-modal-tech">
                {selectedProject.tech.map((tech, i) => (
                  <span key={i}>
                    <FaCheckCircle /> {tech}
                  </span>
                ))}
              </div>

              <button
                className="pf-btn"
                onClick={() => {
                  setSelectedProject(null);
                  navigate("/contact");
                }}
              >
                Start a Similar Project
                <FaArrowRight />
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}

export default PortfolioPage;