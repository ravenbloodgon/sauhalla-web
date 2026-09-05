const ITEMS = ['media-g1', 'media-g2', 'media-g3', 'media-g4'];

export default function Gallery() {
  return (
    <section className="section gallery" aria-labelledby="s-gal">
      <div className="wrap">
        <header className="section-head center">
          <h2 id="s-gal">El espacio, por dentro</h2>
        </header>
        <div className="gallery-grid">
          {ITEMS.map((cls, i) => (
            <div key={cls} className={`media ${cls}`} role="img" aria-label={`Galería ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}
