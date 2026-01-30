import Skills from "../components/Skills";
import tiger from "../assets/tiger.png";

function SkillsPage() {
  return (
    <div className="home">
      <Skills />
      <img src={tiger} alt="Illustrated tiger" className="tiger" />
    </div>
  );
}

export default SkillsPage;
