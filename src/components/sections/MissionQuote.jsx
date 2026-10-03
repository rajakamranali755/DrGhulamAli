import { MISSION } from '@/data/content';
import Icon from '@/components/ui/Icon';
import Reveal from '@/components/ui/Reveal';

export default function MissionQuote({ id = 'mission' }) {
  return (
    <section className="quote" id={id}>
      <div className="container">
        <Reveal className="quote__inner">
          <span className="quote__icon">
            <Icon name="Quote" size={40} />
          </span>
          <blockquote>
            <p>{MISSION.quote}</p>
            <cite>{MISSION.author}</cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
