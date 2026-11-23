import { useEffect, useRef } from "react";
import SectionArrow from "./SectionArrow";

function drawPixelCat(ctx, frame) {
  ctx.clearRect(0, 0, 32, 16);
  ctx.fillStyle = "#ffcb62";
  const block = (x, y, w, h) => ctx.fillRect(x, y, w, h);
  block(7, 6, 15, 5);  // body
  block(20, 5, 7, 5);  // head
  block(21, 3, 2, 3);  // ears
  block(25, 3, 2, 3);
  block(26, 8, 3, 2);  // muzzle
  block(4, 7, 5, 2);   // curved tail
  block(2, frame === 1 ? 4 : 5, 3, 5);
  block(3, frame === 1 ? 3 : 4, 2, 2);
  if (frame === 0) { block(9, 11, 3, 3); block(18, 11, 4, 2); block(21, 13, 4, 1); }
  else if (frame === 1) { block(10, 11, 4, 2); block(6, 13, 4, 1); block(19, 11, 3, 4); }
  else { block(9, 11, 3, 4); block(19, 11, 3, 4); }
  ctx.fillStyle = "#132019";
  block(25, 6, 1, 1); // eye
}

function PixelCatDisplay() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    let frame = 0;
    const draw = () => {
      drawPixelCat(ctx, frame);
      frame = (frame + 1) % 3;
    };
    draw();
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(draw, 180);
    return () => window.clearInterval(timer);
  }, []);
  return <div className="cat-led"><span className="led-light" /><span className="led-label">SHERA / 01</span><canvas ref={canvasRef} width="32" height="16" role="img" aria-label="A pixel cat running on a glowing display" /></div>;
}

function About({ onNext }) {
  return <div className="about-inner retro-about">
    <div className="table-scene">
      <div className="table-runner"><span>about</span><span>me</span></div>
      <div className="table-board">
        <div className="table-copy">
          <span className="desk-eyebrow">a little about me</span>
          <h2>pull up a chair.</h2>
          <p>i’m a 4th year computer engineering student from institute of advanced research, gandhinagar, gujarat, currently exploring and learning as much as i can, with interests in web designing, data and visualisations.</p>
          <p>i want to pursue business management for my master’s, with the aim of merging the principles of technology and management to build my source of income :)</p>
          <p>also i enjoy movies and music, can spend hours on work i’m interested in, and whether i start early or at the last moment, i make sure to meet deadlines every time.</p>
          <button className="scroll-down" onClick={onNext} aria-label="Go to works"><SectionArrow /></button>
        </div>
        <PixelCatDisplay />
      </div>
    </div>
  </div>;
}

export default About;
