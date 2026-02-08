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
import ContactPage from "./pages/ContactPage"; // ✅ CORRECT FILE

function App() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="app-layout">
      {/* LEFT ICON PANEL */}
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

        {/* ✅ CONTACT ICON */}
        <button onClick={() => scrollToSection("contact")}>
          <img src={sectionsImg} alt="contact" />
          <span>contact</span>
        </button>

        {/* RESUME → GOOGLE DRIVE */}
        <a
          href="https://drive.google.com/file/d/1z3mmNB7gDHm6TLZV5aDmV7BsN3bpfOX_/view?usp=sharing"
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

        {/* ✅ CONTACT SECTION (NOW WORKS) */}
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
