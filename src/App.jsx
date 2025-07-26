import React, { useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const skills = {
  Languages: [
    "C",
    "Java",
    "Python (OOP, DSA)",
    "JavaScript",
    "TypeScript",
    "Vanilla JavaScript",
  ],
  Frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "React.js",
    "Next.js",
    "Tailwind CSS",
    "Bootstrap",
    "Material-UI",
  ],
  Backend: ["Node.js", "Express.js", "PHP", "REST APIs"],
  "Full Stack": [
    "MERN Stack",
    "Firebase (Firestore, Authentication)",
    "Supabase",
  ],
  "Dev Tools": [
    "Git",
    "GitHub",
    "Netlify",
    "Vercel",
    "Render",
    "Agile Workflows",
  ],
  "Real-Time Tech": ["Socket.IO", "WebRTC"],
  Security: ["JWT", "OAuth (basic understanding)"],
  "AI/ML": ["Basic knowledge of machine learning concepts and applications"],
  "Cloud & Platform": ["Cloudflare Workers", "Supabase"],
  Database: ["MongoDB", "MySQL"],
};

const projects = [
  {
    title: "DocOnDwar – Telehealth Platform",
    description:
      "A React-based healthcare platform inspired by Medanta's UI/UX, featuring a modern red and white theme with patient-centric components and services.",
    liveLink: "https://docondwaar-client.onrender.com/",
    githubLink: "https://github.com/11PRIA/DocOnDwaar.git",
    stack: [
      "React 18",
      "React Router 6",
      "Tailwind CSS",
      "PostCSS",
      "Axios",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    features: [
      "Patient Portal with Dashboard",
      "Doctor Search by Department",
      "Health Library Repository",
      "Quick Healthcare Services",
      "Secure Authentication",
      "Responsive Design",
      "AI Multilingual Doctor",
      "Payment Gateway Integration",
    ],
    image: "/doc.png",
  },
  {
    title: "Real-Time Chat Application",
    description:
      "A modern, real-time chat application built with React and Firebase, supporting instant messaging, user authentication, and a sleek, responsive UI.",
    liveLink: "https://real-time-chat-application-m5c1.onrender.com",
    githubLink: "https://github.com/11PRIA/Real_Time_Chat_Application.git",
    stack: ["React", "Firebase (Firestore, Auth, Storage)", "CSS", "Vite"],
    features: [
      "User Authentication (Firebase)",
      "Real-time messaging",
      "Online/offline status indicators",
      "Media and file sharing",
      "User profile management",
      "Notifications",
      "Responsive and modern UI",
    ],
    image: "/real.png",
  },
  {
    title: "XKCD Comic Email Subscription",
    description:
      "PHP-based XKCD comic email subscription system with email verification and daily comic delivery via CRON.",
    liveLink: "#",
    githubLink: "https://github.com/11PRIA/ComicCourier.git",
    stack: [
      "PHP 8.3",
      "HTML/CSS",
      "Gmail SMTP",
      "Git & GitHub",
      "Windows Task Scheduler",
    ],
    features: [
      "Email verification with 6-digit code",
      "Daily XKCD comic delivery via CRON",
      "Secure unsubscribe system",
      "Random comic selection from XKCD API",
    ],
    image: "/xkcd.png",
  },
];

const education = [
  {
    date: "Nov 2022 – Jul 2026",
    title: "BTech in Computer Science",
    institution: "Abes Engineering College",
    description: "GPA: 8.23/10",
  },
  {
    date: "2020 – 2022",
    title: "12th Standard",
    institution: "B.D. College, BSEB Board",
    description: "Percentage: 82.4%",
  },
  {
    date: "2018 – 2020",
    title: "10th Standard",
    institution: "B.P.L. Residential School, CBSE Board",
    description: "Percentage: 92%",
  },
];

export default function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      {/* Particle Animation Background */}
      <div className="particles-container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Subtle Grid Overlay */}
      <div className="grid-overlay"></div>

      {/* Navigation */}
      <nav className="navbar">
        <div className="navbar-content">
          <a href="#home" className="navbar-logo">
            Priyanka Kumari
          </a>
          <ul className={`navbar-links ${mobileMenuOpen ? "active" : ""}`}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button
            className={`navbar-toggle ${mobileMenuOpen ? "active" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="accent">Priyanka</span> – Full Stack
              Developer building scalable web apps.
            </h1>
            <p className="hero-subtitle">
              Software developer with a strong foundation in the MERN stack,
              data structures, and problem-solving.
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Contact
              </a>
              <a href="#projects" className="btn btn-secondary">
                View Projects
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-container">
              <img
                src="/profile.jpeg"
                alt="Priyanka Kumari"
                className="hero-profile-image"
                onError={(e) => {
                  console.log("Image failed to load:", e.target.src);
                  e.target.style.display = "none";
                }}
                onLoad={(e) => {
                  console.log("Image loaded successfully:", e.target.src);
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <h3>Background</h3>
            <p>
              I'm a passionate software developer based in Ghaziabad, Uttar
              Pradesh, with expertise in building full-stack applications. My
              journey in tech started with a strong foundation in computer
              science and has evolved through hands-on project development.
            </p>
            <h3>Core Strengths</h3>
            <p>
              • Problem-solving: Strong analytical skills and systematic
              approach to complex challenges
              <br />
              • Fast Learner: Quick to adapt to new technologies and frameworks
              <br />
              • Collaborative: Effective team player with excellent
              communication skills
              <br />• Detail-oriented: Focus on writing clean, maintainable code
            </p>
          </div>
          <div className="timeline">
            {education.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-date">{item.date}</div>
                <div className="timeline-title">{item.title}</div>
                <div className="timeline-desc">{item.institution}</div>
                <div className="timeline-desc">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="skill-category">
              <div className="skill-category-header">
                <div className="skill-category-icon">
                  {category === "Languages" && "💻"}
                  {category === "Frontend" && "🎨"}
                  {category === "Backend" && "⚙️"}
                  {category === "Full Stack" && "🚀"}
                  {category === "Dev Tools" && "🛠️"}
                  {category === "Real-Time Tech" && "⚡"}
                  {category === "Security" && "🔒"}
                  {category === "AI/ML" && "🤖"}
                  {category === "Cloud & Platform" && "☁️"}
                  {category === "Database" && "🗄️"}
                </div>
                <h3>{category}</h3>
              </div>
              <div className="skills-list">
                {skillList.map((skill, index) => (
                  <span key={index} className="skill-badge">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <div className="project-image">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "8px 8px 0 0",
                    }}
                  />
                ) : (
                  project.title.charAt(0)
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech, techIndex) => (
                    <span key={techIndex} className="skill-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.9rem",
                    marginBottom: "1rem",
                  }}
                >
                  {project.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
                <div className="project-links">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn demo"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 17L17 7M17 7H7M17 7V17" />
                    </svg>
                    Live Demo
                  </a>
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link-btn github"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </svg>
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section">
        <h2 className="section-title">Experience</h2>
        <div className="experience-timeline">
          <div className="experience-item">
            <div className="experience-company">Indian Capital</div>
            <div className="experience-role">Full Stack Developer Intern</div>
            <div className="experience-date">Jun 2025 - Present</div>
            <div className="experience-desc">
              Leading the development of TempusMail, a SaaS product for
              temporary email generation. Built using Supabase, Cloudflare
              Workers, and vanilla JavaScript. Implemented real-time inbox
              updates, timed email expiry, and domain-based routing.
            </div>
          </div>
          <div className="experience-item">
            <div className="experience-company">100 Gaj</div>
            <div className="experience-role">Full Stack Developer Intern</div>
            <div className="experience-date">Mar 2025 - May 2025</div>
            <div className="experience-desc">
              Developed and maintained the company's main site using Next.js,
              Tailwind CSS, and TypeScript. Fixed UI bugs and added new features
              to enhance performance and responsiveness.
            </div>
            <div style={{ marginTop: "1rem" }}>
              <a
                href="https://100gaj.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "var(--primary)",
                  textDecoration: "none",
                  fontWeight: "500",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  transition: "color 0.3s ease",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  style={{ width: "16px", height: "16px" }}
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
                View Live Site
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>
            I'm currently open to new opportunities. Feel free to reach out!
          </p>
        </div>
        <div className="contact-grid">
          <div className="contact-form-card">
            <div className="contact-form-header">
              <div className="contact-form-icon">✉️</div>
              <div>
                <h3>Send me a message</h3>
                <p>I'll get back to you as soon as possible.</p>
              </div>
            </div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message here..."
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>

          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-header">
                <div className="contact-info-icon">📧</div>
                <div>
                  <h3>Contact Information</h3>
                  <p>Find me on other platforms or download my resume.</p>
                </div>
              </div>
              <div className="contact-details">
                <div className="contact-detail">
                  <svg
                    className="contact-detail-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>priyanka11062003@gmail.com</span>
                </div>
                <div className="contact-detail">
                  <svg
                    className="contact-detail-icon"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>Ghaziabad, Uttar Pradesh</span>
                </div>
              </div>
              <div className="social-links">
                <a
                  href="https://github.com/11PRIA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/priyanka-kumari-b34506250"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-btn"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="resume-card">
              <div className="resume-header">
                <div className="resume-icon">📄</div>
                <div>
                  <h3>Resume</h3>
                  <p>Click below to download a PDF version of my resume.</p>
                </div>
              </div>
              <a
                href="/PriyankaKumari_Resume.pdf"
                download
                className="download-resume-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7,10 12,15 17,10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
