import { useRef, useState } from "react";
import ChitNote from "./ChitNote";
import { JarBack, JarFront } from "./Jar";
import { WarliWall } from "./WarliArt";
import { CHIT_SPOTS } from "./chitSpots";

const projects = [
  { name: "building nosta", line: "a social time capsule", kind: "product / in progress", description: "i’m building nosta, a social time capsule for sharing a memory now and choosing when it returns. the public landing page and waitlist are live; the social platform is still in prototype.", href: "https://adminsnosta.github.io/waitlist/", link: "visit nosta" },
  { name: "finshyt", line: "expense analysis prototype", kind: "product / prototype", description: "i’m prototyping an expense analysis tool that imports an annual ledger, compares monthly and category spending, and answers questions from recorded transactions. it currently runs as a local demo; sign-in and data storage are not production-ready.", href: "https://phutcop.github.io/finshyt/", link: "view prototype" },
  { name: "perficient one", line: "brand & website", kind: "client work / live", description: "a responsive website for a construction and project management firm, with project stories, an enquiry form, and a matching brand toolkit.", href: "https://perficientone.com/", link: "view website" },
  { name: "i spy", line: "precision in the unnoticed", kind: "experiment / live", description: "a react-based project exploring invisible unicode fingerprinting to trace information leaks.", href: "https://phutcop.github.io/i-spy/", link: "view project" },
  { name: "aibf 2024", line: "media volunteer", kind: "writing / event", description: "i volunteered at the ahmedabad international book festival (2024 edition) as a media volunteer, where i took notes and wrote press notes, articles, and related content throughout the 10-day event." },
  { name: "data analyst internship", line: "cnet technologies", kind: "data / experience", description: "i completed an internship at cnet technologies, ahmedabad, as a data analyst, where i analyzed leads across different features and created reports using bi tools." },
  { name: "best paper", line: "international conference", kind: "research / recognition", description: "i presented a paper titled “promoting indigenous products through digital marketing: a case for sustainable entrepreneurship” at fieis 2025 at kiss university, bhubaneshwar." },
  { name: "student editor", line: "college magazine", kind: "editorial / experience", description: "i worked as a student editor for my college magazine, contributing to content creation, editing, and overall management of the publication." },
];

function Work() {
  const [open, setOpen] = useState(null);
  const [instant, setInstant] = useState(false);
  const chitRefs = useRef([]);

  const pick = (index) => {
    const rect = chitRefs.current[index]?.getBoundingClientRect();
    setOpen({ index, rect: rect ? { left: rect.left, top: rect.top, width: rect.width, height: rect.height } : null });
  };

  const close = () => {
    const i = open?.index;
    setOpen(null);
    if (i != null) window.requestAnimationFrame(() => chitRefs.current[i]?.focus());
  };

  return (
    <>
      <WarliWall variant="works" />
      <div className="work-inner in-work">
      <div className="in-work-heading">
        <span className="desk-eyebrow">few of many upcoming</span>
        <h2 className="work-title">pick a chit. <em>unfold a story.</em></h2>
      </div>

      <div className="jar-stage" role="group" aria-label="A glass jar of numbered chits, one per project">
        <JarBack />
        <div className="jar-chits">
          {projects.map((project, index) => {
            const [x, y, r] = CHIT_SPOTS[index];
            return (
              <button
                key={project.name}
                ref={(el) => (chitRefs.current[index] = el)}
                type="button"
                className={`jar-chit chit-tone-${index % 3} ${open?.index === index ? "taken" : ""}`}
                style={{ left: `${((x - 32) / 320) * 100}%`, top: `${((y - 25) / 400) * 100}%`, "--r": `${r}deg`, "--chit-order": index }}
                aria-label={`Open chit ${index + 1}: ${project.name}`}
                onClick={() => pick(index)}
              >
                <span className="chit-num">{index + 1}</span>
              </button>
            );
          })}
        </div>
        <JarFront />
      </div>
      <p className="jar-caption">dip into the jar and pick one</p>
      <button
        type="button"
        className={`jar-skip ${instant ? "is-on" : ""}`}
        aria-pressed={instant}
        onClick={() => setInstant((v) => !v)}
      >
        {instant ? "keep animation" : "skip animation"}
      </button>

      {open && (
        <ChitNote
          project={projects[open.index]}
          index={open.index}
          total={projects.length}
          fromRect={open.rect}
          instant={instant}
          onClose={close}
        />
      )}
    </div>
    </>
  );
}

export default Work;
