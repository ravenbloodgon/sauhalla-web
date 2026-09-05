import { LINKS } from '../data/site.js';

export default function CtaFinal() {
  return (
    <section className="section cta-final" aria-labelledby="s-cta">
      <div className="wrap center">
        <h2 id="s-cta">Reserva tu hora</h2>
        <p className="lead">Hasta 4 personas. Sauna al aire libre y baño frío.</p>
        <a className="btn btn-primary btn-lg" href={LINKS.bookMijas} target="_blank" rel="noopener noreferrer">
          ¡RESERVA YA!
        </a>
      </div>
    </section>
  );
}
