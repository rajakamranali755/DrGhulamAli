import { CONTACT, CTA } from '@/data/content';
import Button from '@/components/ui/Button';
import Icon from '@/components/ui/Icon';

/* Call-to-action band (the reference site's "Your Journey Begins Here – APPLY NOW"). */
export default function CtaBand({ data = CTA }) {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <div className="cta__text">
          <span className="cta__kicker">{data.kicker}</span>
          <h2>{data.title}</h2>
          <p>{data.text}</p>
        </div>
        <div className="cta__actions">
          <Button to={data.button.to} variant="white">
            {data.button.label}
          </Button>
          <a className="cta__phone" href={CONTACT.mobileHref}>
            <span className="cta__phone-icon">
              <Icon name="Phone" size={20} />
            </span>
            <span>
              <small>Call Now</small>
              <strong>{CONTACT.mobile}</strong>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
