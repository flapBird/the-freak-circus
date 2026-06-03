import type { Metadata } from 'next';
import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'The Freak Circus Walkthrough - Day 1 & Day 2 Guide, All Endings',
  description:
    'Complete walkthrough for The Freak Circus visual novel with Day 1 and Day 2 choices, character routes, good endings, bad endings, and hidden scenes.',
  canonical: `${SITE_URL}/walkthrough`,
});

export default function WalkthroughPage() {
  return (
    <SidebarLayout leftAdId="walk-left" rightAdId="walk-right">
      <div className="mb-8">
        <p className="text-circus-gold/70 font-display text-xs tracking-[0.4em] uppercase mb-2">
          Guides & Spoilers
        </p>
        <h1 className="font-display text-circus-white text-3xl mb-3">
          The Freak Circus Walkthrough
        </h1>
        <p className="text-circus-muted font-body italic">
          Step-by-step guides for every route, ending, and hidden scene.
        </p>
      </div>

      <div className="border border-circus-red/30 bg-circus-red/5 p-4 mb-8 text-sm text-circus-text">
        <p className="font-display text-circus-crimson text-xs tracking-widest uppercase mb-1">
          Spoiler Warning
        </p>
        <p className="text-circus-muted text-xs">
          This page contains major spoilers for all routes and endings. Play through at least Day
          1 before consulting this guide.
        </p>
      </div>

      <div className="prose-circus space-y-8">
        <section>
          <h2>Day 1 - Route Overview</h2>
          <p>
            Day 1 establishes your affinity with each of the five characters through a series of
            carnival encounters. Your choices in the first 20 minutes determine which routes become
            available in Day 2.
          </p>
          <p>
            Key branching points in Day 1 include the entrance interaction with the Ticket Taker,
            the tent choice, and the evening meal conversation.
          </p>
        </section>

        <section>
          <h2>Pierrot Route Guide</h2>
          <p>
            Select introspective and empathetic options throughout Day 1. In the tent scene, follow
            the white cloak. During Day 2, choose understanding over resistance to unlock Pierrot's
            Good Ending.
          </p>
          <p>
            See the full Pierrot route article in our{' '}
            <Link href="/blog/pierrot-route-guide">blog</Link>.
          </p>
        </section>

        <section>
          <h2>Harlequin Route Guide</h2>
          <p>
            Interact with the red balloon during the Day 1 carnival opening. Use bold, playful
            responses in the main tent. Harlequin's route escalates quickly in Day 2, so embrace
            the chaos rather than resist it.
          </p>
        </section>

        <section>
          <h2>Endings Summary</h2>
          <div className="border border-circus-border overflow-x-auto">
            <table className="w-full text-sm text-circus-text">
              <thead>
                <tr className="border-b border-circus-border bg-circus-card/60">
                  <th className="text-left p-3 font-display text-circus-gold/80 text-xs tracking-wider uppercase">
                    Character
                  </th>
                  <th className="text-left p-3 font-display text-circus-gold/80 text-xs tracking-wider uppercase">
                    Good Ending
                  </th>
                  <th className="text-left p-3 font-display text-circus-gold/80 text-xs tracking-wider uppercase">
                    Bad Endings
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-circus-border">
                {[
                  { char: 'Pierrot', good: 'Mirror Reflection', bad: 'Broken Stage, Escape' },
                  { char: 'Harlequin', good: 'Curtain Call', bad: 'Empty Stage' },
                  { char: 'Jester', good: 'Unmasked', bad: 'The Punchline' },
                  { char: 'Ticket Taker', good: 'Open Gate', bad: 'Closed Forever' },
                  { char: 'Doctor', good: 'Clean Hands', bad: 'Under the Knife, Numb' },
                ].map((row) => (
                  <tr key={row.char} className="hover:bg-circus-card/20 transition-colors">
                    <td className="p-3 font-body italic text-circus-gold/80">{row.char}</td>
                    <td className="p-3 text-xs text-circus-text/70">{row.good}</td>
                    <td className="p-3 text-xs text-circus-muted">{row.bad}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </SidebarLayout>
  );
}
