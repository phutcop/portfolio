import Work from "../components/Work";
import tiger from "../assets/tiger.png";

function WorkPage() {
  return (
    <div className="home">
      <Work />
      <img src={tiger} alt="Illustrated tiger" className="tiger" />
    </div>
  );
}

export default WorkPage;
