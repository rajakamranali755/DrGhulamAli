import { Link } from 'react-router-dom';
import { CONTACT, QUICK_LINKS, RESEARCH_FOCUS, SITE, SOCIALS } from '@/data/content';
import Logo from '@/components/ui/Logo';
import Icon, { BrandIcon } from '@/components/ui/Icon';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__col footer__col--brand">
          <Logo light />
          <p className="footer__about">{SITE.footerRole}</p>
          <ul className="social">
            {SOCIALS.map((s) => (
              <li key={s.key}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>
                  <BrandIcon name={s.key} size={15} />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Quick Links</h3>
          <ul className="footer__links">
            {QUICK_LINKS.map((l) => (
              <li key={l.to}>
                <Link to={l.to}>
                  <Icon name="ChevronRight" size={14} strokeWidth={2.5} /> {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Research Focus</h3>
          <ul className="footer__links">
            {RESEARCH_FOCUS.map((r) => (
              <li key={r}>
                <Link to="/research-and-publication">
                  <Icon name="ChevronRight" size={14} strokeWidth={2.5} /> {r}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h3 className="footer__title">Contact Information</h3>
          <ul className="footer__contact">
            <li>
              <Icon name="MapPin" size={18} />
              <span>{CONTACT.addressFull}</span>
            </li>
            <li>
              <Icon name="Mail" size={18} />
              <a href={CONTACT.emailHref}>{CONTACT.email}</a>
            </li>
            <li>
              <Icon name="Phone" size={18} />
              <a href={CONTACT.officeHref}>{CONTACT.office}</a>
            </li>
            <li>
              <Icon name="Phone" size={18} />
              <a href={CONTACT.mobileHref}>{CONTACT.mobile}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <p>
            Copyright © {new Date().getFullYear() < 2026 ? 2026 : new Date().getFullYear()} <Link to="/">{SITE.name}</Link> | All Rights
            Reserved.
          </p>
          <p>
            Developed by{' '}
            <a href="https://azdigitalworks.com/" target="_blank" rel="noopener noreferrer">
              AZ Digital Works
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
