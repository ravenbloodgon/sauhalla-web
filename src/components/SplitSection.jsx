import { useId } from 'react';

const linkTarget = ({ href, internal }) =>
  internal || href.startsWith('#') || href.startsWith('mailto:')
    ? {}
    : { target: '_blank', rel: 'noopener noreferrer' };

export default function SplitSection({
  id,
  eyebrow,
  title,
  children,
  facts,
  cta,
  secondaryCta,
  mediaClass = '',
  mediaAlt = '',
  reverse = false,
  mediaFirst = false,
  className = '',
}) {
  const titleId = useId();
  const classes = ['section', 'split', reverse && 'split-reverse', className]
    .filter(Boolean)
    .join(' ');

  const text = (
    <div className="split-text" key="text">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <h2 id={titleId}>{title}</h2>
      {children}

      {facts && (
        <ul className="facts">
          {facts.map((fact, i) => <li key={i}>{fact}</li>)}
        </ul>
      )}

      {(cta || secondaryCta) && (
        <div className="btn-row">
          {cta && (
            <a className="btn btn-primary" href={cta.href} {...linkTarget(cta)}>
              {cta.label}
            </a>
          )}
          {secondaryCta && (
            <a className="btn btn-ghost" href={secondaryCta.href} {...linkTarget(secondaryCta)}>
              {secondaryCta.label}
            </a>
          )}
        </div>
      )}
    </div>
  );

  const media = (
    <div
      className={`split-media media ${mediaClass}`}
      role="img"
      aria-label={mediaAlt}
      key="media"
    />
  );

  return (
    <section className={classes} id={id} aria-labelledby={titleId}>
      <div className="wrap split-grid">
        {mediaFirst ? [media, text] : [text, media]}
      </div>
    </section>
  );
}
