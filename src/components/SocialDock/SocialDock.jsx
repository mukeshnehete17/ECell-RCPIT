const SOCIAL_LINKS = [
  {
    name: 'Instagram',
    handle: '@ecell_rcpit',
    href: 'https://www.instagram.com/ecell_rcpit/',
    icon: (
      <svg
        className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:scale-110"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    handle: 'ecellrcpit',
    href: 'https://www.linkedin.com/in/ecellrcpit/',
    icon: (
      <svg
        className="w-4 h-4 sm:w-4.5 sm:h-4.5 transition-transform duration-300 group-hover:scale-110"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 0 0 1.67-1.67c0-.92-.75-1.67-1.67-1.67a1.67 1.67 0 0 0-1.67 1.67c0 .92.75 1.67 1.67 1.67m1.39 9.97v-8.37H5.07v8.37h2.78z" />
      </svg>
    ),
  },
];

export default function SocialDock() {
  return (
    <aside
      aria-label="Social media links"
      className="fixed right-3 bottom-3.5 sm:bottom-auto sm:right-5 sm:top-1/2 sm:-translate-y-1/2 z-40 select-none"
    >
      <div className="relative flex flex-row sm:flex-col items-center gap-1 sm:gap-1.5 p-1 sm:p-2 rounded-full bg-[#0A0A0A]/85 backdrop-blur-xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.65)]">
        {/* Subtle glass light rod edge line */}
        <div className="hidden sm:block absolute inset-y-0 right-0 w-[1.5px] bg-gradient-to-b from-transparent via-[#16A34A]/40 to-transparent pointer-events-none rounded-r-full" />
        <div className="sm:hidden absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#16A34A]/40 to-transparent pointer-events-none rounded-b-full" />

        {SOCIAL_LINKS.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${social.name} (${social.handle})`}
            className="group relative flex items-center justify-center w-8 h-8 sm:w-9.5 sm:h-9.5 rounded-full text-white/70 hover:text-[#22C55E] hover:bg-white/[0.08] transition-all duration-300"
          >
            {social.icon}

            {/* Desktop Tooltip */}
            <div className="hidden sm:flex absolute right-full mr-2.5 sm:mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md bg-[#0A0A0A]/95 backdrop-blur-md border border-white/10 text-white whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-200 shadow-xl translate-x-1 group-hover:translate-x-0 items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] shadow-[0_0_6px_#16A34A]" />
              <div className="flex flex-col text-left">
                <span className="text-[11px] font-semibold tracking-wide leading-tight">{social.name}</span>
                <span className="text-[9.5px] text-[#4ADE80] font-medium tracking-wider">{social.handle}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </aside>
  );
}
