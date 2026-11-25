import { useEffect, useState } from "react";
import { WarliWall } from "./WarliArt";

function About() {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setExpanded(true), 280);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <>
      <WarliWall variant="about" />
      <div className={`about-inner in-about ${expanded ? "is-open" : ""}`}>
        <div className="in-about-heading">
          <h2 className="in-about-title">a little <em>about me.</em></h2>
        </div>
        <div className="in-about-stage">
          <div className={`in-about-pinch ${expanded ? "is-open" : ""}`} aria-hidden="true">
            <svg className="pinch-hand" viewBox="0 50 175 125" fill="none">
              <path
                d="M16 158 L30 120 C35 102 47 86 64 81 C74 78 81 84 82 95 C83 108 78 122 69 134 C60 146 48 156 36 162 C26 166 18 164 16 158 Z"
                fill="#f5d4b4"
                stroke="#3b160e"
                strokeWidth="2.5"
                strokeLinejoin="round"
              />

              <g className="pinch-finger-top">
                <path
                  d="M68 82 C82 77 102 79 121 88 C133 94 145 100 151 105 C154.5 108 153 113 148 114 C141 115.5 129 111 116 104 C102 97 86 94 72 96"
                  fill="#f7dac0"
                  stroke="#3b160e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M140 102 C145 104 148.5 106.5 147.8 109 C147 111.2 143 111.5 138 109.5 C137 106.5 138 103.5 140 102 Z"
                  fill="#fff5eb"
                  stroke="#cfa37e"
                  strokeWidth="1.1"
                />
                <path d="M102 85 C103 88.5 102.5 91.5 101 94" stroke="#cfa079" strokeWidth="1.4" strokeLinecap="round" />
                <path d="M123 93 C124 96 123.5 99 122 101.5" stroke="#cfa079" strokeWidth="1.3" strokeLinecap="round" />
              </g>

              <g className="pinch-finger-bottom">
                <path
                  d="M50 144 C64 139 84 134 106 128 C122 123.5 136 117.5 146 116.5 C151.5 116 154 120.5 151 125.5 C146.5 132 132 138 112 143.5 C92 149 72 152 54 152"
                  fill="#f7dac0"
                  stroke="#3b160e"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M138 119 C143 118 146.5 119 146.8 121.8 C147 124.2 143.5 126.5 139 126.8 C137.2 124.2 137 121.2 138 119 Z"
                  fill="#fff5eb"
                  stroke="#cfa37e"
                  strokeWidth="1.1"
                />
                <path d="M108 133 C110 136 111 138.5 111.5 141" stroke="#cfa079" strokeWidth="1.4" strokeLinecap="round" />
              </g>
            </svg>
            <span className="in-about-pinch-label">(little)</span>
          </div>

          <div className={`in-about-panel-wrap ${expanded ? "is-open" : ""}`}>
            <div className="in-about-panel">
              <p>i’m a 4th year computer engineering student from institute of advanced research, gandhinagar, gujarat, currently exploring and learning as much as i can, with interests in web designing, data and visualisations.</p>
              <p>i want to pursue business management for my master’s, with the aim of merging the principles of technology and management to build my source of income :)</p>
              <p>also i enjoy movies and music, can spend hours on work i’m interested in, and whether i start early or at the last moment, i make sure to meet deadlines every time.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
