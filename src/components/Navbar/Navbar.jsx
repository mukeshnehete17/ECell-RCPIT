import { useState, useEffect } from 'react';
import './Navbar.css';

const NAV_LEFT = [
  { label: 'HOME', href: '#home' },
  { label: 'ABOUT', href: '#about' },
  { label: 'INITIATIVES', href: '#initiatives' },
];

const NAV_RIGHT = [
  { label: 'EVENTS', href: '#events' },
  { label: 'GALLERY', href: '#gallery' },
  { label: 'ARCHIVE', href: '#archive' },
  { label: 'CONTACT', href: '#contact' },
];

const ALL_NAV = [...NAV_LEFT, ...NAV_RIGHT];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const next = window.scrollY > 60;
          setScrolled((prev) => (prev === next ? prev : next));
          ticking = false;
        });
        ticking = true;
      }
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavLinks = (links) => (
    <nav className="hidden lg:flex items-center gap-5 xl:gap-6 2xl:gap-7">
      {links.map((item) => {
        const isActive = activeSection === item.href.replace('#', '');
        return (
          <a
            key={item.label}
            href={item.href}
            onClick={() => setActiveSection(item.href.replace('#', ''))}
            className={`ecell-nav-link ${isActive ? 'is-active' : ''}`}
          >
            <span>{item.label}</span>
          </a>
        );
      })}
    </nav>
  );

  return (
    <header className={`ecell-liquid-navbar ${scrolled ? 'is-scrolled' : 'is-normal'}`}>
      <div className="ecell-navbar-inner flex items-center justify-between">
        
        {/* Left Links (Desktop) */}
        {renderNavLinks(NAV_LEFT)}

        {/* Center Branding */}
        <a
          href="#home"
          onClick={() => setActiveSection('home')}
          className="flex items-center gap-2.5 sm:gap-3 group select-none transition-opacity duration-150 hover:opacity-90 shrink-0"
        >
          <img
            src="/assets/logo/ecell-logo.png"
            alt="E-Cell RCPIT logo"
            className="w-8 sm:w-9 md:w-10 h-auto object-contain shrink-0 transition-all duration-300"
            width="256"
            height="256"
            fetchpriority="high"
            decoding="async"
            draggable="false"
          />
          <div className="flex flex-col text-left">
            <span className="font-bold text-xs sm:text-[13px] tracking-wide text-white leading-tight">
              Entrepreneurship Cell
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] text-white/70 uppercase">
              RCPIT
            </span>
          </div>
        </a>

        {/* Right Links (Desktop) */}
        {renderNavLinks(NAV_RIGHT)}

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white/90 hover:text-white focus:outline-none transition-colors"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown (Liquid Glass) */}
      {isOpen && (
        <div className="lg:hidden ecell-mobile-glass-menu px-4 py-3">
          <nav className="flex flex-col space-y-1">
            {ALL_NAV.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => {
                    setActiveSection(item.href.replace('#', ''));
                    setIsOpen(false);
                  }}
                  className={`py-2.5 px-3 text-xs font-semibold tracking-wider uppercase rounded-md transition-colors flex items-center justify-between ${
                    isActive
                      ? 'text-white bg-white/[0.12] font-bold'
                      : 'text-white/75 hover:text-white hover:bg-white/[0.06]'
                  }`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
