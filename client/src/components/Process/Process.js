import "./Process.css";

import {
  FaComments,
  FaClipboardList,
  FaLaptopCode,
  FaCheckCircle,
  FaRocket,
} from "react-icons/fa";
import Reveal from "../Reveal/Reveal";

const steps = [
  {
    number: "01",
    icon: <FaComments />,
    title: "Consultation",
    description:
      "We discuss your business goals, requirements and ideas to understand exactly what you need.",
  },
  {
    number: "02",
    icon: <FaClipboardList />,
    title: "Planning & Strategy",
    description:
      "We create a complete project plan, user experience and modern interface before development.",
  },
  {
    number: "03",
    icon: <FaLaptopCode />,
    title: "Development",
    description:
      "Our developers build secure, scalable and high-performance websites using modern technologies.",
  },
  {
    number: "04",
    icon: <FaCheckCircle />,
    title: "Testing & Quality",
    description:
      "Every feature is carefully tested to ensure excellent performance, security and reliability.",
  },
  {
    number: "05",
    icon: <FaRocket />,
    title: "Launch & Support",
    description:
      "We deploy your project, provide technical support and help your business continue growing.",
  },
];

function Process() {
  return (
    <section className="process">
      <div className="process-container">
        <Reveal>
          <div className="process-header">
            <span className="process-tag">OUR PROCESS</span>

            <h2>
              How We Build
              <br />
              Successful Projects
            </h2>

            <p>
              We follow a structured development process that ensures every
              project is delivered with quality, speed and long-term success.
            </p>
          </div>
        </Reveal>

        <div className="process-grid">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 130}>
              <div className="process-card">
                {index !== steps.length - 1 && (
                  <span className="process-connector" />
                )}

                <span className="process-number">{step.number}</span>

                <div className="process-icon">{step.icon}</div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;