import { useEffect, useRef } from 'react';
import { Lightbulb, Users, TrendingUp, Handshake, Calendar } from 'lucide-react';
import './WhatWeDo.css';

const STATS = [
  {
    value: '500+',
    label: 'STUDENTS ENGAGED',
    icon: Users,
  },
  {
    value: '30+',
    label: 'EVENTS & WORKSHOPS',
    icon: Calendar,
  },
  {
    value: '20+',
    label: 'STARTUP INTERACTIONS',
    icon: TrendingUp,
  },
  {
    value: '15+',
    label: 'INDUSTRY & ALUMNI MENTORS',
    icon: Handshake,
  },
];

export default function WhatWeDo() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="initiatives" className="what-we-do-section" ref={sectionRef}>
      <div className="what-we-do-container">
        
        {/* Section Header */}
        <div className="what-we-do-header">
          <span className="what-we-do-eyebrow">WHAT WE DO</span>
          <div className="what-we-do-eyebrow-line" />
          <h2 className="what-we-do-title">Turn Ideas Into Impact</h2>
          <p className="what-we-do-desc">
            From sparking ideas to building ventures, E-Cell RCPIT creates opportunities,
            experiences and a community that helps students turn curiosity into real-world impact.
          </p>
        </div>

        {/* Main Editorial Asymmetric Composition */}
        <div className="what-we-do-composition">
          
          {/* Subtle SVG Orbital & Connection Pathways */}
          <svg
            className="what-orbital-svg"
            viewBox="0 0 1200 580"
            fill="none"
            aria-hidden="true"
          >
            {/* Top Left connector */}
            <path
              d="M 440 180 C 445 130, 440 90, 445 60"
              className="what-orbital-path"
            />
            {/* Top Right connector */}
            <path
              d="M 750 140 C 765 190, 770 230, 755 280"
              className="what-orbital-path"
            />
            {/* Center Orbital Arc */}
            <path
              d="M 470 290 C 460 370, 520 440, 600 440 C 680 440, 740 370, 730 290"
              className="what-orbital-path"
            />
            {/* Bottom Loop to Collaboration */}
            <path
              d="M 680 440 C 660 480, 680 520, 730 520 C 800 520, 830 460, 860 430"
              className="what-orbital-path"
            />
            {/* Bottom Left connector */}
            <path
              d="M 520 420 C 470 410, 450 370, 440 330"
              className="what-orbital-path"
            />

            {/* Subtle flow dots */}
            <circle cx="445" cy="60" r="3" fill="#94a3b8" />
            <circle cx="725" cy="225" r="3" fill="#94a3b8" />
            <circle cx="600" cy="440" r="3" fill="#94a3b8" />
            <circle cx="718" cy="350" r="3" fill="#94a3b8" />
            <circle cx="465" cy="390" r="3" fill="#94a3b8" />
          </svg>

          {/* 01 IDEAS Panel (Top Left) */}
          <div className="what-panel what-panel--ideas">
            <div className="what-panel-card">
              <img
                src="/assets/what-we-do/ideas.jpg"
                alt="Innovation, sketches and ideas"
                loading="lazy"
                className="what-panel-img"
              />
            </div>
            <div className="what-floating-badge what-floating-badge--ideas">
              <div className="what-badge-header">
                <span className="what-badge-num">01</span>
                <span className="what-badge-title">IDEAS</span>
              </div>
              <p className="what-badge-desc">
                Where curiosity becomes a direction worth exploring.
              </p>
            </div>
          </div>

          {/* 02 STARTUPS Panel (Top Right) */}
          <div className="what-panel what-panel--startups">
            <div className="what-panel-card">
              <img
                src="/assets/what-we-do/startups.jpg"
                alt="Startup launch and growth"
                loading="lazy"
                className="what-panel-img"
              />
            </div>
            <div className="what-floating-badge what-floating-badge--startups">
              <div className="what-badge-header">
                <span className="what-badge-num">02</span>
                <span className="what-badge-title">STARTUPS</span>
              </div>
              <p className="what-badge-desc">
                From early ideas to ventures ready for the real world.
              </p>
            </div>
          </div>

          {/* Central Circular Innovation Focal Visual */}
          <div className="what-center-visual">
            <div className="what-center-frame">
              <img
                src="/assets/what-we-do/center-innovation.jpg"
                alt="E-Cell RCPIT Innovation Focal Point"
                loading="lazy"
                className="what-center-img"
              />
            </div>

            {/* 4 Minimal Circular Node Badges surrounding Center */}
            <div className="what-node-circle what-node-circle--top-left" title="Ideas & Innovation">
              <Lightbulb className="what-node-icon" />
            </div>
            <div className="what-node-circle what-node-circle--top-right" title="Community & Students">
              <Users className="what-node-icon" />
            </div>
            <div className="what-node-circle what-node-circle--bottom-left" title="Venture Growth">
              <TrendingUp className="what-node-icon" />
            </div>
            <div className="what-node-circle what-node-circle--bottom-right" title="Partnerships & Mentorship">
              <Handshake className="what-node-icon" />
            </div>
          </div>

          {/* 03 MENTORSHIP Panel (Bottom Left) */}
          <div className="what-panel what-panel--mentorship">
            <div className="what-panel-card">
              <img
                src="/assets/what-we-do/mentorship.jpg"
                alt="Mentorship, knowledge and guiding compass"
                loading="lazy"
                className="what-panel-img"
              />
            </div>
            <div className="what-floating-badge what-floating-badge--mentorship">
              <div className="what-badge-header">
                <span className="what-badge-num">03</span>
                <span className="what-badge-title">MENTORSHIP</span>
              </div>
              <p className="what-badge-desc">
                Guidance, experience and perspective that accelerate ideas.
              </p>
            </div>
          </div>

          {/* 04 COLLABORATIONS Panel (Bottom Right) */}
          <div className="what-panel what-panel--collaboration">
            <div className="what-panel-card">
              <img
                src="/assets/what-we-do/collaboration.jpg"
                alt="Global collaboration and network"
                loading="lazy"
                className="what-panel-img"
              />
            </div>
            <div className="what-floating-badge what-floating-badge--collaboration">
              <div className="what-badge-header">
                <span className="what-badge-num">04</span>
                <span className="what-badge-title">COLLABORATIONS</span>
              </div>
              <p className="what-badge-desc">
                Connections that create opportunities, collaborations and real-world impact.
              </p>
            </div>
          </div>

        </div>

        {/* Minimal Editorial Stats Row */}
        <div className="what-stats-row">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className="what-stat-group">
                <div className="what-stat-card">
                  <div className="what-stat-icon-box">
                    <Icon className="what-stat-icon" />
                  </div>
                  <div className="what-stat-text-box">
                    <span className="what-stat-num">{stat.value}</span>
                    <span className="what-stat-title">{stat.label}</span>
                  </div>
                </div>
                {idx < STATS.length - 1 && <div className="what-stat-separator" />}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
