// Long-form editorial content for the guide pages that answer the questions
// players actually search for: endings and routes, character measurements,
// saving, downloading, and the general FAQ.
//
// Content is stored per editorial locale so a locale can be published with real
// translated prose rather than English text under a translated URL. The
// `editorialLocale` helper in site-content.ts decides which locale renders.
//
// Every factual claim in this file maps to a record in game-facts.ts, so the
// pages can cite a first-party source instead of asserting community consensus.

import {
  AGE_ORDER_OLDEST_FIRST,
  CONTENT_WARNINGS,
  DAY_3_STATUS,
  ENDINGS,
  FAN_SITE_POSITIONING,
  GAME_OVERVIEW,
  HEIGHT_CHART,
  PLATFORMS,
  ROUTE_AVAILABILITY,
  SAVING_AND_RESUMING,
  SHIPPED_LANGUAGES,
  STRENGTH_RANKING,
  TALLEST_FIRST,
  UNVERIFIED_CLAIMS,
  VOICE_ACTING,
  formatHeight,
} from './game-facts';

export type EditorialLocale = 'en' | 'zh';

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type FactRow = { label: string; value: string; note?: string };

export type FaqItem = { question: string; answer: string };

export type GuidePage = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  quickFacts: FactRow[];
  sections: GuideSection[];
  faq: FaqItem[];
  /** Slugs of related guide pages, used for the internal linking footer. */
  related: string[];
};

const heightRows = (locale: EditorialLocale): FactRow[] =>
  HEIGHT_CHART.map((entry) => {
    const h = formatHeight(entry);
    return {
      label: entry.name,
      value: locale === 'zh' ? `${h.metric}（约 ${h.imperial}）` : `${h.metric} (about ${h.imperial})`,
      note: locale === 'zh'
        ? `年龄顺序第 ${entry.ageOrder} 位（由大到小）`
        : `Age order ${entry.ageOrder} of 5, oldest first`,
    };
  });

const endingRows = (locale: EditorialLocale): FactRow[] =>
  ENDINGS.map((ending) => ({
    label: ending.name,
    value:
      ending.status === 'implemented'
        ? locale === 'zh'
          ? '当前版本已实装'
          : 'Implemented in the current build'
        : locale === 'zh'
          ? '开发者计划中'
          : 'Planned by the developer',
    note: ending.summary,
  }));

const guideContent: Record<EditorialLocale, Record<string, GuidePage>> = {
  en: {
    endings: {
      slug: 'endings',
      title: 'The Freak Circus Endings and Routes',
      metaTitle: 'The Freak Circus Endings Guide: All Routes and Outcomes',
      metaDescription:
        'How many endings does The Freak Circus have? The confirmed "Missing" bad ending, the four planned endings, which characters have routes, and what the developer has actually confirmed.',
      intro:
        'Endings are the most searched topic in this game, and also the most easily misreported one. The current public build contains exactly one ending. Everything else described in guides, wikis, and videos is either planned work or interpretation. This page separates the two, and links every claim back to where the developer said it.',
      quickFacts: [
        { label: 'Endings playable now', value: '1', note: 'The "Missing" bad ending on Day 1' },
        { label: 'Endings announced as planned', value: '4', note: 'Pierrot, Harlequin, Protagonist, "All together"' },
        { label: 'Current version', value: 'Version 0.2 prototype' },
        { label: 'Route options confirmed', value: 'Pierrot, Harlequin, both, or neither' },
        { label: 'Day 3 status', value: 'In development, no date announced' },
      ],
      sections: [
        {
          heading: 'The one ending that actually exists',
          paragraphs: [
            'Version 0.2 contains a single ending, and it is a bad one. It is reached on Day 1: if the protagonist does nothing while Pierrot is being mocked by a man in front of a crowd, the protagonist is handed a pink ticket by an unknown figure, taken to the pink tent, and refused entry by every member of the circus. The game states plainly that the protagonist failed to catch Pierrot\'s attention and met a tragic end.',
            'This matters more than it sounds. A lot of fan material describes four or more endings as though they can be reached today. As of the current build, choosing between routes is still being developed — the branching exists, the conclusions do not.',
          ],
        },
        {
          heading: 'The four planned endings',
          paragraphs: [
            'The developer lists four conclusions on the official page and in the official FAQ. Two are romance endings, one is deliberately romance-free, and one is a poly ending.',
          ],
          list: ENDINGS.filter((e) => e.status === 'planned').map((e) => `${e.name} — ${e.summary}`),
        },
        {
          heading: 'Which characters can you actually route to',
          paragraphs: [
            'The official answer is narrow: Pierrot, Harlequin, both of them, or neither. The protagonist route is the "neither" option, and the developer has confirmed that it involves no romance, while still letting you choose whether to befriend the cast.',
            'There is no route for Jester, Ticket Taker, or Doctor. The developer has said that if more routes are added later, they would most likely arrive as an add-on or DLC, and that this is not decided. Making the remaining characters romance options is called a possibility, not a promise.',
          ],
        },
        {
          heading: 'What the poly ending actually means',
          paragraphs: [
            'The "All together" ending is defined by the developer as the protagonist falling in love with Pierrot and Harlequin at the same time. It is a distinct listed conclusion rather than a side variant of either romance route, and it is planned work.',
          ],
        },
        {
          heading: 'Why guide pages disagree about the ending count',
          paragraphs: [
            'Different sites report different totals because they answer different questions. Some count only what is playable, some count only what the developer has named, and some count a mix of planned conclusions and fan-theorised ones. Reading a claim against the three buckets above — implemented, planned, or unverified — is the quickest way to place it.',
            'Two further cautions apply. The developer has said the script is still a work in progress, so planned endings can change. And no official ending count exists: the answer to "how many endings will there be" is that multiple are planned but no number can be given yet.',
          ],
        },
        {
          heading: 'What to expect from Day 3',
          paragraphs: [
            'Day 3 is the next in-game day and is in active development. Development updates have described finished beta sections and put the beta at roughly 30–40% of the update, with a larger script than Day 2 and additional bad ending content described. No release date has been announced, and the developer has asked that outside date claims not be repeated.',
            'Because Day 3 is where new conclusions are being written, this page is the one to revisit after the next official update.',
          ],
        },
      ],
      faq: [
        {
          question: 'How many endings does The Freak Circus have?',
          answer:
            'One ending is playable in the current build. Four more are announced as planned: Pierrot, Harlequin, Protagonist, and "All together". The developer has said multiple endings are planned but cannot give a total number.',
        },
        {
          question: 'How do I get the "Missing" ending?',
          answer:
            'It is the only implemented ending. On Day 1, do nothing while Pierrot is being mocked; the protagonist is given a pink ticket, taken to the pink tent, and turned away by the circus.',
        },
        {
          question: 'How do I get the Harlequin ending?',
          answer:
            'There is no walkthrough yet, because the ending is not implemented. Choosing Harlequin\'s route is being developed. Any step-by-step trigger list online would be describing a build that does not exist publicly.',
        },
        {
          question: 'Does Pierrot have an ending?',
          answer:
            'A Pierrot romance ending is announced and in development, but it is not in the public build. The developer describes the script and endings as still a work in progress.',
        },
        {
          question: 'Is there a Jester, Doctor, or Ticket Taker route?',
          answer:
            'No. The confirmed route options are Pierrot, Harlequin, both, or neither. Additional character routes would most likely arrive as an add-on or DLC, and that is undecided.',
        },
        {
          question: 'Can you romance the protagonist without a character?',
          answer:
            'Yes. The protagonist route exists as a concept and involves no romance, but you can still choose to form friendships with the cast.',
        },
        {
          question: 'How many endings will the finished game have?',
          answer:
            'The developer has said multiple endings are planned but cannot give a number. The script is still a work in progress, so the list above can change.',
        },
        {
          question: 'Will Day 3 add endings?',
          answer:
            'Day 3 is in active development, and development updates have described additional bad ending content and hidden scenes. No release date has been announced.',
        },
      ],
      related: ['endings', 'characters', 'download', 'save', 'faq', 'day-3'],
    },
    heights: {
      slug: 'characters/heights',
      title: 'Character Heights, Age Order, and Rankings',
      metaTitle: 'The Freak Circus Height Chart: All Characters Ranked',
      metaDescription:
        'Official height chart for The Freak Circus characters — Pierrot, Harlequin, Jester, Doctor and Ticket Taker — plus the published age order and strength ranking.',
      intro:
        'The developer published a height chart alongside the sprite reference, and a separate age order. Those two lists are the reason height questions about this game have a definitive answer — and also why a lot of online lists get them wrong. This page reproduces the published numbers and marks where the ranking stops.',
      quickFacts: [
        { label: 'Tallest', value: 'Doctor — 207 cm', note: 'Roughly 6 ft 9.5 in' },
        { label: 'Shortest', value: 'Ticket Taker — 183 cm', note: 'Roughly 6 ft 0 in' },
        { label: 'Height spread', value: '24 cm', note: 'Between the tallest and shortest' },
        { label: 'Oldest', value: 'Ticket Taker', note: 'Official age order, oldest first' },
        { label: 'Youngest', value: 'Harlequin', note: 'Official age order, oldest first' },
        { label: 'Strongest', value: 'Pierrot', note: 'Developer\'s raw strength ranking' },
      ],
      sections: [
        {
          heading: 'The official height chart',
          paragraphs: [
            'The chart was posted by the developer as a reference used when drawing sprites. It lists five characters, which is every character introduced in the current build. The numbers below are the published values, not estimates from artwork.',
          ],
        },
        {
          heading: 'The official age order',
          paragraphs: [
            'A separate AMA post answered a request for the cast ordered oldest to youngest. The order is Ticket Taker, Doctor, Pierrot, Jester, Harlequin. No numeric age has ever been published for any of them, and the order is the only age information the developer has released.',
          ],
          list: AGE_ORDER_OLDEST_FIRST.map(
            (entry) =>
              `${entry.ageOrder}. ${entry.name} — ${entry.cm} cm tall`,
          ),
        },
        {
          heading: 'The strength ranking',
          paragraphs: [
            'The developer also published a raw physical strength ranking, which is separate from height. It runs: Pierrot first, Harlequin and Jester tied in second, Doctor third, and Ticket Taker last. The ranking is published as an aside to a fan question rather than as a game mechanic, so treat it as characterisation rather than a stat screen.',
          ],
          list: STRENGTH_RANKING.map(
            (entry) => `${entry.name} — rank ${entry.strengthRank}${entry.strengthRank === 2 ? ' (tied)' : ''}`,
          ),
        },
        {
          heading: 'What the chart does not cover',
          paragraphs: [
            'The chart covers the five introduced characters only. Columbina, whose death shapes the backstory of both leads, does not appear in the published chart, and no official numeric height for her has been found. A height for her circulating on fan wikis is not first-party information.',
            'Birthdays are similarly uneven. One character birthday has been confirmed by an official post; the rest of the dates circulating online are fan-derived and should be treated as such.',
          ],
        },
        {
          heading: 'Why character lists disagree',
          paragraphs: [
            'Most disagreements come from mixing the published chart with fan-assigned ages and birthdays, then presenting the result as official. The height figures and the relative age order are documented. Exact ages, most birthdays, and anything about a sixth character are not.',
          ],
        },
      ],
      faq: [
        {
          question: 'How tall is Pierrot in The Freak Circus?',
          answer: 'Pierrot is 198 cm, roughly 6 ft 5.95 in, in the developer\'s published height chart.',
        },
        {
          question: 'How tall is Harlequin?',
          answer: 'Harlequin is 187 cm, roughly 6 ft 1.62 in. He is the shortest of the two romance leads and the youngest of the five.',
        },
        {
          question: 'Who is the tallest character?',
          answer: 'Doctor, at 207 cm — about 6 ft 9.5 in. He is 9 cm taller than Pierrot.',
        },
        {
          question: 'Who is the shortest character?',
          answer: 'Ticket Taker, at 183 cm — roughly 6 ft 0 in. He is also the oldest of the five.',
        },
        {
          question: 'Which character is oldest?',
          answer:
            'The official age order, oldest first, is Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Harlequin is the youngest.',
        },
        {
          question: 'Who is the strongest?',
          answer:
            'Pierrot ranks first in the developer\'s strength list, with Harlequin and Jester tied second, Doctor third, and Ticket Taker last.',
        },
        {
          question: 'How old is Harlequin?',
          answer:
            'No numeric age has been published. He is the youngest of the five in the official age order. Numeric ages found on fan sites are not first-party information.',
        },
        {
          question: 'How tall is Columbina?',
          answer:
            'No official height has been published for her. She does not appear in the developer\'s chart, which covers the five introduced characters.',
        },
      ],
      related: ['characters', 'endings', 'wiki', 'day-3', 'faq'],
    },
    save: {
      slug: 'save',
      title: 'How to Save and Resume',
      metaTitle: 'How to Save The Freak Circus: Resume, Slots, and Browser Saves',
      metaDescription:
        'How to save and resume The Freak Circus on browser, PC, Mac, and Android — what the Ren\'Py engine does by default, and which save details the developer has not documented.',
      intro:
        'Saving is where fan guides are least reliable. Several sites publish exact save paths, slot counts, and browser-to-desktop transfer procedures that the developer never published. This page describes what is genuinely known — the engine behaviour and the confirmed Day 2 entry point — and separates it from what remains undocumented.',
      quickFacts: [
        { label: 'Engine', value: "Ren'Py", note: 'Standard save, load, quick save, and rollback' },
        { label: 'Continue without replaying Day 1', value: 'Yes', note: 'The menu offers a Day 2 entry point' },
        { label: 'Browser play', value: 'Supported', note: 'Served from the official itch.io page' },
        { label: 'Official save documentation', value: 'Not published' },
        { label: 'Save slot count', value: 'Not confirmed' },
        { label: 'Browser-to-desktop transfer', value: 'Not confirmed for this game' },
      ],
      sections: [
        {
          heading: 'What the game supports out of the box',
          paragraphs: [
            'The Freak Circus is built in Ren\'Py, a standard visual novel engine. That means it uses the engine\'s normal interface: a save button that opens a slot list, a load button, quick save and quick load slots, and scene rollback in history. If you have used another Ren\'Py title, the behaviour will feel familiar.',
            'A browser build is also supported, served through the official itch.io page. The developer has documented browser-specific freezes and their fixes, which confirms browser play is a maintained path rather than an accident.',
          ],
        },
        {
          heading: 'The Day 2 entry point',
          paragraphs: [
            'One save-adjacent feature is confirmed and worth knowing about: the menu includes a button for Day 2 with a short introduction, so you can continue into Day 2 without playing through Day 1 again. That matters for players who want to return to the current content without replaying the opening.',
          ],
        },
        {
          heading: 'Where saves live on desktop',
          paragraphs: [
            'Ren\'Py desktop builds store saves in a per-project folder in the user data directory. The exact path differs between Windows, macOS, and Linux, and the game has been distributed under more than one project name. We are not publishing a specific path here because the developer has never documented one for this game, and a wrong path in a guide sends people looking in folders that do not exist.',
            'If you need the path for your own machine, the reliable method is to open the in-game load or save menu and use the engine overlay\'s save-management action, which opens the correct folder directly for the platform you are on.',
          ],
        },
        {
          heading: 'Browser saves and why they can disappear',
          paragraphs: [
            'Browser builds store progress in the browser\'s own storage rather than in a file you control. That has a practical consequence: clearing site data, using a private window, or some aggressive privacy configurations will remove saves without warning. It also means a browser save is tied to the browser and profile that created it.',
            'This is engine behaviour rather than a quirk of this game, and it is the single most common reason players report losing progress.',
          ],
        },
        {
          heading: 'Moving a save between browser and desktop',
          paragraphs: [
            'Ren\'Py offers export and import actions for saves in its engine overlay. Whether that produces a workflow you can rely on for transferring a browser save into a desktop build of this specific game has not been confirmed by the developer, and reports vary by browser and platform.',
            'Treat it as a thing worth trying rather than a guaranteed procedure, and back up anything you care about before experimenting.',
          ],
        },
        {
          heading: 'Claims we are deliberately not repeating',
          paragraphs: [
            'The following circulate widely and are presented as fact by several fan guides. None of them come from the developer, and this page will not restate them as settled:',
          ],
          list: UNVERIFIED_CLAIMS.filter((c) => /save|slot|browser|zip/i.test(c.claim)).map((c) => `${c.claim} — ${c.reality}`),
        },
      ],
      faq: [
        {
          question: 'How do I save in The Freak Circus?',
          answer:
            'It is a Ren\'Py release, so it uses the engine\'s standard save and load buttons, with a slot list, quick save and quick load, and rollback in history.',
        },
        {
          question: 'Can I jump straight to Day 2?',
          answer:
            'Yes. The menu includes a Day 2 button with a short introduction, so you can continue into Day 2 without replaying Day 1.',
        },
        {
          question: 'Why did my browser save disappear?',
          answer:
            'Browser builds keep progress in browser storage. Clearing site data, a private window, or strict privacy settings can remove it. A browser save is also tied to the browser profile that created it.',
        },
        {
          question: 'Where are my save files on PC or Mac?',
          answer:
            'Ren\'Py stores saves in a per-project folder inside the system user-data directory, and the path differs by platform and by the build name. The developer has not published a path for this game, so use the engine overlay\'s save-management action from the in-game menu to open the correct folder on your machine.',
        },
        {
          question: 'Can I transfer a browser save to the desktop version?',
          answer:
            'Ren\'Py provides export and import actions for saves. Whether they work reliably for moving a browser save into a desktop build of this game has not been confirmed, so treat it as worth trying and back up first.',
        },
        {
          question: 'How many save slots are there?',
          answer:
            'That has not been documented by the developer. The slot count comes from the engine build rather than an official statement.',
        },
        {
          question: 'Does the game autosave?',
          answer:
            'Autosave behaviour comes from the engine build. The developer has not published a specific autosave schedule for this game.',
        },
        {
          question: 'Are there known browser problems with saving?',
          answer:
            'The developer has documented browser freezes in the Ticket Taker tent and some animated sections, along with fixes, and has also noted that skipping scenes too quickly can desynchronise visual effects. Those are playback issues rather than save issues, but they can interrupt a session.',
        },
      ],
      related: ['save', 'download', 'faq', 'endings', 'day-3'],
    },
    download: {
      slug: 'download',
      title: 'Where to Play and Download',
      metaTitle: 'The Freak Circus Download: Play Free on Browser, PC, Mac, Android',
      metaDescription:
        'Where to play The Freak Circus safely — the official itch.io page, supported platforms, browser play, and how to spot a fake download.',
      intro:
        'The Freak Circus is distributed through the developer\'s itch.io page, which is also the only official page for the game. Everything else claiming to host the full build is either a mirror or a scam. Here is how to get the real thing on each platform, and the few signs that give away a fake.',
      quickFacts: [
        { label: 'Official source', value: 'itch.io — the only official page' },
        { label: 'Price', value: 'Name your own price', note: 'You can pay what you consider fair, including zero' },
        { label: 'Current version', value: 'Version 0.2' },
        { label: 'Platforms', value: 'Browser, Windows, macOS, Linux, Android' },
        { label: 'Languages', value: 'English, Brazilian Portuguese, Simplified Chinese' },
        { label: 'Voice acting', value: 'English only' },
      ],
      sections: [
        {
          heading: 'The only official source',
          paragraphs: [
            'The game is published by Garula on itch.io, and the developer has stated that this page is the only official page for the game. It offers an in-browser "Run game" option and downloadable builds for the desktop and mobile platforms listed below. The browser option needs no installation at all.',
            'Because it is name-your-own-price, you can download the full build for free. Paying is a way of supporting a solo developer who has stated that development was largely solo.',
          ],
        },
        {
          heading: 'Platforms and builds',
          paragraphs: [
            'Version 0.2 is available for all five platforms. The browser build is the quickest way to start and is a good choice if you want to read a guide alongside the game.',
          ],
          list: PLATFORMS.map((p) => `${p.name} — ${p.detail}`),
        },
        {
          heading: 'Languages and voice acting',
          paragraphs: [
            'The game ships in English, Brazilian Portuguese, and Simplified Chinese. The Chinese translation was revised for version 0.2, and additional languages have been discussed as community-supported translations.',
            'Voice acting is English only, performed by Darthsuki. The developer has explained that adding further voice languages was not originally planned and would be new work.',
          ],
          list: SHIPPED_LANGUAGES.map((l) => l.name),
        },
        {
          heading: 'Content warnings',
          paragraphs: [
            'The game is rated 18+ and the developer publishes an explicit warning list. This is worth reading before playing, particularly if you are deciding how much of the story to read about before starting.',
          ],
          list: CONTENT_WARNINGS.map((w) => w),
        },
        {
          heading: 'How to spot a fake download',
          paragraphs: [
            'The clearest warning sign is any site offering the full game outside the official itch.io page. The developer has explicitly asked that the game not be re-uploaded or reposted, and has confirmed there is no official Discord server, so every server should be treated as fan-run.',
            'Other things to treat as red flags: a required "verification" app or browser extension, an unusually small download that turns out to be an installer for something else, and any request to disable antivirus protection.',
          ],
        },
        {
          heading: 'What the browser build gets right, and where it stumbles',
          paragraphs: [
            'Browser play is genuinely supported and the developer has fixed browser-specific problems, including a freeze in the Ticket Taker tent and some animated sections. Skipping certain scenes very quickly can still leave visual effects out of sync, which is worth knowing if you are clicking through quickly.',
            'If you want the smoothest experience for repeated playthroughs and route hunting, a desktop build gives you the full Ren\'Py interface with rollback.',
          ],
        },
      ],
      faq: [
        {
          question: 'Where can I play The Freak Circus?',
          answer:
            'On the developer\'s itch.io page, which is the only official page for the game. It offers both in-browser play and downloadable builds.',
        },
        {
          question: 'Is The Freak Circus free?',
          answer:
            'It is name-your-own-price on itch.io, so you can download the full build for free and pay what you think is fair if you want to support the developer.',
        },
        {
          question: 'Can I play The Freak Circus on my phone?',
          answer:
            'Yes. An Android build is published alongside the browser, Windows, macOS, and Linux versions.',
        },
        {
          question: 'Is there a Chinese version?',
          answer:
            'Yes. Simplified Chinese ships with the game, and the translation was revised for version 0.2.',
        },
        {
          question: 'What other languages are available?',
          answer:
            'The game ships in English, Brazilian Portuguese, and Simplified Chinese, with English-only voice acting. Other languages have been discussed as community translations.',
        },
        {
          question: 'How do I know a download site is fake?',
          answer:
            'The official itch.io page is the only official source. The developer has asked that the game not be reposted, so any other site offering the full build is unlicensed at best. Never install a separate "verification" program or disable antivirus to get the game.',
        },
        {
          question: 'Should I play in the browser or download the desktop build?',
          answer:
            'The browser build needs no installation and is fine for a first read-through. The desktop build gives the full Ren\'Py interface with rollback, which is better for route hunting and repeated playthroughs.',
        },
        {
          question: 'Is the browser version buggy?',
          answer:
            'Some browser-specific freezes were fixed by the developer, including one in the Ticket Taker tent. Skipping scenes too quickly can still desynchronise visual effects.',
        },
      ],
      related: ['download', 'save', 'faq', 'endings', 'characters'],
    },
    faq: {
      slug: 'faq',
      title: 'Frequently Asked Questions',
      metaTitle: 'The Freak Circus FAQ: Play, Save, Endings, Characters, and Download',
      metaDescription:
        'Answers to the most common questions about The Freak Circus — where to play, how to save, how many endings exist, character heights, and what is still in development.',
      intro:
        'This is the short version of the site. If a question has a dedicated guide, this page gives the answer and links to the detail rather than repeating it. Where an answer depends on something the developer has not published, that is said plainly instead of being filled in with a plausible-sounding guess.',
      quickFacts: [
        { label: 'Current version', value: 'Version 0.2 prototype' },
        { label: 'Playable endings', value: '1', note: '"Missing" — a bad ending' },
        { label: 'Planned endings', value: '4' },
        { label: 'Platforms', value: '5', note: 'Browser, Windows, macOS, Linux, Android' },
        { label: 'Languages', value: '3', note: 'English, Portuguese, Simplified Chinese' },
        { label: 'Day 3', value: 'In development, no date announced' },
      ],
      sections: [
        {
          heading: 'Playing and downloading',
          paragraphs: [
            'Everything about getting the game running lives on the download guide. The short version: the official itch.io page is the only official source, it is name-your-own-price, and it offers both in-browser play and desktop and Android builds.',
          ],
        },
        {
          heading: 'Saving and resuming',
          paragraphs: [
            'The game is a standard Ren\'Py release, so saving works through the engine\'s normal interface. The menu also lets you jump straight into Day 2 without replaying Day 1. Details that are widely repeated online but never confirmed by the developer — exact save paths, slot counts, and guaranteed browser-to-desktop transfer — are marked as unverified on the save guide.',
          ],
        },
        {
          heading: 'Endings and routes',
          paragraphs: [
            'One ending is playable in the current build, and it is a bad ending. Four more are announced as planned: Pierrot, Harlequin, the Protagonist, and "All together". The route options are Pierrot, Harlequin, both, or neither — there is no Jester, Doctor, or Ticket Taker route.',
          ],
        },
        {
          heading: 'Characters and measurements',
          paragraphs: [
            'The developer published a height chart covering the five introduced characters, and a separate age order. Those two lists are the only official measurements. Exact ages, most birthdays, and a height for Columbina circulate widely online without a first-party source.',
          ],
        },
        {
          heading: 'What is still being developed',
          paragraphs: [
            'Version 0.2 contains all five character introductions and one bad ending. Day 3 is in active development, with development updates describing finished beta sections at roughly 30–40% of the update. No release date has been announced, and the developer has asked that outside date claims not be repeated.',
          ],
        },
        {
          heading: 'About this site',
          paragraphs: [
            'This is an independent fan guide. It is not the developer, publisher, or an official support channel. The developer has confirmed there is no official Discord server, so every server and account that is not linked from the official itch.io, Tumblr, Patreon, or Bluesky pages should be treated as fan-run or unauthorized.',
          ],
        },
      ],
      faq: [
        {
          question: 'Where can I play The Freak Circus?',
          answer: 'On the developer\'s itch.io page, which is the only official page for the game. It offers browser play and downloadable builds for Windows, macOS, Linux, and Android.',
        },
        {
          question: 'How do I download The Freak Circus safely?',
          answer: 'Use the official itch.io page only. The developer has asked that the game not be reposted, so any other site offering the full build is unlicensed.',
        },
        {
          question: 'How do I save The Freak Circus?',
          answer: 'It is a Ren\'Py release, so it uses the engine\'s standard save and load interface, with quick save and rollback.',
        },
        {
          question: 'Can I resume from Day 2 without replaying Day 1?',
          answer: 'Yes. The menu includes a Day 2 button with a short introduction.',
        },
        {
          question: 'How many endings are there?',
          answer: 'One is playable now — the "Missing" bad ending. Four more are planned: Pierrot, Harlequin, the Protagonist, and "All together". No total has been announced.',
        },
        {
          question: 'How do I get the Harlequin ending?',
          answer: 'You cannot yet — it is planned and not implemented. Any published click-by-step trigger list would describe a build that does not exist publicly.',
        },
        {
          question: 'How tall is Pierrot?',
          answer: '198 cm, about 6 ft 5.95 in, in the developer\'s published height chart.',
        },
        {
          question: 'Who is the oldest character?',
          answer: 'Ticket Taker, in the official age order: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
        },
        {
          question: 'Why can\'t Pierrot speak?',
          answer:
            'The official synopsis describes him as "the silent yandere", and his silence is a deliberate characterisation rather than a missing voice-actor. Details about the in-fiction reason come from story material rather than a developer statement.',
        },
        {
          question: 'When will Day 3 come out?',
          answer: 'It has no announced date. It is in active development, with beta work described at roughly 30–40% of the update.',
        },
        {
          question: 'Is there an official Discord server?',
          answer: 'No. The developer has confirmed there is no official server, and every community server should be considered fan-run.',
        },
        {
          question: 'Can I make fan art of the characters?',
          answer:
            'Yes. Fan art is a normal part of the fandom. This site curates community artwork with creator permission and attribution, and does not host game files or repackage the game.',
        },
      ],
      related: ['faq', 'download', 'save', 'endings', 'characters', 'wiki'],
    },
  },
  zh: {
    endings: {
      slug: 'endings',
      title: 'The Freak Circus 结局与路线全解',
      metaTitle: 'The Freak Circus 结局攻略：全部路线与结果',
      metaDescription:
        'The Freak Circus 有几个结局？唯一已实装的 "Missing" 恶性结局、四个计划中的结局、哪些角色有路线，以及开发者到底确认了什么。',
      intro:
        '结局是这款游戏被搜索最多的主题，也是最容易被写错的主题。当前公开版本只有一个结局，其余在攻略、Wiki 和视频里出现的内容，要么是开发计划，要么是玩家解读。本页把两者分开，并给出每条说法的官方出处。',
      quickFacts: [
        { label: '当前可玩结局', value: '1 个', note: 'Day 1 的 "Missing" 恶性结局' },
        { label: '已公布计划结局', value: '4 个', note: 'Pierrot、Harlequin、主角、"All together"' },
        { label: '当前版本', value: '0.2 原型版' },
        { label: '已确认路线选项', value: 'Pierrot、Harlequin、两者、都不选' },
        { label: 'Day 3 状态', value: '开发中，未公布日期' },
      ],
      sections: [
        {
          heading: '真正存在的那一个结局',
          paragraphs: [
            '0.2 版本只包含一个结局，而且是恶性结局。它发生在 Day 1：当 Pierrot 被一名男子当众嘲笑时，主角选择不做出反应，主角会被一个身份不明的人塞上一张粉色门票，带到粉色帐篷，并被马戏团的每一位成员拒之门外。游戏明确写着主角没能吸引到 Pierrot 的注意，最终落得悲剧结局。',
            '这一点比听上去更重要。大量同人内容把四个乃至更多结局描述得像是现在就能触发，但截至当前版本，选择分支确实存在，结局本身还没有。',
          ],
        },
        {
          heading: '四个计划中的结局',
          paragraphs: [
            '开发者在官方页面和官方 FAQ 中列出了四种结局：两个恋爱结局，一个明确不含恋爱，一个多角结局。',
          ],
          list: ENDINGS.filter((e) => e.status === 'planned').map((e) => `${e.name} — ${e.summary}`),
        },
        {
          heading: '到底能给谁走路线',
          paragraphs: [
            '官方答案很窄：Pierrot、Harlequin、两者都选，或者都不选。主角路线就是"都不选"的那一项，开发者确认这条路线不含恋爱，但仍然可以选择与角色建立友谊。',
            'Jester、Ticket Taker 和 Doctor 没有路线。开发者表示，如果之后增加路线，更可能以追加内容或 DLC 的形式发布，而且这件事尚未决定。让其余角色成为恋爱对象是"一种可能性"，而不是承诺。',
          ],
        },
        {
          heading: '多角结局到底指什么',
          paragraphs: [
            '开发者对"All together"的定义是：主角同时爱上 Pierrot 和 Harlequin。它是一个独立列出的结局，而不是任一恋爱路线的变体，目前属于计划中内容。',
          ],
        },
        {
          heading: '为什么各家攻略说的结局数量不一样',
          paragraphs: [
            '不同站点统计的是不同的问题：有的只数当前能玩到的，有的只数开发者点名的，还有的把计划结论和玩家猜测混在一起。把任何说法放进"已实装 / 计划中 / 未核实"这三个桶里，是最快判断其性质的方法。',
            '另外要提醒两点：开发者说剧本仍在打磨中，已公布的结局可能变化；并且官方从未给出结局总数——"最终会有几个结局"的官方回答是"计划了多个，但现在没法给数字"。',
          ],
        },
        {
          heading: 'Day 3 会带来什么',
          paragraphs: [
            'Day 3 是下一个游戏日，目前在开发中。开发日志提到已完成的 beta 部分，并称 beta 约覆盖本次更新的 30–40%，剧本规模大于 Day 2，另有恶性结局相关内容。官方未公布发布日期，开发者也明确要求不要转述外部的日期传言。',
            '由于新结局正是在 Day 3 阶段编写，本页值得在下次官方更新后回访。',
          ],
        },
      ],
      faq: [
        {
          question: 'The Freak Circus 有几个结局？',
          answer: '当前版本能玩到的只有 1 个。另外公布了 4 个计划中的结局：Pierrot、Harlequin、主角和"All together"。官方未给出最终总数。',
        },
        {
          question: '怎么触发 "Missing" 结局？',
          answer: '这是唯一已实装的结局。在 Day 1，Pierrot 被嘲笑时选择不作为，主角会得到一张粉色门票，被带到粉色帐篷并被马戏团拒之门外。',
        },
        {
          question: '怎么拿到 Harlequin 结局？',
          answer: '暂时拿不到——该结局仍在开发中，尚未实装。网上任何逐步触发表都对应一个并不存在的公开版本。',
        },
        {
          question: 'Pierrot 有结局吗？',
          answer: 'Pierrot 恋爱结局已公布且在开发中，但不在公开版本里。开发者说明剧本与结局仍是进行中的工作。',
        },
        {
          question: '有 Jester、Doctor 或 Ticket Taker 的路线吗？',
          answer: '没有。已确认的路线选项是 Pierrot、Harlequin、两者或都不选。增加其他角色路线更可能以追加内容或 DLC 形式发布，尚未决定。',
        },
        {
          question: '可以不和任何角色恋爱吗？',
          answer: '可以。主角路线确实存在且不含恋爱，但你仍然可以选择与角色建立友谊。',
        },
        {
          question: '最终会有多少个结局？',
          answer: '开发者表示计划了多个结局，但无法给出数字。剧本仍在打磨，上述列表也可能变化。',
        },
        {
          question: 'Day 3 会加结局吗？',
          answer: 'Day 3 正在开发中，开发日志提到更多恶性结局内容和隐藏场景。发布日期尚未公布。',
        },
      ],
      related: ['endings', 'characters', 'download', 'save', 'faq', 'day-3'],
    },
    heights: {
      slug: 'characters/heights',
      title: '角色身高、年龄顺序与各项排名',
      metaTitle: 'The Freak Circus 身高表：全部角色排名',
      metaDescription:
        'The Freak Circus 角色官方身高表——Pierrot、Harlequin、Jester、Doctor 与 Ticket Taker，附官方公布的年龄顺序与力量排名。',
      intro:
        '开发者曾随立绘参考公布一张身高表，之后又单独公布过年龄顺序。正是这两份清单让这个游戏的身高类问题有确定答案——也解释了为什么网上很多列表会写错。本页还原公布的原始数字，并标明排名到哪里为止。',
      quickFacts: [
        { label: '最高', value: 'Doctor — 207 cm', note: '约 6 英尺 9.5 英寸' },
        { label: '最矮', value: 'Ticket Taker — 183 cm', note: '约 6 英尺 0 英寸' },
        { label: '身高差', value: '24 cm', note: '最高与最矮之间' },
        { label: '最年长', value: 'Ticket Taker', note: '官方年龄顺序，由大到小' },
        { label: '最年轻', value: 'Harlequin', note: '官方年龄顺序，由大到小' },
        { label: '最强', value: 'Pierrot', note: '开发者公布的纯粹力量排名' },
      ],
      sections: [
        {
          heading: '官方身高表',
          paragraphs: [
            '这张表由开发者作为绘制立绘时的参照发布，列出 5 位角色，即当前版本已登场的全部角色。下面的数字是公布原值，不是从画面推测的估值。',
          ],
        },
        {
          heading: '官方年龄顺序',
          paragraphs: [
            '另一条 AMA 回答回应了"按从大到小排列角色"的请求，顺序是 Ticket Taker、Doctor、Pierrot、Jester、Harlequin。官方从未公布任何角色的具体年龄，这个顺序是唯一的年龄信息。',
          ],
          list: AGE_ORDER_OLDEST_FIRST.map(
            (entry) => `${entry.ageOrder}. ${entry.name} — 身高 ${entry.cm} cm`,
          ),
        },
        {
          heading: '力量排名',
          paragraphs: [
            '开发者还公布过一份纯粹体能排名，与身高无关：Pierrot 第一，Harlequin 与 Jester 并列第二，Doctor 第三，Ticket Taker 垫底。这份排名是在回答粉丝提问时附带的，与其说是游戏机制，不如看作角色性格的一部分。',
          ],
          list: STRENGTH_RANKING.map(
            (entry) => `${entry.name} — 第 ${entry.strengthRank} 位${entry.strengthRank === 2 ? '（并列）' : ''}`,
          ),
        },
        {
          heading: '这张表没有覆盖的部分',
          paragraphs: [
            '身高表只覆盖已登场的 5 位角色。塑造两位主角背景的 Columbina 并未出现在公布的表中，也没有找到关于她的官方具体身高。同人 Wiki 上流传的身高并非第一方信息。',
            '生日同样参差不齐。目前只有一个角色生日由官方帖子确认，其余在网络上流传的日期都源自粉丝整理，应按此理解。',
          ],
        },
        {
          heading: '为什么各家角色列表对不上',
          paragraphs: [
            '大多数分歧来自把公布的身高表与粉丝推定的年龄、生日混在一起，再当作官方信息发布。身高数字和相对年龄顺序有据可查；具体年龄、多数生日，以及任何关于第 6 位角色的信息则没有。',
          ],
        },
      ],
      faq: [
        {
          question: 'Pierrot 身高多少？',
          answer: '开发者公布的身高表中，Pierrot 为 198 cm，约 6 英尺 5.95 英寸。',
        },
        {
          question: 'Harlequin 身高多少？',
          answer: 'Harlequin 为 187 cm，约 6 英尺 1.62 英寸。他在两位恋爱主角中较矮，也是五人中年龄最小的。',
        },
        {
          question: '谁最高？',
          answer: 'Doctor，207 cm，约 6 英尺 9.5 英寸，比 Pierrot 高 9 cm。',
        },
        {
          question: '谁最矮？',
          answer: 'Ticket Taker，183 cm，约 6 英尺 0 英寸。他同时是五人中年龄最大的。',
        },
        {
          question: '谁年龄最大？',
          answer: '官方年龄顺序由大到小为 Ticket Taker、Doctor、Pierrot、Jester、Harlequin。Harlequin 最年轻。',
        },
        {
          question: '谁最强？',
          answer: "开发者的力量排名中 Pierrot 第一，Harlequin 与 Jester 并列第二，Doctor 第三，Ticket Taker 最后。",
        },
        {
          question: 'Harlequin 多大？',
          answer: '官方从未公布具体年龄，只公布了他在五人中最年轻的顺序。粉丝站上的具体数字并非第一方信息。',
        },
        {
          question: 'Columbina 身高多少？',
          answer: '官方没有公布过她的身高。开发者身高表只覆盖已登场的 5 位角色，她不在其中。',
        },
      ],
      related: ['characters', 'endings', 'wiki', 'day-3', 'faq'],
    },
    save: {
      slug: 'save',
      title: '存档与继续游戏',
      metaTitle: 'The Freak Circus 存档教程：读档、存档位与浏览器存档',
      metaDescription:
        'The Freak Circus 如何在浏览器、PC、Mac 与 Android 上存档和继续——Ren\'Py 引擎的默认行为，以及开发者从未确认过的那些细节。',
      intro:
        '存档是同人攻略里最不可靠的部分。多个站点发布精确的存档路径、存档位数量和浏览器转桌面流程，而开发者从未公布过这些内容。本页说明真正已知的信息——引擎行为与已确认的 Day 2 入口——并把尚未确认的部分单独列出。',
      quickFacts: [
        { label: '引擎', value: "Ren'Py", note: '标准存档、读档、快速存档与回滚' },
        { label: '不重玩 Day 1 直接继续', value: '可以', note: '菜单提供 Day 2 入口' },
        { label: '浏览器游玩', value: '支持', note: '由官方 itch.io 页面提供' },
        { label: '官方存档文档', value: '未发布' },
        { label: '存档位数量', value: '未确认' },
        { label: '浏览器转桌面', value: '未针对本游戏确认' },
      ],
      sections: [
        {
          heading: '游戏默认支持什么',
          paragraphs: [
            'The Freak Circus 使用 Ren\'Py 打造，这是一款标准视觉小说引擎。这意味着它使用引擎的常规界面：存档按钮会打开存档位列表，另有读档、快速存档、快速读档，以及历史回滚。如果你玩过其他 Ren\'Py 作品，操作手感会很熟悉。',
            '官方 itch.io 页面同时提供浏览器版本。开发者专门记录并修复过浏览器端的卡死问题，这说明浏览器游玩是长期维护的路径，而不是顺带能用。',
          ],
        },
        {
          heading: 'Day 2 入口',
          paragraphs: [
            '有一项与进度相关、且确实得到确认的功能值得知道：菜单中包含一个 Day 2 按钮并附有简短说明，让你无需重玩 Day 1 就能继续进入 Day 2。这对想回到当前内容、但不想重放开局的玩家很实用。',
          ],
        },
        {
          heading: '桌面端存档位置',
          paragraphs: [
            'Ren\'Py 桌面版会把存档保存在用户数据目录下的项目专属文件夹中。具体路径在 Windows、macOS 与 Linux 之间不同，而且该游戏曾以不止一个项目名分发。我们在这里不给出具体路径，因为开发者从未为这个游戏公布过路径，攻略里写错路径只会让人去找不存在的文件夹。',
            '如果确实需要本机路径，可靠做法是打开游戏内的读档或存档菜单，使用引擎覆盖层里的存档管理功能，它会直接打开你当前平台对应的正确目录。',
          ],
        },
        {
          heading: '浏览器存档为什么会消失',
          paragraphs: [
            '浏览器版本把进度存在浏览器自身的存储里，而不是保存在你能掌控的文件中。这带来一个实际后果：清除站点数据、使用隐私窗口，或某些激进的隐私配置都会在无预警的情况下删掉存档。这也意味着浏览器存档与创建它的浏览器和用户配置文件绑定。',
            '这是引擎行为而非本作特例，也是玩家反馈"进度丢失"最常见的原因。',
          ],
        },
        {
          heading: '在浏览器与桌面之间转移存档',
          paragraphs: [
            'Ren\'Py 在引擎覆盖层中提供导出与导入存档的操作。这套操作能否稳定地把浏览器存档迁移进本游戏的桌面版，开发者并未确认，各浏览器与平台的表现也不一致。',
            '建议把它当作值得一试的做法，而不是保证可用的流程；实验前先备份你在意的内容。',
          ],
        },
        {
          heading: '我们刻意不重复的说法',
          paragraphs: [
            '以下说法流传很广，并被多个攻略当作事实陈述，但都不是开发者所说，本页不会把它们当作定论转述：',
          ],
          list: UNVERIFIED_CLAIMS.filter((c) => /save|slot|browser|zip/i.test(c.claim)).map((c) => `${c.claim} — ${c.reality}`),
        },
      ],
      faq: [
        {
          question: 'The Freak Circus 怎么存档？',
          answer: "它是 Ren'Py 作品，使用引擎标准的存档与读档界面，含快速存档与历史回滚。",
        },
        {
          question: '能直接跳到 Day 2 吗？',
          answer: '可以。菜单里有带简短说明的 Day 2 按钮，无需重玩 Day 1 即可继续。',
        },
        {
          question: '为什么浏览器存档没了？',
          answer: '浏览器版本把进度存在浏览器存储中。清除站点数据、隐私窗口或严格的隐私设置都可能删掉它，且浏览器存档与创建它的浏览器配置文件绑定。',
        },
        {
          question: 'PC 或 Mac 的存档文件在哪？',
          answer:
            "Ren'Py 会把存档保存在系统用户数据目录下的项目专属文件夹，路径随平台和构建名称不同。开发者未公布过本作路径，请用游戏内菜单的引擎存档管理功能打开本机正确的文件夹。",
        },
        {
          question: '能把浏览器存档转到桌面版吗？',
          answer:
            "Ren'Py 提供存档导出与导入操作。能否可靠地把浏览器存档移入本游戏的桌面版未经确认，建议先备份再尝试。",
        },
        {
          question: '有多少个存档位？',
          answer: '开发者没有公布过。这个数量来自引擎构建本身，而非官方说明。',
        },
        {
          question: '游戏会自动存档吗？',
          answer: '自动存档行为取决于引擎构建。开发者没有公布本作的具体自动存档节奏。',
        },
        {
          question: '浏览器版有已知问题吗？',
          answer:
            '开发者记录并修复过 Ticket Taker 帐篷与部分动画场景的浏览器卡死，也提到过快跳过场景会导致视觉效果不同步。这些属于播放问题而非存档问题，但可能打断游玩。',
        },
      ],
      related: ['save', 'download', 'faq', 'endings', 'day-3'],
    },
    download: {
      slug: 'download',
      title: '在哪里玩与下载',
      metaTitle: 'The Freak Circus 下载：浏览器、PC、Mac、Android 免费游玩',
      metaDescription:
        'The Freak Circus 在哪里安全游玩——官方 itch.io 页面、支持的平台、浏览器游玩方式，以及如何识别假下载。',
      intro:
        'The Freak Circus 通过开发者的 itch.io 页面发布，而那也是这个游戏唯一的官方页面。任何声称提供完整下载的站点，要么是镜像，要么是诈骗。这里说明各平台如何获取正版，以及假下载的少数几个特征。',
      quickFacts: [
        { label: '官方来源', value: 'itch.io — 唯一官方页面' },
        { label: '价格', value: '自定价格', note: '你认为值多少就付多少，包括 0' },
        { label: '当前版本', value: '0.2 版' },
        { label: '平台', value: '浏览器、Windows、macOS、Linux、Android' },
        { label: '语言', value: '英语、巴西葡语、简体中文' },
        { label: '配音', value: '仅英语' },
      ],
      sections: [
        {
          heading: '唯一的官方来源',
          paragraphs: [
            '本作由 Garula 在 itch.io 发布，开发者明确表示该页面是游戏唯一的官方页面。页面同时提供浏览器内"Run game"选项，以及面向桌面和移动平台的下载版本。浏览器选项无需任何安装。',
            '由于采用自定价格，你可以免费下载完整版本。付费是支持一位基本独立开发者的方式，开发者曾说明开发工作主要由自己完成。',
          ],
        },
        {
          heading: '平台与版本',
          paragraphs: [
            '0.2 版在全部 5 个平台均可获取。浏览器版上手最快，也适合一边看攻略一边玩。',
          ],
          list: PLATFORMS.map((p) => `${p.name} — ${p.detail}`),
        },
        {
          heading: '语言与配音',
          paragraphs: [
            '游戏提供英语、巴西葡语和简体中文。中文翻译在 0.2 版中做过修订，另有语言曾以社区翻译的形式被讨论。',
            '配音仅提供英语，由 Darthsuki 演绎。开发者解释过，进一步增加配音语言属于新增工作，原先并未计划。',
          ],
          list: SHIPPED_LANGUAGES.map((l) => l.name),
        },
        {
          heading: '内容警告',
          paragraphs: [
            '游戏评级为 18+，开发者公开了明确的警告清单。如果你正在决定先读多少剧情再开始游玩，这份清单值得先看。',
          ],
          list: CONTENT_WARNINGS.map((w) => w),
        },
        {
          heading: '如何识别假下载',
          paragraphs: [
            '最明显的警示信号，是任何在官方 itch.io 页面之外提供完整游戏的站点。开发者明确要求不要重新上传或转载本作，并确认不存在官方 Discord 服务器，因此所有服务器都应视为粉丝自建。',
            '其他需要警惕的迹象：要求安装所谓的"验证"程序或浏览器扩展、异常小的下载文件实际却是别的安装包，以及任何要求关闭杀毒软件的要求。',
          ],
        },
        {
          heading: '浏览器版的优势与短板',
          paragraphs: [
            '浏览器游玩确实受支持，开发者也修复过浏览器端问题，包括 Ticket Taker 帐篷和部分动画场景的卡死。过快跳过某些场景仍可能让视觉效果不同步，这一点值得留意。',
            '如果要做反复通关和路线收集，桌面版能提供完整的 Ren\'Py 界面，包括回滚功能。',
          ],
        },
      ],
      faq: [
        {
          question: '在哪里玩 The Freak Circus？',
          answer: '在开发者的 itch.io 页面，那是这个游戏唯一的官方页面，同时提供浏览器游玩与各平台下载。',
        },
        {
          question: 'The Freak Circus 免费吗？',
          answer: 'itch.io 上是自定价格，你可以免费下载完整版本，也可以按你认为合适的金额支持开发者。',
        },
        {
          question: '手机上能玩吗？',
          answer: '可以。Android 版与浏览器、Windows、macOS、Linux 版本一同发布。',
        },
        {
          question: '有中文版吗？',
          answer: '有。简体中文随游戏发布，翻译在 0.2 版中做过修订。',
        },
        {
          question: '还有哪些语言？',
          answer: '游戏提供英语、巴西葡语和简体中文，配音仅英语。其他语言曾以社区翻译形式讨论。',
        },
        {
          question: '怎么判断下载站是假的？',
          answer: '官方 itch.io 页面是唯一官方来源，开发者要求不要转载，因此任何提供完整下载的其他站点都未经授权。绝不要为获取游戏而安装额外的"验证"程序或关闭杀毒软件。',
        },
        {
          question: '浏览器版还是下载版好？',
          answer: '浏览器版无需安装，适合首次阅读。桌面版提供完整的 Ren\'Py 界面和回滚功能，更适合路线收集与反复通关。',
        },
        {
          question: '浏览器版有 bug 吗？',
          answer: '部分浏览器端卡死已由开发者修复，包括 Ticket Taker 帐篷那处。过快跳过场景仍可能让视觉效果不同步。',
        },
      ],
      related: ['download', 'save', 'faq', 'endings', 'characters'],
    },
    faq: {
      slug: 'faq',
      title: '常见问题',
      metaTitle: 'The Freak Circus FAQ：游玩、存档、结局、角色与下载',
      metaDescription:
        'The Freak Circus 最常见问题的解答——在哪里玩、如何存档、有几个结局、角色身高，以及哪些内容仍在开发中。',
      intro:
        '这是全站的精简版。如果某个问题有专门的攻略页，这里给出答案并链接到详情，而不是重复展开。当答案依赖于开发者尚未公布的信息时，本页会直说，而不是用听起来合理的猜测填补。',
      quickFacts: [
        { label: '当前版本', value: '0.2 原型版' },
        { label: '可玩结局', value: '1 个', note: '"Missing" — 恶性结局' },
        { label: '计划结局', value: '4 个' },
        { label: '平台', value: '5 个', note: '浏览器、Windows、macOS、Linux、Android' },
        { label: '语言', value: '3 种', note: '英语、葡萄牙语、简体中文' },
        { label: 'Day 3', value: '开发中，未公布日期' },
      ],
      sections: [
        {
          heading: '游玩与下载',
          paragraphs: [
            '关于把游戏跑起来的一切都在下载页。简单说：官方 itch.io 页面是唯一官方来源，自定价格，同时提供浏览器游玩和桌面与 Android 版本。',
          ],
        },
        {
          heading: '存档与继续',
          paragraphs: [
            '游戏使用标准 Ren\'Py 引擎，存档通过引擎的常规界面完成。菜单还可以直接进入 Day 2 而不必重玩 Day 1。网上广泛流传但开发者从未确认的细节——精确存档路径、存档位数量、浏览器到桌面的可靠转移——在存档页都标注为未核实。',
          ],
        },
        {
          heading: '结局与路线',
          paragraphs: [
            '当前版本能玩到一个结局，是恶性结局。另有 4 个计划中的结局：Pierrot、Harlequin、主角和"All together"。路线选项为 Pierrot、Harlequin、两者或都不选——Jester、Doctor 与 Ticket Taker 没有路线。',
          ],
        },
        {
          heading: '角色与身体数据',
          paragraphs: [
            '开发者公布过覆盖 5 位已登场角色的身高表，以及一份单独的年龄顺序。这两份清单是唯一的官方身体数据。网上流传的具体年龄、多数生日以及 Columbina 的身高都没有第一方来源。',
          ],
        },
        {
          heading: '仍在开发中的部分',
          paragraphs: [
            '0.2 版包含全部 5 位角色介绍和 1 个恶性结局。Day 3 正在开发中，开发日志提到已完成的 beta 部分约占本次更新的 30–40%。官方未公布发布日期，开发者也要求不要转述外部的日期传言。',
          ],
        },
        {
          heading: '关于本站',
          paragraphs: [
            '本站是独立的粉丝攻略，不是开发者、发行方或官方支持渠道。开发者已确认不存在官方 Discord 服务器，因此凡是没有从官方 itch.io、Tumblr、Patreon 或 Bluesky 页面链接出去的服务器和账号，都应视为粉丝自建或未授权。',
          ],
        },
      ],
      faq: [
        {
          question: '在哪里玩 The Freak Circus？',
          answer: '在开发者的 itch.io 页面，那是唯一的官方页面，提供浏览器游玩以及 Windows、macOS、Linux 和 Android 下载。',
        },
        {
          question: '如何安全下载？',
          answer: '只用官方 itch.io 页面。开发者要求不要转载，因此任何其他提供完整下载的站点都未经授权。',
        },
        {
          question: '怎么存档？',
          answer: "它是 Ren'Py 作品，使用引擎标准的存档与读档界面，含快速存档与回滚。",
        },
        {
          question: '能从 Day 2 继续而不重玩 Day 1 吗？',
          answer: '可以。菜单里有带简短说明的 Day 2 按钮。',
        },
        {
          question: '有几个结局？',
          answer: '现在能玩到 1 个——"Missing" 恶性结局。另有 4 个计划中的结局：Pierrot、Harlequin、主角和"All together"。官方未公布总数。',
        },
        {
          question: '怎么拿 Harlequin 结局？',
          answer: '目前拿不到——该结局仍在开发中，尚未实装。任何逐步触发表都会对应一个并不存在的公开版本。',
        },
        {
          question: 'Pierrot 身高多少？',
          answer: '198 cm，约 6 英尺 5.95 英寸，出自开发者公布的身高表。',
        },
        {
          question: '谁年龄最大？',
          answer: 'Ticket Taker。官方年龄顺序由大到小为 Ticket Taker、Doctor、Pierrot、Jester、Harlequin。',
        },
        {
          question: 'Pierrot 为什么不能说话？',
          answer:
            '官方简介称他是"沉默的病娇（silent yandere）"，这种沉默是刻意的角色设定，而非配音缺失。关于剧情内原因的说法来自故事素材，而非开发者声明。',
        },
        {
          question: 'Day 3 什么时候出？',
          answer: '没有公布日期。正在开发中，beta 进度约为本次更新的 30–40%。',
        },
        {
          question: '有官方 Discord 服务器吗？',
          answer: '没有。开发者已确认不存在官方服务器，所有社区服务器都应视为粉丝自建。',
        },
        {
          question: '可以给角色画同人吗？',
          answer:
            '可以，同人创作是粉丝文化的一部分。本站只展示获得作者许可并保留署名的社区作品，不托管游戏文件，也不重新打包游戏。',
        },
      ],
      related: ['faq', 'download', 'save', 'endings', 'characters', 'wiki'],
    },
  },
};

export function getGuidePage(locale: EditorialLocale, slug: string): GuidePage | undefined {
  return guideContent[locale]?.[slug];
}

export function getGuideSlugs(): string[] {
  return Object.keys(guideContent.en);
}

export const GUIDE_PAGE_SLUGS = getGuideSlugs();

/** The height rows helper is shared with the character pages. */
export { heightRows, endingRows };
