# sauhalla-web

Sitio de SAUHALLA — sauna nórdica y baño frío en la Costa del Sol.
React 19 + Vite 7, sin framework de estilos (CSS propio).

## Requisitos

- Node >= 20 (probado en v24.18.0)
- Yarn 4 (`packageManager` fijado en `package.json`)

## Uso

```bash
yarn install     # instalar dependencias
yarn dev         # servidor de desarrollo -> http://localhost:5173
yarn build       # build de producción -> dist/
yarn preview     # servir el build
```

## Estructura

```
index.html               entrada de Vite
vite.config.js
src/
  main.jsx               montaje de React
  App.jsx                composición de secciones
  data/site.js           enlaces, planes de precios, ítems de nav y beneficios
  styles/styles.css      todos los estilos (variables CSS en :root)
  components/
    Header.jsx           nav sticky + menú móvil
    Hero.jsx
    SplitSection.jsx     sección reutilizable texto/media (ubicaciones, filosofía, leasing)
    Pricing.jsx          renderiza PLANS de data/site.js
    Benefits.jsx         renderiza BENEFITS
    Gallery.jsx
    Marquee.jsx
    CtaFinal.jsx
    Footer.jsx
```

## Notas

- Los bloques `.media` son placeholders con gradientes CSS. Para usar fotos reales:
  poner los archivos en `src/assets/` (o `public/`) e importarlos en cada componente.
- Enlaces externos (reservas cal.com, pagos Stripe, ventas, redes) centralizados en
  `src/data/site.js` — cambiar allí, no en los componentes.
- Paleta y tipografía en las variables `:root` de `src/styles/styles.css`.
- Fuentes vía Google Fonts, cargadas desde `index.html`.
