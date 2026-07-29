import "./ServiceDetail.css";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FiCode, FiSmartphone, FiFigma, FiSearch, FiArrowRight, FiCheck } from "react-icons/fi";

const SERVICES_DATA = {
  "web-development": {
    icon: <FiCode />,
    title: "Web Development",
    tagline: "Fast, modern websites built to convert",
    description:
      "We design and build custom websites that load fast, look professional, and turn visitors into customers. Every site is built with clean code and modern technology so it stays reliable as your business grows.",
    features: [
      "Custom design tailored to your brand",
      "Fully responsive on mobile, tablet & desktop",
      "SEO-friendly structure from day one",
      "Fast loading speed & performance optimization",
      "Easy-to-manage content",
      "Ongoing support after launch",
    ],
  },
  "mobile-apps": {
    icon: <FiSmartphone />,
    title: "Mobile Apps",
    tagline: "Native & cross-platform mobile apps",
    description:
      "We build mobile applications for Android and iOS that give your business a direct channel to your customers — whether that's a customer-facing app or an internal tool for your team.",
    features: [
      "Cross-platform apps (Android & iOS)",
      "Clean, intuitive user interfaces",
      "Secure authentication & data handling",
      "Integration with your existing systems",
      "App store submission support",
      "Post-launch maintenance",
    ],
  },
  "ui-ux-design": {
    icon: <FiFigma />,
    title: "UI / UX Design",
    tagline: "Interfaces people enjoy using",
    description:
      "Good design isn't just how something looks — it's how it works. We design interfaces that are simple to navigate, visually consistent, and built around how your users actually behave.",
    features: [
      "User research & wireframing",
      "Modern, on-brand visual design",
      "Interactive prototypes",
      "Design systems for consistency",
      "Usability testing & refinement",
      "Handoff-ready files for developers",
    ],
  },
  seo: {
    icon: <FiSearch />,
    title: "SEO",
    tagline: "Get found by the right audience",
    description:
      "A great website only helps your business if people can find it. We optimize your site's structure, content, and technical performance so it ranks well and attracts the right visitors.",
    features: [
      "Technical SEO audit & fixes",
      "Keyword research & on-page optimization",
      "Site speed & performance improvements",
      "Local SEO for Rwandan businesses",
      "Monthly performance reporting",
      "Ongoing optimization strategy",
    ],
  },
};

function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const service = SERVICES_DATA[slug];

  if (!service) {
    return (
      <div className="sd-not-found">
        <h2>Service Not Found</h2>
        <p>The service you're looking for doesn't exist.</p>
        <Link to="/" className="sd-btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="sd-page">

      {/* HERO */}
      <section className="sd-hero">
        <div className="sd-hero-icon">{service.icon}</div>
        <span className="sd-eyebrow">Our Services</span>
        <h1>{service.title}</h1>
        <p>{service.tagline}</p>
      </section>

      {/* CONTENT */}
      <section className="sd-content">
        <div className="sd-content-grid">

          <div className="sd-description">
            <h2>Overview</h2>
            <p>{service.description}</p>
          </div>

          <div className="sd-features">
            <h2>What's Included</h2>
            <ul>
              {service.features.map((feature, index) => (
                <li key={index}>
                  <FiCheck className="sd-check" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* OTHER SERVICES */}
        <div className="sd-other-services">
          <h3>Explore Other Services</h3>
          <div className="sd-other-list">
            {Object.keys(SERVICES_DATA)
              .filter((key) => key !== slug)
              .map((key) => (
                <Link key={key} to={`/services/${key}`} className="sd-other-item">
                  {SERVICES_DATA[key].icon}
                  {SERVICES_DATA[key].title}
                </Link>
              ))}
          </div>
        </div>

        {/* CTA */}
        <div className="sd-cta">
          <div>
            <h3>Ready to get started?</h3>
            <p>Let's discuss how {service.title.toLowerCase()} can help your business.</p>
          </div>
          <button onClick={() => navigate("/contact")}>
            Start a Project <FiArrowRight />
          </button>
        </div>

      </section>
    </div>
  );
}

export default ServiceDetail;