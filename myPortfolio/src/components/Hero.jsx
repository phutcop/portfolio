import { useEffect, useState } from "react";

function Hero() {
  const name = "Yashraj Dave!";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < name.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + name[index]);
        setIndex(index + 1);
      }, 70);

      return () => clearTimeout(timeout);
    }
  }, [index, name]);

  return (
    <section className="hero">
      <div className="hero-text">
        <h1>
          Hello, I’m{" "}
          <span className="typewriter">
            {text}
            <span className="cursor">|</span>
          </span>
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
      </div>
    </section>
  );
}

export default Hero;
