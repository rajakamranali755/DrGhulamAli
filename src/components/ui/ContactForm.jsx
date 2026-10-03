import { useRef, useState } from 'react';
import { submitContactForm } from '@/config/contactForm';
import Icon from './Icon';

/* Same fields as the original Elementor form. Delivery is configured in .env (see README). */
const FIELDS = [
  { type: 'text', name: 'your_name', label: 'Your Name', placeholder: 'Enter your full name', half: true, required: true },
  { type: 'email', name: 'your_email', label: 'Your Email', placeholder: 'Enter your academic email address', half: true, required: true },
  { type: 'text', name: 'subject', label: 'Subject', placeholder: 'How can we help you?', required: true },
  { type: 'text', name: 'organization_institution', label: 'Organization / Institution', placeholder: 'Your University, Department or Center' },
  { type: 'textarea', name: 'your_message', label: 'Your Message', placeholder: 'Type your message details here...', required: true },
];

export default function ContactForm() {
  const formRef = useRef(null);
  const [status, setStatus] = useState({ phase: 'idle', kind: null, message: '', fieldErrors: {} });
  const waiting = status.phase === 'waiting';

  const onSubmit = async (e) => {
    e.preventDefault();
    if (waiting) return;
    setStatus({ phase: 'waiting', kind: null, message: '', fieldErrors: {} });
    try {
      const message = await submitContactForm(formRef.current);
      formRef.current.reset();
      setStatus({ phase: 'done', kind: 'success', message, fieldErrors: {} });
    } catch (err) {
      setStatus({ phase: 'done', kind: 'error', message: err.message, fieldErrors: err.fieldErrors || {} });
    }
  };

  return (
    <form ref={formRef} className={`form${waiting ? ' is-waiting' : ''}`} onSubmit={onSubmit} noValidate={false}>
      <div className="form__grid">
        {FIELDS.map((f) => {
          const id = `form-field-${f.name}`;
          const name = `form_fields[${f.name}]`;
          const err = status.fieldErrors[f.name];
          return (
            <div key={f.name} className={`form__group${f.half ? ' form__group--half' : ''}${err ? ' has-error' : ''}`}>
              <label htmlFor={id}>
                {f.label}
                {f.required && <span className="form__req"> *</span>}
              </label>
              {f.type === 'textarea' ? (
                <textarea id={id} name={name} rows={6} placeholder={f.placeholder} required={f.required} />
              ) : (
                <input id={id} name={name} type={f.type} placeholder={f.placeholder} required={f.required} />
              )}
              {err && <span className="form__error">{err}</span>}
            </div>
          );
        })}
        <div className="form__group form__check">
          <input id="form-field-agree" type="checkbox" name="form_fields[i_agree_to_the_privacy_policy_and_terms]" required />
          <label htmlFor="form-field-agree">
            I agree to the privacy policy and terms.<span className="form__req"> *</span>
          </label>
        </div>
      </div>
      <button className="btn btn--primary form__submit" type="submit" disabled={waiting}>
        <span>{waiting ? 'Sending…' : 'Send Message'}</span>
        <Icon name="Send" size={16} strokeWidth={2.5} />
      </button>
      {status.phase === 'done' && (
        <div className={`form__message form__message--${status.kind}`} role="alert">
          {status.message}
        </div>
      )}
    </form>
  );
}
