function About({ onNext }) {
  return (
    <div className="about-inner">
      {/* BIG FADED WORD */}
      <div className="about-bg-word">about</div>

      <div className="about-layout">
        <div className="about-content">
          <div className="about-heading">
          <h2 className="about-title">about me:</h2>
          </div>
          <div className="about-copy">

          <p>
            i’m a 4th year computer engineering student from institute of advanced
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
            onClick={onNext}
            aria-label="Scroll to works"
          >
            ↓
          </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
