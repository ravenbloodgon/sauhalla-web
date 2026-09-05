import { PLANS } from '../data/site.js';

export default function Pricing() {
  return (
    <section className="section pricing" id="precios" aria-labelledby="s-precios">
      <div className="wrap">
        <header className="section-head">
          <h2 id="s-precios">Precios</h2>
          <h6 className="section-sub">
            Tarifas de apertura. Cada sesión admite grupos de hasta 4 personas.
          </h6>
        </header>

        <div className="price-grid">
          {PLANS.map((plan) => (
            <article key={plan.id} className={`price-card${plan.featured ? ' featured' : ''}`}>
              {plan.badge && <span className="badge">{plan.badge}</span>}
              <h3>{plan.title}</h3>
              <p className="price">{plan.price}</p>
              <p className="price-note">{plan.note}</p>
              <a
                className={`btn ${plan.featured ? 'btn-primary' : 'btn-outline'}`}
                href={plan.cta.href}
                {...(plan.cta.href.startsWith('mailto:')
                  ? {}
                  : { target: '_blank', rel: 'noopener noreferrer' })}
              >
                {plan.cta.label}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
