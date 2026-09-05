import { BENEFITS } from '../data/site.js';

export default function Benefits() {
  return (
    <section className="section benefits" aria-labelledby="s-benef">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">El ritual</p>
          <h2 id="s-benef">Qué aporta el ritual</h2>
          <p className="section-lead">
            El contraste entre calor intenso y agua fría ayuda a salir del estado de tensión
            y recuperar el equilibrio físico y mental.
          </p>
        </header>

        <ul className="benefit-grid">
          {BENEFITS.map((text, i) => (
            <li className="benefit" key={text}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <h4>{text}</h4>
            </li>
          ))}
        </ul>

        <p className="disclaimer">Información general de bienestar. No sustituye consejo médico.</p>
      </div>
    </section>
  );
}
