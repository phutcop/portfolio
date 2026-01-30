import { useState, useRef } from "react";

import Hero from "../components/Hero";
import Neo from "../components/Neo";

import tiger from "../assets/tiger.png";

function Home() {
  const [showNeo, setShowNeo] = useState(false);

  const neoRef = useRef(null);
  const topRef = useRef(null);

  const handleLoadMore = () => {
    setShowNeo(true);

    setTimeout(() => {
      neoRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const handleLoadLess = () => {
    setShowNeo(false);

    setTimeout(() => {
      topRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <>
      {/* Top anchor */}
      <div ref={topRef}></div>

      <Hero />

      {!showNeo && (
        <div className="load-more-wrapper">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load more ↓
          </button>
        </div>
      )}

      {showNeo && (
        <>
          <div ref={neoRef}>
            <Neo />
          </div>

          <div className="load-more-wrapper">
            <button className="load-more-btn" onClick={handleLoadLess}>
              Load less ↑
            </button>
          </div>
        </>
      )}

      {/* Tiger is visible everywhere EXCEPT when Neo is shown */}
      {!showNeo && (
        <img
          src={tiger}
          alt="Illustrated tiger"
          className="tiger"
        />
      )}
    </>
  );
}

export default Home;
