import sunTileImg from "../assets/retro/sun-tile.webp";
import resumeStampImg from "../assets/retro/resume-stamp.webp";

function NavTile({ kind }) {
  if (kind === "resume") {
    return (
      <span className="nav-art nav-tile-stamp" aria-hidden="true">
        <img src={resumeStampImg} alt="" />
      </span>
    );
  }

  return (
    <span className="nav-art nav-tile-sun" aria-hidden="true">
      <img src={sunTileImg} alt="" />
    </span>
  );
}

export default NavTile;
