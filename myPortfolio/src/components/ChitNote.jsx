import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

const CW = "var(--cw)";
const CH = "var(--ch)";
const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- what is printed on the paper ---------- */

/* the whole opened sheet (4 cells wide x 2 tall). Every face shows a different window onto it,
   so the writing stays continuous across the creases. */
function SheetContent({ project }) {
  return (
    <div className="sheet-print">
      <div className="sheet-left">
        <div className="sheet-top">
          <span className="sheet-kind">{project.kind}</span>
          <h3>{project.name}</h3>
        </div>
        <div className="sheet-bottom">
          <span className="sheet-kind">in a line</span>
          <p className="sheet-line">{project.line}</p>
          <span className="sheet-rule" aria-hidden="true">✦</span>
        </div>
      </div>
      <div className="sheet-right">
        <span className="sheet-kind">the story</span>
        <p className="sheet-desc">{project.description}</p>
      </div>
    </div>
  );
}

function Front({ c, r, w = 1, h = 1, project }) {
  return (
    <div className="face face-front" style={{ width: `calc(${CW} * ${w})`, height: `calc(${CH} * ${h})` }} aria-hidden="true">
      <div className="sheet" style={{ transform: `translate(calc(${CW} * ${-c}), calc(${CH} * ${-r}))` }}>
        <SheetContent project={project} />
      </div>
    </div>
  );
}

function PacketBack({ index, total }) {
  return (
    <div className="face face-back back-y" aria-hidden="true">
      <div className="packet">
        <span className="packet-num">{index + 1}</span>
        <span className="packet-of">no. {String(index + 1).padStart(2, "0")} of {String(total).padStart(2, "0")}</span>
      </div>
    </div>
  );
}

function BannerBack({ side, project, axis }) {
  return (
    <div className={`face face-back back-${axis}`} aria-hidden="true">
      <div className="banner" style={{ transform: `translateX(calc(${CW} * ${side === "r" ? -1 : 0}))` }}>
        <span className="banner-kind">{project.kind}</span>
      </div>
    </div>
  );
}

function PlainBack() {
  return <div className="face face-back back-y" aria-hidden="true"><div className="block-print" /></div>;
}

/* ---------- the chit that leaves the jar and unfolds ---------- */

export default function ChitNote({ project, index, total, fromRect, instant = false, onClose }) {
  const [stage, setStage] = useState(() => (reduced() || instant ? 3 : 0));
  const [closing, setClosing] = useState(false);
  const popRef = useRef(null);
  const closeRef = useRef(null);
  const timers = useRef([]);
  const later = (fn, ms) => { timers.current.push(window.setTimeout(fn, ms)); };

  useLayoutEffect(() => {
    const pop = popRef.current;
    if (!pop) return;
    if (fromRect && !reduced() && !instant) {
      const box = pop.getBoundingClientRect();
      const base = pop.querySelector(".cell-base").getBoundingClientRect();
      pop.style.setProperty("--fx", `${fromRect.left + fromRect.width / 2 - (box.left + box.width / 2)}px`);
      pop.style.setProperty("--fy", `${fromRect.top + fromRect.height / 2 - (box.top + box.height / 2)}px`);
      pop.style.setProperty("--fs", String(Math.max(0.2, fromRect.width / base.width)));
      pop.classList.add("go");
    }
  }, [fromRect, instant]);

  useEffect(() => {
    if (reduced() || instant) return;
    const scheduled = [
      window.setTimeout(() => setStage(1), 1050),
      window.setTimeout(() => setStage(2), 1950),
      window.setTimeout(() => setStage(3), 2850),
    ];
    timers.current.push(...scheduled);
    return () => scheduled.forEach(window.clearTimeout);
  }, [instant]);

  useEffect(() => { if (stage === 3) closeRef.current?.focus(); }, [stage]);

  const skip = () => {
    timers.current.forEach(window.clearTimeout);
    setStage(3);
  };

  const close = () => {
    if (closing) return;
    timers.current.forEach(window.clearTimeout);
    if (reduced() || instant) { onClose(); return; }
    setClosing(true);
    setStage(2); later(() => setStage(1), 380); later(() => setStage(0), 760); later(onClose, 1250);
  };

  useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") close(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  });

  const overlay = (
    <div className={`note-overlay ${closing ? "is-closing" : ""}`} role="dialog" aria-modal="true" aria-label={`${project.name} — ${project.kind}`} onClick={(e) => { if (e.target === e.currentTarget) close(); }}>
      {/* readable copy for screen readers; the folded paper below is decorative */}
      <div className="sr-only"><h3>{project.name}</h3><p>{project.kind}. {project.line}.</p><p>{project.description}</p></div>

      <div className="note-persp">
        <div className="note-pop" ref={popRef}>
          <div className={`note-stage s${stage} ${closing ? "closing" : ""}`}>
            <div className="paper">
              <div className="cell cell-base">
                <Front c={0} r={0} project={project} />

                {/* unfold 2 — vertical: two flaps swing down from the bottom edge */}
                <div className="flap f2 f2l">
                  <Front c={0} r={1} project={project} />
                  <BannerBack side="l" project={project} axis="x" />
                </div>

                {/* unfold 1 — book: the cover swings open to the right */}
                <div className="flap f1">
                  <Front c={1} r={0} project={project} />
                  <PacketBack index={index} total={total} />
                  <div className="flap f2 f2r">
                    <Front c={1} r={1} project={project} />
                    <BannerBack side="r" project={project} axis="x" />
                  </div>
                </div>
              </div>

              {/* unfold 3 — book again: the whole right half opens */}
              <div className="flap f3">
                <Front c={2} r={0} w={2} h={2} project={project} />
                <PlainBack />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={`note-actions ${stage === 3 && !closing ? "show" : ""}`}>
        {project.href && <a href={project.href} target="_blank" rel="noreferrer">{project.link} ↗</a>}
        <button type="button" ref={closeRef} onClick={close}>fold away ×</button>
      </div>
      {stage < 3 && !closing && (
        <button type="button" className="note-skip" onClick={skip}>skip animation</button>
      )}
    </div>
  );
  /* portal: keeps the overlay out of the section's overflow/stacking context */
  return createPortal(overlay, document.querySelector(".app-layout") || document.body);
}
