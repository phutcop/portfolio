import { useState } from "react";
import SectionArrow from "./SectionArrow";

const projects = [
  { name: "building nosta", line: "a social time capsule", kind: "product / in progress", description: "i’m building nosta, a social time capsule for sharing a memory now and choosing when it returns. the public landing page and waitlist are live; the social platform is still in prototype.", href: "https://adminsnosta.github.io/waitlist/", link: "visit nosta" },
  { name: "finshyt", line: "expense analysis prototype", kind: "product / prototype", description: "i’m prototyping an expense analysis tool that imports an annual ledger, compares monthly and category spending, and answers questions from recorded transactions. it currently runs as a local demo; sign-in and data storage are not production-ready." },
  { name: "perficient one", line: "brand & website", kind: "client work / live", description: "a responsive website for a construction and project management firm, with project stories, an enquiry form, and a matching brand toolkit.", href: "https://perficientone.com/", link: "view website" },
  { name: "i spy", line: "precision in the unnoticed", kind: "experiment / live", description: "a react-based project exploring invisible unicode fingerprinting to trace information leaks.", href: "https://phutcop.github.io/i-spy/", link: "view project" },
  { name: "aibf 2024", line: "media volunteer", kind: "writing / event", description: "i volunteered at the ahmedabad international book festival (2024 edition) as a media volunteer, where i took notes and wrote press notes, articles, and related content throughout the 10-day event." },
  { name: "data analyst internship", line: "cnet technologies", kind: "data / experience", description: "i completed an internship at cnet technologies, ahmedabad, as a data analyst, where i analyzed leads across different features and created reports using bi tools." },
  { name: "best paper", line: "international conference", kind: "research / recognition", description: "i presented a paper titled “promoting indigenous products through digital marketing: a case for sustainable entrepreneurship” at fieis 2025 at kiss university, bhubaneshwar." },
  { name: "student editor", line: "college magazine", kind: "editorial / experience", description: "i worked as a student editor for my college magazine, contributing to content creation, editing, and overall management of the publication." },
];

function Work({ onNext }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const selected = projects[activeIndex];

  return (
    <div className="work-inner bowl-work">
      <div className="bowl-heading">
        <span className="desk-eyebrow">the work / pick a slip</span>
        <h2 className="work-title">some things i’ve <em>put out there.</em></h2>
      </div>
      <div className="bowl-layout">
        <div className="bowl-stage" role="group" aria-label="Pick a project slip from the bowl">
          <div className="bowl-shadow" aria-hidden="true" />
          <div className="bowl-back" aria-hidden="true" />
          <div className="bowl-slips">
            {projects.map((project, index) => (
              <button
                key={project.name}
                type="button"
                className={`bowl-chit ${activeIndex === index ? "active" : ""}`}
                aria-pressed={activeIndex === index}
                aria-label={`Read ${project.name}`}
                onClick={() => setActiveIndex(index)}
              >
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{project.name}</strong>
              </button>
            ))}
          </div>
          <div className="bowl-front" aria-hidden="true" />
          <div className="bowl-rim" aria-hidden="true" />
          <span className="bowl-caption">go on, pick one ↗</span>
        </div>

        <article key={activeIndex} className="bowl-note" aria-live="polite">
          <div className="bowl-note-head"><span>from the bowl</span><span>{String(activeIndex + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}</span></div>
          <div className="bowl-note-main">
            <span className="bowl-note-kind">{selected.kind}</span>
            <h3>{selected.name}</h3>
            <p className="bowl-note-line">{selected.line}</p>
            <p className="bowl-note-description">{selected.description}</p>
            {selected.href && <a className="bowl-note-link" href={selected.href} target="_blank" rel="noreferrer">{selected.link} <span aria-hidden="true">↗</span></a>}
          </div>
          <span className="bowl-note-sign" aria-hidden="true">yd.</span>
        </article>
      </div>
      <button className="scroll-down bowl-next" onClick={onNext} aria-label="Go to skills"><SectionArrow /></button>
    </div>
  );
}

export default Work;
