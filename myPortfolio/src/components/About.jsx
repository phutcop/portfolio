function About() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="about" className="section about-section">
      {/* BIG FADED WORD */}
      <div className="about-bg-word">about</div>

      <div className="about-layout">
        <div className="about-content">
          <h2 className="about-title">about me:</h2>

          <p>
            i’m a 3rd year computer engineering student from institute of advanced
            research, gandhinagar, gujarat, currently exploring and learning as
            much as i can, with interests in web designing, data and
            visualisations.
          </p>

          <p>
            i want to pursue business management for my master’s, with the aim of
            merging the principles of technology and management to build my
            source of income :)
          </p>

          <p className="muted">
            also i enjoy movies and music, can spend hours on work i’m interested
            in, and whether i start early or at the last moment, i make sure to
            meet deadlines every time.
          </p>

          {/* ↓ SAME SCROLL ARROW AS HOME */}
          <button
            className="scroll-down"
            onClick={() => scrollTo("works")}
            aria-label="Scroll to works"
          >
            ↓
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
