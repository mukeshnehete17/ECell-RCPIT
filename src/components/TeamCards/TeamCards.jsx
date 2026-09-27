import { useEffect, useRef } from 'react';
import { LEADERSHIP_TEAM } from './teamData';
import './TeamCards.css';

const WhatsAppIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 0 0 1.67-1.67c0-.92-.75-1.67-1.67-1.67a1.67 1.67 0 0 0-1.67 1.67c0 .92.75 1.67 1.67 1.67m1.39 9.97v-8.37H5.07v8.37h2.78z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

function MemberCard({ member, delayMs, floatDelay }) {
  return (
    <div
      className="ecell-team-card-wrap"
      style={{
        '--card-delay': `${delayMs}ms`,
        '--card-float-delay': `${floatDelay}s`,
      }}
    >
      {/* Geometric Shadow Plate Layer */}
      <div className="ecell-team-card-plate" />

      {/* Main Front Geometric Card Surface */}
      <div className="ecell-team-card">
        
        {/* Subtle Light Sheen Sweep Overlay on Hover */}
        <div className="ecell-team-card-sheen" />

        {/* Member Photo Frame */}
        <div className="ecell-team-photo-wrap">
          <img
            src={member.image}
            alt={`${member.name} — ${member.role}`}
            loading="lazy"
            className="ecell-team-photo"
            onError={(e) => {
              if (e.currentTarget.src !== window.location.origin + '/assets/hero/hero-bg.jpg') {
                e.currentTarget.src = '/assets/hero/hero-bg.jpg';
              }
            }}
          />
          <div className="ecell-team-photo-highlight" />
        </div>

        {/* Member Information */}
        <div className="ecell-team-info">
          <h3 className="ecell-team-name">{member.name}</h3>
          <p className="ecell-team-role">{member.role}</p>
        </div>

        {/* Social Icons */}
        <div className="ecell-team-socials">
          {member.whatsapp && member.whatsapp !== '#' ? (
            <a
              href={member.whatsapp}
              className="ecell-team-social-btn"
              aria-label={`Message ${member.name} on WhatsApp`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <WhatsAppIcon />
            </a>
          ) : (
            <span className="ecell-team-social-btn is-disabled" aria-hidden="true">
              <WhatsAppIcon />
            </span>
          )}

          {member.linkedin && member.linkedin !== '#' ? (
            <a
              href={member.linkedin}
              className="ecell-team-social-btn"
              aria-label={`${member.name}'s LinkedIn Profile`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
          ) : (
            <span className="ecell-team-social-btn is-disabled" aria-hidden="true">
              <LinkedInIcon />
            </span>
          )}

          {member.email && member.email !== '#' ? (
            <a
              href={member.email}
              className="ecell-team-social-btn"
              aria-label={`Email ${member.name}`}
            >
              <MailIcon />
            </a>
          ) : (
            <span className="ecell-team-social-btn is-disabled" aria-hidden="true">
              <MailIcon />
            </span>
          )}
        </div>

      </div>
    </div>
  );
}

export default function TeamCards() {
  const containerRef = useRef(null);

  const row1 = LEADERSHIP_TEAM.slice(0, 2); // 2 cards: President, Vice President
  const row2 = LEADERSHIP_TEAM.slice(2, 5); // 3 cards: Tech Head, Mgmt Head, Design Head
  const row3 = LEADERSHIP_TEAM.slice(5, 7); // 2 cards: Mktg Head, Content Head

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="ecell-team-section" id="team">
      
      {/* Centered Editorial Heading */}
      <div className="ecell-team-header">
        <h2 className="ecell-team-title">Ecell Team</h2>
      </div>

      <div className="ecell-team-cards-container" ref={containerRef}>
        
        {/* ROW 1: 2 Centered Cards */}
        <div className="ecell-team-row ecell-team-row-2">
          {row1.map((member, idx) => (
            <MemberCard
              key={member.id}
              member={member}
              delayMs={idx * 80}
              floatDelay={(idx * 0.6).toFixed(1)}
            />
          ))}
        </div>

        {/* ROW 2: 3 Centered Cards */}
        <div className="ecell-team-row ecell-team-row-3">
          {row2.map((member, idx) => (
            <MemberCard
              key={member.id}
              member={member}
              delayMs={(idx + 2) * 80}
              floatDelay={((idx + 2) * 0.6).toFixed(1)}
            />
          ))}
        </div>

        {/* ROW 3: 2 Centered Cards */}
        <div className="ecell-team-row ecell-team-row-2">
          {row3.map((member, idx) => (
            <MemberCard
              key={member.id}
              member={member}
              delayMs={(idx + 5) * 80}
              floatDelay={((idx + 5) * 0.6).toFixed(1)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
