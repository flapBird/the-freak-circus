import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-circus-border mt-16 py-10 text-circus-muted text-sm">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="divider-ornament mb-8">
          <span className="font-display text-xs tracking-widest text-circus-gold/60">TFC</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-display text-circus-gold/80 text-xs tracking-widest uppercase mb-3">
              About This Site
            </h3>
            <p className="text-xs leading-relaxed opacity-70">
              thefreakcircus.help is an unofficial fan site for The Freak Circus visual novel.
              We are not affiliated with Garula or Neko Bueno. All game content belongs to its
              original creators.
            </p>
          </div>

          <div>
            <h3 className="font-display text-circus-gold/80 text-xs tracking-widest uppercase mb-3">
              Quick Links
            </h3>
            <ul className="space-y-1.5 text-xs opacity-70">
              {[
                { href: '/', label: 'Play The Freak Circus Online' },
                { href: '/characters', label: 'Character Guide' },
                { href: '/walkthrough', label: 'Walkthrough & Endings' },
                { href: '/blog', label: 'Articles & Guides' },
                {
                  href: 'https://garula.itch.io/the-freak-circus',
                  label: 'Official itch.io Page',
                  ext: true,
                },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-circus-gold transition-colors"
                    {...(link.ext
                      ? { target: '_blank', rel: 'noopener noreferrer nofollow' }
                      : {})}
                  >
                    {link.label}
                    {link.ext && ' (external)'}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-circus-gold/80 text-xs tracking-widest uppercase mb-3">
              Disclaimer
            </h3>
            <p className="text-xs leading-relaxed opacity-70">
              This site contains content from a game rated 18+. The embedded game is served
              directly from the official CDN. We do not host, redistribute, or modify any game
              files.
            </p>
          </div>
        </div>

        <p className="text-center text-[11px] opacity-40 tracking-wider">
          © {new Date().getFullYear()} thefreakcircus.help - Fan Site - All trademarks belong to
          their respective owners
        </p>
      </div>
    </footer>
  );
}
