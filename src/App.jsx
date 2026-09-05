import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import SplitSection from './components/SplitSection.jsx';
import Pricing from './components/Pricing.jsx';
import Benefits from './components/Benefits.jsx';
import Sales from './components/Sales.jsx';
import Gallery from './components/Gallery.jsx';
import Marquee from './components/Marquee.jsx';
import CtaFinal from './components/CtaFinal.jsx';
import Footer from './components/Footer.jsx';
import { LINKS } from './data/site.js';

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">Saltar al contenido</a>
      <Header />

      <main id="main">
        <Hero />

        <SplitSection
          id="location"
          eyebrow="Ubicación 01"
          title="Calor de sauna y agua fría, bajo el cielo"
          mediaClass="media-1"
          mediaAlt="Sauna exterior en Mijas"
          facts={[
            <><strong>Hasta 4 personas</strong> por sesión</>,
            'Sauna exterior + baño frío',
            'Reserva privada, sin compartir',
          ]}
          cta={{ label: 'Reserva ahora', href: LINKS.bookMijas }}
        >
          <p>
            Primera localización disponible en{' '}
            <a href={LINKS.mapMijas} target="_blank" rel="noopener noreferrer">
              Cerrado del Águila Golf, Mijas
            </a>.
          </p>
        </SplitSection>

        <SplitSection
          reverse
          eyebrow="Ubicación 02"
          title="Nueva ubicación en Córdoba"
          mediaClass="media-2"
          mediaAlt="Sauna junto al pantano en Córdoba"
          cta={{ label: 'Reserva ahora', href: LINKS.bookCordoba }}
        >
          <p>
            Espacio de bienestar en el restaurante{' '}
            <a href={LINKS.mapCordoba} target="_blank" rel="noopener noreferrer">El Zalamea</a>,
            junto al pantano de Sierra Boyera.
          </p>
        </SplitSection>

        <Pricing />

        <SplitSection
          id="experiencia"
          mediaFirst
          eyebrow="Filosofía"
          title="Cómo se vive la sauna en el norte"
          mediaClass="media-3"
          mediaAlt="Interior de sauna de leña"
        >
          <p>Aquí la sauna se asocia al spa de interior. En Escandinavia se vive fuera, rodeada de naturaleza, y siempre acompañada de frío.</p>
          <p>Traemos ese formato original a la Costa del Sol: madera, leña, aire libre y agua fría.</p>
        </SplitSection>

        <Benefits />

        <SplitSection
          id="leasing"
          reverse
          className="leasing"
          eyebrow="B2B"
          title="Llena tu temporada baja"
          mediaClass="media-4"
          mediaAlt="Sauna instalada en un establecimiento"
          cta={{ label: 'Solicitar información', href: `mailto:${LINKS.email}?subject=Leasing%20empresas` }}
          secondaryCta={{ label: 'Ver saunas en venta', href: '#venta', internal: true }}
        >
          <p>Instalamos saunas nórdicas premium al aire libre en tu establecimiento, sin obra ni inversión inicial. Planes de leasing con rentabilidad desde el primer mes.</p>
        </SplitSection>

        <Sales />

        <Gallery />
        <Marquee />
        <CtaFinal />
      </main>

      <Footer />
    </>
  );
}
