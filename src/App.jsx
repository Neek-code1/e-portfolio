
import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Menu,
  X,
  Download,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profilePhoto from "./assets/profile.jpg";
import "./App.css";

const base = import.meta.env.BASE_URL;

const projects = [
  {
    title: "Skinstric AI",
    description:
      "An AI-focused skincare web application featuring interactive interfaces, modern design, and responsive layouts.",
    image: `${base}skinstric.png`,
    imageClass: "skinstric-image",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://skinstric-wandag.vercel.app/",
  },
  {
    title: "Summarist",
    description:
      "A modern reading platform interface developed with React, reusable components, and responsive design.",
    image: `${base}summarist.png`,
    imageClass: "summarist-image",
    technologies: ["React", "JavaScript", "CSS"],
    link: "https://neek-code1.github.io/summarist/",
  },
  {
    title: "CineFind",
    description:
      "An interactive movie discovery application using movie data integration and modern frontend technologies.",
    image: `${base}cinefind.png`,
    imageClass: "cinefind-image",
    technologies: ["React", "JavaScript", "OMDb API"],
    link: "https://neek-code1.github.io/app2project/",
  },
  {
    title: "Frontend Internship Project",
    description:
      "A responsive frontend development project showcasing interactive components and modern web design.",
    image: `${base}internship.png`,
    imageClass: "internship-image",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://neek-code1.github.io/conika-internship/",
  },
];

const skills = [
  "React",
  "JavaScript",
  "HTML5",
  "CSS3",
  "Node.js",
  "Express.js",
  "Git",
  "GitHub",
  "REST APIs",
  "Responsive Design",
];

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <header className="navbar">
        <div className="nav-container">
          <a href="#home" className="logo" onClick={closeMenu}>
            CU<span>.</span>
          </a>

          <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-glow" />

          <div className="container hero-content">
            <div className="hero-text">
              <p className="eyebrow">WELCOME TO MY PORTFOLIO</p>

              <h1>
                Hi, I'm <span>Conika</span>
                <br />
                Underwoods.
              </h1>

              <h2>Software Engineer & React Developer</h2>

              <p className="hero-description">
                I build modern, responsive, and interactive web
                applications using React, JavaScript, and innovative
                technologies.
              </p>

              <div className="hero-buttons">
                <a href="#projects" className="primary-btn">
                  View My Work
                  <ArrowUpRight size={19} />
                </a>

                <a href="#contact" className="secondary-btn">
                  Contact Me
                </a>
              </div>

              <div className="social-links">
                <a
                  href="https://github.com/Neek-code1"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub />
                </a>

                <a
                  href="https://www.linkedin.com/in/conika-underwoods-9a9b49a8/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>

                <a
                  href="mailto:cunderwoods23@gmail.com"
                  aria-label="Email"
                >
                  <Mail />
                </a>
              </div>
            </div>

            <div className="hero-image-container">
              <div className="image-glow" />

              <div className="image-ring">
                <img
                  src={profilePhoto}
                  alt="Conika Underwoods"
                  className="profile-image"
                />
              </div>

              <div className="floating-label">
                <span className="status-dot" />
                Open to Opportunities
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <div className="container">
            <p className="section-eyebrow">GET TO KNOW ME</p>

            <h2 className="section-title">
              About <span>Me.</span>
            </h2>

            <div className="about-content">
              <div className="about-text">
                <p>
                  I'm a software engineer and frontend developer
                  passionate about creating modern, intuitive, and
                  responsive web applications.
                </p>

                <p>
                  My development experience includes React,
                  JavaScript, HTML, CSS, Node.js, and Express.js.
                  I enjoy transforming ideas into functional
                  applications and solving problems through code.
                </p>

                <p>
                  I also bring more than 12 years of experience
                  in healthcare operations, customer support,
                  and problem-solving, giving me a strong
                  foundation in communication, collaboration,
                  and attention to detail.
                </p>

                <a
                  href={`${base}resume.pdf`}
                  className="resume-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download size={18} />
                  View My Resume
                </a>
              </div>

              <div className="about-highlights">
                <div className="highlight-card">
                  <h3>React</h3>
                  <p>Component-based development</p>
                </div>

                <div className="highlight-card">
                  <h3>JavaScript</h3>
                  <p>Interactive web applications</p>
                </div>

                <div className="highlight-card">
                  <h3>Full Stack</h3>
                  <p>Frontend and backend technologies</p>
                </div>

                <div className="highlight-card">
                  <h3>Problem Solving</h3>
                  <p>Analytical and collaborative approach</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section skills-section">
          <div className="container">
            <p className="section-eyebrow">WHAT I WORK WITH</p>

            <h2 className="section-title">
              Technical <span>Skills.</span>
            </h2>

            <p className="section-description">
              Technologies and tools I use to build responsive,
              functional, and engaging web applications.
            </p>

            <div className="skills-grid">
              {skills.map((skill) => (
                <div className="skill-card" key={skill}>
                  {skill}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">
          <div className="container">
            <p className="section-eyebrow">MY RECENT PROJECTS</p>

            <h2 className="section-title">
              Selected <span>Work.</span>
            </h2>

            <div className="projects-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <a
                    className={`project-image ${project.imageClass}`}
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title}`}
                  >
                    <img
                      src={project.image}
                      alt={`${project.title} promotional cover`}
                      loading="lazy"
                    />
                  </a>

                  <div className="project-info">
                    <h3>{project.title}</h3>

                    <p>{project.description}</p>

                    <div className="project-tags">
                      {project.technologies.map((technology) => (
                        <span key={technology}>{technology}</span>
                      ))}
                    </div>

                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Live Project
                      <ArrowUpRight size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="section contact-section">
          <div className="container contact-content">
            <p className="section-eyebrow">LET'S CONNECT</p>

            <h2 className="section-title">
              Let's Work <span>Together.</span>
            </h2>

            <p className="section-description">
              I'm open to software engineering, React development,
              and frontend opportunities. Let's connect and
              build something meaningful.
            </p>

            <a
              href="mailto:cunderwoods23@gmail.com"
              className="primary-btn"
            >
              <Mail size={19} />
              Get In Touch
            </a>

            <div className="contact-socials">
              <a
                href="https://github.com/Neek-code1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/conika-underwoods-9a9b49a8/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <a href="#home" className="logo">
            CU<span>.</span>
          </a>

          <p>
            © {new Date().getFullYear()} Conika Underwoods.
            All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
