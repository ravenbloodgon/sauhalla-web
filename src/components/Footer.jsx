import { LINKS } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="site-footer" id="contacto">
      <div className="wrap footer-grid">
        <div className="footer-col">
          <p className="brand footer-brand">S A U H A L L A</p>
          <p className="muted">Nordic Experiences · Costa del Sol</p>
        </div>

        <div className="footer-col">
          <h3>Ubicación</h3>
          <address>
            <a href={LINKS.mapOffice} target="_blank" rel="noopener noreferrer">
              Avenida María Civiero, Nº 2<br />29649 Las Lagunas de Mijas, Málaga
            </a>
          </address>
        </div>

        <div className="footer-col">
          <h3>Contacto</h3>
          <ul className="link-list">
            <li><a href={`mailto:${LINKS.email}`}>{LINKS.email}</a></li>
            <li>
              <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer">
                www.instagram.com/sauhalla
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3>Enlaces</h3>
          <ul className="link-list">
            <li><a href="#leasing">Leasing empresas</a></li>
            <li><a href="#venta">Venta saunas</a></li>
            <li><a href="#location">Ubicación</a></li>
            <li><a href="#">Términos</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Cookies</a></li>
          </ul>
        </div>
      </div>

      <div className="wrap footer-bottom">
        <p className="muted">© {new Date().getFullYear()} Sauhalla. Todos los derechos reservados.</p>
        <a className="to-top" href="#top">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
