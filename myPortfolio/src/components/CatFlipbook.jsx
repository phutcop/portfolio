import { useEffect, useRef } from "react";
import catFrames from "../assets/retro/cat-frames.png";

function CatFlipbook() {
  const canvasRef = useRef(null);
  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    const image = new Image();
    let frame = 0;
    let timer;
    const draw = () => {
      ctx.clearRect(0, 0, 244, 112);
      ctx.drawImage(image, (frame % 6) * (736 / 6) + 4, frame < 6 ? 100 : 248, 736 / 6 - 8, 90, 0, 0, 244, 112);
      frame = (frame + 1) % 12;
    };
    image.onload = () => {
      draw();
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) timer = window.setInterval(draw, 115);
    };
    image.src = catFrames;
    return () => window.clearInterval(timer);
  }, []);
  return <div className="in-cat-flipbook"><canvas ref={canvasRef} width="244" height="112" role="img" aria-label="A running cat flipbook animation" /></div>;
}

export default CatFlipbook;
