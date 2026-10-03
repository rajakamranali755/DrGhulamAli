import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { NAV, CONTACT, SOCIALS } from '@/data/content';
import Logo from '@/components/ui/Logo';
import Icon, { BrandIcon } from '@/components/ui/Icon';

function DesktopItem({ item }) {
  return (
    <li className={`nav__item${item.children ? ' nav__item--has-children' : ''}`}>
      <NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => `nav__link${isActive ? ' is-active' : ''}`}>
        {item.label}
        {item.children && <Icon name="ChevronDown" size={14} strokeWidth={2.5} className="nav__caret" />}
      </NavLink>
      {item.children && (
        <ul className="nav__dropdown">
          {item.children.map((c) => (
            <li key={c.to}>
              <Link to={c.to}>{c.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function MobileItem({ item, onNavigate }) {
  const [open, setOpen] = useState(false);
  return (
    <li className={`mnav__item${open ? ' is-open' : ''}`}>
      <div className="mnav__row">
        <NavLink to={item.to} end={item.to === '/'} className={({ isActive }) => `mnav__link${isActive ? ' is-active' : ''}`} onClick={onNavigate}>
          {item.label}
        </NavLink>
        {item.children && (
          <button type="button" className="mnav__toggle" aria-expanded={open} aria-label={`Show ${item.label} sub-menu`} onClick={() => setOpen((v) => !v)}>
            <Icon name="ChevronDown" size={18} />
          </button>
        )}
      </div>
      {item.children && open && (
        <ul className="mnav__sub">
          {item.children.map((c) => (
            <li key={c.to}>
              <Link to={c.to} onClick={onNavigate}>
                {c.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header className={`header${scrolled ? ' is-scrolled' : ''}`}>
      <div className="container header__inner">
        <Logo />
        <nav className="nav" aria-label="Main">
          <ul className="nav__list">
            {NAV.map((item) => (
              <DesktopItem key={item.to} item={item} />
            ))}
          </ul>
        </nav>
        <Link to="/contact" className="btn btn--primary header__cta">
          <span>Get In Touch</span>
        </Link>
        <button type="button" className="header__burger" aria-label="Open menu" aria-expanded={open} onClick={() => setOpen(true)}>
          <Icon name="Menu" size={26} />
        </button>
      </div>

      <div className={`drawer${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer__backdrop" onClick={() => setOpen(false)} />
        <aside className="drawer__panel" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="drawer__head">
            <Logo onClick={() => setOpen(false)} />
            <button type="button" className="drawer__close" aria-label="Close menu" onClick={() => setOpen(false)}>
              <Icon name="X" size={24} />
            </button>
          </div>
          <ul className="mnav">
            {NAV.map((item) => (
              <MobileItem key={item.to} item={item} onNavigate={() => setOpen(false)} />
            ))}
          </ul>
          <Link to="/contact" className="btn btn--primary drawer__cta" onClick={() => setOpen(false)}>
            <span>Get In Touch</span>
            <Icon name="ArrowRight" size={16} strokeWidth={2.5} />
          </Link>
          <div className="drawer__contact">
            <a href={CONTACT.emailHref}>
              <Icon name="Mail" size={16} /> {CONTACT.email}
            </a>
            <a href={CONTACT.mobileHref}>
              <Icon name="Phone" size={16} /> {CONTACT.mobile}
            </a>
          </div>
          <ul className="social social--dark">
            {SOCIALS.map((s) => (
              <li key={s.key}>
                <a href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}>
                  <BrandIcon name={s.key} size={15} />
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </header>
  );
}
