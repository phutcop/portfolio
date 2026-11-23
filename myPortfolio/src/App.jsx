import { useEffect, useState } from "react";
import "./styles/global.css";

/* PANEL ICONS */
import homeImg from "./assets/panel/home.png";
import resumeImg from "./assets/panel/resume.png";
import jokerImg from "./assets/retro/joker.png";
import workerImg from "./assets/retro/worker.png";
import monopolyImg from "./assets/retro/monopoly.png";
import contactImg from "./assets/retro/contact.png";

/* TIGER */
import Shera from "./components/Shera";

/* SECTIONS */
import Home from "./pages/Home";
import About from "./components/About";
import Work from "./components/Work";
import Skills from "./components/Skills";
import ContactPage from "./pages/ContactPage";

const navIllustrations = {
  about: { src: jokerImg, width: 472, height: 713, x: 36, top: 100, cropWidth: 400, crop: 330 },
  works: { src: workerImg, width: 600, height: 600, crop: 600 },
  skills: { src: monopolyImg, width: 236, height: 268, x: 18, top: 0, cropWidth: 200, crop: 268 },
  contact: { src: contactImg, width: 680, height: 567, crop: 567, darkBackground: true },
};

function NavArt({ type }) {
  const art = navIllustrations[type];
  const filterId = `nav-cutout-${type}`;
  const alpha = art.darkBackground ? "0.333 0.333 0.333 0 0" : "-0.333 -0.333 -0.333 0 1";
  return <span className={`nav-art nav-art-${type}`} aria-hidden="true"><svg viewBox={`${art.x || 0} ${art.top || 0} ${art.cropWidth || art.width} ${art.crop}`} preserveAspectRatio="xMidYMid meet">
    <defs><filter id={filterId} colorInterpolationFilters="sRGB"><feColorMatrix type="matrix" values={`0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  ${alpha}`} /></filter></defs>
    <image href={art.src} width={art.width} height={art.height} filter={`url(#${filterId})`} />
  </svg></span>;
}

function App() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    document.getElementById(activeSection)?.scrollTo({ top: 0 });
  }, [activeSection]);

  return (
    <div className="app-layout" data-section={activeSection}>
      {/* LEFT ICON PANEL (DESKTOP) */}
      <aside className="icon-panel">
        <button onClick={() => setActiveSection("home")} aria-current={activeSection === "home" ? "page" : undefined}>
          <img src={homeImg} alt="" />
          <span>home</span>
        </button>

        <button onClick={() => setActiveSection("about")} aria-current={activeSection === "about" ? "page" : undefined}>
          <NavArt type="about" />
          <span>about</span>
        </button>

        <button onClick={() => setActiveSection("works")} aria-current={activeSection === "works" ? "page" : undefined}>
          <NavArt type="works" />
          <span>works</span>
        </button>

        <button onClick={() => setActiveSection("skills")} aria-current={activeSection === "skills" ? "page" : undefined}>
          <NavArt type="skills" />
          <span>skills</span>
        </button>

        <button onClick={() => setActiveSection("contact")} aria-current={activeSection === "contact" ? "page" : undefined}>
          <NavArt type="contact" />
          <span>contact</span>
        </button>

        <a
          href="https://drive.google.com/file/d/1wks35N4mGvlYNQwVWIavtJbyZH9aYruW/view?usp=sharing"
          target="_blank"
          rel="noreferrer"
        >
          <img src={resumeImg} alt="" />
          <span>resume</span>
        </a>
      </aside>

      {/* MAIN CONTENT */}
      <main className="content">
        <section id="home" className="section home" hidden={activeSection !== "home"}><Home onNext={() => setActiveSection("about")} /><Shera mobile /></section>
        <section id="about" className="section about-section" hidden={activeSection !== "about"}><About onNext={() => setActiveSection("works")} /><Shera mobile /></section>
        <section id="works" className="section work" hidden={activeSection !== "works"}><Work onNext={() => setActiveSection("skills")} /></section>
        <section id="skills" className="section skills" hidden={activeSection !== "skills"}><Skills onNext={() => setActiveSection("contact")} /></section>
        <section id="contact" className="section contact" hidden={activeSection !== "contact"}><ContactPage onHome={() => setActiveSection("home")} /></section>
      </main>

      <Shera />

    </div>
  );
}

export default App;
