import { useEffect, useState } from "react";
import "./styles/global.css";

import homeImg from "./assets/retro/home-tile.webp";
import NavTile from "./components/NavTile";

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
    <div className="app-layout" data-section={activeSection}>
      <aside className="icon-panel" data-section={activeSection}>
        <span className="scroll-rod scroll-rod-top" aria-hidden="true" />
        <button onClick={() => setActiveSection("home")} aria-current={activeSection === "home" ? "page" : undefined}>
          <span className="nav-home-art"><img src={homeImg} alt="" /></span>
          <span>home</span>
        </button>

        <button onClick={() => setActiveSection("about")} aria-current={activeSection === "about" ? "page" : undefined}>
          <NavTile kind="about" />
          <span>about</span>
        </button>

        <button onClick={() => setActiveSection("works")} aria-current={activeSection === "works" ? "page" : undefined}>
          <NavTile kind="works" />
          <span>works</span>
        </button>

        <button onClick={() => setActiveSection("skills")} aria-current={activeSection === "skills" ? "page" : undefined}>
          <NavTile kind="skills" />
          <span>skills</span>
        </button>

        <button onClick={() => setActiveSection("contact")} aria-current={activeSection === "contact" ? "page" : undefined}>
          <NavTile kind="contact" />
          <span>contact</span>
        </button>

        <a
          href="https://drive.google.com/file/d/1gRLPKQPx4x3yNLCU3HcbIMQC1Z1ROXcA/view?usp=drive_link"
          target="_blank"
          rel="noreferrer"
        >
          <NavTile kind="resume" />
          <span>resume</span>
        </a>
        <span className="scroll-rod scroll-rod-bottom" aria-hidden="true" />
      </aside>

      <main className="content">
        <section id="home" className="section home" hidden={activeSection !== "home"}><Home onNext={() => setActiveSection("about")} /></section>
        <section id="about" className="section about-section" hidden={activeSection !== "about"}><About key={activeSection === "about" ? "active" : "inactive"} /></section>
        <section id="works" className="section work" hidden={activeSection !== "works"}><Work key={activeSection === "works" ? "active" : "inactive"} /></section>
        <section id="skills" className="section skills" hidden={activeSection !== "skills"}><Skills key={activeSection === "skills" ? "active" : "inactive"} /></section>
        <section id="contact" className="section contact" hidden={activeSection !== "contact"}><ContactPage onHome={() => setActiveSection("home")} /></section>
      </main>
    </div>
  );
}

export default App;
