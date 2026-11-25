import deerImg from "../assets/retro/warli-deer.webp";
import hareImg from "../assets/retro/warli-hare.webp";
import starImg from "../assets/retro/warli-star.webp";
import stagImg from "../assets/retro/warli-stag.webp";
import huntersImg from "../assets/retro/warli-hunters.webp";
import maskImg from "../assets/retro/warli-mask.webp";
import crabImg from "../assets/retro/warli-crab.webp";
import shellImg from "../assets/retro/bg-shell.webp";
import tortoiseImg from "../assets/retro/bg-tortoise.webp";
import sunImg from "../assets/retro/bg-sun.webp";
import snailImg from "../assets/retro/bg-snail.webp";
import monkeyImg from "../assets/retro/bg-monkey.webp";
import crab2Img from "../assets/retro/bg-crab.webp";
import spiralSunImg from "../assets/retro/bg-spiral-sun.webp";
import fishImg from "../assets/retro/bg-fish.webp";

const WALL_PIECES = {
  about: [
    { src: starImg, cls: "warli-piece warli-tl" },
    { src: stagImg, cls: "warli-piece warli-tr" },
    { src: deerImg, cls: "warli-piece warli-bl" },
    { src: huntersImg, cls: "warli-piece warli-br" },
    { src: crabImg, cls: "warli-piece warli-mob-l" },
    { src: starImg, cls: "warli-piece warli-mob-c" },
    { src: deerImg, cls: "warli-piece warli-mob-r" },
  ],
  work: [
    { src: crabImg, cls: "warli-piece warli-tl" },
    { src: maskImg, cls: "warli-piece warli-tr" },
    { src: hareImg, cls: "warli-piece warli-bl" },
    { src: huntersImg, cls: "warli-piece warli-br" },
    { src: starImg, cls: "warli-piece warli-mob-l" },
    { src: crabImg, cls: "warli-piece warli-mob-r" },
  ],
  skills: [
    { src: shellImg, cls: "warli-piece warli-tl" },
    { src: sunImg, cls: "warli-piece warli-tr" },
    { src: tortoiseImg, cls: "warli-piece warli-bl" },
    { src: fishImg, cls: "warli-piece warli-br" },
    { src: shellImg, cls: "warli-piece warli-mob-l" },
    { src: sunImg, cls: "warli-piece warli-mob-c" },
    { src: fishImg, cls: "warli-piece warli-mob-r" },
  ],
  contact: [
    { src: snailImg, cls: "warli-piece warli-tl" },
    { src: spiralSunImg, cls: "warli-piece warli-tr" },
    { src: monkeyImg, cls: "warli-piece warli-bl" },
    { src: crab2Img, cls: "warli-piece warli-br" },
    { src: snailImg, cls: "warli-piece warli-mob-l" },
    { src: spiralSunImg, cls: "warli-piece warli-mob-c" },
    { src: crab2Img, cls: "warli-piece warli-mob-r" },
  ],
};

export function WarliWall({ variant = "about" }) {
  const pieces = WALL_PIECES[variant] || WALL_PIECES.work;

  return (
    <div className={`warli-wall warli-wall-${variant}`} aria-hidden="true">
      <div className="warli-frame" />
      {pieces.map((item, idx) => (
        <img key={idx} src={item.src} alt="" className={item.cls} loading="lazy" />
      ))}
    </div>
  );
}
