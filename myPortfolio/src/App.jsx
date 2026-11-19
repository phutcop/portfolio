import { useEffect, useState } from "react";
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
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.getElementById(activeSection)?.scrollTo({ top: 0 });
  }, [activeSection]);

  return (
    <div className="app-layout">
      {/* LEFT ICON PANEL (DESKTOP) */}
      <aside className="icon-panel">
        <button onClick={() => setActiveSection("home")} aria-current={activeSection === "home" ? "page" : undefined}>
          <img src={homeImg} alt="home" />
          <span>home</span>
        </button>

        <button onClick={() => setActiveSection("about")} aria-current={activeSection === "about" ? "page" : undefined}>
          <img src={sectionsImg} alt="about" />
          <span>about</span>
        </button>

        <button onClick={() => setActiveSection("works")} aria-current={activeSection === "works" ? "page" : undefined}>
          <img src={sectionsImg} alt="works" />
          <span>works</span>
        </button>

        <button onClick={() => setActiveSection("skills")} aria-current={activeSection === "skills" ? "page" : undefined}>
          <img src={sectionsImg} alt="skills" />
          <span>skills</span>
        </button>

        <button onClick={() => setActiveSection("contact")} aria-current={activeSection === "contact" ? "page" : undefined}>
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
        <section id="home" className="section home" hidden={activeSection !== "home"}><Home onNext={() => setActiveSection("about")} /></section>
        <section id="about" className="section about-section" hidden={activeSection !== "about"}><About onNext={() => setActiveSection("works")} /></section>
        <section id="works" className="section work" hidden={activeSection !== "works"}><Work onNext={() => setActiveSection("skills")} /></section>
        <section id="skills" className="section skills" hidden={activeSection !== "skills"}><Skills onNext={() => setActiveSection("contact")} /></section>
        <section id="contact" className="section contact" hidden={activeSection !== "contact"}><ContactPage onHome={() => setActiveSection("home")} /></section>
      </main>

      {/* 🐯 TIGER */}
      <img src={tigerImg} alt="tiger" className="tiger" />
    </div>
  );
}

export default App;
