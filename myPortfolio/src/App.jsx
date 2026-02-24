import { useEffect } from "react";
import "./styles/global.css";

/* PANEL ICONS */
import homeImg from "./assets/panel/home.png";
import sectionsImg from "./assets/panel/sections.png";
import resumeImg from "./assets/panel/resume.png";

/* TIGER */
import tigerImg from "./assets/tiger.png";

/* SECTIONS */
import Home from "./pages/Home";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import ContactPage from "./pages/ContactPage";

function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  /* =====================================================
     PHASE 4 — ACTIVE SECTION DETECTION (MOBILE NAV READY)
     ===================================================== */
  useEffect(() => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".mobile-nav a");

    if (!sections.length || !navLinks.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            navLinks.forEach((link) => {
              link.classList.remove("active");
              if (
                link.getAttribute("href") === `#${entry.target.id}`
              ) {
                link.classList.add("active");
              }
            });
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="app-layout">
      {/* LEFT ICON PANEL (DESKTOP) */}
      <aside className="icon-panel">
        <button onClick={() => scrollToSection("home")}>
          <img src={homeImg} alt="home" />
          <span>home</span>
        </button>

        <button onClick={() => scrollToSection("about")}>
          <img src={sectionsImg} alt="about" />
          <span>about</span>
        </button>

        <button onClick={() => scrollToSection("works")}>
          <img src={sectionsImg} alt="works" />
          <span>works</span>
        </button>

        <button onClick={() => scrollToSection("skills")}>
          <img src={sectionsImg} alt="skills" />
          <span>skills</span>
        </button>

        <button onClick={() => scrollToSection("contact")}>
          <img src={sectionsImg} alt="contact" />
          <span>contact</span>
        </button>

        <a
          href="https://drive.google.com/file/d/1wks35N4mGvlYNQwVWIavtJbyZH9aYruW/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <img src={resumeImg} alt="resume" />
          <span>resume</span>
        </a>
      </aside>

      {/* MAIN CONTENT */}
      <main className="content">
        <section id="home" className="section home">
          <Home />
        </section>

        <section id="about" className="section about-section">
          <About />
        </section>

        <section id="works" className="section">
          <Work />
        </section>

        <section id="skills" className="section">
          <Skills />
        </section>

        <section id="contact" className="section">
          <ContactPage />
        </section>
      </main>

      {/* 🐯 TIGER */}
      <img src={tigerImg} alt="tiger" className="tiger" />
    </div>
  );
}

export default App;
