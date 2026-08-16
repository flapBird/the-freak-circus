export type GameStatus = 'playable' | 'external' | 'coming-soon';

export type GameFeature = {
  title: string;
  description: string;
};

export type GameRecord = {
  title: string;
  eyebrow: string;
  summary: string;
  about: string[];
  features?: GameFeature[];
  playNote: string;
  releaseDate: string;
  status: GameStatus;
  developer: string;
  officialUrl: string;
  genres: string[];
  // Add the image to public/images/games, then enter a path such as
  // '/images/games/slay-the-princess.webp'. Leave blank to use the fallback.
  coverImage: string;
  screenshots?: string[];
  embed?: {
    src: string;
    aspectRatio?: '16/9' | '4/3';
  };
  accent: 'coral' | 'violet' | 'gold' | 'rose';
  featured?: boolean;
  order: number;
  relatedSlugs?: string[];
};

export const GAME_EMBED_ORIGINS = [
  'https://g.thefreakcircus.my',
] as const;

// Game content is intentionally kept in English only. Every locale renders
// this same source of truth, so a game only needs to be added or updated once.
// The public URL slug is generated automatically from title.
export const GAMES: readonly GameRecord[] = [
  {
    title: 'Twilight Observer',
    eyebrow: 'Interactive Fiction',
    summary: 'An adventure game where choices matter, created by WhiteScar Studios.',
    about: [
      'You are trapped in a time loop with eight other people and forced to play a game with Werewolf/Mafia-like mechanics, except the consequences are very real.',
      'But fear not; you’re not alone. A strange blue-haired girl who seems to retain her memories after each loop is also seeking a way out.',
      'Will the two of you work together and escape, or will you remain trapped in this mansion?',
      'Who is the mysterious kidnapper, and why is she forcing you to play such a sick game?',
      'Discover the truth about the game, the universe, and yourself.',
    ],
    features: [
    ],
    playNote: 'This entry currently opens the developer’s official page. An on-site player can be enabled later by adding an approved iframe URL.',
    releaseDate: '2024-11-11',
    status: 'external',
    developer: 'WhiteScar Studios',
    officialUrl: 'https://whitescarstudio.itch.io/to',
    genres: ['Horror mystery', 'Visual novel', 'Choices'],
    coverImage: '/images/games/Twilight-Observer.png',
    accent: 'coral',
    featured: true,
    order: 1,
    relatedSlugs: ['slay-the-princess', 'andromeda-six'],
  },
  {
    title: 'Dating Killmulator',
    eyebrow: 'Visual Novel',
    summary: 'A comedy dating sim about a serial killer, a popular guy, and a psychologist.',
    about: [
      'Dating Killmulator is an award-winning romantic comedy game that joins romance with murder, memes and divorce papers..',
      'Step into the shoes of a female protagonist in a world where dating isn’t just about roses and romance—it’s a wild ride through a surreal, darkly humorous universe. Dating Killmulator is not your standard dating simulator, its a romantic comedy that plays with common tropes with outrageous characters, while talking about modern toxicities!.',
    ],
    features: [
      { title: 'Branching narrative', description: '7-8 hours of free content (+2 hours of optional paid DLC!).' },
      { title: 'Psychological tension', description: 'Free-to-play story-driven dating game with multiple routes.' },
      { title: 'Full voice performance', description: 'Dark humor, satire, and emotional storytelling.' },
    ],
    playNote: 'This entry currently directs players to the developer’s official listing. No game files are mirrored here.',
    releaseDate: '2023-10-23',
    status: 'external',
    developer: 'Núria Antonell, Unai Estavillo and Martí Estivill',
    officialUrl: 'https://coolom-games.itch.io/datingkillmulator',
    genres: ['Psychological horror', 'Branching narrative', 'Visual novel'],
    coverImage: '/images/games/Dating-Killmulator.png',
    accent: 'violet',
    featured: true,
    order: 2,
    relatedSlugs: ['twilight-observer', 'andromeda-six'],
  },
  {
    title: 'Hearts Before The Arrow',
    eyebrow: 'Visual Novel',
    summary: 'greek mythology dating sim about Prince Telemachus and Penelopes suitors messymoonmess.',
    about: [
      'For twenty years, the wine-dark sea has swallowed the King of Ithaca. Now, the great halls of Odysseus echo with the laughter of 108 arrogant suitors. They drink his wine, slaughter his livestock, and plot to steal his Queen.',
      'You are merely a servant in this occupied palace—expected to pour the wine, clear the plates, and survive the whims of the nobility. But it is dangerously easy to catch the eye of the men who would burn Ithaca to the ground for a crown.',
      'As you navigate the treacherous politics of the palace, you find yourself drawn to the doomed. Perhaps it is the rightful Prince trying to reclaim his home, the cruel goatherd who rules the courtyards, or the arrogant lords plotting to usurp the throne.',
      'But the Fates are spinning a bloody thread. Whispers on the wind say the King is returning. The massacre of the suitors is inevitable. When the bronze-tipped arrows begin to fly, whose side will you choose? Will you help the Prince slaughter the men who defiled his home, or will you risk your own life to save the villain you love?',
      'Defy the bards. Rewrite the myth. Choose who lives, and who dies.'
    ],
    features: [
      { title: 'Long-form relationship', description: '11 Doomed Men to Romance: Court the men of Ithaca. From the desperate Prince to the arrogant lords, and even the cruel servants.' },
      { title: 'Player customization', description: 'Defy Your Fate: The Odyssey ends in a slaughter, but your story does not have to. Accumulate affection to redeem your villainous lover, or stand by Telemachus and watch him face the Kings wrath.' },
      { title: 'Character focus', description: 'A Life of Servitude (Minigames): Survive the grueling demands of the palace. Master chore-based minigames and test your luck in the high-stakes Kottabos drinking games.' },
    ],
    playNote: 'Use the developer’s official page to check the currently available builds and additional content.',
    releaseDate: '2020-11-16',
    status: 'external',
    developer: 'messymoonmess',
    officialUrl: 'https://messymoonmad.itch.io/hearts-before-the-arrow',
    genres: ['Visual novel'],
    coverImage: '/images/games/Hearts-Before-The-Arrow.png',
    accent: 'gold',
    featured: true,
    order: 3,
    relatedSlugs: ['andromeda-six', 'twilight-observer'],
  },
  {
    title: 'Sovereign Tower',
    eyebrow: 'Visual Novel',
    summary: 'Recruit eccentric Knights, assign quests and balance egos whilst carving out your kingdom destiny.WILD WITS GAMES.',
    about: [
      'Play as the Sovereign of a magical tower in this story-rich, Round Table management RPG. Recruit eccentric Knights, assign quests and balance egos whilst carving out your kingdoms destiny. If destiny doesn’t go your way, keep turning back time, uncover secrets and rewrite fate again and again.',
      'Ah, finally – a suitable Sovereign for the job. Yes, you, right there, come sit on this comfy throne. Ah, you like the feel of that, don’t you? Congratulations, you’re hired! My name is Arlin and I’m your advisor. Welcome to your first day, and please allow me to provide thee with a day in the life of a Sovereign so you can decide how you will rule, my liege…',
    ],
    features: [
      { title: 'Science-fiction setting', description: 'The story moves its character drama into a spacefaring world.' },
      { title: 'Multiple relationships', description: 'Several romance paths support different character interests.' },
      { title: 'Ongoing development', description: 'Availability and story scope can change as new releases arrive.' },
    ],
    playNote: 'Check the official developer page for the newest public build and current platform availability.',
    releaseDate: '2019-11-23',
    status: 'external',
    developer: 'WILD WITS GAMES',
    officialUrl: 'https://wildwits.itch.io/sovereign-tower',
    genres: ['Science fiction', 'Romance', 'Visual novel'],
    coverImage: '/images/games/Sovereign-Tower.png',
    accent: 'rose',
    featured: true,
    order: 4,
    relatedSlugs: ['our-life-beginnings-and-always', 'twilight-observer'],
  },
];

export function getGameSlug(game: Pick<GameRecord, 'title'>): string {
  return game.title
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/&/g, ' and ')
    .replace(/[’']/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function getGames(): readonly GameRecord[] {
  return [...GAMES].sort((a, b) => a.order - b.order);
}

export function getGameBySlug(slug: string): GameRecord | undefined {
  return GAMES.find((game) => getGameSlug(game) === slug);
}

export function getRelatedGames(game: GameRecord): GameRecord[] {
  const requested = game.relatedSlugs ?? [];
  const selected = requested
    .map((slug) => getGameBySlug(slug))
    .filter((item): item is GameRecord => Boolean(item));

  if (selected.length >= 3) return selected.slice(0, 3);

  const currentSlug = getGameSlug(game);
  const fallback = GAMES.filter((item) => getGameSlug(item) !== currentSlug && !selected.includes(item));
  return [...selected, ...fallback].slice(0, 3);
}

export function getValidatedEmbedSrc(game: GameRecord): string | undefined {
  if (!game.embed?.src) return undefined;

  try {
    const url = new URL(game.embed.src);
    return GAME_EMBED_ORIGINS.includes(url.origin as (typeof GAME_EMBED_ORIGINS)[number])
      ? url.toString()
      : undefined;
  } catch {
    return undefined;
  }
}
