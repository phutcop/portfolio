import About from "../components/About";
import tiger from "../assets/tiger.png";

function AboutPage() {
  return (
    <div className="home">
      <About />
      <img src={tiger} alt="Illustrated tiger" className="tiger" />
    </div>
  );
}

export default AboutPage;
