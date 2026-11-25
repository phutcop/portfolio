import { useState } from "react";
import tigerPortrait from "../assets/retro/tiger-portrait.webp";
import tigerLandscape from "../assets/retro/tiger-landscape.webp";
import jackArt from "../assets/retro/jack.png";
import { WarliWall } from "./WarliArt";

const skills = [
  ["canva", "i make niche designs that fit the idea, instead of looking like another template."],
  ["power bi", "i turn a messy sheet into a report someone can actually use."],
  ["programming languages", "javascript and python help me build and test ideas; html and css give them a proper place to live."],
  ["content writing", "i find the point, then write it clearly enough that someone wants to keep reading."],
  ["video editing", "i know when to cut: the best part of a story deserves the screen time."],
  ["acting", "it has taught me that how you say something matters as much as what you say."],
  ["travelling", "new places make me notice details i would have missed at home."],
  ["minecraft", "it taught me lava can be behind any block. look before you dig."],
  ["poker", "it taught me to make decisions with incomplete information and keep a straight face."],
  ["coffee", "it prepares me for the fact that life can be bitter too."],
  ["jack of all, master of none", "curiosity keeps me moving between design, code, words, and whatever i want to figure out next."],
];

function Skills() {
  const [activeSkill, setActiveSkill] = useState(0);
  const [name, description] = skills[activeSkill];
  const ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J"];
  const next = () => setActiveSkill((activeSkill + 1) % skills.length);

  return (
    <>
      <WarliWall variant="skills" />
      <div className="skills-inner playing-skills">
      <div className="playing-heading">
        <span className="desk-eyebrow">the deck · {String(activeSkill + 1).padStart(2, "0")} / {String(skills.length).padStart(2, "0")}</span>
        <h2 className="skills-title">a few cards <em>up my sleeve.</em></h2>
      </div>
      <div className="playing-layout">
        <div className="deck-wrap">
          <div className="deck-card deck-card-back deck-card-back-two" aria-hidden="true" />
          <div className="deck-card deck-card-back deck-card-back-one" aria-hidden="true" />
          <button key={activeSkill} type="button" data-skill={name} className="deck-card deck-card-front retro-card" onClick={next} aria-label={`${name}: ${description}. Draw next card`}>
            <span className="in-index in-index-top" aria-hidden="true"><b>{ranks[activeSkill]}</b><i>♦</i></span>
            <strong className="in-card-title">{name}</strong>
            {activeSkill === skills.length - 1 ? <img className="retro-card-art jack-art" src={jackArt} alt="" /> : <picture className="retro-card-picture"><source media="(max-width: 768px)" srcSet={tigerPortrait} /><img className="retro-card-art" src={tigerLandscape} alt="" /></picture>}
            <span className="retro-card-caption">{description}</span>
            <span className="in-index in-index-bottom" aria-hidden="true"><b>{ranks[activeSkill]}</b><i>♦</i></span>
            <span className="in-card-prompt">tap to draw the next card</span>
          </button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Skills;
