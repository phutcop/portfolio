import { useRef, useState } from "react";
import tigerImg from "../assets/tiger.png";
// Audio from the user's Google Animal Sounds link (Tiger), kept local for reliable playback.
import roarSound from "../assets/tiger-roar.mp3";

function Shera({ mobile = false }) {
  const audioRef = useRef(null);
  const timerRef = useRef(null);
  const [roaring, setRoaring] = useState(false);

  function roar() {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = 0.3;
      audio.currentTime = 0;
      audio.play().catch(() => {});
    }
    setRoaring(false);
    window.clearTimeout(timerRef.current);
    requestAnimationFrame(() => setRoaring(true));
    timerRef.current = window.setTimeout(() => setRoaring(false), 900);
  }

  return (
    <button type="button" className={`shera ${mobile ? "shera-mobile" : "shera-desktop"} ${roaring ? "is-roaring" : ""}`} onClick={roar} aria-label="Hear Shera roar" title="tap shera for a roar">
      <span className="shera-sound" aria-hidden="true">roar!</span>
      <img src={tigerImg} alt="" />
      <audio ref={audioRef} src={roarSound} preload="none" />
    </button>
  );
}

export default Shera;
