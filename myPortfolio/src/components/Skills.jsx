function Skills() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="skills" className="section skills">
      <div className="about-bg-word" aria-hidden="true">skills</div>
      <div className="skills-wrapper">
        <div className="skills-heading">
          <p className="skills-eyebrow">A few things I work with</p>
          <h2 className="skills-title">Skills & interests</h2>
        </div>

        <div className="skills-list">
          <div className="skill-group">
            <span className="skill-index">01</span>
            <h3>Design & media</h3>
            <p>CorelDRAW <span>·</span> Canva <span>·</span> Video editing</p>
          </div>
          <div className="skill-group">
            <span className="skill-index">02</span>
            <h3>Data & development</h3>
            <p>Power BI <span>·</span> HTML <span>·</span> CSS <span>·</span> Python</p>
          </div>
          <div className="skill-group">
            <span className="skill-index">03</span>
            <h3>Outside work</h3>
            <p>Acting <span>·</span> Travel <span>·</span> Minecraft <span>·</span> Poker</p>
          </div>
        </div>

        {/* ↓ SAME SCROLL ARROW AS HOME */}
        <button
          className="scroll-down"
          onClick={() => scrollTo("contact")}
          aria-label="Scroll to contact"
        >
          ↓
        </button>
      </div>
    </section>
  );
}

export default Skills;
