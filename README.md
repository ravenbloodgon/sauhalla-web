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

## Design tokens

Todo el diseño vive en `:root` dentro de `src/styles/styles.css`. Los valores replican
los del sitio de producción, extraídos de su HTML.

| Grupo | Tokens |
|---|---|
| Paleta | `--bg` `#0e0e0e`, `--bg-alt` `#1e1e1e`, `--surface` `#212121`, `--line` `#333` |
| Texto | `--text` `#fff`, `--muted` `#ccc`, `--muted-2` `rgba(255,255,255,.5)` |
| Acento | `--accent` `#be9169`, `--accent-hover`, `--accent-soft`, `--on-accent` |
| Tipografía | Inter (400/500). Escala fija `--fs-1`…`--fs-7` = 40/32/24/21/18/16/12px |
| Tracking | `--ls-tight` `-.03em` (títulos), `--ls-body` `-.02em` (cuerpo) |
| Forma | `--r-sm` 20px, `--r-md` 24px, `--r-lg` 40px (botones tipo pastilla) |
| Medida | `--maxw` 1200px, `--maxw-inner` 1120px, `--section-y` 120px |

Regla: ningún color literal fuera de `:root`. Si necesitas uno nuevo, añade un token.

Breakpoints: `1024px` (solo grids de 3–4 columnas) y `768px` (layout completo).
El original usa solo 768; el de 1024 se añadió porque las tarjetas de precios quedaban
ilegibles en tablet.

## Notas

- Los bloques `.media` son placeholders con gradientes CSS. Para usar fotos reales:
  poner los archivos en `src/assets/` (o `public/`) e importarlos en cada componente.
- Enlaces externos (reservas cal.com, pagos Stripe, ventas, redes) centralizados en
  `src/data/site.js` — cambiar allí, no en los componentes.
- Fuentes vía Google Fonts, cargadas desde `index.html`.
