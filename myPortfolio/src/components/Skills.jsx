import { useState } from "react";

const skills = [
  ["canva", "i make niche designs that fit the idea, instead of looking like another template."],
  ["coreldraw", "i care about the little details that make a logo feel finished."],
  ["power bi", "i turn a messy sheet into a report someone can actually use."],
  ["html & css", "i like making a layout feel just as considered on a phone as it does on a laptop."],
  ["react", "i use components to make interactive ideas easier to build and keep improving."],
  ["python", "i use it to turn data ideas into things i can try, break, and improve."],
  ["video editing", "i know when to cut: the best part of a story deserves the screen time."],
  ["acting", "it has taught me that how you say something matters as much as what you say."],
  ["travelling", "new places make me notice details i would have missed at home."],
  ["minecraft", "it taught me lava can be behind any block. look before you dig."],
  ["poker", "it taught me to make decisions with incomplete information and keep a straight face."],
  ["coffee", "it prepares me for the fact that life can be bitter too."],
];

function Skills({ onNext }) {
  const [activeSkill, setActiveSkill] = useState(null);

  return (
    <div className="skills-inner">
      <div className="about-bg-word" aria-hidden="true">skills</div>
      <div className="skills-wrapper">
        <h2 className="skills-title">skills & interests</h2>
        <ul className="skills-bullet-list" aria-label="Skills and interests">
          {skills.map(([name, description], index) => (
            <li key={name}>
              <button
                type="button"
                className={`skill-bullet-button ${activeSkill === index ? "active" : ""}`}
                aria-expanded={activeSkill === index}
                onMouseEnter={() => setActiveSkill(index)}
                onMouseLeave={() => setActiveSkill(null)}
                onFocus={() => setActiveSkill(index)}
                onClick={() => setActiveSkill(index)}
              >
                <span className="skill-bullet-name">{name}</span>
                <span className="skill-bullet-description">{description}</span>
              </button>
            </li>
          ))}
        </ul>
        <button className="scroll-down" onClick={onNext} aria-label="Go to contact">↓</button>
      </div>
    </div>
  );
}

export default Skills;
