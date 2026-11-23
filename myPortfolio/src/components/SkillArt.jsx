function SkillArt({ name }) {
  const drawings = {
    canva: <><path d="M42 102c-12-24 7-56 37-67 42-16 107-3 130 30 17 24-3 48-24 45-12-2-16-12-29-11-13 0-12 19-24 22-18 6-18-14-38-9-18 4-36 4-52-10Z" /><circle cx="72" cy="72" r="8" /><circle cx="101" cy="51" r="7" /><circle cx="138" cy="48" r="7" /><circle cx="170" cy="68" r="8" /><path d="m162 121 44-69 10 7-46 67-17 9 9-14Zm9-8 10 7" /></>,
    "power bi": <><rect x="42" y="27" width="176" height="105" rx="5" /><path d="M55 112h150M65 97V74h23v23m12 0V59h23v38m12 0V45h23v52m12 0V70h23v27M72 53l30-12 33 9 42-23" /><path d="m169 27 8 0-1 8M112 132v11m-37 0h111" /></>,
    "programming languages": <><path d="M39 35h182v91H39zM55 48h151v65H55zM78 62l-18 18 18 17m103-35 18 18-18 17m-53-38-15 45M95 132h70m-96 10h122" /><path d="M86 61h8m-8 42h8m73 0h8" /></>,
    "content writing": <><path d="M56 24h113l26 27v90H56zM169 24v28h26M72 65h93M72 80h80M72 95h70M72 110h91" /><path d="m182 112 39-50 9 8-39 50-20 9 11-17Zm4-7 10 7" /></>,
    "video editing": <><rect x="40" y="44" width="180" height="89" rx="3" /><path d="M40 67h180M40 111h180M63 44l17 23m24-23 17 23m24-23 17 23m24-23 17 23M63 111l17 22m24-22 17 22m24-22 17 22m24-22 17 22" /><path d="m111 79 39 16-39 13z" /></>,
    acting: <><path d="M51 38q36-17 68-2v48q-5 30-32 43-34-10-36-43zM141 36q34-17 69 2v46q-3 32-35 43-31-12-34-43z" /><path d="M68 62q10-8 20 0m16 0q-10-8-20 0M72 91q17 14 33 0m50-29q10-7 20 0m17 0q-10-7-20 0m-15 42q18-18 37 0" /></>,
    travelling: <><rect x="71" y="44" width="117" height="92" rx="10" /><path d="M102 44V28q0-9 12-9h30q12 0 12 9v16M93 44v92m73-92v92M77 98h106M54 71q-27 18-11 43m-4-10 4 10 9-5" /><circle cx="93" cy="139" r="5" /><circle cx="166" cy="139" r="5" /></>,
    minecraft: <><path d="m130 19 72 34v70l-72 34-72-34V53zM58 53l72 35 72-35M130 88v69M76 61l72-34m-15 82 42-22M92 92l20 9" /><path d="m51 108-21 11 21 12m162-62 19-9-19-12" /></>,
    poker: <><rect x="38" y="38" width="90" height="112" rx="5" transform="rotate(-13 83 94)" /><rect x="119" y="30" width="90" height="112" rx="5" transform="rotate(11 164 86)" /><path d="M72 56 61 74l12 18 12-18-13-18Zm96 17 13 14-13 14-13-14z" /><circle cx="125" cy="116" r="29" /><circle cx="125" cy="116" r="20" /><path d="M125 87v10m0 39v9m-29-29h10m39 0h9" /></>,
    coffee: <><path d="M63 59h120v57q0 24-31 24h-58q-31 0-31-24zM183 68h18q19 0 17 19-2 19-35 20M45 145h160M95 45q-15-17 1-32m28 32q-15-17 1-32m28 32q-15-17 1-32" /><path d="M81 93q43 11 83 0" /></>,
    "jack of all, master of none": <><path d="M58 143q1-32 37-42l17-5 21 8 20-8 19 8q29 11 31 39M99 102q7 24 30 26 23-1 30-26M109 100l-2-20m45 20 2-20" /><path d="M104 62q-2-26 25-31 27 5 25 31-2 29-25 36-23-7-25-36ZM105 56q25-17 49-1m-39 14h8m15 0h8m-28 16q12 9 24 0" /><path d="M70 106 55 65 44 41q-3-9 6-11 8-1 13 13l15 30m-31-35-3-20q0-10 8-10 7 0 7 9l4 23m-2 20 12 14m91 34 20 21m-98-5-24 18" /><path d="m211 34 5 10 11 4-11 4-5 10-5-10-11-4 11-4zm-35-20 3 6 7 3-7 3-3 6-3-6-7-3 7-3z" /></>,
  };

  return (
    <svg className="deck-art" viewBox="0 0 260 165" fill="none" stroke="currentColor" strokeWidth="3.1" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {drawings[name]}
    </svg>
  );
}

export default SkillArt;
