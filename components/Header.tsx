import Link from 'next/link';

const NAV_LINKS = [
  { href: '/', label: 'Play Online' },
  { href: '/characters', label: 'Characters' },
  { href: '/walkthrough', label: 'Walkthrough' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-circus-black/95 backdrop-blur-sm border-b border-circus-border">
      <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-circus-gold to-transparent opacity-60" />

      <div className="max-w-[1400px] mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-display text-circus-gold text-lg tracking-wider group-hover:text-circus-gold-light transition-colors animate-flicker">
            The Freak Circus
          </span>
          <span className="text-[10px] text-circus-muted tracking-[0.4em] uppercase">
            thefreakcircus.help
          </span>
        </Link>

        <nav aria-label="Main navigation">
          <ul className="flex flex-wrap gap-1 items-center justify-end">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="px-3 py-1.5 text-sm text-circus-text hover:text-circus-gold
                             border border-transparent hover:border-circus-border
                             transition-all duration-200 rounded-sm font-sans"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
