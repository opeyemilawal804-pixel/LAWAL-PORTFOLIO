
import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState("");

  const closeMenu = () => setMenuOpen(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setStatus("");

    try {
      await emailjs.send(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: "opeyemilawal804@gmail.com",
        },
        "YOUR_PUBLIC_KEY"
      );

      setStatus("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Email error:", error);
      setStatus("Message failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const projects = [
    {
      number: "01",
      name: "JAPA Guard",
      category: "Security & Scam Detection",
      description:
        "A platform designed to help users identify suspicious links, websites and scam activities.",
      tech: ["React", "JavaScript", "Node.js"],
    },
    {
      number: "02",
      name: "MEDICARE",
      category: "Healthcare Platform",
      description:
        "A healthcare website concept designed to make health information and services easier to access.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      number: "03",
      name: "KOLAPEX",
      category: "Automotive Website",
      description:
        "A modern automotive website concept with a professional digital experience.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const skillGroups = [
    {
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "REST APIs"],
    },
    {
      title: "Tools & Technologies",
      skills: ["Git", "GitHub", "VS Code", "Responsive Design"],
    },
  ];

  return (
    <div className="portfolio">
      <header className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          LAWAL<span>.</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>

        <a href="#contact" className="nav-button">Let's Talk</a>
      </header>

      <main>
        {/* HERO */}
        <section className="hero section" id="home">
          <div className="hero-content">
            <p className="eyebrow">
              <span className="status-dot"></span>
              FULL-STACK WEB DEVELOPER
            </p>

            <h1>
              Building Digital
              <br />
              Experiences That
              <br />
              <span className="green">Make An Impact.</span>
            </h1>

            <p className="hero-description">
              Hello, I'm Lawal Shakirudeen Kolade, a web developer from
              Nigeria. I build modern, responsive and user-friendly
              digital experiences.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-button">
                Explore My Work ↗
              </a>
              <a href="#contact" className="secondary-button">
                Contact Me
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/opeyemilawal804-pixel"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <span>•</span>
              <a href="#about">Discover More ↓</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="image-glow"></div>

            <div className="profile-frame">
              <img
                src="/profile.png"
                alt="Portrait of Lawal Shakirudeen Kolade"
                className="profile-image"
              />
            </div>

            <div className="floating-card">
              <span className="floating-icon">✦</span>
              <div>
                <strong>Creative Developer</strong>
                <p>Turning ideas into reality</p>
              </div>
            </div>

            <div className="experience-card">
              <strong>03+</strong>
              <span>Personal Projects</span>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="about section" id="about">
          <div className="section-heading">
            <p className="eyebrow">GET TO KNOW ME</p>
            <h2>About <span className="green">Me.</span></h2>
          </div>

          <div className="about-content">
            <div className="about-label">
              <span className="about-number">01</span>
              <p>MY STORY</p>
            </div>

            <div className="about-text">
              <h3>
                I create websites that combine creativity, functionality
                and technology.
              </h3>

              <p>
                I'm Lawal Shakirudeen Kolade, a developer from Nigeria
                passionate about building useful digital products. I enjoy
                learning new technologies, solving problems and turning
                ideas into working websites and applications.
              </p>

              <p>
                My goal is to continue growing as a full-stack developer
                while creating digital experiences that make a difference.
              </p>

              <a href="#contact" className="text-link">
                Let's work together ↗
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="skills section" id="skills">
          <div className="section-heading">
            <p className="eyebrow">WHAT I WORK WITH</p>
            <h2>My <span className="green">Skills.</span></h2>
            <p className="section-description">
              Technologies and tools I use to build digital experiences.
            </p>
          </div>

          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-number">0{index + 1}</span>
                <h3>{group.title}</h3>

                <div className="skill-tags">
                  {group.skills.map((skill) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="projects section" id="projects">
          <div className="section-heading">
            <p className="eyebrow">SELECTED WORK</p>
            <h2>Featured <span className="green">Projects.</span></h2>
            <p className="section-description">
              Some of the projects I have been working on.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <span className="project-arrow">↗</span>
                </div>

                <p className="project-category">{project.category}</p>
                <h3>{project.name}</h3>
                <p className="project-description">
                  {project.description}
                </p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a href="#contact" className="project-link">
                  Discuss this project ↗
                </a>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT FORM */}
        <section className="contact section" id="contact">
          <div className="contact-content">
            <p className="eyebrow">HAVE A PROJECT IN MIND?</p>

            <h2>
              Let's Build Something
              <br />
              <span className="green">Amazing Together.</span>
            </h2>

            <p>
              Have an idea, project or opportunity? Send me a message.
              I'd love to hear from you.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Write your message here..."
                value={formData.message}
                onChange={handleChange}
                rows="6"
                required
              />

              <button
                type="submit"
                className="primary-button"
                disabled={sending}
              >
                {sending ? "Sending..." : "Send Message ↗"}
              </button>

              {status && (
                <p role="status" aria-live="polite">
                  {status}
                </p>
              )}
            </form>

            <div className="contact-socials">
              <a
                href="https://github.com/opeyemilawal804-pixel"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <a href="#home" className="logo">
          LAWAL<span>.</span>
        </a>

        <p>Designed & Built by Lawal Shakirudeen Kolade.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;
