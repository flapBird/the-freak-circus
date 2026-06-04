import type { Metadata } from 'next';
import SidebarLayout from '@/components/SidebarLayout';
import { buildMetadata, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'The Freak Circus Characters - Pierrot, Harlequin, Jester & More',
  description:
    'Meet The Freak Circus characters: Pierrot, Harlequin, Jester, the Ticket Taker, and the Doctor. Read route tips, traits, and lore notes.',
  canonical: `${SITE_URL}/characters`,
});

const CHARACTERS = [
  {
    id: 'pierrot',
    name: 'Pierrot',
    mark: 'P',
    role: 'The Weeping Clown',
    description:
      "Controlled, melancholic, and intensely perceptive. Pierrot is the emotional anchor of the circus, performing sorrow for crowds who laugh at his tears. His route is the most psychologically demanding and offers the most lore about the circus's true nature.",
    traits: ['Melancholic', 'Possessive', 'Poetic', 'Dangerous'],
    routeTip:
      'Choose introspective and empathetic dialogue in Day 1. Avoid defiance in Day 2 to unlock the Good Ending.',
  },
  {
    id: 'harlequin',
    name: 'Harlequin',
    mark: 'H',
    role: 'The Chaotic Performer',
    description:
      "Unpredictable and theatrical, Harlequin masks a turbulent past behind an ever-shifting performance. His relationship with Pierrot is one of the game's central dynamics.",
    traits: ['Volatile', 'Charming', 'Protective', 'Layered'],
    routeTip: 'Select the red balloon in Day 1. Use bold, playful responses during tent encounters.',
  },
  {
    id: 'jester',
    name: 'Jester',
    mark: 'J',
    role: 'The Trickster',
    description:
      'Jester exists between the other performers, neither fully loyal nor fully antagonistic. His route explores the ethics of entertainment and what it means to make others laugh.',
    traits: ['Ambiguous', 'Quick-witted', 'Lonely', 'Calculating'],
    routeTip: "Jester's route unlocks in Day 2. Respond with humor but avoid direct confrontation.",
  },
  {
    id: 'ticket-taker',
    name: 'Ticket Taker',
    mark: 'T',
    role: 'The Gatekeeper',
    description:
      'The first character you meet. The Ticket Taker controls who enters and who leaves, and has watched everything at this circus for far longer than the others realize.',
    traits: ['Observant', 'Cryptic', 'Stern', 'Ancient'],
    routeTip: 'Engage directly with every question the Ticket Taker asks. His route requires persistence.',
  },
  {
    id: 'doctor',
    name: 'Doctor',
    mark: 'D',
    role: 'The Surgeon of Secrets',
    description:
      "The Doctor's route is the most recently expanded and contains some of the game's darkest content. He is methodical, intimate, and deeply unsettling.",
    traits: ['Clinical', 'Intimate', 'Controlling', 'Complex'],
    routeTip: "The Doctor's content is largely contained to Day 2. Accept his examination scenes to progress his route.",
  },
];

export default function CharactersPage() {
  return (
    <SidebarLayout>
      <div className="mb-8 text-center">
        <p className="text-circus-gold/70 font-display text-xs tracking-[0.4em] uppercase mb-2">
          The Performers
        </p>
        <h1 className="font-display text-circus-white text-3xl mb-3">
          Characters of The Freak Circus
        </h1>
        <p className="text-circus-muted font-body italic">
          Five extraordinary performers. Five routes. One fate.
        </p>
      </div>

      <div className="space-y-8">
        {CHARACTERS.map((character) => (
          <article
            key={character.id}
            id={character.id}
            className="border border-circus-border bg-circus-card/40 p-6 rounded-sm hover:border-circus-gold/30 transition-colors"
          >
            <header className="flex items-start gap-4 mb-4">
              <span className="text-xl font-display text-circus-gold border border-circus-border w-12 h-12 flex items-center justify-center flex-shrink-0 animate-float">
                {character.mark}
              </span>
              <div>
                <h2 className="font-display text-circus-gold text-xl">{character.name}</h2>
                <p className="text-circus-muted font-body italic text-sm">{character.role}</p>
              </div>
            </header>

            <p className="text-circus-text text-sm leading-relaxed mb-4">
              {character.description}
            </p>

            <div className="flex flex-wrap gap-2 mb-4">
              {character.traits.map((trait) => (
                <span
                  key={trait}
                  className="px-2 py-0.5 text-[11px] border border-circus-border text-circus-muted font-display tracking-wider uppercase"
                >
                  {trait}
                </span>
              ))}
            </div>

            <div className="border-t border-circus-border pt-3 mt-3">
              <p className="text-xs text-circus-muted">
                <span className="text-circus-gold font-display tracking-wider text-[11px] uppercase mr-2">
                  Route Tip
                </span>
                {character.routeTip}
              </p>
            </div>
          </article>
        ))}
      </div>
    </SidebarLayout>
  );
}
