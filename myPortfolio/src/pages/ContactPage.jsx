function Contact() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact-wrapper">

        {/* HOME ARROW (GO BACK TO TOP) */}
        <button
          className="scroll-down up"
          onClick={() => scrollTo("home")}
          aria-label="Back to home"
        >
          ↑
        </button>

        {/* LEFT — CONTACT FORM */}
        <div className="contact-form">
          <h2 className="contact-title">contact</h2>

          <form
            action="https://formsubmit.co/yad08102005@gmail.com"
            method="POST"
            className="form"
          >
            {/* REQUIRED HIDDEN CONFIG */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />

            <input
              type="text"
              name="name"
              placeholder="your name"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="your email"
              required
            />

            <textarea
              name="message"
              placeholder="your message"
              rows="5"
              required
            />

            <button type="submit" className="submit-btn">
              send message
            </button>
          </form>
        </div>

        {/* RIGHT — SOCIAL LINKS */}
        <div className="contact-socials">
          <h3 className="socials-title">socialize :)</h3>

          <ul className="socials-list">
            <li>
              <a
                href="https://instagram.com/yashplusraj"
                target="_blank"
                rel="noreferrer"
                className="social instagram"
              >
                instagram
              </a>
            </li>

            <li>
              <a
                href="https://www.snapchat.com/"
                target="_blank"
                rel="noreferrer"
                className="social snapchat"
              >
                snapchat
              </a>
            </li>

            <li>
              <a
                href="https://open.spotify.com/user/6dcswqxdb"
                target="_blank"
                rel="noreferrer"
                className="social spotify"
              >
                spotify
              </a>
            </li>

            <li>
              <a
                href="https://reddit.com/user/yad08102005"
                target="_blank"
                rel="noreferrer"
                className="social reddit"
              >
                reddit
              </a>
            </li>

            <li>
              <a
                href="https://pinterest.com/"
                target="_blank"
                rel="noreferrer"
                className="social pinterest"
              >
                pinterest
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/yashraj-dave-97620a290/"
                target="_blank"
                rel="noreferrer"
                className="social linkedin"
              >
                linkedin
              </a>
            </li>

            <li>
              <a
                href="https://twitter.com/yad_0810"
                target="_blank"
                rel="noreferrer"
                className="social x"
              >
                x
              </a>
            </li>

            <li>
              <a
                href="https://github.com/YOUR_GITHUB_USERNAME"
                target="_blank"
                rel="noreferrer"
                className="social github"
              >
                github
              </a>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Contact;
