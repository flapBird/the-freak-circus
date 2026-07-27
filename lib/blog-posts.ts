export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  content: string;
  tags: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'what-is-the-freak-circus',
    title: 'What Is The Freak Circus? A Complete Introduction',
    description:
      'The Freak Circus is a psychological horror visual novel by Garula (Neko Bueno). Learn about the story, characters, and why it went viral.',
    date: '2024-11-01',
    tags: ['guide', 'intro', 'visual novel'],
    content: `
<p><em>The Freak Circus</em> is an 18+ visual novel by Garula, listed on itch.io as a prototype. The official page categorizes it with visual-novel, horror, romance, creepy, circus, monsters, Ren'Py, and yandere tags.</p>
<h2>What this guide can verify</h2>
<p>The developer’s itch.io page is the source of truth for release files, platform availability, content warnings, and game updates. This fan guide does not distribute game files and does not treat community rumours as release information.</p>
<h2>Languages and versions</h2>
<p>Official devlogs list English, Brazilian Portuguese, and Chinese among the game languages. Check the official page before relying on an older build, because browser fixes and translations have changed over time.</p>
<h2>Where to play safely</h2>
<p>Use the official itch.io page for the developer-supported browser version and downloads. Garula has specifically warned players against downloading reposted copies from other sites.</p>
`,
  },
  {
    slug: 'pierrot-route-guide',
    title: 'How to Use Spoiler Guides Without Chasing Unverified Route Claims',
    description:
      'A spoiler-safe method for checking route information in The Freak Circus without presenting fan theories or unverified choice charts as fact.',
    date: '2024-11-10',
    tags: ['walkthrough', 'spoilers', 'guide'],
    content: `
<p>Route charts spread quickly in fan communities, but they are often based on an older build, an incomplete playthrough, or a paraphrase that has lost its context. This is especially risky for a game still receiving updates.</p>
<h2>Make a spoiler-safe save plan</h2>
<p>Before a consequential choice, create a clearly named save slot and note the game version you are using. Keep one first-playthrough save separate from experiment saves, so a guide does not accidentally overwrite the experience you wanted.</p>
<h2>Record evidence, not guesses</h2>
<p>When comparing a route claim, record the exact on-screen choice, chapter, build, and outcome. A useful guide distinguishes a confirmed observation from interpretation and links to official patch notes when an update may have changed behavior.</p>
<h2>Use content warnings first</h2>
<p>The official page labels the game 18+ and includes dark themes. Decide your spoiler boundary before opening character or ending discussions; this produces a more useful guide than pretending every player wants the same amount of detail.</p>
`,
  },
  {
    slug: 'harlequin-character-guide',
    title: 'How to Follow The Freak Circus Updates Reliably',
    description:
      'A source-first workflow for following game patches, translations, and announcements without amplifying unconfirmed release dates.',
    date: '2024-11-18',
    tags: ['news', 'updates', 'official-sources'],
    content: `
<p>The most reliable update source is Garula’s itch.io devlog. It contains dated posts from the developer, including translation announcements, bug-fix notes, and merchandise news.</p>
<h2>Check the date and original wording</h2>
<p>Do not convert a progress update into a release date. A development estimate, a community comment, and a confirmed launch are different claims. Link the original post and preserve its publication date when summarizing it.</p>
<h2>Separate official facts from fan discussion</h2>
<p>Fan art, theories, and route interpretations can be valuable community material, but they should be labelled as such. This site’s news entries are deliberately limited to source-linked editorial summaries.</p>
<h2>Update an old guide responsibly</h2>
<p>When a build changes, add a visible revision date, identify the version checked, and explain whether the change is confirmed by the developer or simply observed by a player. Do not silently rewrite an old walkthrough.</p>
`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
