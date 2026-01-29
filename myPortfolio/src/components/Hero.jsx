function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Hello, I’m <span className="name-block"></span>
        </h1>

        <div className="roles">
          <span>Designer</span>
          <span>Developer</span>
          <span>Creator</span>
        </div>

        <p>
          Crafting digital experiences that blend creativity with
          functionality. Making the web a more beautiful place, one
          pixel at a time.
        </p>

        <a href="#" className="hero-cta">
          EXPLORE MY WORK ↓
        </a>
      </div>
    </section>
  );
}

export default Hero;
