import { useState } from "react";

function Work() {
  const [activeIndex, setActiveIndex] = useState(null);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const items = [
    {
      title: "media volunteer at aibf 2024",
      description:
        "i volunteered at the ahmedabad international book festival (2024 edition) as a media volunteer, where i took notes and wrote press notes, articles, and related content throughout the 10-day event.",
    },
    {
      title: "internship as a data analyst",
      description:
        "i completed an internship at cnet technologies, ahmedabad, as a data analyst, where i analyzed leads across different features and created reports using bi tools.",
    },
    {
      title: "best paper at an international conference",
      description:
        "i presented a paper titled “promoting indigenous products through digital marketing: a case for sustainable entrepreneurship” at fieis 2025 at kiss university, bhubaneshwar, exploring my interest in research.",
    },
    {
      title: "student editor for college magazine",
      description:
        "i got an opportunity to work as a student editor for my college magazine, where i contributed to content creation, editing, and overall management of the publication.",
    },
    {
      title: "more coming soon…",
      description: "",
    },
  ];

  return (
    <section id="works" className="section work">
      <div className="work-wrapper">
        <h2 className="work-title">my works:</h2>

        <ul className="work-list">
          {items.map((item, index) => {
            const isActive = activeIndex === index;

            return (
              <li
                key={index}
                className={`work-item ${isActive ? "active" : ""}`}
              >
                <button
                  className="work-header"
                  onClick={() =>
                    setActiveIndex(isActive ? null : index)
                  }
                >
                  {item.title}
                  <span className="work-symbol">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                <div
                  className={`work-description ${
                    isActive ? "open" : ""
                  }`}
                >
                  <p>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>

        {/* ↓ SCROLL TO SKILLS */}
        <button
          className="scroll-down"
          onClick={() => scrollTo("skills")}
          aria-label="Scroll to skills"
        >
          ↓
        </button>
      </div>
    </section>
  );
}

export default Work;
