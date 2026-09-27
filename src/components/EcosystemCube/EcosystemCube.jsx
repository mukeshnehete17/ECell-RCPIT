import { useState } from 'react';
import { Lightbulb, Users, UserCheck, Calendar, Handshake, Rocket } from 'lucide-react';
import './EcosystemCube.css';

const ECOSYSTEM_DOMAINS = [
  {
    num: '01',
    id: 'ideas',
    title: 'IDEAS',
    desc: 'Where curiosity becomes a direction worth exploring.',
    icon: Lightbulb,
    style: { top: '30px', left: '40px', width: '275px' },
  },
  {
    num: '02',
    id: 'students',
    title: 'STUDENTS',
    desc: 'Students turn learning into action through entrepreneurship.',
    icon: Users,
    style: { top: '25px', right: '40px', width: '280px' },
  },
  {
    num: '03',
    id: 'mentors',
    title: 'MENTORS',
    desc: 'Guidance, experience and perspective that accelerate ideas.',
    icon: UserCheck,
    style: { top: '220px', left: '20px', width: '270px' },
  },
  {
    num: '04',
    id: 'events',
    title: 'EVENTS',
    desc: 'Workshops, challenges and experiences that bring ideas to life.',
    icon: Calendar,
    style: { top: '215px', right: '25px', width: '275px' },
  },
  {
    num: '05',
    id: 'partners',
    title: 'PARTNERS',
    desc: 'Connections that create opportunities, collaboration and reach.',
    icon: Handshake,
    style: { top: '410px', left: '80px', width: '285px' },
  },
  {
    num: '06',
    id: 'startups',
    title: 'STARTUPS',
    desc: 'From early ideas to ventures ready for the real world.',
    icon: Rocket,
    style: { top: '415px', right: '80px', width: '290px' },
  },
];

/* Sequential flow connectors: 01 → 02 → 03 → 04 → 05 → 06.
   Thin orthogonal paths routed around (never through) the center block. */
const ECO_FLOW = [
  {
    id: 'flow-1',
    from: 'ideas',
    to: 'students',
    pathD: 'M 279 84 H 717',
    delay: '0s',
  },
  {
    id: 'flow-2',
    from: 'students',
    to: 'mentors',
    pathD: 'M 800 140 V 170 H 240 V 204',
    delay: '0.8s',
  },
  {
    id: 'flow-3',
    from: 'mentors',
    to: 'events',
    pathD: 'M 256 232 H 744',
    delay: '1.6s',
  },
  {
    id: 'flow-4',
    from: 'events',
    to: 'partners',
    pathD: 'M 820 323 V 358 H 200 V 394',
    delay: '2.4s',
  },
  {
    id: 'flow-5',
    from: 'partners',
    to: 'startups',
    pathD: 'M 322 455 H 674',
    delay: '3.2s',
  },
];

export default function EcosystemCube() {
  const [activeDomain, setActiveDomain] = useState(null);

  return (
    <section id="initiatives" className="ecosystem-section">
      <div className="ecosystem-grid-bg" aria-hidden="true" />
      <div className="ecosystem-ambient-glow" aria-hidden="true" />

      {/* Section Header */}
      <div className="ecosystem-header">
        <h2 className="ecosystem-title">
          Turn Ideas Into <span className="text-[#16A34A]">Impact</span>
        </h2>
        <p className="ecosystem-subtitle">
          Explore how E-Cell RCPIT connects students, ideas, mentors, events and entrepreneurial opportunities.
        </p>
      </div>

      {/* Editorial Architectural Ecosystem Canvas */}
      <div className="ecosystem-canvas">
        {/* SVG Network Connections & Pulse Dots */}
        <svg
          className="ecosystem-svg"
          viewBox="0 0 1000 560"
          fill="none"
          preserveAspectRatio="xMidYMid meet"
        >
          {ECO_FLOW.map((flow) => {
            const isActive = activeDomain === flow.from || activeDomain === flow.to;
            return (
              <g key={`path-${flow.id}`}>
                <path
                  d={flow.pathD}
                  className={`ecosystem-path ${isActive ? 'active' : ''}`}
                />
                <circle r="3" fill="#16a34a" className="ecosystem-pulse-dot">
                  <animateMotion
                    path={flow.pathD}
                    dur="3.4s"
                    begin={flow.delay}
                    repeatCount="indefinite"
                    keyPoints="0;1"
                    keyTimes="0;1"
                    calcMode="linear"
                  />
                </circle>
              </g>
            );
          })}
        </svg>

        {/* Center Identity Block */}
        <div className="ecosystem-core-block">
          <span className="ecosystem-core-title">E-CELL RCPIT</span>
          <span className="ecosystem-core-tag">Entrepreneurship Cell</span>
        </div>

        {/* 6 Editorial Ecosystem Domains */}
        {ECOSYSTEM_DOMAINS.map((domain) => {
          const Icon = domain.icon;
          const isActive = activeDomain === domain.id;

          return (
            <div
              key={domain.id}
              style={domain.style}
              className={`ecosystem-card ${isActive ? 'active' : ''}`}
              onMouseEnter={() => setActiveDomain(domain.id)}
              onMouseLeave={() => setActiveDomain(null)}
            >
              <div className="ecosystem-card-header">
                <div className="ecosystem-card-meta">
                  <span className="ecosystem-card-num">{domain.num}</span>
                  <span className="ecosystem-card-label">{domain.title}</span>
                </div>
                <Icon className="w-3.5 h-3.5 ecosystem-card-icon" />
              </div>
              <div className="ecosystem-card-rule" />
              <p className="ecosystem-card-desc">{domain.desc}</p>
            </div>
          );
        })}
      </div>

      {/* Mobile Flow (≤ 860px) */}
      <div className="ecosystem-mobile-flow">
        {/* 01 IDEAS */}
        <div className="ecosystem-mobile-card">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-[#0f172a]">01 — IDEAS</span>
            <Lightbulb className="w-3.5 h-3.5 text-[#16a34a]" />
          </div>
          <p className="text-[11px] text-[#475569] leading-relaxed">
            Where curiosity becomes a direction worth exploring.
          </p>
        </div>

        <div className="ecosystem-mobile-line" />

        {/* Center Identity Marker */}
        <div className="ecosystem-mobile-identity">
          <span className="text-xs font-bold tracking-wider text-[#0f172a] block">
            E-CELL RCPIT
          </span>
          <span className="text-[9px] text-[#16A34A] font-semibold tracking-widest uppercase">
            Entrepreneurship Cell
          </span>
        </div>

        <div className="ecosystem-mobile-line" />

        {/* Remaining Domains */}
        {[
          { num: '02', title: 'STUDENTS', desc: 'Students turn learning into action through entrepreneurship.', icon: Users },
          { num: '03', title: 'MENTORS', desc: 'Guidance, experience and perspective that accelerate ideas.', icon: UserCheck },
          { num: '04', title: 'EVENTS', desc: 'Workshops, challenges and experiences that bring ideas to life.', icon: Calendar },
          { num: '05', title: 'PARTNERS', desc: 'Connections that create opportunities, collaboration and reach.', icon: Handshake },
          { num: '06', title: 'STARTUPS', desc: 'From early ideas to ventures ready for the real world.', icon: Rocket },
        ].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div key={item.num} className="w-full flex flex-col items-center">
              <div className="ecosystem-mobile-card">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-[#0f172a]">{item.num} — {item.title}</span>
                  <Icon className="w-3.5 h-3.5 text-[#16a34a]" />
                </div>
                <p className="text-[11px] text-[#475569] leading-relaxed">{item.desc}</p>
              </div>
              {idx < 4 && <div className="ecosystem-mobile-line my-1" />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
