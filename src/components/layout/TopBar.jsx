import { CONTACT, SOCIALS } from '@/data/content';
import Icon, { BrandIcon } from '@/components/ui/Icon';

export default function TopBar() {
  return (
    <div className="topbar">
      <div className="container topbar__inner">
        <ul className="topbar__info">
          <li>
            <Icon name="Mail" size={15} />
            <a href={CONTACT.emailHref}>{CONTACT.email}</a>
          </li>
          <li className="topbar__hide-sm">
            <Icon name="Phone" size={15} />
            <a href={CONTACT.mobileHref}>{CONTACT.mobile}</a>
          </li>
          <li className="topbar__hide-md">
            <Icon name="MapPin" size={15} />
            <span>{CONTACT.address}</span>
          </li>
        </ul>
        <ul className="topbar__social" aria-label="Social media">
          {SOCIALS.map((s) => (
            <li key={s.key}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>
                <BrandIcon name={s.key} size={13} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
