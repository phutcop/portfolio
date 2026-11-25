import Shera from "../components/Shera";

function Home({ onNext }) {
  return (
    <div className="home-inner studio-home">
      <div className="studio-home-grid">
        <div className="studio-home-copy">
          <span className="home-salutation">hello, i’m</span>
          <h1 className="home-title">
            <span className="name-line name-first">yashraj</span>
            <span className="name-line name-second">dave.</span>
          </h1>
          <p className="home-text">i’m a final-year computer engineering student working across design, code, data and words. here’s what i’ve made along the way.</p>
          <button type="button" className="home-enter" onClick={onNext}>
            about me <span aria-hidden="true">→</span>
          </button>
        </div>
        <div className="studio-home-art">
          <Shera />
        </div>
      </div>
    </div>
  );
}

export default Home;
