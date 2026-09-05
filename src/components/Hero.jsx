import { LINKS } from '../data/site.js';

export default function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="media media-hero" role="img" aria-label="Sauna nórdica al atardecer" />
      <div className="hero-overlay" />
      <div className="wrap hero-content">
        <p className="eyebrow">Nordic Experiences · Costa del Sol</p>
        <h1 id="hero-title">Tu sesión de sauna privada, al aire libre</h1>
        <p className="lead">Calor de leña, aire libre y baño frío. El ritual escandinavo, tal y como se vive en el norte.</p>
        <a className="btn btn-primary btn-lg" href={LINKS.bookMijas} target="_blank" rel="noopener noreferrer">
          ¡RESERVA YA!
        </a>
      </div>
    </section>
  );
}
