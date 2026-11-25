import { useState } from "react";
import stampImg from "../assets/tiger.webp";
import CatFlipbook from "../components/CatFlipbook";
import { WarliWall } from "../components/WarliArt";

const socials = [
  ["instagram", "https://instagram.com/yashplusraj"],
  ["snapchat", "https://snapchat.com/t/B7tRfph4"],
  ["spotify", "https://open.spotify.com/user/d6cswqxdbscg6zkpul2qh3d6t"],
  ["reddit", "https://reddit.com/user/yad08102005"],
  ["linkedin", "https://www.linkedin.com/in/yashraj-dave-97620a290/"],
  ["x", "https://twitter.com/yad_0810"],
  ["github", "https://github.com/phutcop"],
];

function Contact() {
  const [status, setStatus] = useState("idle");

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    setStatus("sending");
    try {
      const response = await fetch(form.action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Message failed");
      const result = await response.json();
      if (result.success === false || result.success === "false") throw new Error("Message failed");
      form.reset();
      setStatus("sent");
    } catch (error) {
      setStatus(error.name === "AbortError" ? "timeout" : "error");
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <>
      <WarliWall variant="contact" />
      <div className="contact-inner postcard-section">
        <div className="postcard-shell">
          <div className="postcard-top-bar" aria-hidden="true">
            <span>post card</span>
          </div>
        <div className="postcard-body">
          <div className="postcard-message">
            <h2>let’s <br /><em>talk.</em></h2>
            <p>have a thought, a question, or something worth making together? send it my way.</p>
          </div>
          <div className="postcard-write">
            <div className="postcard-stamp-wrap" aria-hidden="true">
              <div className="postcard-stamp-box">
                <span className="postcard-stamp-country">india</span>
                <img src={stampImg} alt="" className="postcard-stamp" />
                <span className="postcard-pin">₹5</span>
              </div>
            </div>
            <form action="https://formsubmit.co/ajax/yad08102005@gmail.com" method="POST" onSubmit={handleSubmit} className="postcard-form">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_ajax" value="true" />
              <label>your name<input type="text" name="name" autoComplete="name" required /></label>
              <label>your email<input type="email" name="email" autoComplete="email" required /></label>
              <label>your message<textarea name="message" rows="3" required /></label>
              <div className="postcard-actions">
                <button type="submit" disabled={status === "sending"}>{status === "sending" ? "sending…" : "send message"}</button>
                {(status === "sent" || status === "error" || status === "timeout") && (
                  <span className={`contact-feedback contact-feedback-${status}`} role={status === "sent" ? "status" : "alert"}>
                    <span aria-hidden="true">{status === "sent" ? "✓" : "!"}</span>
                    {status === "sent" ? "sent — thank you!" : "couldn’t confirm — check before resending."}
                  </span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="contact-cat-path" aria-hidden="true">
        <CatFlipbook />
        <span className="contact-cat-note">let’s cross paths</span>
      </div>
      <div className="postcard-socials">
        <span>elsewhere</span>
        <nav aria-label="Social links">
          {socials.map(([name, href]) => <a key={name} className={`social ${name}`} href={href} target="_blank" rel="noreferrer">{name}</a>)}
          <a className="mobile-resume-link" href="https://drive.google.com/file/d/1gRLPKQPx4x3yNLCU3HcbIMQC1Z1ROXcA/view?usp=drive_link" target="_blank" rel="noreferrer">resume</a>
        </nav>
        </div>
      </div>
    </>
  );
}

export default Contact;
