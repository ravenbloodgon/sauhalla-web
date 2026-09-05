export default function Marquee() {
  return (
    <section className="marquee" aria-hidden="true">
      <div className="marquee-track">
        {Array.from({ length: 4 }, (_, i) => (
          <h2 key={i}>· S A U H A L L A ·&nbsp;</h2>
        ))}
      </div>
    </section>
  );
}
