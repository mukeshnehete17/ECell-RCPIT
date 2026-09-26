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
    const handleScroll = () => {
      const next = window.scrollY > 20;
      // Bail out when unchanged — avoids a re-render on every scroll tick
      setScrolled((prev) => (prev === next ? prev : next));
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavLinks = (links) => (
    <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
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
            {isActive && <span className="ecell-nav-active-dot" />}
          </a>
        );
      })}
    </nav>
  );

  return (
    <header className={`ecell-liquid-navbar ${scrolled ? 'is-scrolled' : 'is-normal'}`}>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-[68px] flex items-center justify-between">
        
        {/* Left Links (Desktop) */}
        {renderNavLinks(NAV_LEFT)}

        {/* Center Branding */}
        <a
          href="#home"
          onClick={() => setActiveSection('home')}
          className="flex items-center gap-3 group select-none transition-opacity duration-150 hover:opacity-90"
        >
          <img
            src="/assets/logo/ecell-logo.png"
            alt="E-Cell RCPIT logo"
            className="w-9 sm:w-10 h-auto object-contain shrink-0"
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
            <span className="text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] text-white/65 uppercase">
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
          className="lg:hidden w-10 h-10 flex items-center justify-center text-white/90 hover:text-[#16A34A] focus:outline-none transition-colors"
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
                      ? 'text-white bg-white/[0.08]'
                      : 'text-white/75 hover:text-[#16A34A] hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{item.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A]" />}
                </a>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
