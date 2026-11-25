import { WarliWall } from "./WarliArt";

function About() {
  return (
    <>
      <WarliWall variant="about" />
      <div className="about-inner in-about">
        <div className="in-about-heading">
          <h2 className="in-about-title">a little <em>about me.</em></h2>
        </div>
        <div className="in-about-panel">
          <p>i’m a 4th year computer engineering student from institute of advanced research, gandhinagar, gujarat, currently exploring and learning as much as i can, with interests in web designing, data and visualisations.</p>
          <p>i want to pursue business management for my master’s, with the aim of merging the principles of technology and management to build my source of income :)</p>
          <p>also i enjoy movies and music, can spend hours on work i’m interested in, and whether i start early or at the last moment, i make sure to meet deadlines every time.</p>
        </div>
      </div>
    </>
  );
}

export default About;
