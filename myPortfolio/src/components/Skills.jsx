function Skills() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    {
      area: "Brand & visual design",
      tools: "CorelDRAW · Canva",
      proof: "Created Perficient One’s logo and visual identity, then carried the system into its website and brand materials.",
      standout: "I connect visual choices to how a brand works in the real world, beyond a moodboard.",
    },
    {
      area: "Front-end development",
      tools: "HTML · CSS · React",
      proof: "Built responsive experiences for the Perficient One website and Nosta’s public landing page and waitlist.",
      standout: "I pay attention to how content, navigation, and layout hold together on both desktop and mobile.",
    },
    {
      area: "Data analysis & visualisation",
      tools: "Power BI · reporting",
      proof: "At CNET Technologies, analysed leads across features and prepared reports; Finshyt applies that lens to spending data.",
      standout: "I look for the useful pattern in a dataset, then make it easier for someone else to understand.",
    },
    {
      area: "Python & prototyping",
      tools: "Python · FastAPI",
      proof: "Finshyt uses a Python API to explore annual ledgers, monthly and category trends, and answers grounded in transactions.",
      standout: "I can take an idea from raw records toward a working product flow, while being clear about what is still a prototype.",
    },
    {
      area: "Media & communication",
      tools: "Video editing · writing",
      proof: "At AIBF 2024, wrote event notes, press notes, and articles during the 10-day festival; I also work with video editing.",
      standout: "I enjoy making information clear and engaging, whether it is a project story, a report, or a visual edit.",
    },
  ];

  return (
    <section id="skills" className="section skills">
      <div className="about-bg-word" aria-hidden="true">skills</div>
      <div className="skills-wrapper">
        <div className="skills-heading">
          <p className="skills-eyebrow">A mix of design, data, and making</p>
          <h2 className="skills-title">Skills, shown through my work</h2>
          <p className="skills-intro">
            I like moving between the idea, the details, and the finished experience.
            Here’s what that looks like in practice.
          </p>
        </div>

        <div className="skills-table-wrap">
          <table className="skills-table">
            <thead>
              <tr>
                <th scope="col">Skill</th>
                <th scope="col">Project proof</th>
                <th scope="col">My approach</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill) => (
                <tr key={skill.area}>
                  <th scope="row">
                    <span className="skill-area">{skill.area}</span>
                    <span className="skill-tools">{skill.tools}</span>
                  </th>
                  <td data-label="Project proof">{skill.proof}</td>
                  <td data-label="My approach">{skill.standout}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="skills-interests">
          <span>Outside work</span> Acting, travel, Minecraft, and poker keep me curious about people, places, and how things fit together.
        </p>

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
