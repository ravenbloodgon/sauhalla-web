import { SAUNAS, SAUNA_INCLUDES, TUBS, LINKS } from '../data/site.js';

export default function Sales() {
  return (
    <section className="section sales" id="venta" aria-labelledby="s-venta">
      <div className="wrap">
        <header className="section-head">
          <p className="eyebrow">Venta</p>
          <h2 id="s-venta">Tu propia sauna nórdica</h2>
          <p className="section-lead">
            Modelos para jardín o terraza, con instalación incluida. Entrega en 8–12 semanas.
          </p>
        </header>

        <div className="sales-grid">
          {SAUNAS.map((s) => (
            <article key={s.id} className={`sales-card${s.featured ? ' featured' : ''}`}>
              <div className="media media-sauna" role="img" aria-label={`Sauna ${s.name}`} />
              <div className="sales-body">
                <h3>{s.name}</h3>
                <p className="price">
                  {s.price}
                  {s.oldPrice && <span className="price-old">{s.oldPrice}</span>}
                </p>
                <dl className="specs">
                  <div><dt>Capacidad</dt><dd>{s.capacity}</dd></div>
                  <div><dt>Superficie</dt><dd>{s.area}</dd></div>
                </dl>
                <a
                  className={`btn ${s.featured ? 'btn-primary' : 'btn-outline'}`}
                  href={`mailto:${LINKS.email}?subject=Presupuesto%20${encodeURIComponent(s.name)}`}
                >
                  Pedir presupuesto
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="disclaimer">
          Precios sin transporte (aprox. 750€). Consúltanos según destino.
        </p>

        <div className="sales-detail">
          <div className="sales-includes">
            <h3>Qué incluye</h3>
            <ul className="facts">
              {SAUNA_INCLUDES.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>

          <div className="sales-tubs">
            <h3>Tinas de agua fría</h3>
            <ul className="tub-list">
              {TUBS.map((t) => (
                <li key={t.id}>
                  <span className="tub-name">{t.name}</span>
                  <span className="tub-spec">{t.capacity} · {t.volume}</span>
                  <span className="tub-price">{t.price}</span>
                </li>
              ))}
            </ul>
            <div className="btn-row">
              <a className="btn btn-outline" href={`mailto:${LINKS.email}?subject=Tinas%20de%20agua%20fr%C3%ADa`}>
                Consultar
              </a>
              <a className="btn btn-ghost" href={LINKS.sales} target="_blank" rel="noopener noreferrer">
                Catálogo completo
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
