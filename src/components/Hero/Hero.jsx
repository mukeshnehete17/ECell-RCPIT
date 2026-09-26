import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const sectionRef = useRef(null);

  /* Subtle scroll-linked hero exit: feeds Gallery's existing scroll flow.
     Progress 0 → 1 across the first viewport; CSS consumes --hero-exit
     (photo −32px, content −18px, content −12% opacity). No new system. */
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let rafId = 0;

    const updateExit = () => {
      rafId = 0;
      const el = sectionRef.current;
      if (!el) return;
      const height = el.offsetHeight || 1;
      const progress = Math.min(Math.max(window.scrollY / height, 0), 1);
      el.style.setProperty('--hero-exit', progress.toFixed(3));
    };

    const scheduleUpdate = () => {
      if (!rafId) rafId = requestAnimationFrame(updateExit);
    };

    updateExit();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate, { passive: true });

    return () => {
      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section id="home" className="hero-section" ref={sectionRef}>
      {/* Real Team Photograph: Vibrant & Natural */}
      <div
        className="hero-bg-photo"
        style={{ backgroundImage: "url('/assets/hero/hero-bg.jpg')" }}
        role="img"
        aria-label="E-Cell RCPIT Team Photograph"
      />

      {/* Subtle Top Readability Vignette */}
      <div className="hero-text-vignette" aria-hidden="true" />

      {/* Top Spacer for Fixed Navbar */}
      <div className="w-full h-16 md:h-[68px] shrink-0" />

      {/* Hero Typography Content: Positioned cleanly above team members */}
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-main">Entrepreneurship Cell</span>
          <span className="hero-title-sub">RCPIT</span>
        </h1>

        <p className="hero-subtitle">
          Building an Enterprising India through Innovation, Entrepreneurship, and Education.
        </p>
      </div>

      {/* Short localized photo-to-white transition + restrained brand tick */}
      <div className="hero-bottom-fade" aria-hidden="true" />
      <div className="hero-bottom-accent" aria-hidden="true" />
    </section>
  );
}
