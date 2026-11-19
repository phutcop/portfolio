function Skills() {
  const skills = [
    ["canva", "i make niche designs that fit the idea, instead of looking like another template."],
    ["coreldraw", "i care about the little details in a logo; perficient one gave me plenty to get right."],
    ["power bi", "i turn a messy sheet into a report someone can actually use, like i did with leads at cnet."],
    ["html & css", "i like making a layout feel just as considered on a phone as it does on a laptop."],
    ["react", "i use components to make interactive ideas easier to build and keep improving."],
    ["python", "i use it to make data ideas work, including the ledger analysis behind finshyt."],
    ["video editing", "i know when to cut: the best part of a story deserves the screen time."],
    ["acting", "it has taught me that how you say something matters as much as what you say."],
    ["travelling", "new places make me notice details i would have missed at home."],
    ["minecraft", "it taught me lava can be behind any block. look before you dig."],
    ["poker", "it taught me to make decisions with incomplete information and keep a straight face."],
    ["coffee", "it prepares me for the fact that life can be bitter too."],
  ];

  return (
    <div className="skills-inner">
      <div className="about-bg-word" aria-hidden="true">skills</div>
      <div className="skills-wrapper">
        <h2 className="skills-title">skills & interests</h2>
        <ul className="skills-grid">
          {skills.map(([name, description]) => (
            <li className="skill-note" key={name}>
              <h3>{name}</h3>
              <p>{description}</p>
            </li>
          ))}
        </ul>
        <button
          className="scroll-down"
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          aria-label="Scroll to contact"
        >
          ↓
        </button>
      </div>
    </div>
  );
}

export default Skills;
