export function JarBack() {
  return (
    <svg className="jar-layer jar-back" viewBox="0 0 320 400" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="jarGlass" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fff3d6" stopOpacity=".46" />
          <stop offset=".14" stopColor="#f5dfb3" stopOpacity=".24" />
          <stop offset=".5" stopColor="#fff9eb" stopOpacity=".12" />
          <stop offset=".86" stopColor="#e5be7e" stopOpacity=".24" />
          <stop offset="1" stopColor="#fff1cf" stopOpacity=".42" />
        </linearGradient>
        <linearGradient id="jarGlassWall" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fff7e2" stopOpacity=".65" />
          <stop offset=".5" stopColor="#edd49a" stopOpacity=".4" />
          <stop offset="1" stopColor="#d9ad64" stopOpacity=".7" />
        </linearGradient>
        <radialGradient id="jarBaseGlow" cx="50%" cy="50%" r="52%">
          <stop offset="0" stopColor="#ffe7ae" stopOpacity=".42" />
          <stop offset=".65" stopColor="#e8b84b" stopOpacity=".2" />
          <stop offset="1" stopColor="#8b3524" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="jarBrass" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#693e0c" />
          <stop offset=".18" stopColor="#b87e23" />
          <stop offset=".34" stopColor="#f7da84" />
          <stop offset=".52" stopColor="#c78b28" />
          <stop offset=".78" stopColor="#8f5b15" />
          <stop offset="1" stopColor="#593208" />
        </linearGradient>
        <linearGradient id="jarBrassTop" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#fae39c" />
          <stop offset=".55" stopColor="#c98e2c" />
          <stop offset="1" stopColor="#72440d" />
        </linearGradient>
      </defs>
      <ellipse cx="160" cy="389" rx="122" ry="9" fill="rgba(26,7,4,.48)" />
      <path
        d="M96 66C96 90 54 116 45 172C37 238 39 322 52 360Q57 381 92 383H228Q263 381 268 360C281 322 283 238 275 172C266 116 224 90 224 66Z"
        fill="url(#jarGlass)"
        stroke="url(#jarGlassWall)"
        strokeWidth="3.5"
      />
      <path
        d="M101 72C101 94 60 119 52 173C44 237 46 318 58 355Q62 373 95 375H225Q258 373 262 355C274 318 276 237 268 173C260 119 219 94 219 72"
        fill="none"
        stroke="#fff8e6"
        strokeOpacity=".22"
        strokeWidth="6"
      />
      <path
        d="M55 349 Q160 368 265 349 Q259 378 228 381 H92 Q61 378 55 349 Z"
        fill="url(#jarBaseGlow)"
      />
      <ellipse cx="160" cy="364" rx="88" ry="8" fill="none" stroke="#fff4d6" strokeOpacity=".26" strokeWidth="1.5" />
      <rect x="86" y="54" width="148" height="16" rx="7" fill="url(#jarGlass)" stroke="#edd49a" strokeOpacity=".82" strokeWidth="2.5" />
      <rect x="91" y="65" width="138" height="6" rx="3" fill="#fff7e2" fillOpacity=".28" stroke="#edd49a" strokeOpacity=".55" strokeWidth="1.2" />
      <rect x="74" y="22" width="172" height="34" rx="9" fill="url(#jarBrass)" stroke="#533007" strokeWidth="2" />
      <rect x="77" y="25" width="166" height="5" rx="3" fill="#fff6cf" fillOpacity=".36" />
      <path d="M90 29v21M108 29v21M126 29v21M144 29v21M160 29v21M176 29v21M194 29v21M212 29v21M230 29v21" stroke="#472805" strokeOpacity=".34" strokeWidth="2" strokeLinecap="round" />
      <rect x="76" y="50" width="168" height="5" rx="2.5" fill="#4f2d06" fillOpacity=".45" />
      <ellipse cx="160" cy="14" rx="24" ry="9.5" fill="url(#jarBrassTop)" stroke="#533007" strokeWidth="2" />
      <ellipse cx="155" cy="11.5" rx="10" ry="3.2" fill="#fff7d4" fillOpacity=".62" />
      <g strokeLinecap="round">
        <path d="M93 69 Q160 77 227 69" fill="none" stroke="#f3c45d" strokeWidth="2.4" opacity=".88" />
        <path d="M95 72 Q160 80 225 72" fill="none" stroke="#6d3a12" strokeWidth="1.1" opacity=".55" />
      </g>
    </svg>
  );
}

export function JarFront() {
  return (
    <svg className="jar-layer jar-front" viewBox="0 0 320 400" aria-hidden="true" focusable="false">
      <defs>
        <linearGradient id="jarSheenLeft" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fffaf0" stopOpacity=".58" />
          <stop offset=".55" stopColor="#fffaf0" stopOpacity=".24" />
          <stop offset="1" stopColor="#fffaf0" stopOpacity="0" />
        </linearGradient>
        <linearGradient id="jarSheenRight" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#fffaf0" stopOpacity="0" />
          <stop offset="1" stopColor="#fffaf0" stopOpacity=".34" />
        </linearGradient>
      </defs>
      <path d="M62 172 C53 232 54 314 64 352" stroke="url(#jarSheenLeft)" strokeWidth="16" strokeLinecap="round" fill="none" />
      <path d="M84 128 C70 144 65 158 63 170" stroke="#fffaf0" strokeOpacity=".46" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M77 186 C70 236 71 304 78 338" stroke="#fffaf0" strokeOpacity=".22" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M254 184 C261 236 260 306 251 344" stroke="url(#jarSheenRight)" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M96 364 Q160 378 224 364" stroke="#fff7e6" strokeOpacity=".42" strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path
        d="M96 66C96 90 54 116 45 172C37 238 39 322 52 360Q57 381 92 383H228Q263 381 268 360C281 322 283 238 275 172C266 116 224 90 224 66Z"
        fill="none"
        stroke="#fff7e6"
        strokeOpacity=".5"
        strokeWidth="1.5"
      />
      <g fill="#edd49a" stroke="#edd49a" strokeLinecap="round" strokeLinejoin="round" opacity="0.82">
        <path d="M76 124 q84 10 168 0" fill="none" strokeWidth="1.3" opacity="0.52" />
        <path d="M72 132 l11 -7 l11 7 l11 -7 l11 7 l11 -7 l11 7 l11 -7 l11 7 l11 -7 l11 7 l11 -7 l11 7 l11 -7 l11 7 l11 -7 l11 7" fill="none" strokeWidth="1.5" />
        <g transform="translate(160, 103)">
          <polygon points="0,-13 3.2,-4 12,-6.5 4.8,0 12,6.5 3.2,4 0,13 -3.2,4 -12,6.5 -4.8,0 -12,-6.5 -3.2,-4" stroke="none" />
          <circle cx="0" cy="0" r="2.8" fill="#7d2e1e" stroke="none" />
          <circle cx="-22" cy="1.5" r="2.4" stroke="none" opacity="0.72" />
          <circle cx="22" cy="1.5" r="2.4" stroke="none" opacity="0.72" />
        </g>
        <path d="M64 351 l12 -6 l12 6 l12 -6 l12 6 l12 -6 l12 6 l12 -6 l12 6 l12 -6 l12 6 l12 -6 l12 6 l12 -6 l12 6 l12 -6 l12 6" fill="none" strokeWidth="1.4" opacity="0.52" />
      </g>
    </svg>
  );
}
