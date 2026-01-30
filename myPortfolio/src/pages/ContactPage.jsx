import tiger from "../assets/tiger.png";

function ContactPage() {
  return (
    <div className="home">
      <section style={{ padding: "6rem 0", textAlign: "center" }}>
        <h2>Contact</h2>
        <p>Let’s build something together.</p>
      </section>

      <img
        src={tiger}
        alt="Illustrated tiger"
        className="tiger"
      />
    </div>
  );
}

export default ContactPage;
