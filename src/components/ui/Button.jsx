import { Link } from 'react-router-dom';
import Icon from './Icon';

/* Button / link styled like the reference site's "APPLY NOW" / "Read More" buttons. */
export default function Button({ to, href, variant = 'primary', arrow = true, children, className = '', ...rest }) {
  const cls = `btn btn--${variant} ${className}`;
  const inner = (
    <>
      <span>{children}</span>
      {arrow && <Icon name="ArrowRight" size={16} strokeWidth={2.5} />}
    </>
  );
  if (href) {
    return (
      <a className={cls} href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {inner}
      </a>
    );
  }
  return (
    <Link className={cls} to={to} {...rest}>
      {inner}
    </Link>
  );
}
