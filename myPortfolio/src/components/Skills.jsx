function Skills() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section id="skills" className="section skills">
      <div className="skills-wrapper">
        <h2 className="skills-title">
          skills & hobbies <br />
          <span className="skills-subtitle">
            jack of all, ace of none (hehe)
          </span>
        </h2>

        <ul className="skills-list">
          <li>
            <span>coral</span>
            <span className="dot">·</span>
            <span>canva</span>
            <span className="dot">·</span>
            <span>power bi</span>
          </li>

          <li>
            <span>html</span>
            <span className="dot">·</span>
            <span>css</span>
            <span className="dot">·</span>
            <span>python</span>
          </li>

          <li>
            <span>video editing</span>
            <span className="dot">·</span>
            <span>i can lowkey act too</span>
            <span className="dot">·</span>
            <span>travelling</span>
          </li>

          <li>
            <span>minecraft</span>
            <span className="dot">·</span>
            <span>poker</span>
            <span className="dot">·</span>
            <span>etc.</span>
          </li>
        </ul>

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
