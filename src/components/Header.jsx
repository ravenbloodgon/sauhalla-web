import { useEffect, useState } from 'react';
import { NAV_ITEMS, LINKS } from '../data/site.js';

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <header className="site-header" id="top">
      <div className="wrap nav-inner">
        <a className="brand" href="#top" aria-label="Sauhalla — inicio">S A U H A L L A</a>

        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="navMenu"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>

        <nav className={`nav${open ? ' open' : ''}`} id="navMenu" aria-label="Principal">
          <ul className="nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn-primary nav-cta"
            href={LINKS.bookMijas}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            ¡RESERVA YA!
          </a>
        </nav>
      </div>
    </header>
  );
}
