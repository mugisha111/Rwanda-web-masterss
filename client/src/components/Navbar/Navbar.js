import "./Navbar.css";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const WHAT_WE_DO = [
  {
    label: "Web Development",
    slug: "web-development",
    desc: "Fast, modern websites built to convert",
  },
  {
    label: "Mobile Apps",
    slug: "mobile-apps",
    desc: "Native & cross-platform mobile apps",
  },
  {
    label: "UI / UX Design",
    slug: "ui-ux-design",
    desc: "Interfaces people enjoy using",
  },
  {
    label: "SEO",
    slug: "seo",
    desc: "Get found by the right audience",
  },
];

const ABOUT_US = [
  { label: "Who We Are", id: "who-we-are" },
  { label: "Mission", id: "mission" },
  { label: "Vision", id: "vision" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileAbout, setMobileAbout] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Real sticky background/shadow on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileMenu(false);
    setMobileAbout(false);
    setMobileServices(false);
  }, [location]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenu ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenu]);

  // Scrolls to a section on the About page (navigates there first if needed)
  const goToAboutSection = (sectionId) => {
    if (location.pathname === "/about") {
      const el = document.getElementById(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/about");
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  };

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-inner">

        {/* LOGO */}
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Rwanda Web Masters Logo" />
          </Link>
        </div>

        {/* NAVIGATION */}
        <nav className={mobileMenu ? "nav-menu active" : "nav-menu"}>

          <ul>

            <li>
              <NavLink to="/" end>Home</NavLink>
            </li>

            {/* ABOUT US */}
            <li className="dropdown">
              <span
                className="dropdown-trigger"
                onClick={() => setMobileAbout(!mobileAbout)}
              >
                About Us
                <FaChevronDown className={`arrow ${mobileAbout ? "rotated" : ""}`} />
              </span>

              <div className={`dropdown-content ${mobileAbout ? "mobile-open" : ""}`}>
                {ABOUT_US.map((item) => (
                  <button
                    key={item.id}
                    className="dropdown-link-btn"
                    onClick={() => goToAboutSection(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </li>

            {/* WHAT WE DO */}
            <li className="dropdown">
              <span
                className="dropdown-trigger"
                onClick={() => setMobileServices(!mobileServices)}
              >
                What We Do
                <FaChevronDown className={`arrow ${mobileServices ? "rotated" : ""}`} />
              </span>

              <div className={`dropdown-content dropdown-content-wide ${mobileServices ? "mobile-open" : ""}`}>
                {WHAT_WE_DO.map((service) => (
                  <Link key={service.slug} to={`/services/${service.slug}`} className="dropdown-service-item">
                    <span className="dropdown-service-label">{service.label}</span>
                    <span className="dropdown-service-desc">{service.desc}</span>
                  </Link>
                ))}
              </div>
            </li>

            <li>
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>

            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>

          </ul>

        </nav>

        {/* RIGHT SIDE */}
        <div className="nav-right">
          <NavLink to="/contact" className="start-btn">
            Get Started
          </NavLink>
        </div>

        {/* MOBILE MENU BUTTON */}
        <div
          className="mobile-btn"
          onClick={() => setMobileMenu(!mobileMenu)}
          aria-label="Toggle menu"
        >
          {mobileMenu ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
}

export default Navbar;