import { useEffect, useState } from "react";

function Home() {
  const fullText = "yashraj dave!";
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText((prev) => prev + fullText[index]);
        setIndex((prev) => prev + 1);
      }, 80);

      return () => clearTimeout(timer);
    }
  }, [index]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start", // 👈 snap perfectly to top
      });
    }
  };

  return (
    <div className="home-inner">
      <div className="home-content">
        <h1 className="home-title">
          hi, <br />
          i am{" "}
          <span className="typewriter">
            {text}
            <span className="cursor">|</span>
          </span>
        </h1>

        <p className="home-text">
          this portfolio will guide you from getting to know me to exploring my
          work, and if that isn’t enough, you can always contact me.
        </p>
      </div>

      {/* ↓ SCROLL ARROW */}
      <button
        className="scroll-down"
        aria-label="Scroll to about"
        onClick={scrollToAbout}
      >
        ↓
      </button>
    </div>
  );
}

export default Home;
