/* Section heading in the reference site's style: small green kicker above a bold heading + accent bar. */
export default function SectionTitle({ kicker, title, text, align = 'center', light = false, as: H = 'h2' }) {
  return (
    <div className={`section-title section-title--${align}${light ? ' section-title--light' : ''}`}>
      {kicker && <span className="section-title__kicker">{kicker}</span>}
      <H className="section-title__heading">{title}</H>
      <span className="section-title__bar" aria-hidden="true" />
      {text && <p className="section-title__text">{text}</p>}
    </div>
  );
}
