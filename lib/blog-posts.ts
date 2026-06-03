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
<p>The Freak Circus (also written as <em>thefreakcircus</em>) is a darkly atmospheric visual novel developed by indie creator Garula, also known as Neko Bueno. Released on itch.io, the game quickly gained a passionate following for its haunting artwork, complex characters, and branching storyline.</p>
<h2>What Kind of Game Is It?</h2>
<p>The Freak Circus is a psychological horror romance visual novel. You play as a visitor to a mysterious circus who becomes entangled with its dangerous performers. The game features multiple routes and endings depending on your choices.</p>
<h2>Who Are the Main Characters?</h2>
<p>Five central characters shape every playthrough: Pierrot, Harlequin, Jester, the Ticket Taker, and the Doctor. Each has a distinct personality, route, and set of endings. Pierrot and Harlequin are generally considered the primary love interests and receive the most story content.</p>
<h2>Is It Free to Play?</h2>
<p>Yes. The Freak Circus is available for free on itch.io. The developer offers optional paid tiers through Patreon for early access to new content and additional scenes.</p>
<h2>Where Can I Play It?</h2>
<p>You can play The Freak Circus directly in your browser on this site, or download it for PC, Mac, and Linux from the official itch.io page.</p>
`,
  },
  {
    slug: 'pierrot-route-guide',
    title: 'Pierrot Route Guide - All Choices & Endings',
    description:
      'Step-by-step walkthrough for the Pierrot route in The Freak Circus. Covers Day 1 and Day 2 choices, good ending, bad ending, and hidden scenes.',
    date: '2024-11-10',
    tags: ['walkthrough', 'pierrot', 'endings'],
    content: `
<p>Pierrot is the most pursued route in The Freak Circus, offering the deepest lore and the most emotionally complex ending branches. This guide covers every major decision point through Day 2.</p>
<h2>Day 1 - Key Choices for Pierrot's Route</h2>
<p>During the opening carnival sequence, you will be presented with several choices that influence which character gravitates toward you. To unlock the Pierrot route, select introspective or melancholic options when prompted. Avoid aggressive responses, as these push the narrative toward the Jester or Ticket Taker.</p>
<h2>The Tent Scene</h2>
<p>The tent encounter in Day 1 is the first branching point that can lock or unlock Pierrot content. If you choose to follow the white cloak, you remain on the Pierrot path. Choosing the red balloon redirects to the Harlequin introduction.</p>
<h2>Day 2 - Escalation Choices</h2>
<p>Day 2 introduces the game's more intense themes. Pierrot's route escalates quickly into psychological dependence and possessive behavior. To reach the Good Ending, prioritize dialogue options that show understanding of his performance persona rather than fear.</p>
<h2>Endings Overview</h2>
<p><strong>Good Ending:</strong> Requires consistently choosing empathetic responses in Day 2. Pierrot acknowledges the protagonist as his equal.<br/>
<strong>Bad Ending A:</strong> Triggered by defiance in the final Day 2 choice. Leads to the escape sequence.<br/>
<strong>Bad Ending B:</strong> Triggered by passive acceptance throughout Day 2 without the key Day 1 choice. Pierrot's route ends at the mirror tent.</p>
`,
  },
  {
    slug: 'harlequin-character-guide',
    title: 'Harlequin - Character Analysis & Route Tips',
    description:
      'Deep dive into Harlequin from The Freak Circus. His personality, his role in the circus, and tips for unlocking his route.',
    date: '2024-11-18',
    tags: ['character', 'harlequin', 'guide'],
    content: `
<p>Harlequin is the charismatic, unpredictable foil to Pierrot in The Freak Circus. Where Pierrot is controlled and melancholic, Harlequin is volatile and theatrical. His route rewards players who embrace the chaos of the circus world.</p>
<h2>Who Is Harlequin?</h2>
<p>Harlequin serves as the head performer of the main tent. His backstory is revealed gradually across both Day 1 and Day 2, hinting at a history with Columbina that shapes his current behavior. His relationship with Pierrot is adversarial yet codependent.</p>
<h2>How to Unlock His Route</h2>
<p>In Day 1, interact with the red balloon during the carnival opening. In the main tent scene, choose the bold or playful dialogue options when Harlequin addresses the protagonist directly. Avoid cautious responses, as these shift affinity away from his route.</p>
<h2>Key Themes in His Route</h2>
<p>Harlequin's route explores performance, identity, and the cost of wearing a mask indefinitely. His dialogue heavily references the Columbina tragedy, which is explained fully in the lore section of this site.</p>
`,
  },
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}
