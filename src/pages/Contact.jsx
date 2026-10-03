import usePageTitle from '@/hooks/usePageTitle';
import { BANNERS, CONTACT, CONTACT_PAGE, SOCIALS } from '@/data/content';
import PageBanner from '@/components/ui/PageBanner';
import SectionTitle from '@/components/ui/SectionTitle';
import Icon, { BrandIcon } from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';
import ContactForm from '@/components/ui/ContactForm';
import FeatureGrid from '@/components/sections/FeatureGrid';

export default function ContactPage() {
  usePageTitle('Contact');
  const info = [
    { icon: 'MapPin', label: 'Address', value: CONTACT.address },
    { icon: 'Mail', label: 'Email', value: CONTACT.email, href: CONTACT.emailHref },
    { icon: 'Phone', label: 'Phone', value: CONTACT.mobile, href: CONTACT.mobileHref },
    { icon: 'Phone', label: 'Office', value: CONTACT.office, href: CONTACT.officeHref },
  ];
  return (
    <>
      <PageBanner kicker={CONTACT_PAGE.kicker} title={CONTACT_PAGE.title} text={CONTACT_PAGE.text} image={BANNERS.contact} crumb="Contact" />
      <section className="section" id="get-in-touch">
        <div className="container contact">
          <Reveal className="contact__info" from="left">
            <SectionTitle kicker="Reach Out" title="Get In Touch" align="left" />
            <ul className="contact__list">
              {info.map((c) => (
                <li key={c.label}>
                  <span className="contact__icon">
                    <Icon name={c.icon} size={24} />
                  </span>
                  <span>
                    <small>{c.label}</small>
                    {c.href ? <a href={c.href}>{c.value}</a> : <strong>{c.value}</strong>}
                  </span>
                </li>
              ))}
            </ul>
            <div className="contact__social">
              <span>Follow on social media</span>
              <ul className="social social--dark">
                {SOCIALS.map((s) => (
                  <li key={s.key}>
                    <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label} title={s.label}>
                      <BrandIcon name={s.key} size={15} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal className="contact__form" from="right">
            <h3 className="contact__form-title">Send a Message</h3>
            <p className="contact__form-text">Fields marked * are required.</p>
            <ContactForm />
          </Reveal>
        </div>
      </section>
      <FeatureGrid
        id="collaborate"
        light
        kicker={CONTACT_PAGE.together.kicker}
        title={CONTACT_PAGE.together.title}
        text={CONTACT_PAGE.together.text}
        items={CONTACT_PAGE.together.items}
      />
    </>
  );
}
