export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  image: string;
  imageAlt: string;
  readingTime: string;
  content: string;
};

const POSTS_EN: BlogPost[] = [
  {
    slug: 'day-2-walkthrough-save-strategy',
    title: 'The Freak Circus Day 2 Walkthrough: Tents, Saves, and the Bad Ending',
    description: 'A spoiler-marked version 0.2 guide to the captive opening, circus tents, character introductions, save points, and the safest way to explore Day 2 without mistaking scene variations for finished routes.',
    date: '2026-09-02',
    tags: ['Day 2', 'Walkthrough', 'Version 0.2'],
    image: '/images/home/characters.webp',
    imageAlt: 'The Freak Circus cast gathered around the protagonist',
    readingTime: '10 min read',
    content: `
      <p class="article-lede">Day 2 is where <em>The Freak Circus</em> stops feeling like an uneasy introduction and begins closing its hand around the protagonist. The useful question is not “Which completed route should I lock in?”—there is no completed Pierrot or Harlequin ending in version 0.2—but “Where should I save so I can see the available variations without replaying the whole prototype?”</p>
      <div class="walkthrough-note"><strong>Guide boundary</strong><p>This article covers the public version 0.2 prototype and contains story spoilers. The official listing confirms five character introductions and one bad ending. It does not confirm multiple finished routes, a collectible system, or a menu of unlockable hidden scenes.</p></div>

      <h2>Make these saves before the pressure starts</h2>
      <p>Day 2 is short enough to replay, but the opening is long enough that repeating it just to test one response becomes tedious. Keep separate slots instead of overwriting the latest save:</p>
      <ol class="walkthrough-steps">
        <li><strong>DAY 2 — START:</strong> the first moment the new day gives you control.</li>
        <li><strong>CAPTIVE ROOM:</strong> before committing to a tense response around Pierrot or Harlequin.</li>
        <li><strong>RETURN TO CIRCUS:</strong> before entering an attraction tent.</li>
        <li><strong>TENT BRANCH:</strong> a fresh slot for each tent or character introduction.</li>
        <li><strong>LATE SCENE:</strong> before any choice that sounds final, defiant, or deliberately dangerous.</li>
      </ol>
      <p>This is more reliable than a single rolling save. If a scene ends sooner than expected—or reaches the bad ending—you still have a clean point only a few minutes back.</p>

      <h2>The captive-room opening: read the contrast, not an affection meter</h2>
      <p>The day opens with the protagonist restrained in an unfamiliar room. Pierrot frames his actions as protection; Harlequin's arrival turns that claim into a confrontation. The scene matters because it establishes how differently the two rivals exert control, not because it asks you to select a permanent romance route.</p>
      <p>For a first playthrough, answer in the way that feels natural and keep moving. On a replay, return to the <strong>CAPTIVE ROOM</strong> save and change one response at a time. That makes it obvious whether you found a genuine scene variation or merely a different line.</p>
      <div class="walkthrough-tip"><strong>Do not over-read the props.</strong><p>The mask and red ticket are meaningful story objects, but version 0.2 does not establish a conventional inventory where collecting them unlocks future endings. Ticket colours do carry confirmed meaning in this game — red and green mark a choice the protagonist makes, and pink sits below the main cast — but that is a branching signal rather than a collectible checklist. Treat the mask as a scene object unless the game itself presents a later interaction.</p></div>

      <h2>Returning to the circus: how to explore the tents</h2>
      <p>The circus section broadens the cast through themed spaces. The best strategy is simple: save before entering, finish the scene without skipping, and then use that save for the next variation. Do not assume that a character introduction is a complete route.</p>

      <h3>Blue tent — Ticket Taker and the mirrors</h3>
      <p>The mirror sequence is built to make visual information feel unreliable. Look closely at which reflection is speaking and how Ticket Taker frames what you see. There is no need to solve every image as a puzzle on the first visit; the practical goal is to finish the introduction and preserve a save for a slower second reading.</p>

      <h3>Cyan tent — the Doctor</h3>
      <p>The Doctor's introduction leans hardest into restraint, examination, and medical-horror imagery. If those themes are uncomfortable, this is the moment to use the skip controls cautiously or step away. From a route perspective, obedience or resistance can change the texture of the exchange, but neither should be advertised as a completed Doctor route or ending.</p>

      <h3>Purple or black performance space — Jester</h3>
      <p>Jester's performance carries some of Day 2's densest lore. Let the dialogue advance normally rather than fast-skipping it. More importantly, treat the performance as a story told <em>inside</em> the game: it reveals how the circus talks about its past, but it is not automatically a neutral, complete account of every character's motives.</p>

      <h2>How to protect your run from the bad ending</h2>
      <p>The official version description lists one bad ending. A cautious guide should not invent a universal “correct answer” without a reproducible choice test, so use the game itself as the signal:</p>
      <ul>
        <li>Save before overtly dangerous or final-sounding responses.</li>
        <li>If the story cuts to an ending or returns to the menu, reload the most recent branch save.</li>
        <li>Change only the last meaningful response first; do not restart Day 2 immediately.</li>
        <li>Keep the bad-ending save if you want a complete record of the current prototype.</li>
      </ul>
      <p>Most importantly, reaching the bad ending does not mean the save is ruined. It means you found one of the few outcomes the current build explicitly says is available.</p>

      <h2>A clean two-pass route</h2>
      <div class="walkthrough-route"><div><strong>Pass 1 — story</strong><p>Play continuously, choose naturally, and save only at the five checkpoints above. Avoid guides during the actual scenes.</p></div><div><strong>Pass 2 — coverage</strong><p>Return to the tent and late-scene saves. Reverse one important response at a time and note what truly changes.</p></div></div>
      <p>This method is less glamorous than a giant “all endings” chart, but it fits the build that actually exists. Version 0.2 is an introduction-heavy prototype; it is not a finished route collection.</p>

      <h2>What counts as finishing Day 2?</h2>
      <p>You are caught up when you reach the end of the current public story, not when you have unlocked a nonexistent final romance ending. A thorough run should leave you with:</p>
      <ul class="walkthrough-checklist">
        <li>the captive-room conflict viewed without skipping;</li>
        <li>the circus return save preserved;</li>
        <li>the Ticket Taker, Doctor, and Jester introductions seen;</li>
        <li>the bad ending either recorded or safely avoided;</li>
        <li>a clean final save ready for a future official update.</li>
      </ul>
      <p>Day 3 remains in development. Keep this final save, but check future release notes before assuming version 0.2 choices will map unchanged onto the next public build.</p>

      <h2>Claims this guide deliberately does not make</h2>
      <p>Some walkthroughs describe multiple finished endings, a hidden-scene gallery, collectible pins with future mechanical effects, or fully available routes for every introduced character. The official page currently confirms none of those as finished features. For verified status, use the site's <a href="/day-3">Day 3 tracker</a> and <a href="/wiki">version 0.2 Wiki</a>.</p>
    `,
  },
  {
    slug: 'day-1-walkthrough-first-playthrough',
    title: 'The Freak Circus Day 1 Walkthrough: A Careful First Playthrough',
    description: 'A practical version 0.2 guide to meeting Pierrot, reading the early rivalry, placing useful saves, and reaching Day 2 without chasing routes that are not finished yet.',
    date: '2026-09-02',
    tags: ['Day 1', 'Walkthrough', 'New players'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'A scene from The Freak Circus current prototype',
    readingTime: '8 min read',
    content: `
      <p class="article-lede">Day 1 works best when you let it be uncomfortable. It introduces Pierrot on an ordinary walk to work, then gradually turns a small encounter into the beginning of a dangerous rivalry. You do not need a perfect answer sheet to reach Day 2; you need a few sensible saves and a clear idea of what the current prototype can—and cannot—resolve.</p>
      <div class="walkthrough-note"><strong>Guide boundary</strong><p>This is a spoiler-marked guide for public version 0.2. It explains progression and replay strategy without pretending that Pierrot, Harlequin, or the wider cast already have completed endings.</p></div>
      <div class="walkthrough-note"><strong>On saving</strong><p>The developer has not published save locations, slot counts, autosave behaviour, or any browser-to-desktop transfer procedure for this game. The save names below are labels you give your own slots with the engine's standard save and load interface, not official filenames.</p></div>

      <h2>Before starting: set up a run you can actually revisit</h2>
      <p>The official content warnings include blood, death, abuse, kidnapping, non-consensual drug use, physical domination, and unwanted contact. Day 1 does not show every warning at maximum intensity, but it establishes the tone. Decide whether those themes are right for you before chasing completion.</p>
      <p>Use three named slots from the beginning:</p>
      <ol class="walkthrough-steps">
        <li><strong>DAY 1 — CLEAN:</strong> before the first substantial choice.</li>
        <li><strong>PIERROT — STREET:</strong> before choosing how to respond during the encounter on the way to work.</li>
        <li><strong>DAY 1 — LATE:</strong> before the final cluster of scenes that carries the story toward Day 2.</li>
      </ol>
      <p>Do not keep saving over the first slot. A clean checkpoint is more useful than a screenshot of somebody else's choices because you can test the current build yourself.</p>

      <h2>The street encounter with Pierrot</h2>
      <p>Pierrot's introduction is the emotional hinge of Day 1. The scene asks how the protagonist reacts to a silent stranger who is already being treated as an outsider. The writing does more work when you choose a response you can stand behind instead of trying to reverse-engineer an invisible “love score.”</p>
      <p>For the first run, stay consistent: if you approach him with concern, keep that tone through the scene; if you are suspicious, let the discomfort remain. On the second run, load <strong>PIERROT — STREET</strong> and change only the first major response. Compare the dialogue and body language rather than assuming the branch has unlocked a finished route.</p>
      <div class="walkthrough-tip"><strong>Completion tip</strong><p>Do not restart because a response feels awkward. Day 1 is designed to continue through unease. Save-scumming every line breaks the pacing and usually tells you less than one uninterrupted playthrough.</p></div>

      <h2>When the rivalry begins to widen</h2>
      <p>Harlequin is not simply a brighter alternative to Pierrot. His presence changes the meaning of the first encounter by turning attention into competition. Watch how each performer handles distance, consent, and the protagonist's uncertainty. Those contrasts are more important in Day 1 than trying to declare a winner.</p>
      <p>The wider circus cast belongs to the prototype's introduction arc. Seeing Jester, Doctor, or Ticket Taker does not mean you have entered a complete romance route. The official page only says that five character introductions are available; planned endings remain unfinished.</p>

      <h2>How to reach Day 2</h2>
      <p>Day 2 is already part of version 0.2. It is not a separate download and it does not require a secret route code. Continue the story after Day 1's late scenes and allow the transition to play. If the game returns to an earlier point unexpectedly:</p>
      <ul>
        <li>confirm that the title screen shows the current 0.2 build;</li>
        <li>load <strong>DAY 1 — LATE</strong> rather than restarting;</li>
        <li>avoid skipping rapidly through transitions or animated scenes;</li>
        <li>in the browser build, keep the tab open while the scene finishes loading, since browser saves live in browser storage.</li>
      </ul>

      <h2>The best first-run strategy is deliberately simple</h2>
      <div class="walkthrough-route"><div><strong>First pass</strong><p>Choose naturally, do not skip dialogue, and let the tension build. Your goal is to understand the cast, not optimize a route.</p></div><div><strong>Second pass</strong><p>Return to the street save and change one response. Use the late save for any final Day 1 variation instead of replaying from the title screen.</p></div></div>

      <h2>Common Day 1 mistakes</h2>
      <h3>Looking for a “Pierrot good ending”</h3>
      <p>Version 0.2 does not contain a finished Pierrot ending. A warm response can change the feeling of a scene without turning the prototype into a completed route.</p>
      <h3>Assuming every line changes Day 2</h3>
      <p>Some dialogue is there to establish voice and mood. Unless two runs produce a reproducible change, do not promote a line as a route lock.</p>
      <h3>Using only one save slot</h3>
      <p>This is the easiest way to turn a short replay into a full restart. Preserve the street and late-Day-1 checkpoints.</p>
      <h3>Skipping the uncomfortable parts</h3>
      <p>The story's warning signs are part of the characterization. If the content is tolerable for you, reading those moments carefully makes Day 2 much easier to understand. If it is not, stopping is a valid choice.</p>

      <h2>Day 1 completion checklist</h2>
      <ul class="walkthrough-checklist">
        <li>you met Pierrot on the way to work;</li>
        <li>you preserved a save before the first major response;</li>
        <li>you saw the central rivalry begin to take shape;</li>
        <li>you reached the transition into Day 2;</li>
        <li>you did not mistake an introduction for a finished ending.</li>
      </ul>
      <p>Once those boxes are checked, continue with the <a href="/blog/day-2-walkthrough-save-strategy">Day 2 walkthrough</a>. For character context without route speculation, read the verified <a href="/characters/pierrot">Pierrot</a> and <a href="/characters/harlequin">Harlequin</a> profiles.</p>
    `,
  },
  {
    slug: 'current-prototype-guide',
    title: 'What the Current The Freak Circus Prototype Actually Includes',
    description: 'A clear, spoiler-light guide to version 0.2: what is playable now, what remains in development, and what new players should expect.',
    date: '2026-08-15',
    tags: ['Version 0.2', 'New players', 'Game guide'],
    image: '/the-freak-circus-cover.jpg',
    imageAlt: 'The Freak Circus cover artwork',
    readingTime: '5 min read',
    content: `
      <p class="article-lede"><em>The Freak Circus</em> is best approached as a polished opening act rather than a finished, route-complete visual novel. The current public build is version 0.2 and is still labelled a prototype.</p>
      <h2>The short answer</h2>
      <p>The available build introduces the central conflict and five members of the cast. It includes one bad ending, while the larger script and the planned Pierrot, Harlequin, protagonist, and shared conclusions remain in development.</p>
      <p>That distinction matters. A character appearing in the prototype does not automatically mean that the character already has a complete romance route or a final ending.</p>
      <h2>What a first session is like</h2>
      <p>The official listing describes an average session as roughly half an hour. That makes the prototype easy to sample, but it also means a first playthrough is designed to establish tone, relationships, and danger—not to resolve every thread.</p>
      <ul><li>Expect original character art and backgrounds.</li><li>Expect meaningful scene variations and an available bad ending.</li><li>Do not expect every planned ending to be playable yet.</li></ul>
      <h2>Know the content boundary before playing</h2>
      <p>This is an adults-only psychological horror story. Its warnings include blood, death, abuse, kidnapping, drugging, physical domination, and non-consensual contact. Read those warnings before deciding whether the game is right for you.</p>
      <h2>A better way to use fan guides</h2>
      <p>Check the build number before following any route advice, keep a clean save before major choices, and treat screenshots or choice charts without a tested version as community interpretation. A useful guide should tell you what was observed, on which build, and where spoilers begin.</p>
    `,
  },
  {
    slug: 'browser-or-download',
    title: 'Browser or Download? Choosing the Right Way to Play',
    description: 'Compare the browser build with local Windows, macOS, Linux, and Android downloads, then prepare your save files before switching versions.',
    date: '2026-08-14',
    tags: ['Download', 'Browser', 'Setup'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'A scene from The Freak Circus browser build',
    readingTime: '4 min read',
    content: `
      <p class="article-lede">The story is the same, but the best way to play depends on how much setup you want and whether you need a portable local copy.</p>
      <h2>Choose the browser build for the quickest start</h2>
      <p>The HTML5 version is the simplest option for a first look: open the game, allow the page to load, and begin without installing an archive. It is also useful when you are playing on a shared machine and do not want to keep game files.</p>
      <p>Browser storage can be cleared by privacy tools or browser resets, so it is not the best place for a save you cannot afford to lose.</p>
      <h2>Choose a download for a persistent local copy</h2>
      <p>Windows, macOS, Linux, and Android packages are listed for version 0.2. A local build avoids browser-storage limits and is usually the more comfortable option for repeated playthroughs.</p>
      <ul><li>Match the package to your operating system.</li><li>Extract desktop archives before launching the game.</li><li>Back up saves before replacing an older build.</li></ul>
      <h2>Why the source matters</h2>
      <p>Use the developer's itch.io listing rather than a repost or a repackaged installer. The developer identifies that listing as the official distribution page and asks players not to use reuploaded copies.</p>
      <h2>If something goes wrong</h2>
      <p>First confirm the build number and platform. For browser problems, try a current Chrome- or Edge-family browser and disable aggressive page translation for the game tab. For a desktop archive, extract it fully and keep the application with its bundled files.</p>
    `,
  },
  {
    slug: 'day-3-rumor-checklist',
    title: 'Waiting for Day 3 Without Falling for Release-Date Rumors',
    description: 'A practical checklist for separating real development progress from countdowns, guesses, and recycled claims about the next chapter.',
    date: '2026-08-13',
    tags: ['Day 3', 'Updates', 'Fact check'],
    image: '/images/home/characters.webp',
    imageAlt: 'The Freak Circus character artwork',
    readingTime: '5 min read',
    content: `
      <p class="article-lede">Day 3 is in development, but development activity is not the same thing as a confirmed launch date. Keeping those ideas separate is the easiest way to avoid misleading countdown pages and recycled rumors.</p>
      <h2>What is actually established</h2>
      <p>The public game page says that the story continues for one more in-game day and that this part is still being developed. It does not publish a release day. Until a dated release announcement appears, any exact date should be treated as speculation.</p>
      <h2>Progress signals are useful—but limited</h2>
      <p>Dialogue programming, new artwork, background changes, testing, and scene previews all show that work is moving. None of those milestones alone tells us when a stable public build will be ready.</p>
      <h2>Run a quick rumor check</h2>
      <ol><li>Look for an exact publication date and a named author.</li><li>Check whether the wording says “released” or only “in development.”</li><li>Separate screenshots of work in progress from a downloadable build.</li><li>Reject pages that turn a fan estimate into a countdown.</li></ol>
      <h2>Use the waiting time well</h2>
      <p>Keep your current saves, note which build created them, and avoid overwriting the first-playthrough slot. When the next build arrives, read its change notes before assuming old route advice still applies.</p>
    `,
  },
  {
    slug: 'pierrot-height-age-order',
    title: 'Pierrot Height and Age Order in The Freak Circus',
    description: 'Pierrot is 198 cm tall and third of five in the official age order, oldest first — what the developer published, and what the fandom adds on top.',
    date: '2026-09-20',
    tags: ['Pierrot', 'Heights', 'Character facts'],
    image: '/images/characters/pierrot-1.webp',
    imageAlt: 'Pierrot, the silent clown at the centre of The Freak Circus',
    readingTime: '8 min read',
    content: `
      <p class="article-lede">Pierrot is 198 cm tall, and in the developer's published age order he is third of five, oldest first. Those two numbers come from the same official material as the rest of the cast chart, and between them they settle most of the argument that circulates online about his size and his age — while leaving two gaps the fandom fills on its own.</p>
      <div class="walkthrough-note"><strong>What this article is based on</strong><p>Height, age order, and strength ranking come from the developer's published chart and AMA answers. No fan-assigned age, birthday, or estimated number is treated as fact here. Material that comes from the fandom wiki is labelled as fandom-derived rather than official.</p></div>

      <h2>The height: 198 cm</h2>
      <p>The developer published a height chart alongside the sprite reference used when drawing the cast. Pierrot's entry reads 198 cm, which converts to roughly 6 ft 5.95 in. That places him second tallest of the five introduced characters: nine centimetres below the Doctor at 207 cm, and eleven centimetres above Harlequin at 187 cm.</p>
      <p>Because the chart existed as a drawing reference rather than as a set of numbers written after the fact, it is the kind of measurement that stays stable. Two things follow from it. The whole introduced cast spans only 24 cm, from the Doctor's 207 down to the Ticket Taker's 183, which is a narrow range and a useful check on fan art that shows one character towering over another. And the eleven-centimetre gap between the two romance leads is real, which is why the fandom wiki treats it as meaningful to how Pierrot and Harlequin are staged against each other.</p>
      <h2>The age order: third of five, oldest first</h2>
      <p>A separate AMA answer took a request to order the cast from oldest to youngest and gave a fixed sequence:</p>
      <ol class="walkthrough-steps">
        <li><strong>Ticket Taker</strong> — first, the oldest.</li>
        <li><strong>Doctor</strong></li>
        <li><strong>Pierrot</strong> — third.</li>
        <li><strong>Jester</strong></li>
        <li><strong>Harlequin</strong> — last, the youngest.</li>
      </ol>
      <p>Pierrot therefore sits in the middle of the company: older than Jester and Harlequin, younger than the Ticket Taker and the Doctor. In a cast built around a rivalry between the two ends of that list, being third means he is older than the man he competes with and younger than the two figures who hold the circus together.</p>
      <h3>What "third" does not tell you</h3>
      <p>It does not give a number, and it does not give a gap. A relative order says only that one character is older than another; two characters can be adjacent in the list and still be far apart in years. No numeric age has ever been published for any of the five, which makes the order the only age information the developer has released. That matters because a specific number is the single most common thing fan sites add to this cast, and those numbers almost never have a source behind them.</p>
      <div class="walkthrough-tip"><strong>How to check a height or age claim you found elsewhere</strong><p>Ask three questions. Does the source point at the developer's chart, an AMA answer, or an official post? Does it distinguish a published number from an estimate? And does it tell you which build the information describes? A guide that answers all three can be trusted on details; one that answers none is decoration on top of someone else's guess.</p></div>

      <h2>Strength is a separate list</h2>
      <p>The developer also published a raw physical strength ranking, and it does not follow height. Pierrot is first on it — ahead of Harlequin and Jester, who are tied in second, then the Doctor, then the Ticket Taker last.</p>
      <p>Pierrot being both the second tallest and the strongest is a deliberate piece of characterisation rather than a coincidence of the chart. The official synopsis calls him "the silent yandere", and a character who is physically dominant and almost entirely silent is a specific kind of threat: the danger is not that he will announce himself, but that he does not have to. The fandom wiki's description of him as gentle and polite on the surface while stalking the protagonist fits that shape, though that particular characterisation is fan-derived.</p>

      <h2>What is confirmed and what is added</h2>
      <ul>
        <li><strong>Confirmed by the developer:</strong> his height of 198 cm, his third place in the age order, his first place in the strength ranking, his description as "the silent yandere", and the fact that a Pierrot romance ending is planned.</li>
        <li><strong>From the current build:</strong> his appearance, his scenes, and the way he reacts to the protagonist across branches.</li>
        <li><strong>Fandom-derived:</strong> the detailed costume description — white mask with black vertical slits, golden eyes, red-and-black jester cap, red motley coat — the in-fiction reason for his silence, and any specific age or birthday attached to him.</li>
      </ul>
      <p>One small point of clarification on the costume and the silence, because both are frequently mis-summarised. The fandom wiki's account is that a rule about not speaking in public was put in place by Jester, whom Pierrot deeply respects. That is a satisfying detail, consistent with how the two characters are written, but it comes from the wiki rather than from the developer. The first-party material stops at the phrase "the silent yandere" and treats the silence as characterisation rather than a missing voice track.</p>

      <h2>Why the numbers are worth caring about at all</h2>
      <p>Measurements are the part of a cast sheet that is easiest to check and most often gets invented, and this game has had both: a real published chart and a lot of numbers that do not come from it. Knowing that Pierrot is 198 cm and third-oldest means you can spot at a glance when a wiki has quietly swapped in a different figure — and, more usefully, you can read his scenes with an accurate picture. A 198 cm character who is also the strongest of the five behaves differently on screen than a man of average height, and the game's staging of him depends on that being true.</p>
      <p>For the full picture across the cast, the <a href="/characters/heights">height and ranking guide</a> lists all five characters, and the <a href="/characters/pierrot">Pierrot profile</a> covers his route status and the fandom material in more detail.</p>
    `,
  },
  {
    slug: 'harlequin-height-age-order',
    title: 'Harlequin Height and Age Order in The Freak Circus',
    description: 'Harlequin is 187 cm tall and the youngest of the five introduced characters — the developer’s published numbers, and the fan claims they contradict.',
    date: '2026-09-24',
    tags: ['Harlequin', 'Heights', 'Character facts'],
    image: '/images/characters/harlequin-1.webp',
    imageAlt: 'Harlequin, Pierrot’s theatrical rival in The Freak Circus',
    readingTime: '8 min read',
    content: `
      <p class="article-lede">Harlequin is 187 cm tall, the shortest of the five introduced characters, and the youngest of the five in the developer's published age order. Both facts are documented. The specific age that circulates for him online usually is not — and in most cases it contradicts the one age statement the developer has actually made.</p>
      <div class="walkthrough-note"><strong>Scope and sourcing</strong><p>Height, age order, and strength ranking are taken from the developer's published chart and AMA answers. Costume description, personality summaries, and any specific age or birthday come from the fandom wiki and are marked as fandom-derived. This article does not treat an in-fiction estimate as a measurement.</p></div>

      <h2>The height: 187 cm</h2>
      <p>Harlequin's entry in the developer's height chart reads 187 cm, roughly 6 ft 1.62 in. That makes him the shortest of the five introduced characters, standing 20 cm below the Doctor at 207 cm, 11 cm below Pierrot, 5 cm below Jester, and 4 cm above the Ticket Taker.</p>
      <p>The interesting part of that number is what it pairs with. Harlequin shares second place in the developer's strength ranking with Jester, behind Pierrot and ahead of the Doctor and the Ticket Taker. The fandom wiki reads that combination — youngest and shortest, but tied for second strongest — as the reason Harlequin is written as quick and physical rather than heavy. That reading is interpretation, but it is interpretation built on two published numbers rather than on a guess.</p>
      <h2>The age order: last of five</h2>
      <p>The developer's age order, oldest first, is Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Harlequin is fifth — the youngest of the introduced cast, and the youngest of the two romance leads by two positions.</p>
      <p>This is a genuinely documented fact and one of the most frequently mangled online. A large amount of fan material assigns Harlequin a specific numeric age, and several of those numbers cannot be reconciled with a published order that places him below a much older Ticket Taker and Doctor and above nobody. The order is the reliable version, and it is also the only version that exists: no numeric age has been published for any character in this game.</p>
      <div class="walkthrough-tip"><strong>If you want to quote his age, quote the order</strong><p>Write "the youngest of the five introduced characters" rather than a number. It is accurate, it is sourced, and it survives the next update. Numbers assigned to this cast by fan sites have a habit of being contradicted by later AMA answers, which is exactly why the developer publishes an order instead of a number.</p></div>

      <h2>The eleven-centimetre gap</h2>
      <p>Harlequin is 11 cm shorter than Pierrot, and that difference is large enough to read on screen without being exaggerated. The fandom wiki treats the gap as meaningful to the way the two leads are staged against each other — the silent one filling the frame, the theatrical one moving around it. Whether that was the design intent or a consequence of the sprite reference is not something the developer has stated, so it stays in the fandom column.</p>
      <p>What is confirmed is simpler: the chart was published by the developer as a reference used when drawing sprites, which is why the numbers are treated as canonical rather than read off artwork. If a piece of fan art draws Harlequin as taller than Pierrot, the art is stylised; the official figures remain 187 and 198.</p>

      <h2>What the official material says about him</h2>
      <p>Beyond the charts, the developer has said several things about Harlequin directly. The official synopsis calls him Pierrot's "seductive rival" and describes the game as being led by one or the other — the clearest possible framing of a story with two romance routes and no others.</p>
      <p>One AMA answer is worth quoting carefully because it is easy to misread. Asked about the bites Harlequin leaves while flirting, the answer was that they are not marriage proposals, that the mark leaves no scar, and that marriage and courtship among monsters work differently from how the protagonist would understand them. That small exchange does real work: it establishes that Harlequin's flirtation runs on the circus's own logic, and that the protagonist's frame of reference is not the frame of reference of the people around them.</p>
      <p>The fandom wiki adds that Harlequin feels safe around the Doctor, that the Doctor is his favourite person in the circus, and that he gets along with the Ticket Taker despite a clash of tastes. It also records an implied link to Columbina's death — that Harlequin killed her to "save" her — which the wiki itself frames as implication rather than statement. The general shape of the circus's history is confirmed in AMA answers; that specific reading of Harlequin's role in it is not first-party.</p>

      <h2>Route status: planned, not playable</h2>
      <p>A Harlequin romance ending is one of the four conclusions the developer has named, alongside Pierrot's, the Protagonist's, and the combined "All together" ending. None of the four is implemented. The current build contains exactly one ending — the "Missing" bad ending on Day 1 — so there are no trigger conditions to publish and no honest walkthrough to write.</p>
      <ul>
        <li><strong>Confirmed:</strong> his height, his last place in the age order, his tie for second in strength, his description as Pierrot's "seductive rival", the clarification that his flirtation bites are not proposals, and that a Harlequin romance ending is planned.</li>
        <li><strong>From the current build:</strong> his appearance, his scenes, and the fact that some of his appearances vary depending on the story branch, which is confirmed by an official bug note.</li>
        <li><strong>Fandom-derived:</strong> the mask description — white mask with a green diamond and a green triangle, venom-green eyes, curly black hair with a heart-shaped lock — his personal history, and the specifics of his relationship with Columbina.</li>
      </ul>

      <h2>Putting the numbers together</h2>
      <p>Harlequin's official measurements describe a specific character: the youngest, the shortest, and tied for the second strongest of a five-person company, who competes for attention with the second tallest and strongest member of that same company. He is not physically dominant and he is not inexperienced — he is quick, theatrical, and operating from a position where the rivalry is genuinely close. That is a good deal more useful than a made-up age, and it is fully documented.</p>
      <p>For the whole cast at once, see the <a href="/characters/heights">height and ranking guide</a>; for his route status and relationships, see the <a href="/characters/harlequin">Harlequin profile</a>.</p>
    `,
  },
  {
    slug: 'the-freak-circus-endings-list',
    title: 'The Freak Circus Endings: What Exists and What Does Not',
    description: 'A complete status list of the endings in The Freak Circus — one implemented bad ending, four planned conclusions, and the routes that do not exist.',
    date: '2026-09-28',
    tags: ['Endings', 'Routes', 'Version 0.2'],
    image: '/images/home/characters.webp',
    imageAlt: 'The Freak Circus cast assembled around the protagonist',
    readingTime: '9 min read',
    content: `
      <p class="article-lede">The Freak Circus has one playable ending today, and four more that the developer has named but not yet written into a build. Almost every "all endings" chart on the internet collapses those two categories together, which is why the same question gets four different answers. Here is the list with the status of each entry stated plainly.</p>
      <div class="walkthrough-note"><strong>Scope of this list</strong><p>This covers the public version 0.2 prototype and the developer's own published statements about planned work. It contains story spoilers for the one ending that exists. No fan-theorised or fan-named conclusion is listed as an ending, because no such thing exists as an ending until the developer ships it.</p></div>

      <h2>The short version</h2>
      <ul>
        <li><strong>Playable now: 1.</strong> The "Missing" ending — a bad ending on Day 1.</li>
        <li><strong>Announced as planned: 4.</strong> Pierrot (romance), Harlequin (romance), Protagonist (no romance), and "All together" (poly).</li>
        <li><strong>Route options confirmed: 4.</strong> Pierrot, Harlequin, both of them, or neither of them.</li>
        <li><strong>Routes that do not exist: Jester, Ticket Taker, Doctor.</strong></li>
        <li><strong>Official total number of endings: none published.</strong> The developer has said multiple endings are planned but cannot give a count.</li>
      </ul>

      <h2>The one ending that exists</h2>
      <p>Version 0.2 contains a single ending, and it is a bad one. It is reached on Day 1, and the condition is deliberately simple: if the protagonist does nothing while Pierrot is being mocked by a man in front of a crowd, the protagonist is handed a pink ticket by an unknown figure, taken to the pink tent, and refused entry by every member of the circus. The game states plainly that the protagonist failed to catch Pierrot's attention and met a tragic end.</p>
      <p>That is a real ending with real consequences, not a placeholder — and it is the entire content of the ending category in the current build. It is also, structurally, the game's argument in miniature: a protagonist who does not engage with the central conflict is quietly removed from it.</p>
      <div class="walkthrough-tip"><strong>Record it rather than avoiding it</strong><p>The "Missing" ending is the only outcome the build officially offers, so reaching it completes the current prototype rather than ruining it. If a guide tells you to reload and never see it, it is treating the ending as something to protect rather than something that exists.</p></div>

      <h2>The four planned endings</h2>
      <p>The developer lists four conclusions on the official page and in the official FAQ. Two are romance endings, one is explicitly romance-free, and one is a poly ending.</p>
      <ul>
        <li><strong>Pierrot's ending (romance)</strong> — the protagonist ends with Pierrot. Listed as planned work and repeatedly described as still in development.</li>
        <li><strong>Harlequin's ending (romance)</strong> — the protagonist ends with Harlequin. The script for it is not finished.</li>
        <li><strong>Protagonist's ending (no romance)</strong> — the protagonist ends the story without a romance. The developer has confirmed this route exists as a concept and that friendships can still be chosen alongside it.</li>
        <li><strong>"All together" (poly)</strong> — the protagonist falls in love with Pierrot and Harlequin at the same time. A distinct listed conclusion, not a variant of either romance route.</li>
      </ul>
      <p>It is important not to convert this list into a number. The developer has been asked directly how many endings the finished game will have and has said that multiple are planned but no figure can be given, because the script is still a work in progress. A page that states "The Freak Circus has five endings" has taken four named planned conclusions plus one implemented one and produced a total the developer has never stated.</p>

      <h2>Which characters can be routed to</h2>
      <p>The official answer is narrow: Pierrot, Harlequin, both of them, or neither. The Protagonist route is the "neither" option — confirmed to involve no romance, while still allowing you to choose to befriend the cast.</p>
      <p>There is no route for Jester, Ticket Taker, or Doctor. The developer has said that if more routes are added later, they would most likely arrive as an add-on or DLC, and that this is not decided. Making the remaining characters romance options is described as a possibility rather than a commitment — a distinction that matters, because fan guides frequently describe those routes in the present tense as though they are merely hidden.</p>
      <p>Two claims that circulate widely do not correspond to anything the developer has described: that the Jester route "unlocks on Day 2", and that the Doctor has a "Clean Hands" ending. The Day 2 update added characters, animated sprites, a redesigned menu, and an Android version — not new routes.</p>

      <h2>Why guides disagree about the count</h2>
      <p>Different sites answer different questions. Some count only what is playable, some count only what the developer has named, and some count a mixture of planned conclusions and fan theorising. Sorting any claim into three buckets — implemented, planned, or unverified — resolves the disagreement faster than arguing about the number.</p>
      <p>Two caveats apply to the planned list. The script is still being written, so the set of conclusions can change before any of them ships. And Day 3 is where new conclusions are being written now, which makes the current list a snapshot of an in-progress plan rather than a finished catalogue.</p>

      <h2>What this means for playing</h2>
      <p>Treat the prototype as the first two days of a three-day story. What is available is an opening arc that establishes the cast, the rivalry, and one failure ending. The route structure exists in the branching; the conclusions do not yet exist in the build. Playing the current version is a way of seeing how the branching works, not a way of completing the game.</p>
      <p>For the fuller breakdown with sources, see the <a href="/endings">endings and routes guide</a>; for what is still being written, see the <a href="/day-3">Day 3 tracker</a>.</p>
    `,
  },
  {
    slug: 'five-characters-overview',
    title: 'The Five Characters of The Freak Circus',
    description: 'A single-page overview of the five introduced characters — Pierrot, Harlequin, Jester, Doctor and Ticket Taker — with heights, ranks, and route status.',
    date: '2026-10-01',
    tags: ['Characters', 'Overview', 'Version 0.2'],
    image: '/images/characters/jester-1.webp',
    imageAlt: 'Jester, the authority figure of The Freak Circus',
    readingTime: '10 min read',
    content: `
      <p class="article-lede">Version 0.2 introduces five characters, and all five have their own introduction scenes in the public build. That number is often the source of a second, wrong assumption — that five introduced characters means five available routes. It does not. Two of them have planned romance routes, three have none, and none of the planned endings is playable yet.</p>
      <div class="walkthrough-note"><strong>How to read this overview</strong><p>Heights, age-order positions, and strength ranks come from the developer's published chart. Route and ending status follow the developer's own statements. Personality and relationship details attributed to the fandom wiki are labelled as such, because most of the interesting detail about this cast comes from story material rather than from developer posts.</p></div>

      <h2>The cast at a glance</h2>
      <ul>
        <li><strong>Pierrot</strong> — 198 cm, third oldest, strongest. The silent obsession at the centre of the story and the taller of the two romance leads.</li>
        <li><strong>Harlequin</strong> — 187 cm, youngest, tied second for strength. Pierrot's "seductive rival" and the shorter of the two romance leads.</li>
        <li><strong>Jester</strong> — 192 cm, fourth oldest, tied second for strength. The authority figure who makes the circus feel like an institution. No route.</li>
        <li><strong>Doctor</strong> — 207 cm, second oldest, third strongest. The tallest of the five and one of the more clinical presences in the cast. No route.</li>
        <li><strong>Ticket Taker</strong> — 183 cm, oldest, weakest. The keeper of the threshold and the character tied most closely to the branching. No route.</li>
      </ul>
      <p>Three facts apply to all five at once. The height chart was published by the developer as a reference used when drawing the sprites, which is why the numbers are canonical. The age order is relative only — no numeric age exists for anyone. And the strength ranking was published as an aside to a fan question, so it reads as characterisation rather than as a stat screen.</p>

      <h2>Pierrot</h2>
      <p>The character the game is built around. The official synopsis calls him "the silent yandere" — the developer's own description, and the reason every gesture he makes carries weight in a medium that runs on dialogue. The fandom wiki characterises him as gentle and polite on the surface while stalking the protagonist, and as protective of both the protagonist and Columbina; it also records a developer answer that Pierrot would never abandon the protagonist, emphatically so. A Pierrot romance ending is planned and in development.</p>
      <h2>Harlequin</h2>
      <p>Where Pierrot works by constancy, Harlequin works by performance. The official synopsis calls him Pierrot's "seductive rival" and frames the game as led by one or the other. The fandom wiki describes him as carefree, sadistic, teasing, and secretly jealous — and notes that he is uncomfortable with affection, which reframes the rivalry as something he wants as much as Pierrot does. His romance ending is planned and not implemented.</p>
      <h2>Jester</h2>
      <p>The character most often misdescribed online, usually by giving him a romance route he does not have. He functions as the authority figure of the circus: the fandom wiki calls him the leader and main antagonist, calm and collected rather than volatile, and the fandom also describes him as controlling the "Fools" and referring to humans as strays. Those details are interpretation of his scenes rather than developer statements, but his authority over the other characters is consistent across the build. There is no Jester route and no Jester ending.</p>
      <h2>Doctor</h2>
      <p>The tallest of the five at 207 cm and only the third strongest, which the fandom wiki explains through a preference for wit over brute force. His introduction leans hardest into restraint, examination, and medical-horror imagery, and his composure is described as breaking visibly in a particular emotional register. He has no route and no ending, and the "Clean Hands" ending attributed to him by some older fan pages is not supported by any first-party source.</p>
      <h2>Ticket Taker</h2>
      <p>Oldest, shortest, and last in the strength ranking — and yet one of the better-documented characters in the official material, because the ticket system is one of the few confirmed mechanics in the game. The developer has confirmed eight ticket types, with pink sitting below the main cast and red and green signalling a choice the protagonist makes. He has no route, and some long-standing fan guides describe a romanceable Ticket Taker route that unlocks through persistence and careful dialogue; no such route exists in the public build.</p>

      <h2>Who can actually be routed to</h2>
      <p>The confirmed route options are Pierrot, Harlequin, both, or neither. The "neither" option corresponds to the Protagonist's ending, which involves no romance but still allows friendships with the cast. Jester, Ticket Taker, and Doctor have no routes; the developer has described making them romance options as a possibility rather than a commitment, and suggested any such addition would most likely arrive as an add-on or DLC.</p>
      <div class="walkthrough-tip"><strong>How to use a character profile</strong><p>Read the confirmed section first and the fandom section second. The confirmed items will still be true after the next update; the fandom material is interpretation of the current build and may be revised when more scenes land. Profiles that mix the two without labelling them are the ones worth being careful with.</p></div>

      <h2>What is missing from the cast</h2>
      <p>Columbina is a former member of the circus whose death shapes the backstory of both leads, but she is not one of the five introduced characters and does not appear in the published height chart. Her design is still in production and the developer has deliberately withheld details. Anyone writing about this cast should treat her as a real part of the story's history and as an unfinished character at the same time.</p>
      <p>For the full profiles, see the <a href="/characters/pierrot">Pierrot</a>, <a href="/characters/harlequin">Harlequin</a>, <a href="/characters/jester">Jester</a>, <a href="/characters/the-doctor">Doctor</a>, and <a href="/characters/ticket-taker">Ticket Taker</a> pages, plus the <a href="/characters/heights">height and ranking guide</a>.</p>
    `,
  },
  {
    slug: 'ticket-types-explained',
    title: 'The Ticket System in The Freak Circus Explained',
    description: 'The developer has confirmed eight ticket types in The Freak Circus, with pink, red and green carrying specific meanings for how the story branches.',
    date: '2026-10-05',
    tags: ['Tickets', 'Mechanics', 'Branching'],
    image: '/images/characters/ticket-taker-1.webp',
    imageAlt: 'Ticket Taker, the character who controls the game’s ticket system',
    readingTime: '8 min read',
    content: `
      <p class="article-lede">Tickets are one of the few systems in The Freak Circus that the developer has explained directly, and the explanation covers more ground than most fan guides admit. The confirmed count is eight ticket types. Pink sits below the main cast, red and green mark a choice the protagonist makes, and a pink-and-red combination means the Ticket Taker takes the red option automatically.</p>
      <div class="walkthrough-note"><strong>What is documented and what is not</strong><p>The number of ticket types and the meaning of pink, red, and green come from the developer. The complete roster of all eight — the names and colours of the remaining types — has not been published, so this article does not guess at them. The identification of the café figure who hands over a pink ticket as the Ticket Taker in disguise is fandom-derived and is marked as such.</p></div>

      <h2>What the developer has confirmed</h2>
      <ul>
        <li><strong>Eight ticket types exist.</strong> This is a count, confirmed directly.</li>
        <li><strong>Pink sits below the main cast.</strong> It is the tier you receive when you are not being pursued by the performers.</li>
        <li><strong>Red and green indicate a choice the protagonist makes.</strong> These two colours mark a decision belonging to the player.</li>
        <li><strong>Pink and red combined means the Ticket Taker takes the red option automatically.</strong> In that case the choice is made for you, by the character who administers the whole system.</li>
      </ul>
      <p>That last rule is the most useful one for reading scenes, because it tells you that the game does not simply hand you choices and let you pick freely. Some decisions are made by the circus. A protagonist who fails to act does not get a neutral outcome; they get the circus's outcome.</p>

      <h2>The pink ticket and the one ending that exists</h2>
      <p>The pink ticket appears in the current build, and it is the object that begins the game's only implemented ending. On Day 1, if the protagonist does nothing while Pierrot is being mocked by a man in front of a crowd, an unknown figure hands the protagonist a pink ticket. The protagonist is taken to the pink tent and refused entry by every member of the circus, and the game states that they failed to catch Pierrot's attention and met a tragic end.</p>
      <p>The fandom wiki identifies that café figure — the "Unknown" man — as the Ticket Taker in disguise. That identification is fan-derived, but it connects directly to the one ending the build contains, and it explains why the character with no route of his own turns out to matter mechanically.</p>
      <div class="walkthrough-tip"><strong>Do not treat tickets as collectibles</strong><p>Version 0.2 does not establish a conventional inventory in which tickets are collected to unlock future endings. Tickets here mark standing and choice, not a checklist. If a guide describes a ticket shelf, a ticket counter, or a hidden ticket per ending, it is describing a system the build does not have.</p></div>

      <h2>Why a supporting character holds the branching</h2>
      <p>The Ticket Taker has no route and no ending, and he is last of five in the strength ranking and the shortest of the cast. In a game whose route options are Pierrot, Harlequin, both, or neither, that would normally make him a background figure. The ticket system is the reason he is not.</p>
      <p>Think about what a ticket does inside the fiction: it decides who you are allowed to become. A pink ticket puts you below the performers, which is precisely the position the "Missing" ending puts the protagonist in — outside, watched, turned away at the tent door. Red and green mark the choices that belong to the player. And when pink and red combine, the authority figure takes the player's choice away. A character who administers that rule is not a doorman; he is the mechanism by which the circus manages the protagonist.</p>
      <p>It also fits his characterisation. The fandom wiki describes him as obedient and dedicated to the circus's agenda, mature and professional, preoccupied with cleanliness and organisation, and states his principle plainly: around here, no one breaks character. The system is the character. A performance that runs on tickets needs someone to hand them out.</p>

      <h2>How the colours read in practice</h2>
      <ul>
        <li><strong>Pink</strong> — you are in the building but not in the show. This is the tier that ends the only ending currently in the build.</li>
        <li><strong>Red</strong> — a decision attributed to you, and one the circus can override when it is paired with pink.</li>
        <li><strong>Green</strong> — a decision attributed to you, without the override.</li>
        <li><strong>The other five types</strong> — not individually documented. Their count is confirmed; their identities are not public.</li>
      </ul>
      <p>It is worth being honest about how little of this is visible yet. Version 0.2 is an introduction-heavy prototype with one ending, and the ticket system is described as a rule set rather than demonstrated in depth. A player in the current build will mostly see pink in practice, plus red and green where a choice is offered. Reading the system as a full branching map goes beyond what the build currently shows.</p>

      <h2>What is confirmed versus what the fandom adds</h2>
      <ul>
        <li><strong>Confirmed by the developer:</strong> there are eight ticket types; pink sits below the main cast; red and green indicate a protagonist choice; pink plus red means the Ticket Taker takes the red option automatically; and the Ticket Taker has no route.</li>
        <li><strong>From the current build:</strong> the protagonist is handed a pink ticket during Day 1, and that ticket leads directly into the "Missing" ending.</li>
        <li><strong>Fandom-derived:</strong> the café "Unknown" man being the Ticket Taker in disguise, the "reality manipulator" epithet, and the details of his history with Columbina.</li>
      </ul>
      <p>For how this connects to the endings, see the <a href="/endings">endings guide</a>; for the character's own profile, see the <a href="/characters/ticket-taker">Ticket Taker page</a>.</p>
    `,
  },
  {
    slug: 'columbina-what-is-known',
    title: 'What Is Known About Columbina in The Freak Circus',
    description: 'Columbina shaped both leads’ backstories, but her design is still in production — what the developer has confirmed about her and what the fandom adds.',
    date: '2026-10-07',
    tags: ['Columbina', 'Lore', 'Character facts'],
    image: '/images/characters/columbina-1.webp',
    imageAlt: 'Columbina, the former circus member at the centre of both leads’ backstories',
    readingTime: '8 min read',
    content: `
      <p class="article-lede">Columbina is the character everyone recognises and nobody can describe with confidence. Her death shapes the backstory of both romance leads, and the fandom has built a substantial reading of her around that. At the same time, the developer has said her design is still in production and that details are being deliberately withheld. Both of those things are true at once, and this article is about keeping them apart.</p>
      <div class="walkthrough-note"><strong>Scope of this article</strong><p>This covers what the developer has confirmed, what the fandom wiki records, and where the two conflict. It contains story spoilers about the shared backstory of the two leads. No claim about Columbina is presented as settled unless the developer has stated it.</p></div>

      <h2>What the developer has confirmed</h2>
      <ul>
        <li><strong>She is a former member of the circus.</strong> Her history with the company is behind her, not inside it.</li>
        <li><strong>Her death shapes the backstory of both leads.</strong> Pierrot and Harlequin are both running away from something that involves her.</li>
        <li><strong>The protagonist is not connected to Columbina.</strong> The developer has confirmed this directly, which is worth stating plainly because fan theories frequently place the protagonist in her story.</li>
        <li><strong>"Columbina" means "little dove".</strong> The developer has confirmed the meaning of the name.</li>
        <li><strong>Her design is still in production, and details are being deliberately withheld.</strong> The shape of the character is not finished and the developer has said so.</li>
        <li><strong>There is no official height for her.</strong> The published height chart covers the five introduced characters, and she is not among them.</li>
      </ul>
      <p>That last point connects to a detail in the development updates. A recent official update mentions a new, very short scene that refers to her, and notes that her design is planned so that flashback silhouettes can be kept consistent. In other words, the story is confirming her presence while the character is still being drawn — an unusual position for a fan guide to write about, and the reason this article is deliberately short on characterisation.</p>

      <h2>What the fandom wiki records</h2>
      <p>The fandom wiki is the source for most of what people say about Columbina, and two of its claims matter enough to name.</p>
      <p>The first is that she and Pierrot never had a romantic relationship. This contradicts a reading of the circus's own love-story narration and cuts against the assumption that the tragedy at the centre of Pierrot's past was a romance. The developer has separately stated that Pierrot has moved on from that history and has grown since — which suggests the backstory is a source of character rather than a fixed wound.</p>
      <p>The second is an implied link to Harlequin's role in her death: the wiki records that Harlequin killed her to "save" her, and that Pierrot refused to take part. The wiki frames this as implication rather than statement, and it should be read the same way. The developer has confirmed the general shape of the circus's history in AMA answers, so the story is real; the specific reading of Harlequin's part in it is not first-party confirmed.</p>
      <div class="walkthrough-note"><strong>Marking fandom material as fandom material</strong><p>"The fandom wiki records that Harlequin killed her to save her" is a different claim from "Harlequin killed her to save her". The first can be checked against a source. The second cannot, because no source states it. Guides that drop the attribution are making an editorial decision the evidence does not support.</p></div>

      <h2>Why the withheld details are deliberate</h2>
      <p>There is a reason the developer is keeping her specifics back, and it is not an accident of scheduling. A character whose design is unfinished cannot be described in final terms — the height, the costume, and the silhouette are all still being decided, and any guide that states them would be describing an intention rather than a fact. It is also why no official birthday and no official numeric age exist for her, and why the "one confirmed birthday" in this cast belongs to someone else entirely.</p>
      <p>The practical consequence for a reader is that any page describing Columbina in detail — her appearance, her height, her exact role on the night she died — is describing something that has not been decided yet, whatever its confidence level suggests.</p>

      <h2>Where she appears in the current build</h2>
      <ul>
        <li><strong>As backstory.</strong> Both leads' histories circle her, and the current build reveals that history in fragments rather than in a scene.</li>
        <li><strong>As a name.</strong> Official maintenance notes record that a previously incomplete line surfaced when her name was entered, and a more recent development update describes a new short scene that mentions her.</li>
        <li><strong>As a silhouette.</strong> The development notes reference flashback silhouettes, which implies that she is visible in the past even while her design is unfinished.</li>
      </ul>
      <p>The fact that she is referenced in the build while still being in production is not a contradiction the developer needs to explain. It is how the work is being done, and it is the reason a careful guide can talk about her without describing her.</p>

      <div class="walkthrough-tip"><strong>A practical way to keep up with her</strong><p>Do not wait for a wiki page to summarise her for you. Watch the short scenes that mention her, note the wording the game itself uses for her, and treat every descriptive detail you find elsewhere as a proposal until the developer shows the finished design. That way the story stays ahead of the speculation, which is the only way this character's development actually gets to surprise you.</p></div>

      <h2>How to talk about Columbina responsibly</h2>
      <ul>
        <li>Attribute fandom claims to the fandom, explicitly and every time.</li>
        <li>Do not publish a height, an age, a birthday, or a costume as fact for her.</li>
        <li>Do not place the protagonist in her story; the developer has ruled that out.</li>
        <li>Do read the "never romantic with Pierrot" record as correcting a common misreading, not as adding a new romance.</li>
        <li>Do treat the "killed her to save her" thread as an implication the fandom draws, not as a confirmed event.</li>
      </ul>
      <p>She is the emotional centre of a story about two people who cannot stop competing, and the reason both of them are damaged. That much is safe to say. The rest of the picture will be worth reading when the developer finishes drawing her and releases the details — and this page will be updated then rather than filled in now.</p>
    `,
  },
  {
    slug: 'day-3-release-status',
    title: 'The Freak Circus Day 3: Release Status and Verified Progress',
    description: 'A verified status report on Day 3 in The Freak Circus — what the official development updates confirm, what the beta scope means, and why no date exists.',
    date: '2026-10-10',
    tags: ['Day 3', 'Updates', 'Fact check'],
    image: '/images/community/weekly-update-day3-20261009.jpg',
    imageAlt: 'An official development update image from the Day 3 build',
    readingTime: '9 min read',
    content: `
      <p class="article-lede">Day 3 is being worked on, is not finished, and has no announced release date. That combination is the entire honest summary. Everything else circulating about Day 3 — months, weekends, countdowns — is inference built on top of development activity, and the developer has explicitly asked that outside date claims not be repeated.</p>
      <div class="walkthrough-note"><strong>Status at a glance</strong><p>Public build today: version 0.2. Day 3 is in active development. No release date, no month, and no weekend has been announced. The figures quoted below are beta-scope figures, not whole-feature percentages, and the difference matters.</p></div>

      <h2>What the official updates confirm</h2>
      <p>The developer publishes weekly development updates and AMA answer series on the official Tumblr, and the Day 3 posts there form a reliable record of work in progress. Recent entries describe:</p>
      <ul>
        <li><strong>Continued coding with placeholder assets.</strong> Newly coded scenes still use placeholders and work only partially, with transitions, choices, and images to be polished once those scene decisions are settled.</li>
        <li><strong>A new, very short scene referring to Columbina.</strong> Her character design is planned soon so that flashback silhouettes stay consistent.</li>
        <li><strong>Beta progress.</strong> An earlier update described one part of the Day 3 beta as finished and put the beta at roughly 30–40% of the full update. A later update described being almost halfway through the content planned for the beta test.</li>
        <li><strong>A larger script than Day 2</strong>, with additional bad ending content and hidden scenes described.</li>
        <li><strong>Café scene work in progress</strong>, with some choices and situations needing further revision, and more sketches and possibly new backgrounds still needed.</li>
        <li><strong>New sprites selected</strong> for Harlequin, Pierrot, and Jester, with revisions and new sprites for Doctor planned when development reaches his scene.</li>
      </ul>
      <p>None of that is a release schedule. Writing, artwork, sprites, and programming updates confirm that development is active; they do not mean Day 3 is finished. Day 3 should only be treated as released when a new public build actually appears.</p>
      <div class="walkthrough-tip"><strong>Read the percentage carefully</strong><p>"30–40% of the full update" and "almost halfway through the planned beta content" describe different scopes. The first measures the whole update; the second measures the smaller slice of content earmarked for the beta. Neither one is a percentage of the finished game, and a beta is itself a milestone rather than a release.</p></div>

      <h2>Why no date is being given</h2>
      <p>The developer's position is consistent across the official FAQ and the Askbox answers: no release date has been announced, and date claims from outside the official posts should not be repeated. That is a deliberate instruction to the fandom, not an oversight.</p>
      <p>There is practical context for it. The same period of development has included addressing unauthorised Google Play uploads, and the developer has noted that an official store release would receive its own announcement. A date announced before a build is finished, and before the distribution question is settled, would be a promise that could not be kept.</p>

      <h2>What Day 3 is expected to change</h2>
      <p>The planned shape of Day 3 is larger than what came before it, and that has direct consequences for what the current build does and does not show.</p>
      <ul>
        <li><strong>New bad ending content</strong> is described in the development posts, which means the ending category in the build will grow beyond the single "Missing" ending that exists today.</li>
        <li><strong>Hidden scenes</strong> are also described, which is a different thing from a route — a hidden scene is content, not a conclusion.</li>
        <li><strong>More branches.</strong> The script is bigger than Day 2's, and the branching work described includes sections with many choices that need extra testing.</li>
        <li><strong>Columbina's story.</strong> The new short scene and the flashback silhouette work both point to more of the shared backstory surfacing.</li>
      </ul>
      <p>What has not been announced is any of the four planned endings shipping in Day 3. The planned endings remain planned.</p>

      <h2>What is confirmed about the release itself</h2>
      <p>Some things about how Day 3 will be delivered are settled, even though the date is not.</p>
      <ul>
        <li><strong>It will be a public build on the official page.</strong> The developer has confirmed the itch.io page as the only official page, so Day 3 will appear there rather than through a third-party launcher or a separate store front.</li>
        <li><strong>Platforms are already established.</strong> Version 0.2 exists for browser, Windows, macOS, Linux, and Android, so the same set is the reasonable expectation for Day 3 — though no per-platform release order has been announced.</li>
        <li><strong>Any official store release would be announced separately.</strong> The developer has noted that a store version would get its own announcement rather than arriving quietly alongside the itch.io update.</li>
        <li><strong>Unauthorised uploads are being dealt with.</strong> Time went into addressing unauthorised Google Play uploads, which is a distribution problem rather than a development one — but it does mean the route a player takes to an official release is not entirely simple yet.</li>
      </ul>

      <h2>How to check the current status yourself</h2>
      <ol class="walkthrough-steps">
        <li><strong>Open the official itch.io page</strong> and confirm the listed build is still version 0.2.</li>
        <li><strong>Read the devlog entries in order.</strong> They are dated and they are first-party.</li>
        <li><strong>Check the official Tumblr</strong> for the most recent weekly update and the AMA answer series.</li>
        <li><strong>Treat any date you find elsewhere as unverified</strong> unless it appears in one of those places.</li>
        <li><strong>Ignore countdown pages.</strong> A countdown is a fan estimate with a clock attached.</li>
      </ol>
      <p>The developer has confirmed there is no official Discord server, so any server that is not linked from the official itch.io, Tumblr, Patreon, or Bluesky pages should be treated as fan-run or unauthorised. That rule applies to date announcements too: a date quoted in a fan Discord is a fan date.</p>

      <h2>What to do with the current build in the meantime</h2>
      <p>Keep your saves, note which build created them, and avoid overwriting the first-playthrough slot. When the next build arrives, read its change notes before assuming that version 0.2 route advice still applies. A prototype's branching can be reorganised between builds, and the ending list will change as the script is finished.</p>
      <p>For the day-by-day record, see the site's <a href="/day-3">Day 3 tracker</a>, and for what the current build already contains, see the <a href="/blog/current-prototype-guide">prototype guide</a>.</p>
    `,
  },
  {
    slug: 'browser-vs-download',
    title: 'Browser Version or Download? Which Way to Play The Freak Circus',
    description: 'A practical comparison of the browser build and the desktop and Android downloads of The Freak Circus, including how saving behaves differently.',
    date: '2026-10-13',
    tags: ['Browser', 'Download', 'Setup'],
    image: '/images/home/about-game.webp',
    imageAlt: 'The Freak Circus, the only official itch.io page for the game',
    readingTime: '8 min read',
    content: `
      <p class="article-lede">Both versions run the same version 0.2 build of the same story, so the choice is not about content. It is about reliability, setup, and how much of your progress you are willing to trust a browser with. For most players the answer is: browser first, download before you start caring about saves.</p>
      <div class="walkthrough-note"><strong>Everything comes from one place</strong><p>The developer has stated that the itch.io page is the only official page for the game, and has asked that the game not be re-uploaded or reposted. There is no official Discord server. If a page offers you a "full download" elsewhere, it is unlicensed at best, and the site is not linking it.</p></div>

      <h2>What is available</h2>
      <ul>
        <li><strong>Web browser (HTML5)</strong> — runs in the browser through the official itch.io page. No installation.</li>
        <li><strong>Windows</strong> — PC build, version 0.2.</li>
        <li><strong>macOS</strong> — Mac build, version 0.2.</li>
        <li><strong>Linux</strong> — Linux build, version 0.2.</li>
        <li><strong>Android</strong> — APK build, version 0.2.</li>
      </ul>
      <p>All of it is name-your-own-price, so the full build can be downloaded for free and paying is optional support for a developer who has described the project as largely solo work.</p>

      <h2>Choose the browser build when</h2>
      <p>The browser version is the fastest way to start and the easiest way to read a guide while playing. There is no archive to extract, no platform to match, and nothing to uninstall later. It is also the sensible choice on a shared or temporary machine where you would rather not leave game files behind.</p>
      <p>Browser play is a maintained path rather than an accident: the developer has documented browser-specific freezes — including one in the Ticket Taker tent and some animated sections — and shipped fixes for them. The known remaining caveat is that skipping some scenes very quickly can leave visual effects out of sync, so give the browser version a little patience when you click through.</p>

      <h2>Choose a download when</h2>
      <p>The desktop builds are the better choice for repeated playthroughs, and for anyone who plans to keep a first-run save intact. A local install is not subject to browser storage limits, keeps its own copy of the game files, and gives you the full Ren'Py interface with rollback in history — which is the feature that makes branch comparison practical rather than tedious.</p>
      <div class="walkthrough-tip"><strong>Extract desktop archives fully before launching</strong><p>Desktop packages arrive compressed. Extract the whole archive and keep the application together with its bundled files, then launch it. Launching an executable from inside an archive is the most common cause of a build that appears to start and then misbehaves.</p></div>

      <h2>How saving differs, and what is not documented</h2>
      <p>This is where the two versions genuinely diverge, and where published advice is least reliable.</p>
      <ul>
        <li><strong>Both use the engine's standard interface.</strong> The Freak Circus is a Ren'Py release, so saving uses the normal save and load buttons, a slot list, quick save and quick load, and rollback in history.</li>
        <li><strong>Both offer a Day 2 entry point.</strong> The menu includes a Day 2 button with a short introduction, so you can continue into Day 2 without replaying Day 1.</li>
        <li><strong>Browser saves live in browser storage.</strong> Clearing site data, opening a private window, or running a strict privacy configuration can remove them without warning, and they are tied to the browser profile that created them. This is the single most common reason players report losing progress.</li>
        <li><strong>Official save documentation does not exist.</strong> The developer has not published save locations, slot counts, autosave behaviour, or whether browser saves can be moved into a desktop build. Any guide giving you a specific path, a slot count, or a guaranteed transfer procedure is describing engine behaviour rather than an official answer for this game.</li>
      </ul>
      <p>Ren'Py does offer export and import actions for saves in its engine overlay, and whether they work reliably for moving a browser save into a desktop build of this game has not been confirmed. Treat it as worth trying rather than a procedure, and back up anything you care about before experimenting.</p>

      <h2>A simple rule</h2>
      <ul>
        <li><strong>Reading it once, on a shared machine, or without installing anything:</strong> use the browser build.</li>
        <li><strong>Planning replays, comparing branches, or keeping a long-term save:</strong> download for your platform.</li>
        <li><strong>On a phone:</strong> the Android APK is the supported option.</li>
        <li><strong>Regardless of platform:</strong> take the download from the official itch.io page, and keep your own backup copies of any save you would be annoyed to lose.</li>
      </ul>
      <p>Neither version gives you more story than the other. Version 0.2 contains the same two days and the same single ending either way, so the practical difference is entirely about how safely your progress survives.</p>

      <h2>Other differences worth knowing</h2>
      <p>Three smaller things separate the versions, and none of them is about quality.</p>
      <ul>
        <li><strong>Languages and voice.</strong> The game ships in English, Brazilian Portuguese, and Simplified Chinese, with the Chinese translation revised for version 0.2. Voice acting is English only, performed by Darthsuki, so the language setting changes text rather than audio in every version.</li>
        <li><strong>Input and text handling.</strong> The desktop builds support the usual keyboard, mouse, and windowed conveniences, including scrolling back through a scene. Browser play depends on the page, which is fine for a straightforward read-through but more awkward for comparing two branches side by side.</li>
        <li><strong>Menus and interface.</strong> The menu includes a Day 2 entry point in both versions, which is the single most useful feature for anyone who wants to return to the current content without replaying Day 1.</li>
      </ul>
      <p>There is also a version-agnostic warning that applies to both: the game is rated 18+, and its published content warnings include blood, death, murder and gore, allusions to cannibalism, abuse, kidnapping, non-consensual use of drugs, physical domination, and non-consensual physical contact. Read that list before deciding how much of the story you want to read about in advance.</p>
      <p>For the platform list and safety notes, see the <a href="/download">download guide</a>; for how saving behaves, see the <a href="/save">saving guide</a>.</p>
    `,
  },
  {
    slug: 'why-only-one-ending',
    title: 'Why The Freak Circus Only Has One Ending Right Now',
    description: 'The Freak Circus ships one playable ending because it is a prototype — how the implemented bad ending, the four planned endings and Day 3 fit together.',
    date: '2026-10-16',
    tags: ['Endings', 'Version 0.2', 'Development'],
    image: '/images/home/faq.webp',
    imageAlt: 'The Freak Circus current prototype, version 0.2',
    readingTime: '8 min read',
    content: `
      <p class="article-lede">The reason there is only one ending is not that the other endings are hidden, or that they unlock in a later playthrough of version 0.2, or that you have missed a condition. The reason is that the game is a prototype, and the endings are the part of a script that gets written last.</p>
      <div class="walkthrough-note"><strong>What this article explains</strong><p>The relationship between the single implemented ending, the four endings the developer has named, and the state of the script. It contains spoilers for the one ending that exists in the public build.</p></div>

      <h2>One ending, and it is a bad one</h2>
      <p>Version 0.2 contains exactly one ending: "Missing". It is reached on Day 1 when the protagonist does nothing while Pierrot is being mocked by a man in front of a crowd. An unknown figure hands the protagonist a pink ticket, takes them to the pink tent, and every member of the circus refuses them entry. The game states that the protagonist failed to catch Pierrot's attention and met a tragic end.</p>
      <p>That ending is not a placeholder for a good one. It is a finished piece of writing with a theme attached — a protagonist who declines to engage with the central conflict is removed from it — and it is the only conclusion the current build officially offers.</p>

      <h2>Four conclusions are planned, and none of them is in the build</h2>
      <ul>
        <li><strong>Pierrot's ending</strong> — a romance conclusion with Pierrot.</li>
        <li><strong>Harlequin's ending</strong> — a romance conclusion with Harlequin.</li>
        <li><strong>Protagonist's ending</strong> — a conclusion with no romance, though friendships can still be chosen alongside it.</li>
        <li><strong>"All together"</strong> — the protagonist falls in love with Pierrot and Harlequin at the same time.</li>
      </ul>
      <p>These are named by the developer on the official page and in the official FAQ, and they are repeatedly described as still in development. There is no published trigger list for any of them, because there is nothing to trigger. A step-by-step guide to unlock the Harlequin ending would be describing a build that does not exist publicly.</p>
      <h3>And there is no official total</h3>
      <p>It is easy to add the numbers up and get five. That total has never been stated. The developer has said multiple endings are planned but cannot give a count, because the script is still a work in progress — and a planned conclusion can be merged, reworked, or added to before it ships.</p>

      <h2>Endings are the last thing a script produces</h2>
      <p>This is the practical reason the current build looks the way it does. A branching narrative has to be built from the inside out: the day needs its scenes, the scenes need their choices, the choices need consequences that feed later scenes, and only then does the shape of a conclusion exist. The current build has Days 1 and 2 with their introductions, their branches, and their scene variations, plus one ending placed where it demonstrates a consequence.</p>
      <p>The official feature list is unusually honest about this. It records five introduced characters, one bad ending implemented, and character introductions complete with the rest of the story still in development. Those are four separate claims, and they are consistent with a project that has finished its opening and is still building the middle and the end.</p>
      <div class="walkthrough-tip"><strong>How to test whether a branch is really different</strong><p>Because there are no endings to compare, the meaningful test is whether a scene changes. Load a save, change one meaningful response, and compare what follows. If two runs produce a reproducible difference in dialogue, staging, or who appears, the branch is real. If they produce one different line, that is a variation, not a route.</p></div>

      <h2>Day 3 is where the conclusions are being written</h2>
      <p>The next in-game day is in active development, and the official updates describe a script larger than Day 2's, with additional bad ending content and hidden scenes. The ending category is explicitly the kind of thing that grows: the current build lists one bad ending, and the update notes refer to more ending content being written.</p>
      <p>That is also why there is no release date. The developer has asked that outside date claims not be repeated, which reads as an attempt to keep a schedule from forming around work that is not finished. Development updates describe beta progress — one part of the beta finished, the beta at roughly 30–40% of the update, later nearly halfway through the planned beta content — but a beta is a milestone, not a release.</p>

      <h2>What this means for a player today</h2>
      <ul>
        <li><strong>There is nothing to unlock.</strong> Playing version 0.2 to its end reaches the "Missing" ending, and that is the complete ending content of the build.</li>
        <li><strong>Replays are still worth doing.</strong> The branching is real, and scene variations, character appearances, and different readings are all things the current build contains.</li>
        <li><strong>Do not buy or chase an "all endings" bundle</strong> for a game that currently has one ending. Nothing outside the official itch.io page is authorised anyway.</li>
        <li><strong>Keep your saves.</strong> Version 0.2 choices will not necessarily map onto the next public build, and the ending list will change.</li>
      </ul>
      <p>The honest summary is that The Freak Circus is two and a bit days of a three-day story, with the last day in production. What you can play is a well-built opening with real branches. What you cannot play is the ending — and for now, that includes the good ones.</p>
      <p>For the sourced list of endings and routes, see the <a href="/endings">endings guide</a>; for the development state, see the <a href="/day-3">Day 3 tracker</a>.</p>
    `,
  },
  {
    slug: 'reading-fan-guides-safely',
    title: 'How to Read Fan Guides Without Getting Misinformation',
    description: 'A method for evaluating any The Freak Circus fan guide — sort claims into implemented, planned and unverified, and spot the most common errors.',
    date: '2026-10-19',
    tags: ['Fact check', 'Guides', 'Community'],
    image: '/images/community/fanart-1.webp',
    imageAlt: 'Community artwork of The Freak Circus characters',
    readingTime: '9 min read',
    content: `
      <p class="article-lede">Every visual novel with a small, enthusiastic fandom eventually accumulates guides that disagree with each other, and some of them are confidently wrong. Reading them is not difficult if you have a method. The method is simple: sort every claim into three buckets — implemented, planned, or unverified — and refuse to let a claim move buckets because it appears often enough.</p>
      <div class="walkthrough-note"><strong>Why this matters here</strong><p>The Freak Circus has three unusual properties that make bad guides common: the game is a prototype with a single implemented ending, its cast has published measurements but no published ages, and a lot of the interesting character material comes from fandom wiki pages rather than developer posts. Each of those has produced a specific category of misinformation.</p></div>

      <h2>The three buckets</h2>
      <ul>
        <li><strong>Implemented.</strong> You can reach it in the public build right now. One ending qualifies: "Missing", the bad ending on Day 1 reached by doing nothing while Pierrot is being mocked.</li>
        <li><strong>Planned.</strong> The developer has named it, and it is not in a build. Four qualify: Pierrot, Harlequin, Protagonist, and "All together".</li>
        <li><strong>Unverified.</strong> No first-party source, but repeated widely. Save paths, slot counts, autosave schedules, exact ages and birthdays, total completion time, Day 3 release dates, and any specific number of endings.</li>
      </ul>
      <p>Most factual arguments about this game dissolve once every sentence is in a bucket. "The game has five endings" is a merge error: one implemented ending plus four planned ones, presented as a confirmed total the developer never gave.</p>

      <h2>Five questions to ask a guide</h2>
      <ol class="walkthrough-steps">
        <li><strong>Which build is this about?</strong> Version 0.2 is the current public build. A guide that never names a version is describing the author's memory.</li>
        <li><strong>Does it link a source?</strong> An official page, a devlog entry, an AMA answer, a Tumblr post. A guide that cannot point at one of these is interpreting.</li>
        <li><strong>Does it mark fandom material as fandom material?</strong> The costume details, the reason Pierrot is silent, Harlequin's role in Columbina's death — all useful, all from the fandom wiki, all worth labelling.</li>
        <li><strong>Does it say where the spoilers start?</strong> A guide that spoils Day 2's opening without warning is not more useful than one that does.</li>
        <li><strong>Does it hedge where it should?</strong> "Planned", "not implemented", "unconfirmed" are not weaknesses in a guide. They are the parts that will still be true after the next update.</li>
      </ol>

      <h2>The specific errors worth catching</h2>
      <h3>Romance routes for characters who do not have them</h3>
      <p>The confirmed route options are Pierrot, Harlequin, both, or neither. There is no Jester route, no Ticket Taker route, and no Doctor route. The developer has described making the remaining characters romance options as a possibility rather than a commitment, and any such route would most likely arrive as an add-on or DLC. Guides that describe a Ticket Taker route "unlocked through persistence and careful dialogue", a Doctor "Clean Hands" ending, or a Jester route that "unlocks on Day 2" are all describing things that do not exist. The Day 2 update added characters, animated sprites, a redesigned menu, and an Android version — not new routes.</p>
      <h3>A "good ending" that does not exist</h3>
      <p>There are no good endings implemented. The only ending in the build is a bad one, and the romance conclusions that are often described as the "good" outcomes are the same planned endings listed above — unfinished, and not guaranteed to be the outcomes fans expect.</p>
      <h3>Precise numbers with no source</h3>
      <p>Specific ages, birthdays, a height for Columbina, a total runtime, an exact number of endings, and a precise save location are all fan inventions dressed as data. The genuine measurements are the developer's height chart and the relative age order — and no numeric age has ever been published for anyone in the cast.</p>
      <h3>Dates for Day 3</h3>
      <p>No release date has been announced, and the developer has asked that outside date claims not be repeated. A countdown page is a fan estimate with a clock on it. The only date that counts is the one on the official itch.io page or in an official post.</p>

      <h2>Reading sources without trusting them blindly</h2>
      <p>The fandom wiki is genuinely valuable for this game and it is worth using — with a specific caveat. It compiles character material from the game's own scenes, which means its character descriptions are close to the source, while its inferences and dates are not first-party. The practical habit is to keep the two apart while you read.</p>
      <ul>
        <li><strong>What the wiki does well:</strong> costume detail, in-fiction explanations, relationship summaries, and the record of what the developer has answered in AMA threads.</li>
        <li><strong>What the wiki gets wrong:</strong> numeric ages and most birthdays, a height for Columbina, and readings of ambiguous story events stated more firmly than the evidence allows.</li>
        <li><strong>What to do:</strong> copy the description, keep the hedge.</li>
      </ul>
      <div class="walkthrough-tip"><strong>A one-line test for any claim</strong><p>Ask: "Could the developer contradict this tomorrow without anyone noticing?" If yes, the claim needs a hedge or an attribution. "The developer has confirmed eight ticket types" cannot be quietly contradicted. "Harlequin is 21" can, and has been.</p></div>

      <h2>One more thing: where you got the game</h2>
      <p>Before evaluating any guide, check its source links. The developer has stated that the itch.io page is the only official page for the game and has asked that the game not be re-uploaded or reposted. There is no official Discord server, so every server that is not linked from the official itch.io, Tumblr, Patreon, or Bluesky pages is fan-run or unauthorised.</p>
      <p>Guides that push a "mirrored download", a "verification" program, or a "patched" installer are not guides at all. Never install a separate program or disable antivirus protection to obtain this game.</p>

      <h2>A working habit</h2>
      <p>Read a guide's scope note first. If it says which build it covers, where its sources are, and which parts are still in development, the rest of it can be trusted in proportion. If it opens with a confident claim about an ending that does not exist, put it down — that is a guide that will confidently tell you the wrong thing about everything else too.</p>
      <p>For the verified version of the most-searched topics, start with the <a href="/endings">endings guide</a>, the <a href="/characters/heights">height guide</a>, and the <a href="/save">saving guide</a> — all of which separate confirmed facts from unverified claims in the same way.</p>
    `,
  },
];

const POSTS_ZH: BlogPost[] = [
  {
    slug: 'day-2-walkthrough-save-strategy',
    title: '《The Freak Circus》Day 2 通关攻略：帐篷探索、存档与坏结局',
    description: '一篇标注剧透的 0.2 版攻略，涵盖被困开场、马戏帐篷、角色介绍、关键存档点，以及如何在不把场景变化误写成完整路线的前提下补齐 Day 2 内容。',
    date: '2026-09-02',
    tags: ['Day 2', '通关攻略', '0.2 版本'],
    image: '/images/home/characters.webp',
    imageAlt: 'The Freak Circus 角色群像',
    readingTime: '阅读约 10 分钟',
    content: `
      <p class="article-lede">Day 2 从《The Freak Circus》带着不安的介绍，正式转向收紧的控制感。玩家真正需要解决的不是“该锁定哪条完整路线”——0.2 版还没有完成的 Pierrot 或 Harlequin 结局——而是“应该在哪里存档，才能不重玩整个原型版就看到已有变化”。</p>
      <div class="walkthrough-note"><strong>攻略边界</strong><p>本文对应公开 0.2 原型版，包含剧情剧透。官方页面确认的是 5 位角色介绍和 1 个坏结局，并未确认多条完成路线、收集品系统或可解锁隐藏场景菜单。</p></div>

      <h2>高压剧情开始前，先建好这些存档</h2>
      <p>Day 2 并不长，但开场足以让“只为改一个回答就全部重来”变得很烦。不要覆盖最新存档，而是分开保留：</p>
      <ol class="walkthrough-steps">
        <li><strong>DAY 2—开始：</strong>新的一天第一次可操作时。</li>
        <li><strong>被困房间：</strong>回应 Pierrot 或 Harlequin 的高压问题前。</li>
        <li><strong>返回马戏团：</strong>进入任何景点帐篷前。</li>
        <li><strong>帐篷分支：</strong>每个帐篷或角色介绍单独留档。</li>
        <li><strong>后段场景：</strong>听起来很决绝、公然反抗或明显危险的选项前。</li>
      </ol>
      <p>如果场景突然结束，或者进入坏结局，这套存档会让你只退回几分钟，而不是从头开始。</p>

      <h2>被困房间：看懂两种控制，不要猜好感度条</h2>
      <p>主角在陌生房间中醒来时受到了束缚。Pierrot 把自己的行为说成“保护”，Harlequin 的到来则把这种说法变成两位对手的直接对峙。这一段重要的是两人以不同方式施加控制，而不是让玩家当场锁定恋爱路线。</p>
      <p>第一遍按自然反应继续；重玩时再回到“被困房间”存档，每次只改一个回答。这样才能分辨你遇到的是真正场景变化，还是只换了一句台词。</p>
      <div class="walkthrough-tip"><strong>不要过度解读道具</strong><p>面具和红票在剧情中有明显意义，但 0.2 版并没有确立一套“收集后解锁未来结局”的传统背包系统。门票颜色确实带有官方确认的含义——红与绿表示由主角做出的选择，粉色低于主要角色层级——但那是分支信号，而不是收集清单。除非游戏后面实际提供互动，否则面具应被当作剧情物件。</p></div>

      <h2>返回马戏团：帐篷怎么探索</h2>
      <p>马戏团部分通过不同主题空间扩大角色群。最稳妥的方法很简单：进入前存档，不快进地看完，再用该存档补其他变化。不要把角色介绍当成已完成路线。</p>

      <h3>蓝色帐篷——Ticket Taker 与镜子</h3>
      <p>镜子场景故意让视觉信息变得不可靠。留意说话的是哪个倒影，以及 Ticket Taker 如何引导你理解所见之物。第一遍无需把每幅画面都解成谜题；先完成介绍，再留存档慢慢复盘。</p>

      <h3>青色帐篷——Doctor</h3>
      <p>Doctor 的介绍对束缚、检查和医疗恐怖的描写最强。如果这些主题令你不适，可以谨慎使用跳过功能或暂停游戏。顺从或抵抗可能改变交流的质感，但都不应被宣传成完成版 Doctor 路线或结局。</p>

      <h3>紫色或黑色演出空间——Jester</h3>
      <p>Jester 的演出承载了 Day 2 中密度很高的背景信息，最好正常推进台词，不要快进。同时要记住：这是游戏世界内部被讲述的故事，它展示了马戏团如何谈论过去，却不必然是不带立场的完整真相。</p>

      <h2>怎样保住进度，避免被坏结局卡住</h2>
      <p>官方版本说明列出了 1 个坏结局。没有可重复验证的选项测试时，负责任的攻略不应凭空编出“唯一正确答案”，因此请把游戏本身当作信号：</p>
      <ul>
        <li>公然危险、听起来会结束对话的选项前先存档。</li>
        <li>剧情如果切到结局或返回菜单，读取最近的分支存档。</li>
        <li>先只改最后一个有意义的回答，不要立即重开 Day 2。</li>
        <li>如果想留下完整记录，可以单独保存坏结局进度。</li>
      </ul>
      <p>到达坏结局并不代表存档毁了，而是你找到了当前版本明确存在的少数结果之一。</p>

      <h2>最干净的两遍流程</h2>
      <div class="walkthrough-route"><div><strong>第一遍——剧情</strong><p>连续游玩，按自然反应选择，只在前述五个节点存档，正式场景中不看攻略。</p></div><div><strong>第二遍——补内容</strong><p>回到帐篷与后段存档，每次只反转一个重要回答，记录真正发生的变化。</p></div></div>
      <p>这种方法没有“全结局大表”那么夸张，却更符合实际版本。0.2 是以角色介绍为主的原型版，不是已完成的路线合集。</p>

      <h2>什么才算通关 Day 2？</h2>
      <ul class="walkthrough-checklist">
        <li>不快进地看完被困房间的冲突；</li>
        <li>保留返回马戏团前的存档；</li>
        <li>看到 Ticket Taker、Doctor 和 Jester 的介绍；</li>
        <li>记录坏结局，或用分支存档安全绕开；</li>
        <li>保留一个等待未来官方更新的干净终点存档。</li>
      </ul>
      <p>Day 3 仍在开发中。保留这个存档，但新公开版上线后先查看变更说明，不要默认 0.2 的选择会原样映射到下一版。</p>

      <h2>本攻略不会宣称的内容</h2>
      <p>有些文章会写多个已完成结局、隐藏场景图鉴、会影响未来机制的徽章收集，或每位登场角色都有完整路线。官方页面目前并没有把这些列为已完成功能。想查看经过核验的状态，请使用站内 <a href="/zh/day-3">Day 3 追踪页</a> 和 <a href="/zh/wiki">0.2 版 Wiki</a>。</p>
    `,
  },
  {
    slug: 'day-1-walkthrough-first-playthrough',
    title: '《The Freak Circus》Day 1 通关攻略：第一次游玩怎么选',
    description: '一篇对应 0.2 版的实用指南：怎样理解与 Pierrot 的初遇、在哪些位置存档、怎样阅读早期竞争，以及如何不追逐未完成路线就顺利进入 Day 2。',
    date: '2026-09-02',
    tags: ['Day 1', '通关攻略', '新玩家'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'The Freak Circus 当前原型版游戏场景',
    readingTime: '阅读约 8 分钟',
    content: `
      <p class="article-lede">Day 1 最好的玩法，是允许它让人感到不安。故事让主角在上班路上遇到 Pierrot，再把一次微小遭遇逐渐变成危险竞争的起点。进入 Day 2 并不需要一张“满分答案表”；你需要的只是几个合理存档，以及对当前原型版能够、不能够解决什么的清醒认识。</p>
      <div class="walkthrough-note"><strong>攻略边界</strong><p>这是公开 0.2 版的剧透指南，会讲清推进与重玩方法，但不会假装 Pierrot、Harlequin 或更多马戏团角色已经有完成结局。</p></div>
      <div class="walkthrough-note"><strong>关于存档</strong><p>开发者从未公布过本作的存档路径、存档位数量、自动存档行为，也没有公布浏览器到桌面的转移流程。下文的存档名称是你用引擎自带的存读档界面给自己取的标签，不是官方文件名。</p></div>

      <h2>开始前：先建立可以真正回溯的进度</h2>
      <p>官方内容警告包括血腥、死亡、虐待、绑架、非自愿药物使用、身体控制与非自愿接触。Day 1 不会把所有警告都推到最强，但会建立基调。决定追求全内容前，先判断这些主题是否适合自己。</p>
      <p>开局就使用三个命名存档：</p>
      <ol class="walkthrough-steps">
        <li><strong>DAY 1—干净：</strong>第一个有实质意义的选择前。</li>
        <li><strong>PIERROT—街道：</strong>上班路上的遇见进入重要回应前。</li>
        <li><strong>DAY 1—后段：</strong>推向 Day 2 的最后一组场景前。</li>
      </ol>
      <p>不要一直覆盖第一个存档。干净节点比别人的选项截图更有用，因为你能在当前版本中自己复现变化。</p>

      <h2>街道上与 Pierrot 的初遇</h2>
      <p>Pierrot 的介绍是 Day 1 的情感支点。这一段让主角面对一位正在被当作异类的沉默陌生人，并决定如何反应。与其反向推理一条看不见的“好感度”，不如选一个你真的愿意承担的回答。</p>
      <p>第一遍保持语气一致：如果你是带着关切靠近，就沿着这种态度看完；如果你很警惕，也让这份不安留在场景中。第二遍再读取“PIERROT—街道”，只改第一个重要回应。对比台词和身体表现，不要自动认定该分支已经解锁完成路线。</p>
      <div class="walkthrough-tip"><strong>通关建议</strong><p>不要因为一个回答显得尴尬就立即重开。Day 1 本来就会带着不舒服的感觉继续。每句话都读档会破坏节奏，得到的信息往往还不如一次完整游玩。</p></div>

      <h2>当竞争开始扩大</h2>
      <p>Harlequin 不只是 Pierrot 的“明亮替代品”。他的出现把关注变成了竞争，也因此改写了玩家对初遇的理解。留意两位表演者如何处理距离、同意与主角的迟疑。这些对照在 Day 1 比“谁赢了”更重要。</p>
      <p>更多马戏团成员属于原型版的角色介绍。看见 Jester、Doctor 或 Ticket Taker，并不代表已经进入完整恋爱路线。官方页面只说当前可以看到 5 位角色的介绍，计划中的结局仍未完成。</p>

      <h2>怎样进入 Day 2</h2>
      <p>Day 2 已经包含在 0.2 版中，它不是单独下载包，也不需要秘密路线代码。看完 Day 1 后段场景后继续推进，让过渡正常播放。如果游戏意外返回了早期位置：</p>
      <ul>
        <li>确认标题界面显示的是当前 0.2 版；</li>
        <li>读取“DAY 1—后段”，不要重新开局；</li>
        <li>不要极快跳过过渡或动画场景；</li>
        <li>玩浏览器版时，等场景加载完再关闭标签页，因为浏览器存档存在浏览器存储里。</li>
      </ul>

      <h2>最好的第一遍策略其实很简单</h2>
      <div class="walkthrough-route"><div><strong>第一遍</strong><p>按自然反应选择，不快进，让紧张感自然累积。目标是理解角色，而不是优化一条路线。</p></div><div><strong>第二遍</strong><p>回到街道存档，只改一个回答；想看 Day 1 后段变化时用后段存档，不要从标题画面重玩。</p></div></div>

      <h2>Day 1 常见误区</h2>
      <h3>寻找“Pierrot 好结局”</h3>
      <p>0.2 版并不包含完成版 Pierrot 结局。温和回应可以改变场景气氛，但不会把原型版直接变成完整路线。</p>
      <h3>默认每句话都会改变 Day 2</h3>
      <p>有些对话的作用是建立角色语气与氛围。如果两次游玩无法复现变化，就不要把某句回答写成路线锁。</p>
      <h3>只用一个存档槽</h3>
      <p>这是把几分钟回溯变成整章重玩的最快方法。请保留街道和 Day 1 后段节点。</p>
      <h3>直接跳过所有不适场景</h3>
      <p>剧情中的危险信号也是角色塑造的一部分。如果你能承受这些内容，认真阅读会让 Day 2 更好理解；如果不能，停止游玩也是完全合理的选择。</p>

      <h2>Day 1 通关检查表</h2>
      <ul class="walkthrough-checklist">
        <li>在上班路上遇到 Pierrot；</li>
        <li>在第一个重要回应前保留存档；</li>
        <li>看到核心竞争开始成形；</li>
        <li>进入 Day 2 的过渡；</li>
        <li>没有把角色介绍误当成完成结局。</li>
      </ul>
      <p>完成这些后，可以继续阅读 <a href="/zh/blog/day-2-walkthrough-save-strategy">Day 2 通关攻略</a>。如果想了解角色又不想看路线猜测，请查看经过核验的 <a href="/zh/characters/pierrot">Pierrot</a> 与 <a href="/zh/characters/harlequin">Harlequin</a> 资料页。</p>
    `,
  },
  {
    slug: 'current-prototype-guide',
    title: '当前《The Freak Circus》原型版究竟包含什么？',
    description: '一篇尽量少剧透的 0.2 版本说明：现在能玩到什么、哪些内容仍在开发，以及新玩家应该期待什么。',
    date: '2026-08-15',
    tags: ['0.2 版本', '新玩家', '游戏指南'],
    image: '/the-freak-circus-cover.jpg',
    imageAlt: 'The Freak Circus 封面美术',
    readingTime: '阅读约 5 分钟',
    content: `
      <p class="article-lede"><em>The Freak Circus</em> 更适合被看作一个完成度较高的开场，而不是所有路线都已完成的完整视觉小说。当前公开版本为 0.2，状态仍是原型版。</p>
      <h2>先说结论</h2>
      <p>现有版本建立了核心冲突，并介绍五位角色；其中包含一个坏结局。更完整的剧本以及计划中的 Pierrot、Harlequin、主角和共同结局仍在开发。</p>
      <p>因此，角色在原型版中登场，并不等于已经拥有完整恋爱路线或最终结局。</p>
      <h2>第一次游玩会是什么体验</h2>
      <p>当前版本的平均单次体验约半小时，适合快速了解作品，但重点是建立氛围、人物关系和危险感，而不是一次解决所有伏笔。</p>
      <ul><li>可以体验原创角色立绘与背景。</li><li>部分场景会随选择变化，并存在一个坏结局。</li><li>目前不能把所有计划结局当作已完成内容。</li></ul>
      <h2>游玩前先确认内容边界</h2>
      <p>这是面向成年人的心理恐怖作品，涉及血腥、死亡、虐待、绑架、下药、身体控制及非自愿接触。开始前请先判断这些主题是否适合自己。</p>
      <h2>更合理地使用粉丝指南</h2>
      <p>跟随路线建议前先确认版本号，在重要选择前保留干净存档，并把没有测试版本的截图或选项表视为玩家解读。一份可靠指南应说明观察到了什么、使用哪个版本，以及剧透从哪里开始。</p>
    `,
  },
  {
    slug: 'browser-or-download',
    title: '浏览器版还是下载版？选择适合你的游玩方式',
    description: '比较浏览器版与 Windows、macOS、Linux、Android 下载版，并在切换版本前正确处理存档。',
    date: '2026-08-14',
    tags: ['下载', '浏览器', '安装'],
    image: '/images/home/gameplay.webp',
    imageAlt: 'The Freak Circus 浏览器版游戏场景',
    readingTime: '阅读约 4 分钟',
    content: `
      <p class="article-lede">两种方式体验的是同一个故事，但最佳选择取决于你愿意做多少设置，以及是否希望保留本地游戏副本。</p>
      <h2>想最快开始：选择浏览器版</h2>
      <p>HTML5 版本最适合初次体验：等待页面加载完成即可开始，无需安装压缩包。若使用公用设备、不想保留游戏文件，也很方便。</p>
      <p>但浏览器隐私清理或重置可能移除本地存储，因此不适合保存无法丢失的重要进度。</p>
      <h2>想长期保留：选择下载版</h2>
      <p>0.2 版本列出了 Windows、macOS、Linux 和 Android 包。本地版本不受浏览器存储限制，更适合多次游玩。</p>
      <ul><li>下载与操作系统匹配的包。</li><li>桌面端压缩包应完整解压后再启动。</li><li>替换旧版本前先备份存档。</li></ul>
      <h2>为什么下载来源很重要</h2>
      <p>应使用开发者的 itch.io 页面，而不是转载或重新打包的安装程序。开发者把该页面说明为官方发布入口，并明确要求不要使用转载副本。</p>
      <h2>遇到问题时</h2>
      <p>先确认版本号与平台。浏览器问题可尝试当前版本的 Chrome 或 Edge 系浏览器，并关闭游戏标签页上的强制翻译；桌面版则需要确保压缩包完整解压，并保留程序附带的所有文件。</p>
    `,
  },
  {
    slug: 'day-3-rumor-checklist',
    title: '等待 Day 3 时，怎样避开“发布日期”传言？',
    description: '用一份实用核对清单，把真实开发进度与倒计时、猜测和重复传播的下一章说法分开。',
    date: '2026-08-13',
    tags: ['Day 3', '开发更新', '事实核查'],
    image: '/images/home/characters.webp',
    imageAlt: 'The Freak Circus 角色美术',
    readingTime: '阅读约 5 分钟',
    content: `
      <p class="article-lede">Day 3 正在开发，但“有开发进展”不等于“已经确认上线日期”。分清这两件事，是避开误导性倒计时与重复传言的最简单方法。</p>
      <h2>目前真正确定的内容</h2>
      <p>公开游戏页说明故事还会继续一个游戏日，并且这部分仍在开发；页面没有公布发布日期。在出现带日期的发布公告前，任何具体日期都应视为推测。</p>
      <h2>进度信号有用，但能力有限</h2>
      <p>对白编程、新美术、背景调整、测试和场景预览都能说明工作在推进，但其中任何一个里程碑都无法单独证明稳定公开版何时完成。</p>
      <h2>快速核对一条传言</h2>
      <ol><li>检查是否有明确发布日期和可识别的发布者。</li><li>确认原文说的是“已发布”还是仅仅“开发中”。</li><li>把开发截图与可下载版本分开。</li><li>拒绝把粉丝估计直接改成倒计时的页面。</li></ol>
      <h2>等待期间可以做什么</h2>
      <p>保留现有存档并记录创建它的版本，不要覆盖第一次游玩的存档槽。新版本上线后，先看变更说明，再判断旧路线建议是否仍然适用。</p>
    `,
  },
  {
    slug: 'pierrot-height-age-order',
    title: 'Pierrot 身高与年龄顺序',
    description: 'Pierrot 身高 198 cm，在官方年龄顺序中位列五人中的第三，本文说明开发者公布的数据，以及同人文库在其之上补充的部分。',
    date: '2026-09-20',
    tags: ['Pierrot', '身高', '角色资料'],
    image: '/images/characters/pierrot-1.webp',
    imageAlt: 'The Freak Circus 的核心角色 Pierrot',
    readingTime: '阅读约 8 分钟',
    content: `
      <p class="article-lede">Pierrot 身高 198 cm，在开发者公布的年龄顺序中位列五人中的第三（由大到小）。这两个数字与其他角色的官方数据出自同一份来源，它们足以解决网络上关于他身高与年龄的大部分争论——同时也留下了两处由粉丝自行填补的空白。</p>
      <div class="walkthrough-note"><strong>本文依据</strong><p>身高、年龄顺序与力量排名均来自开发者公布的图表与 AMA 回答。本文不会把任何粉丝推定的年龄、生日或估算值当作事实。凡出自同人文库的材料，都标注为同人来源而非官方信息。</p></div>

      <h2>身高：198 cm</h2>
      <p>开发者曾随绘制立绘所用的参考图公布一张身高表。Pierrot 的条目写着 198 cm，换算下来约为 6 英尺 5.95 英寸。这让他在五位已登场角色中排第二高：比 207 cm 的 Doctor 矮 9 厘米，比 187 cm 的 Harlequin 高 11 厘米。</p>
      <p>由于这张表原本是作画时的参照，而不是事后补写的数据，它的稳定性很强。由此可以得到两点结论。整个已登场阵容的身高跨度只有 24 厘米，从 Doctor 的 207 到 Ticket Taker 的 183——这在一部讲马戏团怪物的故事里算很窄的区间，也正好可以用来核对那些把某个角色画得远高于其他人的同人图。而两位恋爱主角之间 11 厘米的差距是真实存在的，这也正是同人文库把它视为 Pierrot 与 Harlequin 对台演出时一项重要依据的原因。</p>
      <h2>年龄顺序：五人中的第三位</h2>
      <p>在另一个 AMA 回答中，开发者回应了"把角色按从大到小排序"的请求，给出了一个固定序列：</p>
      <ol class="walkthrough-steps">
        <li><strong>Ticket Taker</strong>——第一位，最年长。</li>
        <li><strong>Doctor</strong></li>
        <li><strong>Pierrot</strong>——第三位。</li>
        <li><strong>Jester</strong></li>
        <li><strong>Harlequin</strong>——最后一位，最年轻。</li>
      </ol>
      <p>也就是说，Pierrot 处在整个班子的正中间：比 Jester 和 Harlequin 年长，比 Ticket Taker 和 Doctor 年轻。在一个围绕这条名单两端之间的对抗而建立的故事里，第三位意味着他比争夺他的那个男人年长，却比维持着马戏团的两个角色年轻。</p>
      <h3>"第三"并没有告诉你什么</h3>
      <p>它既不给出数字，也不给出差距。一个相对顺序只能说明谁比谁年长；名单上相邻的两个角色，实际年龄也可能相差甚远。官方从未公布过这五人中任何一人的具体年龄，因此这个顺序是开发者唯一发布过的年龄信息。这一点很重要，因为给这个阵容安上一个具体数字，是同人文库和角色数据库最常做的事，而这些数字几乎都找不到来源。</p>
      <div class="walkthrough-tip"><strong>如何核对别处看到的身高或年龄说法</strong><p>问三个问题：来源是否指向开发者的图表、AMA 回答或官方帖子？它是否区分了"公布数字"与"估算"？它有没有说明这些信息对应哪个版本？三个问题都有答案的攻略，其细节值得信任；三个都没有的攻略，基本是别人的猜测加了一层装饰。</p></div>

      <h2>力量排名是另一份清单</h2>
      <p>开发者还公布过一份纯粹体能排名，结果并不跟随身高。Pierrot 位列第一——领先并列第二的 Harlequin 与 Jester，其后是 Doctor，Ticket Taker 垫底。</p>
      <p>身高第二、体能第一，对 Pierrot 来说是有意为之的角色塑造，而非图表上的巧合。官方简介称他是"沉默的病娇（the silent yandere）"，一个身体上占据绝对优势却几乎不开口的人，威胁感是另一种形态：危险不在于他会主动宣告什么，而在于他不必。同人文库把他描述为表面温和礼貌、同时跟踪主角，这与那种气质相符，不过这属于同人侧的刻画。</p>

      <h2>哪些是确认的，哪些是后来加上的</h2>
      <ul>
        <li><strong>开发者已确认：</strong>身高 198 cm、年龄顺序第三、力量排名第一、"沉默的病娇"这一描述，以及 Pierrot 恋爱结局处于计划中。</li>
        <li><strong>来自当前版本：</strong>他的外形、他的场景，以及他在不同分支中对主角的反应方式。</li>
        <li><strong>源自同人：</strong>细致的外形描述——带黑色竖向裂缝的白色面具、金色眼睛、红黑配色的丑角帽、红色 Motley 外套——剧情内他保持沉默的原因，以及任何被安在他身上的具体年龄或生日。</li>
      </ul>
      <p>关于外形和沉默，有一点需要澄清，因为两者都常被概括错。同人文库的说法是，Jester 定下了"公开场合不得说话"的规矩，而 Pierrot 对他极为尊重。这个细节很讨喜，也与两人的写法自洽，但它来自同人文库而非开发者。第一方材料只到"沉默的病娇"这句话为止，并把这种沉默当作角色塑造，而不是缺失的配音。</p>

      <h2>为什么这些数字值得在意</h2>
      <p>身体数据是一份角色资料里最容易核对、也最常被凭空发明出来的部分，而这个游戏两样都经历过：一张真实公布的图表，以及大量并不出自它的数字。知道 Pierrot 是 198 cm、年龄排第三，意味着你一眼就能看出某个 Wiki 何时悄悄换成了另一个数字；而更有用的价值在于，你能带着准确的画面读他的场景。一个 198 cm、同时也是五人中最强的人，在镜头前的行为方式本就不同于普通人，而游戏的调度正建立在这个前提之上。</p>
      <p>想一次看全整个阵容，请参考 <a href="/zh/characters/heights">身高与排名指南</a>；想了解他的路线状态与同人材料，请看 <a href="/zh/characters/pierrot">Pierrot 资料页</a>。</p>
    `,
  },
  {
    slug: 'harlequin-height-age-order',
    title: 'Harlequin 身高与年龄顺序',
    description: 'Harlequin 身高 187 cm，是五位已登场角色中最年轻的一位——本文给出开发者公布的数字，以及与之矛盾的粉丝说法。',
    date: '2026-09-24',
    tags: ['Harlequin', '身高', '角色资料'],
    image: '/images/characters/harlequin-1.webp',
    imageAlt: 'The Freak Circus 中 Pierrot 的舞台对手 Harlequin',
    readingTime: '阅读约 8 分钟',
    content: `
      <p class="article-lede">Harlequin 身高 187 cm，是五位已登场角色中最矮的一位；在开发者公布的年龄顺序中，他也是最年轻的。这两件事都有据可查。网上流传的他的具体年龄通常没有依据，而且多数与开发者唯一给出过的年龄说法直接冲突。</p>
      <div class="walkthrough-note"><strong>范围与来源</strong><p>身高、年龄顺序与力量排名取自开发者公布的图表和 AMA 回答。外形描述、性格概括以及任何具体年龄或生日来自同人文库，均标注为同人来源。本文不会把剧情内的估算当作测量数据。</p></div>

      <h2>身高：187 cm</h2>
      <p>在开发者的身高表中，Harlequin 的条目是 187 cm，约合 6 英尺 1.62 英寸。这让他成为五位已登场角色中最矮的，比 207 cm 的 Doctor 矮 20 厘米，比 Pierrot 矮 11 厘米，比 Jester 矮 5 厘米，比 Ticket Taker 高 4 厘米。</p>
      <p>这个数字有意思的地方，在于它和另一组数据的搭配。Harlequin 在开发者的力量排名中与 Jester 并列第二，排在 Pierrot 之后、Doctor 与 Ticket Taker 之前。同人文库把"最年轻、最矮，却并列第二强"这组关系解读为 Harlequin 被写成敏捷而强健、而非沉重有力的原因。这属于解读，但它是建立在两个已公布数字之上的解读，而不是猜测。</p>
      <h2>年龄顺序：五人中的最后一位</h2>
      <p>开发者的年龄顺序（由大到小）是 Ticket Taker、Doctor、Pierrot、Jester、Harlequin。Harlequin 排第五——他是已登场阵容中最年轻的，也是两位恋爱主角中比 Pierrot 小两位的那个。</p>
      <p>这是一个确凿的事实，也是网上被改写得最厉害的事实之一。大量同人材料给 Harlequin 安上一个具体年龄，其中好几个数字根本无法与那份把他排在年长 Ticket Taker 与 Doctor 之下的官方顺序并存。顺序才是可靠版本，同时它也是唯一存在的版本——这个游戏从未公布过任何角色的具体年龄。</p>
      <div class="walkthrough-tip"><strong>如果一定要引用他的年龄，就引用顺序</strong><p>写"五位已登场角色中最年轻的一位"，而不是某个数字。前者准确、有来源，并且能撑过下一次更新。同人站给这个阵容安上的数字有个习惯：被后来的 AMA 回答推翻——这正是开发者公布顺序而不是公布数字的原因。</p></div>

      <h2>那 11 厘米的差距</h2>
      <p>Harlequin 比 Pierrot 矮 11 厘米，这个差距大到不需要夸张就能在画面上读出来。同人文库认为这一差距对两位主角的调度有意义——沉默的那个填满画框，戏剧化的那个在画框周围移动。这究竟是设计意图还是立绘参考带来的副产品，开发者并未说明，因此它留在同人那一栏。</p>
      <p>可以确认的部分其实更简单：这张表是开发者作为绘制立绘时的参照发布的，这正是这些数字被当作权威数据、而不是从画面上估算出来的原因。如果某张同人图把 Harlequin 画得比 Pierrot 更高，那是画风处理；官方数字仍是 187 与 198。</p>

      <h2>官方材料对他说过什么</h2>
      <p>除了图表，开发者还直接谈过 Harlequin。官方简介称他是 Pierrot 的"魅惑型对手（seductive rival）"，并把游戏描述为由其中一人主导——这是对一个拥有两条恋爱路线、且仅有两条的故事最清晰的概括。</p>
      <p>有一条 AMA 回答值得仔细引用，因为它很容易被误读。被问到 Harlequin 调情时留下的咬痕，答案是：那些不是求婚，不会留下疤痕，而怪物之间的婚姻与求爱方式，和主角理解的并不相同。这段简短的对白做了实事：它确立了 Harlequin 的调情运转于马戏团自己的逻辑，而主角的参照系并不是周围这些人的参照系。</p>
      <p>同人文库补充说 Harlequin 在 Doctor 身边会觉得安全，Doctor 是他在马戏团里最喜欢的人，并且他与 Ticket Taker 相处融洽，只是品味不合。它还记录了一条关于 Columbina 之死的隐含关联——Harlequin 为了"拯救"她而杀死了她——而 Wiki 本身也将其表述为暗示而非陈述。马戏团历史的大致轮廓在 AMA 回答中已获确认；关于 Harlequin 在其中所扮演角色的那种具体读法，并非第一方信息。</p>

      <h2>路线状态：已计划，但还不能玩</h2>
      <p>Harlequin 的恋爱结局是开发者点名的四个结局之一，另外三个是 Pierrot、主角与"All together"。四者都尚未实装。当前版本只包含一个结局——Day 1 的 "Missing" 恶性结局——所以既没有可公布的触发条件，也没有诚实的攻略可写。</p>
      <ul>
        <li><strong>已确认：</strong>他的身高、年龄顺序最后一位、力量并列第二、"Pierrot 的魅惑型对手"这一描述、调情咬痕并非求婚这一澄清，以及 Harlequin 恋爱结局处于计划中。</li>
        <li><strong>来自当前版本：</strong>他的外形、他的场景，以及他的一部分登场会随剧情分支变化——这一点由官方修复日志确认。</li>
        <li><strong>源自同人：</strong>面具描述——带绿色菱形与绿色三角的白色面具、毒液般的绿色眼睛、带心形发卷的黑色卷发——他的个人经历，以及他与 Columbina 关系的具体细节。</li>
      </ul>

      <h2>把这些数字放在一起看</h2>
      <p>Harlequin 的官方身体数据描述的是一个相当具体的角色：整个五人班子里最年轻、最矮，却并列第二强；他与同一班子里第二高、最强的成员争夺注意力。他既不是力量上的支配者，也不是经验上的新手——他敏捷、戏剧化，而且在这场对抗里真正势均力敌。这比一个凭空来的年龄数字有用得多，而且完全有据可查。</p>
      <p>想一次看全整个阵容，请参考 <a href="/zh/characters/heights">身高与排名指南</a>；想了解他的路线状态与人物关系，请看 <a href="/zh/characters/harlequin">Harlequin 资料页</a>。</p>
    `,
  },
  {
    slug: 'the-freak-circus-endings-list',
    title: 'The Freak Circus 结局清单：哪些存在，哪些不存在',
    description: 'The Freak Circus 结局的完整状态清单——1 个已实装的恶性结局、4 个计划中的结论，以及并不存在的路线。',
    date: '2026-09-28',
    tags: ['结局', '路线', '0.2 版本'],
    image: '/images/home/characters.webp',
    imageAlt: 'The Freak Circus 角色群像围绕主角',
    readingTime: '阅读约 9 分钟',
    content: `
      <p class="article-lede">The Freak Circus 目前只有一个可玩结局，另有四个由开发者点名、但尚未写进任何版本的结局。网上几乎所有"全结局表"都把这两种类别混在一起，于是同一个问题会得到四个不同的答案。这里把每一项的状态写清楚。</p>
      <div class="walkthrough-note"><strong>本清单的范围</strong><p>本文覆盖公开的 0.2 原型版，以及开发者本人对计划工作的说明。内容包含现有那一个结局的剧透。凡是同人推测或同人自创的结论，都不会被列为结局——在开发者发布之前，它们还不是结局。</p></div>

      <h2>先说结论</h2>
      <ul>
        <li><strong>现在能玩到：1 个。</strong>"Missing"——Day 1 的恶性结局。</li>
        <li><strong>已公布为计划：4 个。</strong>Pierrot（恋爱）、Harlequin（恋爱）、主角（不含恋爱）、以及"All together"（多角）。</li>
        <li><strong>已确认的路线选项：4 个。</strong>Pierrot、Harlequin、两者、或者都不选。</li>
        <li><strong>并不存在的路线：Jester、Ticket Taker、Doctor。</strong></li>
        <li><strong>官方结局总数：未公布。</strong>开发者表示计划了多个结局，但无法给出数字。</li>
      </ul>

      <h2>真正存在的那一个结局</h2>
      <p>0.2 版本只包含一个结局，而且是恶性结局。它发生在 Day 1，触发条件刻意简单：当 Pierrot 被一名男子当众嘲笑时，如果主角选择不做出反应，主角会被一个身份不明的人塞上一张粉色门票，带到粉色帐篷，并被马戏团的每一位成员拒之门外。游戏明确写着主角没能吸引到 Pierrot 的注意，最终落得悲剧结局。</p>
      <p>这是一个有真实后果的完整结局，而不是占位符——同时它也是当前版本里整个"结局"类别的全部内容。从结构上说，它也是这款游戏论点的缩影：一个不去参与核心冲突的主角，会被悄无声息地移出这个冲突。</p>
      <div class="walkthrough-tip"><strong>记录它，而不是避开它</strong><p>"Missing" 是当前版本官方提供的唯一结果，所以触发它等于完成现在的原型版。如果某份攻略让你读档并且永远别看到它，那是把结局当成需要保护的东西，而不是当成确实存在的东西。</p></div>

      <h2>四个计划中的结局</h2>
      <p>开发者在官方页面和官方 FAQ 中列出四种结论。两个是恋爱结局，一个明确不含恋爱，一个是多角结局。</p>
      <ul>
        <li><strong>Pierrot 结局（恋爱）</strong>——主角最终与 Pierrot 在一起。属于计划中的工作，并被反复描述为仍在开发中。</li>
        <li><strong>Harlequin 结局（恋爱）</strong>——主角最终与 Harlequin 在一起。相关剧本尚未完成。</li>
        <li><strong>主角结局（不含恋爱）</strong>——主角在不涉及恋爱的情况下走完故事。开发者确认这条路线作为概念存在，同时也允许你选择与角色建立友谊。</li>
        <li><strong>"All together"（多角结局）</strong>——主角同时爱上 Pierrot 和 Harlequin。它是独立列出的结论，而不是任一恋爱路线的变体。</li>
      </ul>
      <p>这里必须强调：不要把这份清单换算成一个数字。开发者被直接问过成品究竟有几个结局，回答是"计划了多个，但现在无法给出数字"，因为剧本仍在打磨中。一份写着"The Freak Circus 有 5 个结局"的页面，是把 4 个已点名的计划结论加上 1 个已实装结局，拼出了一个开发者从未说过的总数。</p>

      <h2>到底能给谁走路线</h2>
      <p>官方答案很窄：Pierrot、Harlequin、两者都选，或者都不选。主角路线就是"都不选"的那一项——已确认不含恋爱，但仍然允许你选择与角色建立友谊。</p>
      <p>Jester、Ticket Taker 和 Doctor 没有路线。开发者表示，如果之后增加路线，更可能以追加内容或 DLC 的形式发布，而且这件事尚未决定。让其余角色成为恋爱对象被描述为"一种可能性"，而不是承诺——这个区别很重要，因为同人攻略常常用现在时描述那些路线，仿佛它们只是被藏起来了。</p>
      <p>有两个流传很广的说法，与开发者描述过的任何内容都对不上：一是"Jester 路线在 Day 2 解锁"，二是 Doctor 有一个 "Clean Hands" 结局。Day 2 更新带来的是更多角色、动态立绘、重新设计的菜单和 Android 版本——不是新路线。</p>

      <h2>为什么各家攻略说的数量不一样</h2>
      <p>不同站点回答的是不同问题：有的只数当前能玩到的，有的只数开发者点名的，还有的把计划结论与同人推测混在一起。把任何说法放进"已实装 / 计划中 / 未核实"三个桶里，就能比争论数字更快地解决分歧。</p>
      <p>对这份计划清单还要加两条提醒。剧本仍在写作中，因此结论集合在发布之前完全可能变化。而 Day 3 正是现在正在编写新结论的部分，所以目前的清单是一份进行中计划的快照，而不是完成的名录。</p>

      <h2>这意味着什么游玩建议</h2>
      <p>把当前原型版当作一个三天故事的前两天来看。可玩的内容是一个建立了角色阵容、核心对抗和一个失败结局的开篇弧。路线结构存在于分支之中，结论却还没有进入版本。玩现在的版本，是了解分支如何运作，而不是完成这款游戏。</p>
      <p>想看带出处的完整拆解，请参考 <a href="/zh/endings">结局与路线指南</a>；想了解仍在编写的内容，请看 <a href="/zh/day-3">Day 3 追踪页</a>。</p>
    `,
  },
  {
    slug: 'five-characters-overview',
    title: 'The Freak Circus 的五位角色',
    description: '一页看懂 The Freak Circus 的五位已登场角色——Pierrot、Harlequin、Jester、Doctor 与 Ticket Taker，附身高、排名与路线状态。',
    date: '2026-10-01',
    tags: ['角色', '总览', '0.2 版本'],
    image: '/images/characters/jester-1.webp',
    imageAlt: 'The Freak Circus 的权威人物 Jester',
    readingTime: '阅读约 10 分钟',
    content: `
      <p class="article-lede">0.2 版本介绍了五位角色，而且五位在公开版本里都拥有各自的介绍场景。这个数字经常是另一个错误推论的源头——五位登场角色就意味着五条可选路线。事实并非如此：其中两位有计划中的恋爱路线，三位没有，而计划中的结局目前一个都还不能玩。</p>
      <div class="walkthrough-note"><strong>如何阅读这份总览</strong><p>身高、年龄顺序位置与力量排名来自开发者公布的图表。路线与结局状态依照开发者本人的说法。有关同人文库的性格与关系描述均已标注来源，因为这个阵容里最有意思的细节大多来自剧情素材，而非开发者发言。</p></div>

      <h2>一眼看全阵容</h2>
      <ul>
        <li><strong>Pierrot</strong>——198 cm，第五人中第三年长，体能第一。故事核心的沉默执念，也是两位恋爱主角中较高的一位。</li>
        <li><strong>Harlequin</strong>——187 cm，最年轻，体能并列第二。Pierrot 的"魅惑型对手"，也是两位恋爱主角中较矮的一位。</li>
        <li><strong>Jester</strong>——192 cm，第四年长，体能并列第二。让马戏团像一个"机构"而非两个对手加背景板的权威人物。没有路线。</li>
        <li><strong>Doctor</strong>——207 cm，第二年长，体能第三。阵容中最高的一位，也是气质最临床的压迫感来源之一。没有路线。</li>
        <li><strong>Ticket Taker</strong>——183 cm，最年长，体力最弱。门槛的守望者，也是与分支结构关系最紧的角色。没有路线。</li>
      </ul>
      <p>有三条事实同时适用于五人：身高表是开发者绘制立绘时的参照，所以数字属于权威数据；年龄顺序只有相对关系，谁都没有具体年龄；力量排名是开发者回答粉丝提问时附带的，因此更适合当作角色性格的一部分，而不是战斗数值界面。</p>

      <h2>Pierrot</h2>
      <p>整个游戏围绕他建立的角色。官方简介称他是"沉默的病娇（the silent yandere）"——这是开发者自己的描述，也解释了为什么在一款以对白为主的媒介里，他每一个细微动作都分量十足。同人文库把他刻画为表面温和礼貌、同时跟踪主角，并对主角与 Columbina 都带有保护意味；它还记录了一条开发者回答：Pierrot 绝不会放弃主角，而且语气极为坚决。Pierrot 恋爱结局正在开发中。</p>
      <h2>Harlequin</h2>
      <p>Pierrot 以恒定行事，Harlequin 则以表演行事。官方简介称他是 Pierrot 的"魅惑型对手"，并把游戏描述为由其中一人主导。同人文库描述他随性、残忍、爱调戏人，而且暗藏嫉妒——并指出他并不习惯被爱。这份嫉妒感的意义在于，它把对抗从"Harlequin 也在争夺"变成了他自己同样渴望的东西。他的恋爱结局已计划，但尚未实装。</p>
      <h2>Jester</h2>
      <p>他是网上被描述得最不准的角色，通常的偏差方向是给他安上一条并不存在的恋爱路线。他承担着马戏团权威人物的功能：同人文库称他是首领与主要反派，沉着冷静而非情绪化；同人文还描述他控制着"愚人（Fools）"、把人类称作走失的动物。这些细节属于对他场景的解读而非开发者声明，但他在其他角色面前的权威感在整个版本中是一致的。他没有 Jester 路线，也没有 Jester 结局。</p>
      <h2>Doctor</h2>
      <p>207 cm，五人中最高，却只排体能第三；同人文库用"偏好机智而非蛮力"来解释这一点。他的介绍场景在束缚、检查与医疗恐怖意象上最为强烈，而同人文描述他的冷静会在某种情绪状态下明显崩解。他没有路线也没有结局，一些较老的同人页面把 "Clean Hands" 结局归给他，这一点没有任何第一方来源支持。</p>
      <h2>Ticket Taker</h2>
      <p>最年长、最矮、力量排名最后——却是官方材料中记录相当充分的一位角色之一，因为门票系统是游戏中少数被确认的机制之一。开发者已确认门票共 8 种，粉色低于主要角色层级，红与绿表示由主角做出的选择。他没有路线；而一些流传已久的同人攻略描述了一条"靠坚持与谨慎对话解锁"的 Ticket Taker 恋爱路线——公开版本中并不存在这样的路线。</p>

      <h2>到底能走谁的路线</h2>
      <p>已确认的路线选项是 Pierrot、Harlequin、两者或都不选。"都不选"对应主角结局，其中不含恋爱，但仍可与角色建立友谊。Jester、Ticket Taker 与 Doctor 没有路线；开发者把让他们成为恋爱对象描述为一种可能性而非承诺，并表示这类追加更可能以附加内容或 DLC 的形式推出。</p>
      <div class="walkthrough-tip"><strong>人物资料页该怎么读</strong><p>先读"已确认"部分，再读"同人"部分。已确认的内容在下一次更新后依然成立；同人材料是对当前版本的解读，随着更多场景落地也可能被修订。把两者混在一起却不加标注的页面，才是需要小心对待的那种。</p></div>

      <h2>阵容里还缺谁</h2>
      <p>Columbina 是马戏团的前成员，她的死亡塑造了两位主角的背景，但她不属于五位已登场角色，也不在公布的身高表里。她的设计仍在制作中，开发者刻意保留了细节。为这个阵容写稿的人，应当同时把她当作故事历史上真实存在的人，和一个尚未完成的角色。</p>
      <p>想看完整人物资料，请阅读 <a href="/zh/characters/pierrot">Pierrot</a>、<a href="/zh/characters/harlequin">Harlequin</a>、<a href="/zh/characters/jester">Jester</a>、<a href="/zh/characters/the-doctor">Doctor</a> 与 <a href="/zh/characters/ticket-taker">Ticket Taker</a> 各页，以及 <a href="/zh/characters/heights">身高与排名指南</a>。</p>
    `,
  },
  {
    slug: 'ticket-types-explained',
    title: 'The Freak Circus 门票系统详解',
    description: '开发者已确认 The Freak Circus 共有 8 种门票，其中粉色、红与绿对剧情分支带有具体含义，本文逐一解释这套系统。',
    date: '2026-10-05',
    tags: ['门票', '机制', '分支'],
    image: '/images/characters/ticket-taker-1.webp',
    imageAlt: '掌控门票系统的角色 Ticket Taker',
    readingTime: '阅读约 8 分钟',
    content: `
      <p class="article-lede">门票是 The Freak Circus 中少数被开发者直接解释过的系统之一，而这个解释涵盖的范围比多数同人攻略愿意承认的还要大。已确认的数量是 8 种门票类型。粉色低于主要角色层级，红与绿标记由主角做出的选择，而粉色加红色的组合意味着 Ticket Taker 会自动取走红色选项。</p>
      <div class="walkthrough-note"><strong>哪些有据可查，哪些没有</strong><p>门票类型的数量，以及粉色、红、绿的含义，都来自开发者。至于全部 8 种的完整名单——其余类型的名称与颜色——官方并未公布，因此本文不做猜测。在咖啡馆塞给主角粉色门票的"未知男子"就是 Ticket Taker 伪装，这一认定属于同人来源，下文会明确标注。</p></div>

      <h2>开发者确认了什么</h2>
      <ul>
        <li><strong>门票共有 8 种类型。</strong>这是一个被直接确认的数量。</li>
        <li><strong>粉色低于主要角色层级。</strong>当你没有被表演者们追逐时，你拿到的就是这一档。</li>
        <li><strong>红与绿表示由主角做出的选择。</strong>这两种颜色标记的是属于玩家的决定。</li>
        <li><strong>粉色与红色组合，意味着 Ticket Taker 会自动取走红色选项。</strong>在这种情况下，选择是由你替不了的、掌管整个系统的那个人替你做出的。</li>
      </ul>
      <p>最后这条规则对读懂场景最有用，因为它说明这个游戏并不只是把选项交给你、让你自由挑选。有些决定是由马戏团替你做的。一个不采取行动的主角不会得到中立结果，他会得到马戏团给出的结果。</p>

      <h2>粉色门票与现有那一个结局</h2>
      <p>粉色门票出现在当前版本中，而它正是游戏唯一已实装结局的开端。Day 1，当 Pierrot 被一名男子当众嘲笑时，如果主角选择不做出反应，一个身份不明的人会把一张粉色门票塞给主角。主角随后被带到粉色帐篷，被马戏团的每一位成员拒之门外，游戏明确说明主角没能吸引到 Pierrot 的注意，最终落得悲剧结局。</p>
      <p>同人文库把咖啡馆那位"未知男子"认定为 Ticket Taker 的伪装。这一认定属于同人来源，但它直接连向版本中唯一存在的那个结局，也解释了为什么一个自己没有路线的角色，在机制层面如此重要。</p>
      <div class="walkthrough-tip"><strong>不要把门票当收集品</strong><p>0.2 版并没有确立一套"收集门票以解锁未来结局"的传统背包系统。这里的门票标记的是身份层级与选择，而不是一份清单。如果有攻略描述门票收藏栏、门票计数器，或"每个结局对应一张隐藏门票"，它描述的是本作并不存在的系统。</p></div>

      <h2>为什么一个配角掌管着分支</h2>
      <p>Ticket Taker 没有路线、没有结局，力量排名五人垫底，身高也是最矮的。在一个路线选项只有 Pierrot、Harlequin、两者或都不选的游戏里，他通常只是个背景人物。门票系统是他不是背景人物的原因。</p>
      <p>想想一张门票在剧情内部做的事：它决定你被允许成为谁。一张粉色门票把你放在表演者之下，而这正是 "Missing" 结局里主角所处的位置——在外面，被注视，在帐篷门口被拒之门外。红与绿标记属于玩家的选择；而当粉色与红色组合，权威人物就替你拿走了那个选择。一个掌管这条规则的配角不是检票员——他正是马戏团用来管理主角的机制本身。</p>
      <p>这也与他的性格写法吻合。同人文库描述他服从并奉献于马戏团的目标，成熟而专业，专注于洁净与秩序，并明确说出他的原则：在这里，没有人破坏角色扮演。而这套系统就是他的角色本身。一场靠门票运转的演出，需要有人负责发放。</p>

      <h2>颜色在实际中如何解读</h2>
      <ul>
        <li><strong>粉色</strong>——你人在演出场地里，但不在演出中。这正是当前版本唯一结局里主角所在的层级。</li>
        <li><strong>红色</strong>——一个归属于你的决定，而当它与粉色搭配时，可以被马戏团覆盖。</li>
        <li><strong>绿色</strong>——一个归属于你的决定，且没有覆盖机制。</li>
        <li><strong>其余五种</strong>——没有逐项说明。数量已确认，身份未公开。</li>
      </ul>
      <p>这里也要诚实说明，目前能看到的部分其实很少。0.2 是一个以角色介绍为主的原型版，只有一个结局，门票系统被描述为一套规则，而不是被完整演示出来。当前版本中的玩家，实践里大多只会见到粉色，以及在出现选项之处的红与绿。把这套系统读成一张完整的分支地图，已经超出了现有版本所能展示的范围。</p>

      <h2>哪些是确认的，哪些是同人补充</h2>
      <ul>
        <li><strong>开发者已确认：</strong>门票共 8 种类型；粉色低于主要角色层级；红与绿表示由主角做出的选择；粉色加红色意味着 Ticket Taker 自动取走红色选项；以及 Ticket Taker 没有路线。</li>
        <li><strong>来自当前版本：</strong>主角在 Day 1 会得到一张粉色门票，这张门票直接通向 "Missing" 结局。</li>
        <li><strong>源自同人：</strong>咖啡馆"未知男子"是 Ticket Taker 伪装、"现实操纵者"这一称号，以及他与 Columbina 之间经历的具体细节。</li>
      </ul>
      <p>想了解这套系统如何与结局相连，请看 <a href="/zh/endings">结局指南</a>；想看这个角色自己的资料页，请见 <a href="/zh/characters/ticket-taker">Ticket Taker 页面</a>。</p>
    `,
  },
  {
    slug: 'columbina-what-is-known',
    title: '关于 Columbina，目前已知什么',
    description: 'Columbina 塑造了两位主角的背景故事，但她的设计仍在制作之中——本文区分开发者已经确认的部分与同人文库补充的部分。',
    date: '2026-10-07',
    tags: ['Columbina', '背景设定', '角色资料'],
    image: '/images/characters/columbina-1.webp',
    imageAlt: 'Columbina，两位主角共同背景故事的核心人物',
    readingTime: '阅读约 8 分钟',
    content: `
      <p class="article-lede">Columbina 是所有人都认得、却没有人能有把握描述的角色。她的死亡塑造了两条恋爱主线的过去，粉丝也围绕这一点建构出大量解读。与此同时，开发者已经说明她的设计仍在制作之中，细节被刻意保留。这两件事同时成立，而本文要做的正是把它们分开。</p>
      <div class="walkthrough-note"><strong>本文范围</strong><p>本文涵盖开发者已经确认的内容、同人文库记录的内容，以及两者存在冲突之处。文章包含两位主角共同背景故事的剧透。除非开发者本人说过，否则不会把任何关于 Columbina 的说法当作定论。</p></div>

      <h2>开发者已经确认的部分</h2>
      <ul>
        <li><strong>她曾是马戏团的一员。</strong>她与这个公司的历史在她身后，而不是在其中。</li>
        <li><strong>她的死亡塑造了两位主角的背景。</strong>Pierrot 与 Harlequin 都在逃避某件与她有关的事。</li>
        <li><strong>主角与 Columbina 没有关联。</strong>开发者直接确认过这一点，值得明确写出来，因为同人推测经常把主角放进她的故事里。</li>
        <li><strong>"Columbina" 的意思是"little dove（小鸽子）"。</strong>开发者确认过这个名字的含义。</li>
        <li><strong>她的设计仍在制作之中，细节被刻意保留。</strong>角色的外形尚未定稿，开发者本人也这样说过。</li>
        <li><strong>她没有官方身高。</strong>公布的身高表覆盖的是五位已登场角色，她不在其中。</li>
      </ul>
      <p>最后一点和开发更新里的一个细节相关。近期一次官方更新提到一个全新、非常短的、提到了她的场景，并说明她的设计方案是为了让回忆杀的剪影保持一致。换句话说，故事在她还没画完的时候就已经确认了她的存在——这对一份粉丝指南来说是少见的处境，也是本文刻意少谈角色刻画的原因。</p>

      <h2>同人文库记录了什么</h2>
      <p>关于 Columbina 的绝大多数说法都来自同人文库，其中两条值得点名。</p>
      <p>第一条是她与 Pierrot 从未有过恋爱关系。这与马戏团自身爱情叙事的一种读法相冲突，也与"Pierrot 过去核心的悲剧是一段恋情"这一假设相反。开发者另外说明过，Pierrot 已经走出那段过去并且有所成长——这意味着这段背景是角色塑造的来源，而不是一道固定不愈的伤口。</p>
      <p>第二条是她与 Harlequin 在她死亡中的角色之间存在隐含关联：同人文库记录，Harlequin 为了"拯救"她而杀死了她，而 Pierrot 拒绝参与。同人文库把这表述为暗示而非陈述，阅读时也应该按暗示来读。开发者已经在 AMA 回答中确认了马戏团历史的大致轮廓，所以这段故事是真实的；但关于 Harlequin 在其中所扮演角色的那种具体读法，并没有第一方确认。</p>
      <div class="walkthrough-note"><strong>把同人材料标为同人材料</strong><p>"同人文库记录 Harlequin 为了拯救她而杀死了她"与"Harlequin 为了拯救她而杀死了她"是两个不同的说法。前者可以拿去对照来源；后者不行，因为没有任何来源这样陈述。抹掉归属的攻略，是在做证据并不支持的编辑决定。</p></div>

      <h2>为什么细节要刻意保留</h2>
      <p>开发者压住她的具体信息是有原因的，而且不是排期上的疏忽。一个设计尚未完成的角色无法用定稿语言描述——身高、服装和剪影都还在决定中，任何把这些当作事实写下的攻略，描述的其实是一个意图，而不是一个事实。这也是她没有官方生日、没有官方具体年龄的原因，同样是这个阵容里那个"唯一已确认的生日"属于另一个角色的原因。</p>
      <p>对读者来说，实际后果是：任何详细描写 Columbina 的页面——她的外貌、她的身高、她死去那晚的确切角色——描述的都还是尚未决定的事，无论它写得多笃定。</p>

      <h2>她在当前版本中的出现方式</h2>
      <ul>
        <li><strong>作为背景故事。</strong>两位主角的过去都围绕她打转，而当前版本是以片段、而不是以完整场景的方式透露这段历史。</li>
        <li><strong>作为一个名字。</strong>官方维护记录提到，当输入她的名字时，一句原本不完整的台词会显示出来；更新的开发说明则描述了一个提到她的全新短场景。</li>
        <li><strong>作为一道剪影。</strong>开发说明提到回忆杀的剪影，这意味着即使设计未完成，她仍然会出现在过去的时间里。</li>
      </ul>
      <p>她在版本中被引用、同时仍在制作之中，这不是开发者需要解释的矛盾，而是这款作品的推进方式，也正是严谨的攻略可以谈论她、却不必描述她的原因。</p>

      <div class="walkthrough-tip"><strong>跟进她的实用方式</strong><p>不要等某个 Wiki 页面替你总结她。去看那些提到她的短场景，记下游戏本身对她的措辞，并把别处看到的每一个外形细节都当作提案，直到开发者公开定稿设计。这样才能让剧情始终跑在猜测前面——也只有这样，这个角色的进展才还有可能给你惊喜。</p></div>

      <h2>如何负责任地谈论 Columbina</h2>
      <ul>
        <li>每次都明确把同人的说法归于同人。</li>
        <li>不要把她的身高、年龄、生日或服装当作事实发布。</li>
        <li>不要把主角写进她的故事；开发者已经排除了这种可能。</li>
        <li>把"从未与 Pierrot 有过恋爱关系"这条记录读作纠正一种常见误读，而不是新增一段恋情。</li>
        <li>把"为了拯救她而杀死她"这条线索当作同人提出的暗示，而不是已确认的事件。</li>
      </ul>
      <p>她是一段关于两个无法停止竞争的人的故事的情感中心，也是两个人都留下伤痕的原因。这一点可以放心地说。其余部分值得等到开发者画完她并公布细节之后再读——到那时本页会更新，而不是现在先填满。</p>
    `,
  },
  {
    slug: 'day-3-release-status',
    title: 'The Freak Circus Day 3：发布状态与已核实进度',
    description: '一份关于《The Freak Circus》Day 3 的核实状态报告——官方开发更新确认了什么、beta 范围意味着什么，以及为什么没有日期。',
    date: '2026-10-10',
    tags: ['Day 3', '开发更新', '事实核查'],
    image: '/images/community/weekly-update-day3-20261009.jpg',
    imageAlt: '来自 Day 3 版本的一次官方开发更新配图',
    readingTime: '阅读约 9 分钟',
    content: `
      <p class="article-lede">Day 3 正在制作之中，尚未完成，也没有公布上线日期。这三件事合起来就是唯一诚实的总结。围绕 Day 3 流传的其他一切——月份、周末、倒计时——都是建立在开发活动之上的推断，而开发者已经明确要求不要转述来自外部的日期说法。</p>
      <div class="walkthrough-note"><strong>状态速览</strong><p>目前公开的版本是 0.2。Day 3 正在活跃开发中。没有公布上线日期、月份或周末。下面引用的百分比是 beta 阶段范围内的比例，而不是完整功能的百分比，两者的差别很重要。</p></div>

      <h2>官方更新确认了什么</h2>
      <p>开发者每周在官方 Tumblr 发布开发更新与 AMA 回答系列，那里的 Day 3 帖子构成了一份可靠的进行中记录。近期条目描述了：</p>
      <ul>
        <li><strong>用占位素材继续写代码。</strong>新写好的场景仍然使用占位资源，只能部分运作，过场、选项和图像要等这些场景决策定下来之后再打磨。</li>
        <li><strong>一个提到 Columbina 的全新、非常短的场景。</strong>她的角色设计很快就会确定，以便让回忆杀的剪影保持一致。</li>
        <li><strong>Beta 进度。</strong>较早的一次更新说明 Day 3 beta 的其中一部分已完成，并把 beta 置于整个更新的约 30–40%。之后的一次更新则说，已经接近完成 beta 测试所计划内容的一半。</li>
        <li><strong>比 Day 2 更大的剧本</strong>，并提到了更多坏结局内容与隐藏场景。</li>
        <li><strong>咖啡馆场景仍在推进</strong>，部分选项与情境还需要进一步修改，还需要更多草图，也可能要新增背景。</li>
        <li><strong>为 Harlequin、Pierrot 和 Jester 选定了新立绘</strong>，Doctor 的修改与新立绘则计划在开发推进到他的场景时完成。</li>
      </ul>
      <p>这些都不是发布计划。写作、美术、立绘和程序上的进展确认的是开发仍在进行，并不表示 Day 3 已经完成。只有当新的公开版本真的出现时，Day 3 才能被视为已发布。</p>
      <div class="walkthrough-tip"><strong>请仔细读那个百分比</strong><p>"整个更新的 30–40%"与"接近完成所计划的 beta 内容的一半"描述的是不同范围。前者衡量整个更新；后者衡量的是被划入 beta 的那一小块内容。两者都不是"成品游戏的百分比"，而 beta 本身是一个里程碑，不是一次发布。</p></div>

      <h2>为什么不公布日期</h2>
      <p>开发者在官方 FAQ 与 Askbox 回答中的立场一致：没有公布上线日期，官方帖子之外的日期说法不应被转述。这是对粉丝群体一条有意为之的指示，而不是疏忽。</p>
      <p>这背后也有现实原因。同一段开发期还处理了未经授权的 Google Play 上传，开发者也说明官方商店版本会另行公告。在版本尚未完成、分发渠道尚未确定之前公布日期，那是一个无法兑现的承诺。</p>

      <h2>Day 3 预计会改变什么</h2>
      <p>Day 3 计划中的体量比之前的更大，这会直接影响到当前版本能看到什么、看不到什么。</p>
      <ul>
        <li><strong>更多坏结局内容</strong>，开发帖中已有描述，这意味着版本里的结局类别会超出今天仅有的那一个 "Missing" 结局。</li>
        <li><strong>隐藏场景</strong>，同样已有描述，而这与路线是不同的事——隐藏场景是内容，不是结论。</li>
        <li><strong>更多分支。</strong>剧本比 Day 2 更大，描述中的分支工作包括含有大量选项、需要额外测试的段落。</li>
        <li><strong>Columbina 的故事。</strong>新的短场景与回忆杀剪影的工作，都指向更多共同背景故事浮出水面。</li>
      </ul>
      <p>没有被公布的是：四个计划中的结局中的任何一个会随 Day 3 一同上线。计划中的结局仍然是计划中的。</p>

      <h2>关于发布本身已经确认的事</h2>
      <p>Day 3 会以什么方式交付，有些事已经定下来了，虽然日期还没有。</p>
      <ul>
        <li><strong>它会是官方页面上的公开版本。</strong>开发者已确认 itch.io 页面是唯一的官方页面，因此 Day 3 会出现在那里，而不是通过第三方启动器或另一个商店页面。</li>
        <li><strong>平台已经确定。</strong>0.2 版已有浏览器、Windows、macOS、Linux 与 Android 版本，Day 3 采用同样一组平台是合理预期——不过并没有公布各平台的先后顺序。</li>
        <li><strong>任何官方商店版本都会单独公告。</strong>开发者说明商店版本会另行公告，而不是悄悄地跟 itch.io 更新一起出现。</li>
        <li><strong>未经授权的上传正在处理。</strong>开发时间花在了处理未经授权的 Google Play 上传上，这是分发问题而不是开发问题——但它确实意味着玩家通往官方版本的路径目前还不算简单。</li>
      </ul>

      <h2>如何自己核对当前状态</h2>
      <ol class="walkthrough-steps">
        <li><strong>打开官方 itch.io 页面</strong>，确认列出的版本仍然是 0.2。</li>
        <li><strong>按顺序读开发日志条目。</strong>它们都有日期，而且属于第一方。</li>
        <li><strong>查看官方 Tumblr</strong>，找最新的每周更新与 AMA 回答系列。</li>
        <li><strong>除非在上述地方出现，否则把你在别处看到的任何日期都当作未经核实。</strong></li>
        <li><strong>忽略倒计时页面。</strong>倒计时是一个带时钟的粉丝估计。</li>
      </ol>
      <p>开发者已确认不存在官方 Discord 服务器，因此任何不是从官方 itch.io、Tumblr、Patreon 或 Bluesky 页面链接出去的服务器，都应被视为粉丝运营或未经授权。这条规则同样适用于日期公告：粉丝 Discord 里引用的日期就是粉丝日期。</p>

      <h2>在此期间能做什么</h2>
      <p>保留你的存档，记下它是哪个版本创建的，不要覆盖第一次游玩的存档槽。下一个版本到来时，先读它的变更说明，不要假设 0.2 版的路线建议仍然适用。原型的分支结构可能在版本之间被重新整理，结局清单也会随着剧本完成而变化。</p>
      <p>逐日记录可以看站内的 <a href="/zh/day-3">Day 3 追踪页</a>，当前版本已经包含的内容可以看 <a href="/zh/blog/current-prototype-guide">原型版指南</a>。</p>
    `,
  },
  {
    slug: 'browser-vs-download',
    title: '浏览器版还是下载版？The Freak Circus 怎么玩',
    description: '《The Freak Circus》浏览器版与桌面端、Android 下载版的实用对比，包括两种方式的存档行为有何不同。',
    date: '2026-10-13',
    tags: ['浏览器', '下载', '安装'],
    image: '/images/home/about-game.webp',
    imageAlt: 'The Freak Circus，本作唯一的官方 itch.io 页面',
    readingTime: '阅读约 8 分钟',
    content: `
      <p class="article-lede">两个版本运行的是同一个 0.2 版本的同一个故事，所以这个选择与内容无关。它关系到稳定性、设置成本，以及你愿意把多少进度托付给浏览器。对大多数玩家来说，答案是：先用浏览器版，在开始在意存档之前下载桌面版。</p>
      <div class="walkthrough-note"><strong>所有内容都来自同一个地方</strong><p>开发者已声明 itch.io 页面是本游戏唯一的官方页面，并要求不要重新上传或转贴本作。没有官方 Discord 服务器。如果某个页面在别处提供所谓的"完整下载"，最好的情况也是未授权，本站不会链接它。</p></div>

      <h2>目前可以拿到什么</h2>
      <ul>
        <li><strong>网页浏览器（HTML5）</strong>——通过官方 itch.io 页面在浏览器中运行，无需安装。</li>
        <li><strong>Windows</strong>——PC 版本，0.2 版。</li>
        <li><strong>macOS</strong>——Mac 版本，0.2 版。</li>
        <li><strong>Linux</strong>——Linux 版本，0.2 版。</li>
        <li><strong>Android</strong>——APK 版本，0.2 版。</li>
      </ul>
      <p>全部是自定价，因此完整版本可以免费下载，付费属于对开发者的自愿支持，而开发者形容这个项目基本由一人完成。</p>

      <h2>什么时候该选浏览器版</h2>
      <p>浏览器版是最快上手的方式，也是边玩边读攻略最方便的方式。没有压缩包要解压，不必匹配平台，之后也不需要卸载。在共用或临时设备上、你不想留下游戏文件时，它也是明智的选择。</p>
      <p>浏览器游玩是一条被维护的路径，而不是巧合：开发者记录过浏览器专属的卡顿——包括 Ticket Taker 帐篷里的一次和某些动画段落——并已发布修复。已知仍需注意的保留项是：极快跳过部分场景可能让视觉效果不同步，所以点击通过时给浏览器版一点耐心。</p>

      <h2>什么时候该选下载版</h2>
      <p>桌面版本更适合反复游玩，也更适合想保住首轮存档的人。本地安装不受浏览器存储限制，自带一份游戏文件副本，并能给你完整的 Ren'Py 界面与历史回滚——正是这项功能让分支对比变得可行，而不是变成苦差。</p>
      <div class="walkthrough-tip"><strong>启动前先完整解压桌面压缩包</strong><p>桌面版压缩包是压缩格式。请完整解压，并让应用程序与其附带文件保持在一起，然后再启动。从压缩包内部直接运行可执行文件，是"看起来启动了却各种出错"的最常见原因。</p></div>

      <h2>存档有什么不同，以及哪些没有记录</h2>
      <p>这是两个版本真正分歧的地方，也是已发布建议最不可靠的地方。</p>
      <ul>
        <li><strong>两者都使用引擎的标准界面。</strong>The Freak Circus 是 Ren'Py 作品，所以存档使用常规的保存与读取按钮、存档位列表、快速存读档，以及历史回滚。</li>
        <li><strong>两者都提供 Day 2 入口。</strong>菜单里有一个 Day 2 按钮并附一段简短引子，所以你可以不重玩 Day 1 就直接进入 Day 2。</li>
        <li><strong>浏览器存档存在浏览器存储里。</strong>清除站点数据、打开无痕窗口，或启用严格的隐私配置，都可能在没有警告的情况下把它们删掉，而且它们绑定在创建它们的浏览器配置上。这是玩家报告"进度丢失"最常见的原因。</li>
        <li><strong>官方没有存档说明文档。</strong>开发者从未公布存档路径、存档位数量、自动存档行为，也没有说明浏览器存档能否移入桌面版。任何给你具体路径、存档位数量或保证可用迁移步骤的攻略，描述的都是引擎行为，而不是这款游戏的官方答案。</li>
      </ul>
      <p>Ren'Py 确实在其引擎界面上提供存档的导出与导入操作，而它们能否可靠地把浏览器存档移入本作的桌面版，尚未得到确认。请把它当作"值得一试"，而不是一套既定流程；在实验之前，先备份你在意的东西。</p>

      <h2>一条简单规则</h2>
      <ul>
        <li><strong>只读一遍、在共用设备上，或者不想安装任何东西：</strong>用浏览器版。</li>
        <li><strong>计划重玩、对比分支，或者想保留长期存档：</strong>为你的平台下载桌面版。</li>
        <li><strong>在手机上：</strong>Android APK 是受支持的选项。</li>
        <li><strong>无论平台：</strong>请从官方 itch.io 页面下载，并为自己会在意丢失的存档保留备份副本。</li>
      </ul>
      <p>两个版本都不会给你更多故事。0.2 版无论如何都是同样的两天、同样的一个结局，所以实际差别完全在于你的进度能多安全地存活下来。</p>

      <h2>其他值得知道的差别</h2>
      <p>三个较小的区别把两个版本分开，而且没有一个是关于品质的。</p>
      <ul>
        <li><strong>语言与语音。</strong>游戏提供英语、巴西葡萄牙语与简体中文，中文翻译已针对 0.2 版修订。配音只有英语，由 Darthsuki 表演，所以无论哪个版本，切换语言只会改变文本而不是音频。</li>
        <li><strong>操作与文本处理。</strong>桌面版本支持常规的键盘、鼠标与窗口便利功能，包括回滚查看场景内容。浏览器游玩取决于页面表现，读通一遍完全没问题，但要并排对比两个分支就更别扭。</li>
        <li><strong>菜单与界面。</strong>两个版本的菜单都包含 Day 2 入口，这是对任何想不重玩 Day 1 就回到当前内容的人最实用的一个功能。</li>
      </ul>
      <p>还有一条与版本无关、对两者都适用的警告：游戏评级为 18+，公布的内容警告包括血腥、死亡、谋杀与猎奇、暗示食人、虐待、绑架、非自愿使用药物、身体支配与非自愿身体接触。请在决定要提前了解多少剧情之前，先读完这份清单。</p>
      <p>平台列表与安全提示请看 <a href="/zh/download">下载指南</a>；存档行为请看 <a href="/zh/save">存档指南</a>。</p>
    `,
  },
  {
    slug: 'why-only-one-ending',
    title: '为什么 The Freak Circus 目前只有一个结局',
    description: '《The Freak Circus》只提供一个可玩结局，是因为它是一款原型版——本文说明已实装的坏结局、四个计划中的结局与 Day 3 之间的关系。',
    date: '2026-10-16',
    tags: ['结局', '0.2 版本', '开发'],
    image: '/images/home/faq.webp',
    imageAlt: 'The Freak Circus 当前原型版，0.2 版本',
    readingTime: '阅读约 8 分钟',
    content: `
      <p class="article-lede">只有一个结局的原因，不是其他结局被隐藏了，也不是它们会在 0.2 版的某次重玩中解锁，也不是你漏掉了什么条件。原因在于这是一款原型版，而结局正是剧本里最后才被写出来的那部分。</p>
      <div class="walkthrough-note"><strong>本文说明什么</strong><p>已实装的单个结局、开发者点名的四个结局，以及剧本当前状态之间的关系。文章包含公开版本中那一个结局的剧透。</p></div>

      <h2>一个结局，而且是坏结局</h2>
      <p>0.2 版本恰好只有一个结局："Missing"。它发生在 Day 1，当 Pierrot 被一名男子当众嘲笑、而主角选择不做出反应时。一名身份不明的人把一张粉色门票塞给主角，把主角带到粉色帐篷，马戏团的每一位成员都拒绝主角进入。游戏写明主角没能吸引到 Pierrot 的注意，最终落得悲剧结局。</p>
      <p>这个结局不是好结局的占位符。它是一段写完了、并且带着主题的完整文字——一个不去参与核心冲突的主角，会被移出这个冲突——而且它是当前版本官方提供的唯一结论。</p>

      <h2>四个结论已被计划，但都不在版本里</h2>
      <ul>
        <li><strong>Pierrot 结局</strong>——与 Pierrot 的恋爱结论。</li>
        <li><strong>Harlequin 结局</strong>——与 Harlequin 的恋爱结论。</li>
        <li><strong>主角结局</strong>——不含恋爱的结论，但仍可同时选择与角色建立友谊。</li>
        <li><strong>"All together"</strong>——主角同时爱上 Pierrot 与 Harlequin。</li>
      </ul>
      <p>这些名称来自官方页面和官方 FAQ，并被反复描述为仍在开发中。它们没有任何一份已公布的触发条件清单，因为根本没有东西可以被触发。一份"教你解锁 Harlequin 结局"的逐步攻略，描述的是一个并不公开存在的版本。</p>
      <h3>而且没有官方总数</h3>
      <p>很容易把这些数字加起来得到五。这个总数从未被公布过。开发者说自己计划了多个结局，但无法给出数量，因为剧本仍在打磨中——一个计划中的结论在发布之前完全可能被合并、重做或新增。</p>

      <h2>结局是剧本最后才产出的东西</h2>
      <p>这就是当前版本呈现出这种样子的现实原因。分支叙事必须从内部往外搭建：一天需要它的场景，场景需要它的选项，选项需要能接续到后续场景的后果，只有到了这一步，结论的形状才存在。当前版本有 Day 1 与 Day 2，以及它们的角色介绍、分支和场景变化，外加一个放在能展示后果的位置上的结局。换句话说，你在公开版本里看到的分支是真实存在的，但它们目前通向的场景都还没有各自的结局可落。</p>
      <p>官方功能列表对这一点异常诚实。它记录了 5 位已介绍的角色、1 个已实装的坏结局，以及角色介绍已完成而故事其余部分仍在开发。这是四条彼此独立的说法，而且它们与一个"已经完成开场、仍在构建中段与结尾"的项目完全一致。</p>
      <div class="walkthrough-tip"><strong>如何判断一个分支是不是真的不同</strong><p>因为没有结局可以对比，有意义的测试是场景有没有变化。载入一个存档，改动一个有意义的回答，然后对比之后的内容。如果两次游玩在对白、演出或出场人物上产生了可复现的差异，那么这个分支是真实的。如果只产生了一句不同的台词，那是一个变化，不是路线。</p></div>

      <h2>Day 3 正是结论被写出来的地方</h2>
      <p>下一个游戏日正在活跃开发，官方更新描述了比 Day 2 更大的剧本，并提到更多坏结局内容与隐藏场景。结局类别明确属于会增长的那一类：当前版本列出一个坏结局，更新说明则提到正在写更多结局内容。</p>
      <p>这也是没有发布日期的原因。开发者要求不要转述外部的日期说法，这可以理解为是在防止围绕尚未完成的工作形成时间表。开发更新描述的是 beta 进度——beta 的一部分已完成、beta 处于整个更新的约 30–40%、之后接近完成所计划 beta 内容的一半——但 beta 是一个里程碑，不是一次发布。</p>

      <h2>这对今天的玩家意味着什么</h2>
      <ul>
        <li><strong>没有东西可以解锁。</strong>把 0.2 版玩到底会到达 "Missing" 结局，那就是这个版本全部的结局内容。</li>
        <li><strong>重玩仍然值得。</strong>分支是真实存在的，场景变化、角色出场和不同的解读都是当前版本包含的内容。</li>
        <li><strong>不要为一款目前只有一个结局的游戏购买或追逐"全结局"整合包。</strong>反正官方 itch.io 页面之外的一切都没有获得授权。</li>
        <li><strong>保留你的存档。</strong>0.2 版的选择不一定会映射到下一个公开版本，结局清单也会变化。</li>
      </ul>
      <p>诚实的总结是：The Freak Circus 是一个三天故事中的两天多一点，最后一天还在制作中。你能玩到的是一段构建完善的开场，以及真实的分支。你不能玩到的是结局——目前这包括那些好结局。如果有人告诉你"再打一遍就能看到"或"隐藏条件已经存在"，那多半是在描述一个尚未公开构建的版本。</p>
      <p>带出处的结局与路线清单请看 <a href="/zh/endings">结局指南</a>；开发状态请看 <a href="/zh/day-3">Day 3 追踪页</a>。</p>
    `,
  },
  {
    slug: 'reading-fan-guides-safely',
    title: '如何阅读同人攻略而不被误导',
    description: '一套评估任何《The Freak Circus》粉丝攻略的方法——把说法分成已实装、计划中与未核实三类，并识别最常见的错误。',
    date: '2026-10-19',
    tags: ['事实核查', '攻略', '社区'],
    image: '/images/community/fanart-1.webp',
    imageAlt: '《The Freak Circus》角色的社区同人作品',
    readingTime: '阅读约 9 分钟',
    content: `
      <p class="article-lede">每一个有着热情粉丝群体的视觉小说，最终都会积累出一批彼此矛盾、其中一些还自信地讲错事的攻略。读它们并不难，只要有一套方法。方法很简单：把每一条说法归进三个桶——已实装、计划中、未核实——并且拒绝让任何一条说法因为"出现得够多"就换桶。</p>
      <div class="walkthrough-note"><strong>为什么这件事在这里格外重要</strong><p>The Freak Circus 有三个不寻常的特点，使劣质攻略变得常见：游戏是只有一个已实装结局的原型版；它的角色阵容公布了身体数据，却没有公布年龄；而大量有意思的角色材料来自同人文库页面，而不是开发者的帖子。每个特点都催生一类特定的错误信息。</p></div>

      <h2>三个桶</h2>
      <ul>
        <li><strong>已实装。</strong>你现在就能在公开版本里走到它。符合条件的是那一个结局："Missing"，Day 1 的坏结局，在 Pierrot 被嘲笑时什么都不做就能到达。</li>
        <li><strong>计划中。</strong>开发者点名了它，而它不在任何版本里。符合条件的有四个：Pierrot、Harlequin、主角和 "All together"。</li>
        <li><strong>未核实。</strong>没有第一方来源，但被广泛重复。存档路径、存档位数量、自动存档规则、确切年龄与生日、总通关时间、Day 3 上线日期，以及任何关于结局数量的具体数字。</li>
      </ul>
      <p>当每句话都被放进桶里，关于这款游戏的事实争论大多就自行消解了。"这款游戏有五个结局"是一种合并错误：一个已实装结局加上四个计划中的结局，被当成了一个开发者从未给出过的确认总数。</p>

      <h2>该问攻略的五个问题</h2>
      <ol class="walkthrough-steps">
        <li><strong>这篇攻略讲的是哪个版本？</strong>0.2 是当前公开版本。一篇从不写明版本的攻略，描述的是作者自己的记忆。</li>
        <li><strong>它给出来源链接了吗？</strong>一个官方页面、一条开发日志、一次 AMA 回答、一篇 Tumblr 帖子。指不出其中任何一项的攻略是在做解读。</li>
        <li><strong>它有没有把同人材料标为同人材料？</strong>服装细节、Pierrot 沉默的原因、Harlequin 在 Columbina 之死中的角色——全都有用，全都来自同人文库，全都值得标注。</li>
        <li><strong>它说明了剧透从哪里开始吗？</strong>一篇毫无预警就剧透 Day 2 开场的攻略，并不比会预警的更有用。</li>
        <li><strong>它在该保留余地的地方保留了吗？</strong>"计划中"、"尚未实装"、"未确认"不是攻略的弱点。它们是下一次更新之后依然成立的部分。</li>
      </ol>

      <h2>值得抓住的具体错误</h2>
      <h3>给没有路线的角色安上恋爱路线</h3>
      <p>已确认的路线选项是 Pierrot、Harlequin、两者、或者都不选。没有 Jester 路线，没有 Ticket Taker 路线，也没有 Doctor 路线。开发者把"让其余角色成为恋爱选项"描述为一种可能性，而不是承诺，而任何这类路线最可能以追加内容或 DLC 的形式到来。那些描述 Ticket Taker 路线"通过坚持与谨慎对话解锁"、Doctor 的 "Clean Hands" 结局，或"Jester 路线在 Day 2 解锁"的攻略，描述的都是并不存在的东西。Day 2 更新带来的是更多角色、动态立绘、重新设计的菜单和 Android 版本——不是新路线。</p>
      <h3>并不存在的"好结局"</h3>
      <p>版本里没有实装任何好结局：唯一的那个是坏结局，而那些常被称作"好结果"的恋爱结论，就是上面列出的同一批计划结局——尚未完成，也不保证就是粉丝期待的结果。</p>
      <h3>没有来源的精确数字</h3>
      <p>具体年龄、生日、Columbina 的身高、总时长、确切的结局数量、精确的存档位置，全都是披着数据外衣的粉丝自创。真正可信的测量数据是开发者的身高表与相对年龄顺序——而且从来没有为阵容中任何人公布过具体年龄。</p>
      <h3>Day 3 的日期</h3>
      <p>没有公布上线日期，开发者也要求不要转述外部的日期说法。倒计时页面是一个带时钟的粉丝估计。唯一算数的是官方 itch.io 页面或官方帖子里的日期。</p>

      <h2>阅读资料来源，而不是盲目相信</h2>
      <p>同人文库对这个游戏确实很有价值，值得使用——但有一个明确的注意事项。它从游戏自身的场景中汇集角色材料，所以角色描述接近原始素材，而推断与日期并不是第一方信息。阅读时把两者分开就好。</p>
      <ul>
        <li><strong>Wiki 做得好的地方：</strong>服装细节、剧情内的解释、关系梳理，以及开发者曾在 AMA 讨论中回答过什么的记录。</li>
        <li><strong>Wiki 弄错的地方：</strong>具体年龄和大多数生日、Columbina 的身高，以及对含糊剧情事件说得比证据允许的更肯定的解读。</li>
        <li><strong>该怎么做：</strong>复制那段描述，保留它的限定词。</li>
      </ul>
      <div class="walkthrough-tip"><strong>任何说法的一行测试</strong><p>问自己："开发者明天能否在不被人察觉的情况下推翻它？"如果能，这条说法就需要限定词或来源标注。"开发者已确认门票有 8 种"不可能被悄悄推翻，"Harlequin 是 21 岁"可以，而且已经被推翻过。</p></div>

      <h2>还有一件事：你从哪里拿到的游戏</h2>
      <p>先检查攻略的来源链接。开发者已声明 itch.io 页面是本游戏唯一的官方页面，并要求不要重新上传或转贴本作。没有官方 Discord 服务器，因此任何不是从官方 itch.io、Tumblr、Patreon 或 Bluesky 页面链接出去的服务器，都是粉丝运营或未经授权。</p>
      <p>那些推销"镜像下载"、"验证"程序或"打过补丁"安装程序的攻略根本不是攻略。为了获取这款游戏，绝不要安装单独的额外程序，也不要关闭杀毒软件。</p>

      <h2>一套可用的习惯</h2>
      <p>先读攻略的范围说明。如果它写明了覆盖哪个版本、来源在哪里、哪些部分仍在开发，那么其余内容就值得按比例去相信。如果它开篇就自信地断言一个并不存在的结局，那就把它放下——这样的攻略对其他一切也会同样自信地告诉你错误的事。</p>
      <p>想看被搜索最多的几个话题的核验版本，请从 <a href="/zh/endings">结局指南</a>、<a href="/zh/characters/heights">身高指南</a> 和 <a href="/zh/save">存档指南</a> 开始——它们都同样把确认事实与未核实说法分开。</p>
    `,
  },
];

export const BLOG_POSTS = POSTS_EN;

// Per-locale post arrays. English and Chinese live in this file; other
// locales live in blog-posts-<locale>.ts and register themselves here. A
// locale that has no module falls back to the English posts, and pages use
// blogLocales() to decide what to advertise to search engines.
import { POSTS_ES } from './blog-posts-es';
import { POSTS_PT } from './blog-posts-pt';
import { POSTS_VI } from './blog-posts-vi';
import { POSTS_ID } from './blog-posts-id';
import { POSTS_FIL } from './blog-posts-fil';

const POSTS_BY_LOCALE: Record<string, BlogPost[]> = {
  en: POSTS_EN,
  zh: POSTS_ZH,
  es: POSTS_ES,
  pt: POSTS_PT,
  vi: POSTS_VI,
  id: POSTS_ID,
  fil: POSTS_FIL,
};

/** Locales that carry a reviewed post array (not an English fallback). */
export const BLOG_TRANSLATED_LOCALES: string[] = Object.keys(POSTS_BY_LOCALE);

export function getBlogPosts(locale = 'en'): BlogPost[] {
  return POSTS_BY_LOCALE[locale] ?? POSTS_BY_LOCALE.en;
}

export function getPostBySlug(slug: string, locale = 'en'): BlogPost | undefined {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return BLOG_POSTS.map((post) => post.slug);
}

/**
 * Locales in which each blog post has a reviewed translation. Derived from
 * the arrays themselves so a post can never be advertised in a language it
 * does not exist in.
 */
export const BLOG_LOCALES: Record<string, readonly string[]> = Object.fromEntries(
  BLOG_POSTS.map((post) => [
    post.slug,
    BLOG_TRANSLATED_LOCALES.filter((locale) =>
      POSTS_BY_LOCALE[locale]!.some((entry) => entry.slug === post.slug),
    ),
  ]),
);
