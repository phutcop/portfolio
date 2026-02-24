import { useState } from "react";

function Contact() {
  const [sent, setSent] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    fetch(form.action, {
      method: "POST",
      body: new FormData(form),
    })
      .then(() => {
        form.reset();
        setSent(true);

        // auto-hide after 3 seconds
        setTimeout(() => setSent(false), 3000);
      })
      .catch(() => {
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact-wrapper">

        {/* FLOATING SUCCESS TOAST */}
        {sent && (
          <div className="contact-toast">
            message sent ✓
          </div>
        )}

        {/* HOME ARROW */}
        <button
          className="scroll-down up"
          onClick={() => scrollTo("home")}
          aria-label="Back to home"
        >
          ↑
        </button>

        {/* FORM */}
        <div className="contact-form">
          <h2 className="contact-title">contact</h2>

          <form
            action="https://formsubmit.co/yad08102005@gmail.com"
            method="POST"
            className="form"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_ajax" value="true" />

            <input type="text" name="name" placeholder="your name" required />
            <input type="email" name="email" placeholder="your email" required />
            <textarea name="message" placeholder="your message" rows="5" required />

            <button type="submit" className="submit-btn">
              send message
            </button>
          </form>
        </div>

        {/* SOCIALS */}
        <div className="contact-socials">
          <h3 className="socials-title">connect here :)</h3>

          <ul className="socials-list">
            {/* MOBILE RESUME */}
            <li className="mobile-only">
              <a
                href="https://drive.google.com/file/d/1wks35N4mGvlYNQwVWIavtJbyZH9aYruW/view"
                target="_blank"
                rel="noreferrer"
                className="resume-mobile"
              >
                resume
              </a>
            </li>

            <li><a href="https://instagram.com/yashplusraj" target="_blank" className="social instagram">instagram</a></li>
            <li><a href="https://www.snapchat.com/" target="_blank" className="social snapchat">snapchat</a></li>
            <li><a href="https://open.spotify.com/user/d6cswqxdbscg6zkpul2qh3d6t" target="_blank" className="social spotify">spotify</a></li>
            <li><a href="https://reddit.com/user/yad08102005" target="_blank" className="social reddit">reddit</a></li>
            <li><a href="https://www.linkedin.com/in/yashraj-dave-97620a290/" target="_blank" className="social linkedin">linkedin</a></li>
            <li><a href="https://twitter.com/yad_0810" target="_blank" className="social x">x</a></li>
            <li><a href="https://github.com/phutcop" target="_blank" className="social github">github</a></li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default Contact;
