// Deep editorial content for the character profile pages.
//
// The goal is to answer the questions a reader actually has about a character
// — height, age order, appearance, personality, relationships, route status —
// while staying honest about where the evidence stops.
//
// Fact discipline:
//   - Height and age order come from the developer's published charts and are
//     rendered from game-facts.ts, never typed by hand.
//   - Route and ending status follow the developer's statements: only
//     Pierrot and Harlequin have planned routes, and no route is implemented.
//   - Appearance and relationship details that come from the fandom wiki are
//     marked as fan-derived in the page so a reader can tell them apart from
//     developer statements.

import { HEIGHT_CHART, formatHeight, type SourceKey } from './game-facts';
import { characterSlugs, type CharacterSlug } from './site-content';

export type EditorialLocale = 'en' | 'zh';

export type CharacterSection = {
  heading: string;
  paragraphs: string[];
  list?: string[];
};

export type CharacterProfile = {
  /** Height in centimetres, pulled from the official chart. */
  cm: number;
  feet: number;
  inches: number;
  /** Position in the official age order, oldest first. 1 is the oldest. */
  ageOrder: number;
  /** Position in the developer's strength ranking, strongest first. */
  strengthRank: number;
  role: string;
  intro: string;
  sections: CharacterSection[];
  faq: { question: string; answer: string }[];
};

/**
 * The editorial half of a character profile: everything a translator writes by
 * hand, without the numeric fields that game-facts.ts derives from the
 * official height chart. Localised files export this shape and the merge step
 * re-applies the chart numbers.
 */
export type CharacterEditorial = Omit<
  CharacterProfile,
  'cm' | 'feet' | 'inches' | 'ageOrder' | 'strengthRank'
>;

const chartFor = (slug: CharacterSlug) => HEIGHT_CHART.find((entry) => entry.slug === slug)!;

/**
 * Merge editorial copy with the official height-chart numbers. Translations
 * supply only the editorial fields, so the measurements can never drift from
 * the developer's published chart.
 */
export function profile(
  slug: CharacterSlug,
  data: Omit<CharacterProfile, 'cm' | 'feet' | 'inches' | 'ageOrder' | 'strengthRank'>,
): CharacterProfile {
  const chart = chartFor(slug);
  return {
    ...data,
    cm: chart.cm,
    feet: chart.feet,
    inches: chart.inches,
    ageOrder: chart.ageOrder,
    strengthRank: chart.strengthRank,
  };
}

export const characterProfiles: Record<EditorialLocale, Record<CharacterSlug, CharacterProfile>> = {
  en: {
    pierrot: profile('pierrot', {
      role: 'One of the two central rivals, and the silent obsession at the centre of the story',
      intro:
        'Pierrot is the character the whole game is built around, and the one most often described with a single word: silent. The developer\'s own synopsis calls him "the silent yandere" — a description that is far more careful than it first appears. Silence here is a characterisation, not a missing voice actor or a placeholder. It is the reason every gesture he makes carries weight, and it is the mechanism through which his attention becomes difficult to separate from possession.',
      sections: [
        {
          heading: 'Quick answer',
          paragraphs: [
            'Pierrot is 198 cm tall, making him the second tallest of the five introduced characters and the tallest of the two romance leads. In the developer\'s published age order he sits third of five, oldest first. His route is planned and in development, and it is one of only two romance routes the developer has named.',
          ],
        },
        {
          heading: 'Who Pierrot is',
          paragraphs: [
            'The official synopsis sets the situation plainly: you work at a café, fate leads you to cross paths with Pierrot, and that is when his obsession begins. The game\'s framing is precise about the mechanism — this is not a man who becomes frightening at a dramatic turn, but someone whose attention hardens gradually, across ordinary days, until the ordinary has been rearranged around it.',
            'What makes him a hard character to write about accurately is that the game is a visual novel, and Pierrot is a character who mostly does not speak. Much of what players describe as his personality is assembled from what he does not say and from how he responds to the player. That material is real and it is in the build, but it is interpretation layered on observation, and this page keeps the two apart.',
          ],
        },
        {
          heading: 'Height and physical detail',
          paragraphs: [
            `The developer's published height chart places Pierrot at ${formatHeight(chartFor('pierrot')).metric}, roughly ${formatHeight(chartFor('pierrot')).imperial}. The same chart notes that the developer used it as a reference when drawing the sprites, which is why the numbers are treated here as canonical rather than as estimates read off artwork.`,
            'The fandom wiki describes his design in considerable detail: mid-length white hair, a white mask marked with black vertical slits of uneven length, golden eyes, a red-and-black jester cap with bells, a red motley coat with gold accents, and black clawed gloves. That level of costume detail is useful when identifying him in screenshots and fan art, and it comes from the fandom rather than from a developer statement, so it is presented here as fan description.',
          ],
        },
        {
          heading: 'Age order and where he sits among the five',
          paragraphs: [
            'A separate AMA post answered a direct request to order the cast from oldest to youngest. The published order is Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Pierrot is therefore third of five — older than Jester and Harlequin, younger than the Ticket Taker and the Doctor.',
            'No numeric age has been published for any character, and it is worth being explicit about that because fan wikis and character databases routinely assign specific ages that have no first-party basis. The age order is the only age information the developer has released.',
          ],
        },
        {
          heading: 'Strength ranking',
          paragraphs: [
            'The developer also published a raw physical strength ranking, and Pierrot is first on it — ahead of Harlequin and Jester, who are tied in second, then the Doctor, then the Ticket Taker. The ranking was published as an aside to a fan question rather than as a game mechanic, so it reads as characterisation: the strongest member of the circus is also the one who is most physically restrained with himself.',
          ],
        },
        {
          heading: 'Why Pierrot does not speak',
          paragraphs: [
            'The official synopsis describes Pierrot as "the silent yandere". That single phrase is the developer\'s own, and it is the furthest the first-party material goes on the reason. The fandom wiki adds an in-fiction explanation that a rule about not speaking in public was put in place by Jester, and that Jester is an authority figure Pierrot deeply respects. That is a satisfying detail and it is consistent with how the two characters are written, but it is sourced to the wiki rather than to the developer.',
            'The distinction matters for one practical reason: if you are reading a translation of the script and Pierrot seems to answer, that is a localisation or interpretation question rather than a contradiction of the setting. Silence is the character\'s defining trait, not a defect in the text.',
          ],
        },
        {
          heading: 'Personality and the shape of his obsession',
          paragraphs: [
            'Across the story material, Pierrot reads as patient and attentive rather than impulsive. The obsession described in the official synopsis is not framed as rage; it is framed as a beginning, which is a point about pacing rather than severity. That distinction is what makes his story disturbing — a character whose attention has become total and quiet is more unsettling than one who announces it.',
            'The fandom wiki characterises him as gentle and polite on the surface while stalking the protagonist, and as protective of the protagonist and of Columbina. It also records a specific developer answer to the question of whether Pierrot would ever abandon the protagonist: the answer is no, and emphatically so. That answer is a strong signal about where his route is heading, even though the route itself is unfinished.',
          ],
        },
        {
          heading: 'Pierrot and Harlequin',
          paragraphs: [
            'The rivalry between the two is the structural centre of the game. The synopsis calls Harlequin Pierrot\'s "seductive rival", and describes the game as being led by one or the other. The two are opposites in method — Pierrot is quiet and constant, Harlequin is theatrical and shifting — and they are opposites in the way they compete for the protagonist\'s attention.',
            'The fandom wiki describes their shared history as involving Columbina, and a developer AMA answer has described them as having met as children. What can be said without straining the source material is that the rivalry predates the game\'s present, and that it carries a history the current build only reveals in fragments.',
          ],
        },
        {
          heading: 'Pierrot and Columbina',
          paragraphs: [
            'Columbina is a former member of the circus and the figure whose death shapes the backstory of both leads. The fandom wiki records that Pierrot and Columbina never had a romantic relationship, which contradicts a reading of the circus\'s own love-story narration, and the developer has separately stated that Pierrot has moved on from that history and grown since.',
            'A practical note for anyone reading the current build: the developer has said that Columbina\'s design is still being worked on and that her details are being deliberately withheld. The most recent development updates mention a new short scene that refers to her. So the shape of the story is being confirmed while the character is still in production, which is an unusual position for a fan guide to write about and the reason this section stays short.',
          ],
        },
        {
          heading: 'Route and ending status',
          paragraphs: [
            'A Pierrot romance ending is on the developer\'s list of planned endings, alongside Harlequin\'s, the Protagonist\'s, and "All together". None of them are implemented. The current build contains exactly one ending, and it is a bad one — the "Missing" ending reached on Day 1 by refusing to react while Pierrot is being mocked.',
            'Because of that, there is no published trigger list for Pierrot\'s route. Any choice chart that claims to unlock his ending is describing a build that does not exist publicly. When the route does ship, this page will be updated with the actual choices and save points rather than with a prediction.',
          ],
        },
        {
          heading: 'Confirmed facts versus interpretation',
          paragraphs: [
            'To make the difference concrete, here is how the material on this page divides.',
          ],
          list: [
            'Confirmed by the developer: his height, his position in the age order, his first place in the strength ranking, his description as "the silent yandere", his role as one of the two leads, and that a Pierrot romance ending is planned.',
            'From the current build: his appearance, his scenes, and the way he responds to the protagonist.',
            'Fan-derived: the full costume and mask description, the in-fiction reason for his silence, his personal history, and the specifics of his relationship with the other characters.',
          ],
        },
      ],
      faq: [
        {
          question: 'How tall is Pierrot in The Freak Circus?',
          answer: 'Pierrot is 198 cm, roughly 6 ft 5.95 in, in the developer\'s published height chart. He is the second tallest of the five characters and the taller of the two romance leads.',
        },
        {
          question: 'How old is Pierrot?',
          answer: 'No numeric age has been published. In the developer\'s official age order he is third of five, oldest first: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
        },
        {
          question: 'Is Pierrot older than Harlequin?',
          answer: 'Yes. Harlequin is the youngest of the five, and Pierrot is third oldest.',
        },
        {
          question: 'Is Pierrot the strongest character?',
          answer: 'Yes. He ranks first in the developer\'s published strength list, ahead of Harlequin and Jester tied in second.',
        },
        {
          question: 'Can you romance Pierrot?',
          answer: 'A Pierrot romance ending is planned and in development, but it is not in the public build yet. There are no trigger conditions to publish.',
        },
        {
          question: 'Does Pierrot have an ending?',
          answer: 'Not yet. The only implemented ending is the "Missing" bad ending on Day 1. Pierrot\'s ending is announced and still being written.',
        },
        {
          question: 'Why can\'t Pierrot speak?',
          answer:
            'The official synopsis calls him "the silent yandere", so the silence is the developer\'s characterisation rather than a gap in the text. The fandom wiki gives an in-fiction reason involving Jester, but that detail is not from a developer statement.',
        },
        {
          question: 'Is Pierrot a yandere?',
          answer: 'Yes — that is the developer\'s own word for him in the official synopsis, not just fan shorthand.',
        },
        {
          question: 'What is Pierrot\'s relationship with Harlequin?',
          answer:
            'They are the central rivals, and the game is framed as being led by one or the other. Harlequin is described as Pierrot\'s "seductive rival", and the two are opposites in method: Pierrot is quiet and constant, Harlequin is theatrical and shifting.',
        },
        {
          question: 'What happened between Pierrot and Columbina?',
          answer:
            'Columbina is a former circus member whose death shapes the backstory of both leads. The fandom wiki records that she and Pierrot never had a romantic relationship. Her design is still in production, and the developer has deliberately withheld details.',
        },
        {
          question: 'Is Pierrot human?',
          answer:
            'He is one of the circus\'s monsters, according to the fandom wiki. The developer\'s synopsis describes the cast and the game\'s premise in terms of a circus of monsters, and Pierrot is part of that company.',
        },
        {
          question: 'What does Pierrot look like without his mask?',
          answer:
            'The fandom wiki describes mid-length white hair and golden eyes behind a white mask with black vertical slits of uneven length. That description comes from the fandom rather than a developer statement, and is useful mainly for identifying him in fan art.',
        },
      ],
    }),
    harlequin: profile('harlequin', {
      role: 'The seductive rival, and the second of the two romance routes',
      intro:
        'Harlequin is the character who makes The Freak Circus a choice rather than a story with a single path. The official synopsis calls him Pierrot\'s "seductive rival" and describes the game as being led by one or the other — which is a neat summary of a design built around two incompatible ways of gaining the protagonist\'s attention.',
      sections: [
        {
          heading: 'Quick answer',
          paragraphs: [
            'Harlequin is 187 cm tall, the shortest of the five introduced characters and the second shortest of the two romance leads. In the developer\'s published age order he is fifth of five, which makes him the youngest. He shares second place in the strength ranking with Jester, and he has a planned romance route that is not yet implemented.',
          ],
        },
        {
          heading: 'Who Harlequin is',
          paragraphs: [
            'Where Pierrot works by constancy, Harlequin works by performance. The word the developer uses is "seductive", and the character is written to be legible only in motion: a shifting, theatrical presence whose intentions are hard to hold still long enough to be sure of. In a visual novel, where most of the weight sits in dialogue, that makes him the harder of the two leads to summarise and the more rewarding one to watch across a playthrough.',
            'The fandom wiki describes him as carefree, sadistic, teasing, and secretly jealous, and notes that he is not comfortable with affection. The jealousy is the interesting part of that description, because it reframes the rivalry as something he wants as much as Pierrot does rather than something he is merely contesting.',
          ],
        },
        {
          heading: 'Height and physical detail',
          paragraphs: [
            `The developer's height chart places Harlequin at ${formatHeight(chartFor('harlequin')).metric}, roughly ${formatHeight(chartFor('harlequin')).imperial}. That makes him 11 cm shorter than Pierrot, a difference that the fandom wiki treats as meaningful to how the two are staged against each other.`,
            'His design is described by the fandom wiki as curly black hair to the cheeks with two locks curling into a heart on the left forehead, a white mask with a green diamond through one eye and a green triangle beneath the other, venom-green eyes that glow when unmasked, and a green-and-black hood and costume with mismatched gloves. Again, this is fan description rather than a developer statement, and it is most useful for identifying him in screenshots and artwork.',
          ],
        },
        {
          heading: 'Age order and the youngest of the five',
          paragraphs: [
            'In the developer\'s published age order, Harlequin is last: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. He is the youngest of the introduced cast, and the youngest of the two romance leads by four positions.',
            'This is a genuinely documented fact and it is also one of the most frequently mangled online. A great deal of fan material assigns Harlequin a specific numeric age, and several of those numbers contradict the published order. The order is the reliable version.',
          ],
        },
        {
          heading: 'Strength ranking',
          paragraphs: [
            'Harlequin shares second place in the developer\'s strength ranking with Jester, behind Pierrot and ahead of the Doctor and the Ticket Taker. Combined with being the youngest and the shortest, he is consistently described as the fastest of the group rather than the heaviest — the fandom wiki records the two of them tied in a second strength category for raw physical power as well.',
          ],
        },
        {
          heading: 'What the official material says about his relationships',
          paragraphs: [
            'There is one developer statement that is easy to misread and worth quoting carefully. Asked about the bites Harlequin leaves while flirting, the answer was that they are not marriage proposals, that the mark leaves no scar, and that marriage and courtship among monsters work differently from how the protagonist would understand them. That is a small line, but it does a lot of work: it establishes that Harlequin\'s flirtation has its own logic, and that the protagonist\'s frame of reference is not the frame of reference of the circus.',
            'The fandom wiki records that Harlequin feels safe around the Doctor, that the Doctor is his favourite person in the circus, and that he gets along with the Ticket Taker despite a clash of tastes. It also records an implied link to Columbina\'s death — that Harlequin killed her to "save" her — which is a heavy claim and one that the wiki itself frames as implication rather than statement. The developer has confirmed the general shape of the circus\'s history in AMA answers, so the story is real, but the specific reading of Harlequin\'s role in it is not first-party confirmed.',
          ],
        },
        {
          heading: 'Route and ending status',
          paragraphs: [
            'Harlequin\'s romance ending is one of the four the developer has named, alongside Pierrot\'s, the Protagonist\'s, and "All together". None of the four are implemented. The current build contains one ending, the "Missing" bad ending on Day 1.',
            'A Harlequin ending walkthrough is therefore something that cannot yet be written honestly. A guide that lists the exact choices and ticket colour required would be describing a build that does not exist publicly, and players who follow it would find the route unavailable. When it ships, the useful guide will be a checkpoint and save-slot strategy rather than a fabricated trigger table.',
          ],
        },
        {
          heading: 'Confirmed facts versus interpretation',
          paragraphs: [
            'The split on this page is as follows.',
          ],
          list: [
            'Confirmed by the developer: his height, his position as the youngest in the age order, his tie for second in strength, his description as Pierrot\'s "seductive rival", the fact that his flirtation bites are not proposals, and that a Harlequin romance ending is planned.',
            'From the current build: his appearance, his scenes, and his branches — some of his appearances vary depending on the story branch, which is itself confirmed by an official bug note.',
            'Fan-derived: the full costume and mask description, his personal history, and the specifics of his relationship with Columbina.',
          ],
        },
      ],
      faq: [
        {
          question: 'How tall is Harlequin in The Freak Circus?',
          answer: 'Harlequin is 187 cm, roughly 6 ft 1.62 in, in the developer\'s published height chart. He is the shortest of the five characters.',
        },
        {
          question: 'Is Harlequin the youngest character?',
          answer: 'Yes. In the developer\'s official age order he is fifth of five, oldest first: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
        },
        {
          question: 'How old is Harlequin?',
          answer: 'No numeric age has ever been published for any character. Only the relative order is documented, and it places Harlequin last.',
        },
        {
          question: 'What is Harlequin\'s personality like?',
          answer:
            'The fandom wiki describes him as carefree, sadastic, teasing, and secretly jealous, and notes that he is uncomfortable with affection. He is the theatrical opposite of Pierrot, which is what makes the rivalry work.',
        },
        {
          question: 'What is Harlequin\'s relationship with Pierrot?',
          answer:
            'They are the game\'s central rivals. The official synopsis calls Harlequin Pierrot\'s "seductive rival" and frames the game as being led by one or the other. The fandom wiki adds that they met as children and that their shared history involves Columbina.',
        },
        {
          question: 'Does Harlequin have a route?',
          answer: 'A Harlequin romance ending is planned and in development, but it is not implemented in the public build, so no trigger conditions exist to document.',
        },
        {
          question: 'Can you get the Harlequin ending?',
          answer: 'Not yet. The only playable ending is the "Missing" bad ending on Day 1. Harlequin\'s ending is announced and still being written.',
        },
        {
          question: 'Is Harlequin dangerous?',
          answer:
            'The game is rated 18+ and its content warnings include murder, kidnapping, non-consensual use of drugs, and physical domination, so the cast as a whole is written as dangerous. Harlequin specifically is written as unpredictable and sadistic by the fandom description of his scenes.',
        },
        {
          question: 'What happened to Columbina?',
          answer:
            'She is a former member of the circus whose death shapes both leads\' backstories. The fandom wiki records an implication that Harlequin killed her to "save" her, and that Pierrot refused to take part. Her design is still in production and details are deliberately withheld.',
        },
        {
          question: 'Does Harlequin have a good ending?',
          answer:
            'No good endings are implemented. The single ending in the current build is a bad one, and Harlequin\'s romance ending is planned work that has not shipped.',
        },
      ],
    }),
    jester: profile('jester', {
      role: 'The circus\'s leader, and a character with no route of his own',
      intro:
        'Jester is the character most often misdescribed online, usually in the direction of giving him a romance route he does not have. The developer has been explicit: the route options are Pierrot, Harlequin, both, or neither. Jester is introduced in the current build as part of the wider company, and his presence is what makes the circus feel like an institution rather than a pair of rivals and a backdrop.',
      sections: [
        {
          heading: 'Quick answer',
          paragraphs: [
            'Jester is 192 cm tall, the second tallest of the five introduced characters, and fourth of five in the developer\'s age order. He shares second place in the strength ranking with Harlequin. He has no route and no ending, and the developer has stated that making the remaining characters romance options is a possibility rather than a commitment.',
          ],
        },
        {
          heading: 'Who Jester is',
          paragraphs: [
            'Jester functions as the authority figure of the circus. The fandom wiki describes him as the main antagonist of the Freak Circus, but calm and collected rather than volatile — a description that fits the design better than the word "antagonist" alone. He is the one who decides roles, who assigns the circus\'s parts, and who is spoken to with a mixture of respect and irritation.',
            'The important thing for a reader is that his influence over the other characters is structural. When a source says a character respects Jester, or fears him, or acts within rules Jester set, that is describing the shape of the circus rather than a single plot beat.',
          ],
        },
        {
          heading: 'Height and physical detail',
          paragraphs: [
            `The developer's height chart places Jester at ${formatHeight(chartFor('jester')).metric}, roughly ${formatHeight(chartFor('jester')).imperial}. He stands 6 cm shorter than Pierrot and 20 cm shorter than the Doctor.`,
            'The fandom wiki describes him with long deep-violet hair, a white mask marked with a purple reversed heart and a purple astroid, a violet tailcoat, and opera gloves, and notes that he is ambidextrous. That description is fan-sourced rather than a developer statement.',
          ],
        },
        {
          heading: 'Age order',
          paragraphs: [
            'In the developer\'s published age order Jester is fourth of five, oldest first: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. He is older than Harlequin and younger than Pierrot, the Doctor, and the Ticket Taker.',
            'The fandom wiki records a birthday for Jester and states that the developer posted a birthday greeting for him, which makes his date better attested than most of the others — but the dates circulating for the rest of the cast are fan-assigned and the age order remains the only official measurement.',
          ],
        },
        {
          heading: 'Strength ranking',
          paragraphs: [
            'Jester shares second place with Harlequin in the developer\'s strength ranking, behind Pierrot and ahead of the Doctor and the Ticket Taker. Like Harlequin, the fandom wiki records him as strong but outmatched by Pierrot in raw power.',
          ],
        },
        {
          heading: 'What the official material establishes',
          paragraphs: [
            'The clearest official statements about Jester come from an AMA answer about routes: no Jester route exists, and if more routes were added they would most likely arrive as an add-on or DLC, with nothing decided. A separate answer described making the remaining characters romance options as something the developer would like to do but cannot promise.',
            'Everything else commonly said about him — that he controls the "Fools", that he referred to humans as strays, that he chose everyone\'s circus role — comes from the fandom wiki rather than from the developer, and is best treated as interpretation of his scenes.',
          ],
        },
        {
          heading: 'Route and ending status',
          paragraphs: [
            'There is no Jester route and no Jester ending. The four endings the developer has named belong to Pierrot, Harlequin, the Protagonist, and the combined "All together" conclusion.',
            'It is also worth naming the other common error directly: the idea that Jester\'s route "unlocks on Day 2" appears in several guides. Nothing like it exists. What shipped in the Day 2 update was additional characters, animated sprites, a redesigned menu, and an Android version — not new routes.',
          ],
        },
        {
          heading: 'Confirmed facts versus interpretation',
          paragraphs: [
            'For Jester in particular the ratio matters, because so much published material about him is speculation presented as mechanic.',
          ],
          list: [
            'Confirmed by the developer: his height, his position in the age order, his tie for second in strength, and that he has no route.',
            'From the current build: his appearance, his scenes, and the authority he holds over the other characters.',
            'Fan-derived: the "Fools" concept, the "strays" framing, the details of how he assigns roles, and his personal history.',
          ],
        },
      ],
      faq: [
        {
          question: 'How tall is Jester?',
          answer: '192 cm, roughly 6 ft 3.59 in, in the developer\'s published height chart. He is the second tallest of the five.',
        },
        {
          question: 'Is Jester the leader of the circus?',
          answer:
            'The fandom wiki describes him as the circus\'s leader and main antagonist, and his authority over the other characters is consistent across the build. That description comes from the fandom rather than a developer statement.',
        },
        {
          question: 'Does Jester have a route?',
          answer: 'No. The developer has confirmed there is no Jester route. The only options are Pierrot, Harlequin, both, or neither.',
        },
        {
          question: 'Does Jester have an ending?',
          answer: 'No. The four planned endings belong to Pierrot, Harlequin, the Protagonist, and "All together".',
        },
        {
          question: 'Does the Jester route unlock on Day 2?',
          answer:
            'No. Several guides claim this, but nothing like it exists. The Day 2 update added characters, animated sprites, a redesigned menu, and an Android version.',
        },
        {
          question: 'How old is Jester?',
          answer: 'No numeric age is published. In the official age order he is fourth of five, oldest first.',
        },
        {
          question: 'Is Jester the strongest?',
          answer: 'No — Pierrot ranks first. Jester shares second place with Harlequin.',
        },
        {
          question: 'Can you romance Jester?',
          answer:
            'Not in the current build. The developer has said making the other characters romance options is a possibility he would like to explore but cannot promise.',
        },
      ],
    }),
    'the-doctor': profile('the-doctor', {
      role: 'The clinical presence at the edge of the cast',
      intro:
        'The Doctor is introduced in the current build and has no route, no ending, and no official height entry in the public chart that fans cite. What makes him interesting to read is the contrast he creates: a clinical register dropped into a carnival, and a character the fandom describes as simultaneously the most composed and the most dangerous person in the tent.',
      sections: [
        {
          heading: 'Quick answer',
          paragraphs: [
            'The Doctor is 207 cm tall, which makes him the tallest of the five introduced characters by a clear margin — 9 cm above Pierrot. He is second of five in the developer\'s age order, meaning only the Ticket Taker is older. He ranks fourth of five in strength, and he has no route and no ending.',
          ],
        },
        {
          heading: 'Who the Doctor is',
          paragraphs: [
            'The fandom wiki describes the Doctor as a secondary antagonist or possibly a neutral figure, and gives him two sides: calm and composed in one, impassioned and sadistic in the other. That is a useful way to read his scenes, because the shift is described as visible — his eyes flashing red when a particular emotion takes over. The wiki also notes that he prefers wit over brute force, which is consistent with a character who is both the tallest and only fourth in raw strength.',
            'He is also the character most likely to be misrepresented as having a route. The idea of a Doctor route with a "good ending" circulates in several older guides, and it does not correspond to anything the developer has described.',
          ],
        },
        {
          heading: 'Height and physical detail',
          paragraphs: [
            `The developer's height chart places the Doctor at ${formatHeight(chartFor('the-doctor')).metric}, roughly ${formatHeight(chartFor('the-doctor')).imperial} — the tallest of the five by 9 cm.`,
            'The fandom wiki describes him with red skin, short red hair, and a beaked plague-doctor mask with glowing cyan lenses, and notes that his legs and feet are never shown. It also records that he is left-handed, cannot swim, and that his eyes glow red when he experiences certain emotions. All of that is fan description drawn from the material, not developer statements.',
          ],
        },
        {
          heading: 'Age order and strength',
          paragraphs: [
            'The Doctor is second of five in the official age order, oldest first: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. Only the Ticket Taker is older than him.',
            'In the strength ranking he comes fourth, ahead of the Ticket Taker and behind Pierrot, Harlequin, and Jester. Being the tallest and the fourth strongest is the interesting combination here: the Doctor is large rather than powerful, and the fandom description of him preferring wit over force is exactly what you would expect from that.',
          ],
        },
        {
          heading: 'A detail worth knowing about the voice',
          paragraphs: [
            'The Doctor has a Russian accent in the English script, despite the cast being Brazilian. This is a deliberate in-joke between the voice actor and the creator, and it is recorded on the fandom wiki with a citation to the voice actor\'s own Tumblr post. It is a small thing, but it is the kind of detail that tells you how much of the fandom documentation is actually sourced rather than guessed.',
          ],
        },
        {
          heading: 'Route and ending status',
          paragraphs: [
            'The Doctor has no route and no ending. The developer has confirmed that the route options are Pierrot, Harlequin, both, or neither, and that any additional character routes would most likely arrive as an add-on or DLC, with nothing decided.',
            'The "Clean Hands" ending attributed to the Doctor by some older fan pages is not supported by any first-party source, and this site does not carry it forward as fact.',
          ],
        },
        {
          heading: 'Confirmed facts versus interpretation',
          paragraphs: [
            'The Doctor\'s page has more fan-derived material relative to official material than any other character in the cast, largely because he has no route and therefore no first-party narrative description of one.',
          ],
          list: [
            'Confirmed by the developer: his height as the tallest of the five, his second position in the age order, his fourth position in the strength ranking, and that he has no route.',
            'From the current build: his appearance, his scenes, and the way his composure breaks.',
            'Fan-derived: the experiments and specimens attributed to his tent, his personal history, and the character trivia about his tastes.',
          ],
        },
      ],
      faq: [
        {
          question: 'How tall is the Doctor?',
          answer: '207 cm, roughly 6 ft 9.5 in — the tallest of the five characters, 9 cm above Pierrot.',
        },
        {
          question: 'Is the Doctor the oldest?',
          answer: 'He is second oldest. The official age order, oldest first, is Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
        },
        {
          question: 'Is the Doctor the strongest?',
          answer: 'No. He ranks fourth in the developer\'s strength list, behind Pierrot, Harlequin and Jester.',
        },
        {
          question: 'Does the Doctor have a route?',
          answer: 'No. The developer has confirmed there is no Doctor route.',
        },
        {
          question: 'Does the Doctor have a good ending?',
          answer:
            'No. The Doctor has no route and no ending in the current build. The only ending that exists is the "Missing" bad ending on Day 1.',
        },
        {
          question: 'Is there a "Clean Hands" ending for the Doctor?',
          answer:
            'No. That claim appears on some fan pages but is not supported by any first-party source, and this site does not list it as fact.',
        },
        {
          question: 'What is the Doctor\'s relationship with Harlequin?',
          answer:
            'The fandom wiki records that Harlequin feels safe around the Doctor and that the Doctor is his favourite person in the circus. That is a fan-derived characterisation rather than a developer statement.',
        },
        {
          question: 'Why does the Doctor have a Russian accent?',
          answer:
            'It is a deliberate in-joke between the voice actor and the creator, recorded by the fandom wiki with a citation to the voice actor\'s own Tumblr. The cast is otherwise Brazilian.',
        },
        {
          question: 'Can you romance the Doctor?',
          answer:
            'Not currently. The developer has said making the other characters romance options is a possibility he would like to explore but cannot promise.',
        },
      ],
    }),
    'ticket-taker': profile('ticket-taker', {
      role: 'The keeper of the threshold, and the oldest of the five',
      intro:
        'The Ticket Taker is the character you meet first, and the one whose age is documented most precisely: the developer\'s published age order puts him at the top. He is also the character most often given a romance route that does not exist, which makes him a useful test case for reading fan material critically.',
      sections: [
        {
          heading: 'Quick answer',
          paragraphs: [
            'The Ticket Taker is 183 cm tall, the shortest of the five introduced characters, and first of five in the developer\'s age order, making him the oldest. He ranks last in the strength ranking. He has no route and no ending, and the developer has confirmed that directly.',
          ],
        },
        {
          heading: 'Who the Ticket Taker is',
          paragraphs: [
            'He occupies a liminal position in the fiction: a figure at the entrance to the circus, associated with permission, thresholds, and the machinery of the spectacle. The fandom wiki describes him as obedient and dedicated to the circus\'s agenda, mature and professional, preoccupied with cleanliness and organisation, and states his principle plainly: around here, no one breaks character.',
            'That last detail is what makes him work as a character rather than a gatekeeper. In a story about a circus that runs on performance, a character whose job is to enforce the boundary between audience and performer has to believe in the performance himself.',
          ],
        },
        {
          heading: 'Height and physical detail',
          paragraphs: [
            `The developer's height chart places the Ticket Taker at ${formatHeight(chartFor('ticket-taker')).metric}, roughly ${formatHeight(chartFor('ticket-taker')).imperial} — the shortest of the five, 24 cm below the Doctor.`,
            'The fandom wiki describes him with short dark navy hair, a split mask with white and black halves, a navy tailcoat with gold trim, a golden cravat, and a top hat, and notes that he has mismatched eyes — one white, one blue. The Portuguese name for the character, Bilheteiro, appears in the same material.',
          ],
        },
        {
          heading: 'The oldest of the five',
          paragraphs: [
            'This is the single most solidly documented fact about the Ticket Taker. He heads the developer\'s published age order: Ticket Taker, Doctor, Pierrot, Jester, Harlequin. As the oldest of the group and the one who keeps order, his age fits the role rather than complicating it.',
            'As with every character, no numeric age has been published, and the birthday circulating for him is fan-assigned.',
          ],
        },
        {
          heading: 'Strength ranking',
          paragraphs: [
            'He ranks last of five in the developer\'s strength list, below the Doctor. Combined with being the shortest, it makes him the least physically imposing of the company — which is consistent with a character whose authority is entirely procedural.',
          ],
        },
        {
          heading: 'The ticket system',
          paragraphs: [
            'The developer has confirmed that there are eight ticket types. Pink sits below the main cast, red and green indicate a choice the protagonist makes, and a pink-and-red combination means the Ticket Taker takes the red option automatically. This is one of the more concrete pieces of official mechanical information in the game, and it explains why the Ticket Taker matters to the branching even though he has no route of his own.',
            'The fandom wiki adds that the café figure who gives the protagonist a pink ticket is the Ticket Taker in disguise, which is also how the "Missing" bad ending begins. That identification is fan-derived but it connects directly to the one ending the build actually contains.',
          ],
        },
        {
          heading: 'Route and ending status',
          paragraphs: [
            'The Ticket Taker has no route and no ending. The developer has stated that the route options are Pierrot, Harlequin, both, or neither, and that the remaining characters might only get routes as an add-on or DLC if it happens at all.',
            'It is worth saying plainly that some long-standing fan guides describe a romanceable Ticket Taker route that unlocks through persistence and careful dialogue. No such route exists in the public build.',
          ],
        },
        {
          heading: 'Confirmed facts versus interpretation',
          paragraphs: [
            'The Ticket Taker is unusually well documented in the official material for a supporting character, mostly because the ticket system is one of the few confirmed mechanics.',
          ],
          list: [
            'Confirmed by the developer: his height as the shortest of the five, his first position in the age order, his last position in the strength ranking, the existence of eight ticket types, and that he has no route.',
            'From the current build: his appearance, his scenes, and the fact that the protagonist is given a pink ticket during Day 1.',
            'Fan-derived: the disguise as the café "Unknown" man, the "reality manipulator" epithet, and the details of his history with Columbina.',
          ],
        },
      ],
      faq: [
        {
          question: 'How tall is the Ticket Taker?',
          answer: '183 cm, roughly 6 ft 0 in — the shortest of the five characters, 24 cm shorter than the Doctor.',
        },
        {
          question: 'Is the Ticket Taker the oldest?',
          answer: 'Yes. He heads the developer\'s official age order: Ticket Taker, Doctor, Pierrot, Jester, Harlequin.',
        },
        {
          question: 'Is the Ticket Taker the strongest?',
          answer: 'No. He ranks last of five in the developer\'s strength list.',
        },
        {
          question: 'Can you romance the Ticket Taker?',
          answer:
            'No. The developer has confirmed there is no Ticket Taker route. The options are Pierrot, Harlequin, both, or neither.',
        },
        {
          question: 'Does the Ticket Taker have a route or ending?',
          answer: 'Neither. He appears throughout the story as an authority figure, but no route or ending belongs to him.',
        },
        {
          question: 'How many ticket types are there?',
          answer:
            'The developer has confirmed eight. Pink sits below the main cast, red and green signal a protagonist choice, and a pink-and-red combination means the Ticket Taker takes the red option automatically.',
        },
        {
          question: 'What is the red ticket?',
          answer:
            'Red and green are the colours that mark a choice the protagonist makes. A combination of pink and red means the Ticket Taker takes the red option for them.',
        },
        {
          question: 'Is the Ticket Taker the man from the café?',
          answer:
            'The fandom wiki identifies the café "Unknown" figure who gives the protagonist a pink ticket as the Ticket Taker in disguise. That is fan-derived, and it is the same pink ticket that begins the "Missing" ending.',
        },
        {
          question: 'Why is the Ticket Taker important if he has no route?',
          answer:
            'He controls the ticket system, which is one of the few confirmed mechanics in the game, and he is the character who establishes the boundary between the protagonist as visitor and as participant.',
        },
      ],
    }),
  },
  zh: {
    pierrot: profile('pierrot', {
      role: '两位核心竞争者之一，也是整个故事中心的沉默执念',
      intro:
        'Pierrot 是整部游戏围绕其构建的角色，也是最常被一个词概括的人：沉默。开发者自己的简介称他为"沉默的病娇（the silent yandere）"——这个说法比第一眼看上去要严谨得多。这里的沉默是角色设定，不是缺失的配音，也不是占位素材。它让他的每一个动作都带有分量，也正是这种沉默，让他的关注逐渐变得难以与占有欲分开。',
      sections: [
        {
          heading: '速览',
          paragraphs: [
            'Pierrot 身高 198 cm，在五位已登场角色中排第二高，也是两位恋爱主角中较高的那位。在开发者公布的年龄顺序中，他列第 3 位（由大到小）。他的路线是计划中且正在开发的内容，也是开发者明确点名的两条恋爱路线之一。',
          ],
        },
        {
          heading: 'Pierrot 是谁',
          paragraphs: [
            '官方简介把处境说得很直白：你在咖啡店工作，命运让你与 Pierrot 相遇，他的执念由此开始。游戏的框架在这点上相当精确——这不是一个在戏剧性转折点才变得可怕的人，而是一个注意力在平常的日子里逐渐变硬的人，直到日常本身被围绕着他重新排列。',
            '要准确地写他并不容易，因为这是一部视觉小说，而 Pierrot 多数时候不说话。玩家描述的他的性格，很大一部分是由"他没说什么"以及"他如何回应你"拼装出来的。这些材料是真实的、也在版本里，但那是"观察之上的解读"。本页把两者分开标注。',
          ],
        },
        {
          heading: '身高与外形',
          paragraphs: [
            `开发者公布的身高表将 Pierrot 列为 ${formatHeight(chartFor('pierrot')).metric}，约 ${formatHeight(chartFor('pierrot')).imperial}。该表同时说明开发者绘制立绘时以此为参照，因此这里的数字被当作确定值，而不是从画面推测的估值。`,
            '同人 Wiki 对他的设计有相当详细的描述：及肩白色头发、白面具上带长短不一的黑色竖纹、金色眼睛、红黑配色带铃铛的小丑帽、红底金边外衣与黑色利爪手套。这类服装细节在识别截图和同人图时很有用，但来源是同人而非开发者声明，所以这里以"粉丝描述"呈现。',
          ],
        },
        {
          heading: '年龄顺序与他在五人中的位置',
          paragraphs: [
            '开发者曾在一条 AMA 中正面回应"请按从大到小排列角色"的请求。公布的顺序是 Ticket Taker、Doctor、Pierrot、Jester、Harlequin。Pierrot 因此列第 3 位——比 Jester 与 Harlequin 年长，比 Ticket Taker 与 Doctor 年幼。',
            '官方从未公布过任何角色的具体年龄。这一点值得明说，因为粉丝 Wiki 和角色资料库经常给出没有第一方依据的具体年龄。年龄顺序是开发者唯一发布过的年龄信息。',
          ],
        },
        {
          heading: '力量排名',
          paragraphs: [
            '开发者还公布过一份纯粹体能排名，Pierrot 位列第一——领先并列第二的 Harlequin 与 Jester，其后是 Doctor，最后是 Ticket Taker。这份排名是在回答粉丝提问时附带的，而非游戏内数值系统，所以更应读作角色性格：他是最强的一位，却也是对自己约束最紧的一位。',
          ],
        },
        {
          heading: 'Pierrot 为什么不能说话',
          paragraphs: [
            '官方简介称 Pierrot 为"沉默的病娇"。这个短句是开发者本人的表述，也是第一方材料在"原因"问题上走得最远的地方。同人 Wiki 补充了一个剧情内解释：Jester 定下了一条不许在公众面前说话的规矩，而 Jester 是 Pierrot 十分敬重的权威人物。这个细节很令人信服，也与他两人的写法一致，但来源是 Wiki 而非开发者。',
            '这个区分有一个实际用处：如果你在读某版译本时发现 Pierrot 似乎在说话，那属于翻译或解读层面的问题，而不是设定自相矛盾。沉默是这个角色的定义性特征，不是文本缺陷。',
          ],
        },
        {
          heading: '性格与执念的形状',
          paragraphs: [
            '从剧情材料看，Pierrot 表现出的更多是耐心与专注，而非冲动。官方简介里描述的执念没有被写成暴怒，而是被写成"开始"——这是关于节奏的说法，不是关于强度的说法。正是这个区别让他的故事令人不安：一个注意力变得完全而安静的角色，比一个把占有欲喊出来的角色更令人不安。',
            '同人 Wiki 把他描述为表面温和礼貌，同时跟踪主角，并对主角与 Columbina 都带有保护意味。它还记录了一条开发者对"Pierrot 会不会放弃主角"的正面回答：不会，而且语气极为坚决。这条回答虽然路线本身未完成，却已经清楚指向了路线将要走向何处。',
          ],
        },
        {
          heading: 'Pierrot 与 Harlequin',
          paragraphs: [
            '两人的竞争是整部游戏的结构中心。官方简介称 Harlequin 是 Pierrot 的"魅惑型对手（seductive rival）"，并把游戏描述为由其中一人主导。两人在手法上正好相反——Pierrot 安静而恒久，Harlequin 戏剧化而善变——而这种相反正是他们争夺主角注意力的方式。',
            '同人 Wiki 描述两人共享的历史与 Columbina 有关，而一条开发者 AMA 回答曾说他们自幼相识。可以不越过素材来源地断言的是：这段竞争早于游戏当下的时间线，并携带着当前版本只以碎片方式揭示的历史。',
          ],
        },
        {
          heading: 'Pierrot 与 Columbina',
          paragraphs: [
            'Columbina 是马戏团的前成员，她的死亡塑造了两位主角的背景。同人 Wiki 记录 Pierrot 与 Columbina 从未有过恋爱关系，这与马戏团自身爱情叙事的读法相左；开发者也另行表示 Pierrot 已经走出那段历史，并且成长了许多。',
            '对阅读当前版本的玩家有一个实用提示：开发者说过 Columbina 的设计仍在进行中，细节被刻意保留。最近的开发更新提到了一段提及她的新短场景。也就是说，故事轮廓正在被确认，而角色本身仍在制作中——这对粉丝指南来说是个不寻常的处境，也是本节保持简短的原因。',
          ],
        },
        {
          heading: '路线与结局状态',
          paragraphs: [
            'Pierrot 恋爱结局在开发者公布的计划结局之列，与 Harlequin、主角以及"All together"并列。这四个都尚未实装。当前版本只包含一个结局，即 Day 1 通过"在 Pierrot 被嘲笑时不做任何反应"触发的 "Missing" 恶性结局。',
            '正因如此，目前不存在可公布的 Pierrot 路线触发表。任何声称能解锁他结局的选择表，描述的都是公开版本里不存在的构建。等路线真正发布时，本页会补上实际的选择与存档点，而不是给出预测。',
          ],
        },
        {
          heading: '已确认事实与解读的分界',
          paragraphs: [
            '把差别说具体一点，本页材料是这样划分的。',
          ],
          list: [
            '开发者已确认：身高、年龄顺序位置、力量排名第一、被描述为"沉默的病娇"、作为两位主角之一的地位，以及 Pierrot 恋爱结局属于计划中内容。',
            '来自当前版本：他的外形、场景，以及他回应主角的方式。',
            '源自粉丝：完整的服装与面具描述、不说话的情节内原因、个人经历，以及与其他角色关系的具体细节。',
          ],
        },
      ],
      faq: [
        { question: 'Pierrot 身高多少？', answer: '开发者公布的身高表中，Pierrot 为 198 cm，约 6 英尺 5.95 英寸，在五位角色中排第二高，也是两位恋爱主角中较高的那位。' },
        { question: 'Pierrot 多大？', answer: '官方从未公布具体年龄。在官方年龄顺序中他列第 3 位（由大到小）：Ticket Taker、Doctor、Pierrot、Jester、Harlequin。' },
        { question: 'Pierrot 比 Harlequin 年长吗？', answer: '是。Harlequin 是五人中年龄最小的，而 Pierrot 列第三年长。' },
        { question: 'Pierrot 是最强的角色吗？', answer: '是。他在开发者公布的力量排名中位列第一，领先并列第二的 Harlequin 与 Jester。' },
        { question: '可以和 Pierrot 恋爱吗？', answer: 'Pierrot 恋爱结局已计划并在开发中，但尚未进入公开版本，因此暂时没有可公布的触发条件。' },
        { question: 'Pierrot 有结局了吗？', answer: '暂时没有。当前唯一实装的结局是 Day 1 的 "Missing" 恶性结局，Pierrot 的结局已公布但仍在编写。' },
        { question: 'Pierrot 为什么不能说话？', answer: '官方简介称他为"沉默的病娇"，所以这种沉默是开发者的角色设定而非文本缺失。同人 Wiki 给出了与 Jester 有关的剧情内原因，但该细节并非来自开发者声明。' },
        { question: 'Pierrot 属于病娇类型吗？', answer: '是——这是官方简介里开发者自己的用词，不只是粉丝简称。' },
        { question: 'Pierrot 和 Harlequin 是什么关系？', answer: '他们是核心竞争关系，游戏被描述为由其中一人主导。Harlequin 是 Pierrot 的"魅惑型对手"，两人在手法上正好相反：Pierrot 安静恒久，Harlequin 戏剧善变。' },
        { question: 'Pierrot 和 Columbina 之间发生了什么？', answer: 'Columbina 是马戏团前成员，她的死亡塑造了两位主角的背景。同人 Wiki 记录两人从未有过恋爱关系。她的设计仍在制作中，开发者刻意保留了细节。' },
        { question: 'Pierrot 是人类吗？', answer: '按同人 Wiki 的设定，他是马戏团里的怪物之一。开发者简介将角色群体与游戏前提描述为怪物的马戏团，Pierrot 正是其中一员。' },
        { question: 'Pierrot 不戴面具长什么样？', answer: '同人 Wiki 描述为及肩白发与面具后方的金色眼睛，面具上有长短不一的黑色竖纹。这段描述来自同人而非开发者声明，主要用于在同人图中辨认他。' },
      ],
    }),
    harlequin: profile('harlequin', {
      role: '魅惑型对手，也是两条恋爱路线中的第二条',
      intro:
        'Harlequin 是让 The Freak Circus 成为"选择"而非"单一路径故事"的角色。官方简介称他为 Pierrot 的"魅惑型对手（seductive rival）"，并把游戏描述为由其中一人主导——这是对一种围绕两种不相容的争宠方式所构建设计的精准概括。',
      sections: [
        {
          heading: '速览',
          paragraphs: [
            'Harlequin 身高 187 cm，是五位已登场角色中最矮的，也是两位恋爱主角中较矮的一位。在开发者公布的年龄顺序中他列第 5 位，即年龄最小。他在力量排名中与 Jester 并列第二，并且有一条尚未实装的计划恋爱路线。',
          ],
        },
        {
          heading: 'Harlequin 是谁',
          paragraphs: [
            'Pierrot 靠恒久取胜，Harlequin 则靠表演。开发者用的词是"魅惑（seductive）"，而这个角色的写法就是要在运动中才能被读懂：戏剧化、善变的在场感，意图很难凝固到足以确定的程度。在一部大部分分量压在对话上的视觉小说里，这让他成为两位主角中更难概括的一位，也是跨周目观看时回报更高的一位。',
            '同人 Wiki 把他描述为随性、残忍、爱戏弄且暗中嫉妒，并指出他对亲密关系并不自在。那份嫉妒值得注意，因为它把这场竞争重新定义成"他也和 Pierrot 一样想要"，而不只是"他在争夺"。',
          ],
        },
        {
          heading: '身高与外形',
          paragraphs: [
            `开发者身高表将 Harlequin 列为 ${formatHeight(chartFor('harlequin')).metric}，约 ${formatHeight(chartFor('harlequin')).imperial}。他比 Pierrot 矮 11 cm，同人 Wiki 认为这一差距在两人的舞台关系中有意义。`,
            '同人 Wiki 对其设计的描述包括：及颊的黑色卷发，两缕在左额前卷成心形，白面具上一只眼穿过绿色菱形、另一只眼下为绿色三角，毒绿色的眼睛（摘下面具时会发光），以及绿黑配色的兜帽与服装、左右不一的手套。这同样属于粉丝描述而非开发者声明，其主要用途是在截图与同人图中辨认角色。',
          ],
        },
        {
          heading: '年龄顺序：五人中最年轻',
          paragraphs: [
            '在开发者公布的年龄顺序中，Harlequin 排在最后：Ticket Taker、Doctor、Pierrot、Jester、Harlequin。他是已登场角色群中最年轻的一位，也比另一位恋爱主角年轻四个位置。',
            '这是一个确凿的既定事实，也是在网上被搞错最多的地方之一。大量粉丝材料给 Harlequin 指派了具体年龄，其中若干数字还与公布的顺序自相矛盾。顺序才是可靠版本。',
          ],
        },
        {
          heading: '力量排名',
          paragraphs: [
            'Harlequin 与 Jester 并列开发者力量排名第二，位于 Pierrot 之后、Doctor 与 Ticket Taker 之前。综合最年轻与最矮两点，他在这群人里被一致描述为最快的那个而非最重的那个——同人 Wiki 还记录了两人在纯粹体能这一项上也并列第二。',
          ],
        },
        {
          heading: '官方材料对他说过什么',
          paragraphs: [
            '有一条开发者说明很容易被误读，值得原样引用。被问到 Harlequin 调情时留下的咬痕时，回答是：那些不是求婚，痕迹不会留下疤痕，而怪物之间的婚姻与求偶方式与主角的认知不同。这句话虽短，却做了很多工作：它确立了 Harlequin 的调情有自己的逻辑，主角的参照系并不是马戏团的参照系。',
            '同人 Wiki 还记录他与 Doctor 在一起时感到安全、Doctor 是他在马戏团里最喜欢的人，以及他与 Ticket Taker 相处融洽但品味相左。它也记录了与 Columbina 之死的一条隐含关联——Harlequin 为了"拯救"她而杀死了她。这是个分量很重的说法，Wiki 本身也将其表述为暗示而非陈述。开发者在 AMA 回答中确认过马戏团历史的大致轮廓，所以这个故事是真实的，但 Harlequin 在其中的具体角色并非第一方确认。',
          ],
        },
        {
          heading: '路线与结局状态',
          paragraphs: [
            'Harlequin 恋爱结局是开发者点名的四个结局之一，另外三个属于 Pierrot、主角和"All together"。四个都尚未实装。当前版本只包含一个结局，即 Day 1 的 "Missing" 恶性结局。',
            '因此，Harlequin 结局攻略目前还无法诚实写出。一份列出确切选项与门票颜色的指南，描述的是公开版本里不存在的构建；玩家照做只会发现路线不可用。等它发布时，有用的攻略应该是"存档点与检查点策略"，而不是编造的触发表。',
          ],
        },
        {
          heading: '已确认事实与解读的分界',
          paragraphs: [
            '本页的分界如下。',
          ],
          list: [
            '开发者已确认：身高、年龄顺序中最年轻、力量排名并列第二、被描述为 Pierrot 的"魅惑型对手"、调情咬痕不是求婚，以及 Harlequin 恋爱结局属于计划中内容。',
            '来自当前版本：他的外形、场景与分支——官方修复日志确认，他是否出现在卧室会随剧情分支变化，这本身就说明存在分支。',
            '源自粉丝：完整的服装与面具描述、个人经历，以及与 Columbina 关系的具体细节。',
          ],
        },
      ],
      faq: [
        { question: 'Harlequin 身高多少？', answer: '开发者公布的身高表中，Harlequin 为 187 cm，约 6 英尺 1.62 英寸，是五位角色中最矮的。' },
        { question: 'Harlequin 是最年轻的角色吗？', answer: '是。在官方年龄顺序中他列第 5 位（由大到小）：Ticket Taker、Doctor、Pierrot、Jester、Harlequin。' },
        { question: 'Harlequin 多大？', answer: '官方从未公布过任何角色的具体年龄，只有相对顺序有据可查，而该顺序把他排在最后。' },
        { question: 'Harlequin 是什么性格？', answer: '同人 Wiki 描述他随性、残忍、爱戏弄且暗中嫉妒，并且对亲密关系并不自在。他与 Pierrot 正好是戏剧化与安静两种极端的对照，这正是竞争得以成立的原因。' },
        { question: 'Harlequin 和 Pierrot 是什么关系？', answer: '他们是游戏的核心竞争关系。官方简介称 Harlequin 是 Pierrot 的"魅惑型对手"，并把游戏描述为由其中一人主导。同人 Wiki 补充说两人自幼相识，共同的历史涉及 Columbina。' },
        { question: 'Harlequin 有路线吗？', answer: 'Harlequin 恋爱结局已计划并在开发中，但尚未实装到公开版本，因此暂时没有可记录的触发条件。' },
        { question: '现在能拿到 Harlequin 结局吗？', answer: '还不能。当前版本唯一可玩的是 Day 1 的 "Missing" 恶性结局，Harlequin 结局已公布但仍在编写。' },
        { question: 'Harlequin 危险吗？', answer: '游戏评级为 18+，内容警告包含谋杀、绑架、非自愿使用药物与身体支配，所以整个角色群都按危险来写。Harlequin 则由其场景的粉丝描述被写成难以预测且残忍。' },
        { question: 'Columbina 怎么了？', answer: '她是马戏团的前成员，其死亡塑造了两位主角的背景。同人 Wiki 记录了"Harlequin 为拯救她而杀死她"的暗示，以及 Pierrot 拒绝参与。她的设计仍在制作中，细节被刻意保留。' },
        { question: 'Harlequin 有好结局吗？', answer: '目前没有任何好结局实装。当前版本唯一的结局是恶性结局，Harlequin 的恋爱结局属于尚未发布的工作。' },
      ],
    }),
    jester: profile('jester', {
      role: '马戏团的领导者，且没有属于自己的路线',
      intro:
        'Jester 是网上最常被写错的一位角色，错的方向通常是给他安上一条并不存在的恋爱路线。开发者说得很明确：路线选项只有 Pierrot、Harlequin、两者、都不选。Jester 在当前版本中作为更大公司的一员登场，而他的存在正是让马戏团看起来像一个"机构"，而不只是两个对手加一张背景板。',
      sections: [
        {
          heading: '速览',
          paragraphs: [
            'Jester 身高 192 cm，在五位已登场角色中排第二高，在开发者年龄顺序中列第 4 位。他在力量排名中与 Harlequin 并列第二。他没有路线也没有结局，开发者明确表示让其余角色成为恋爱对象是一种可能性，而不是承诺。',
          ],
        },
        {
          heading: 'Jester 是谁',
          paragraphs: [
            'Jester 承担的是马戏团权威人物的功能。同人 Wiki 把他描述为怪诞马戏团的主要反派，但强调他冷静沉着而非volatile——这个描述比单说"反派"更贴合设计本身。他决定角色分工、指派马戏团的职务，人们提到他时语气里混合着敬重与烦躁。',
            '对读者来说重要的是，他对其他角色的影响是结构性的。当某个来源说某角色敬重 Jester、害怕他，或是在他设定的规则内行事时，描述的是马戏团的形状，而不是某个单一剧情节点。',
          ],
        },
        {
          heading: '身高与外形',
          paragraphs: [
            `开发者身高表将 Jester 列为 ${formatHeight(chartFor('jester')).metric}，约 ${formatHeight(chartFor('jester')).imperial}。他比 Pierrot 矮 6 cm，比 Doctor 矮 20 cm。`,
            '同人 Wiki 描述他有深紫色长发至腰、白面具上的紫色反向心形与紫色星芒、紫色燕尾礼服与长礼服手套，并指出他双手皆惯。该描述来自同人而非开发者声明。',
          ],
        },
        {
          heading: '年龄顺序',
          paragraphs: [
            '在开发者公布的年龄顺序中 Jester 列第 4 位（由大到小）：Ticket Taker、Doctor、Pierrot、Jester、Harlequin。他比 Harlequin 年长，比 Pierrot、Doctor 与 Ticket Taker 年幼。',
            '同人 Wiki 记录了 Jester 的生日，并提到开发者曾为他发过生日祝福，这让他的日期比其他人的更有依据——但角色群中流传的其余日期都是粉丝指派，年龄顺序仍是唯一的官方身体数据。',
          ],
        },
        {
          heading: '力量排名',
          paragraphs: [
            'Jester 与 Harlequin 并列开发者力量排名第二，位于 Pierrot 之后、Doctor 与 Ticket Taker 之前。与 Harlequin 一样，同人 Wiki 记录他在纯粹体力上依然不及 Pierrot。',
          ],
        },
        {
          heading: '官方材料确立了什么',
          paragraphs: [
            '关于 Jester 最明确的官方说明来自一条关于路线的 AMA 回答：不存在 Jester 路线，若日后增加路线，最可能以追加内容或 DLC 形式发布，且一切尚未决定。另一条回答说让其余角色成为恋爱对象是开发者想做但无法承诺的事。',
            '其余常被提到的内容——他操控"Fools"、把人类称作"strays"、由他决定所有人的马戏团职务——都来自同人 Wiki 而非开发者，最好当作对他场景的一种解读。',
          ],
        },
        {
          heading: '路线与结局状态',
          paragraphs: [
            'Jester 没有路线，也没有 Jester 结局。开发者点名的四个结局属于 Pierrot、Harlequin、主角，以及"All together"这个合流结局。',
            '另一个常见错误值得直接点名：所谓"Jester 路线在 Day 2 解锁"的说法出现在多份攻略里。类似的东西并不存在。Day 2 更新实际带来的是新角色、动态立绘、重新设计的菜单，以及 Android 版本——不是新路线。',
          ],
        },
        {
          heading: '已确认事实与解读的分界',
          paragraphs: [
            '对 Jester 尤其要注意这个比例，因为网上关于他的大量材料是把推测当成机制在讲。',
          ],
          list: [
            '开发者已确认：身高、年龄顺序位置、力量排名并列第二，以及他没有路线。',
            '来自当前版本：他的外形、场景，以及他对其他角色所掌握的权威。',
            '源自粉丝："Fools"这一概念、"strays"的表述、他指派角色的具体方式，以及他的个人经历。',
          ],
        },
      ],
      faq: [
        { question: 'Jester 身高多少？', answer: '192 cm，约 6 英尺 3.59 英寸，出自开发者公布的身高表，在五位角色中排第二高。' },
        { question: 'Jester 是马戏团的领导者吗？', answer: '同人 Wiki 描述他是马戏团的领导者与主要反派，他对其他角色的权威在版本中保持一致。该描述来自同人而非开发者声明。' },
        { question: 'Jester 有路线吗？', answer: '没有。开发者已确认不存在 Jester 路线，选项只有 Pierrot、Harlequin、两者或都不选。' },
        { question: 'Jester 有结局吗？', answer: '没有。四个计划结局分别属于 Pierrot、Harlequin、主角和"All together"。' },
        { question: 'Jester 路线会在 Day 2 解锁吗？', answer: '不会。多份攻略这样声称，但类似的东西并不存在。Day 2 更新带来的是新角色、动态立绘、重新设计的菜单和 Android 版本。' },
        { question: 'Jester 多大？', answer: '官方未公布具体年龄。在官方年龄顺序中他列第 4 位。' },
        { question: 'Jester 最强吗？', answer: '不是。Pierrot 位列第一，Jester 与 Harlequin 并列第二。' },
        { question: '可以和 Jester 恋爱吗？', answer: '当前版本不行。开发者表示让其余角色成为恋爱对象是他想探索但无法承诺的可能性。' },
      ],
    }),
    'the-doctor': profile('the-doctor', {
      role: '角色群边缘的临床气息',
      intro:
        'Doctor 在当前版本中登场，没有路线、没有结局，在粉丝常引用的公开身高表里也查不到条目。让他值得读的是他制造出的反差：放进狂欢节里的一种临床气质，以及同人 Wiki 描述的他——马戏团里最镇定、同时也是最危险的人。',
      sections: [
        {
          heading: '速览',
          paragraphs: [
            'Doctor 身高 207 cm，是五位已登场角色中最高的，且领先明显——比 Pierrot 高 9 cm。他在开发者年龄顺序中列第 2 位，只有 Ticket Taker 比他年长。他在力量排名中列第 4 位，并且没有路线也没有结局。',
          ],
        },
        {
          heading: 'Doctor 是谁',
          paragraphs: [
            '同人 Wiki 把他描述为次要反派，或可能是中立角色，并给出两面性：一面冷静沉着，一面激情而残忍。这个读法对理解他的场景很有用，因为这种转变被描述为肉眼可见——当某种情绪涌上来时，他的眼睛会闪成红色。Wiki 还指出他宁取巧思而不取蛮力，这与一个"最高但力量仅第四"的角色完全吻合。',
            '他同时也是最容易被误写成有路线的一位。带有"好结局"的 Doctor 路线出现在若干较早的攻略里，但这与开发者描述过的任何内容都不对应。',
          ],
        },
        {
          heading: '身高与外形',
          paragraphs: [
            `开发者身高表将 Doctor 列为 ${formatHeight(chartFor('the-doctor')).metric}，约 ${formatHeight(chartFor('the-doctor')).imperial}——以 9 cm 之差领先五人之中的其他人。`,
            '同人 Wiki 描述他肤色红润、短红发，戴着带发光青色镜片的鸟喙式瘟疫医生面具，并指出他的双腿与双脚从未被展示过。它还记录他是左撇子、不会游泳，以及在特定情绪下眼睛会闪红。这些都来自对素材的同人描述，而非开发者声明。',
          ],
        },
        {
          heading: '年龄顺序与力量',
          paragraphs: [
            'Doctor 在官方年龄顺序中列第 2 位（由大到小）：Ticket Taker、Doctor、Pierrot、Jester、Harlequin。只有 Ticket Taker 比他年长。',
            '在力量排名中他列第 4，位于 Ticket Taker 之前、位于 Pierrot、Harlequin 与 Jester 之后。最高却排第四强，这个组合正是他有趣的地方：Doctor 体格巨大但力量有限，而同人描述中他"宁取巧思不取蛮力"，恰好符合这一设定。',
          ],
        },
        {
          heading: '一个关于配音的细节',
          paragraphs: [
            '尽管角色群是巴西背景，Doctor 在英文剧本中带有俄罗斯口音。这是配音演员与创作者之间的一个刻意玩笑，同人 Wiki 记录了它并附上配音演员本人的 Tumblr 引用。这是个小细节，但它恰好说明粉丝资料中有多大比例是真正有来源的、而不是猜的。',
          ],
        },
        {
          heading: '路线与结局状态',
          paragraphs: [
            'Doctor 没有路线也没有结局。开发者已确认路线选项为 Pierrot、Harlequin、两者或都不选；任何额外的角色路线更可能以追加内容或 DLC 形式发布，且尚未决定。',
            '部分较早的粉丝页面把"Clean Hands"结局归给 Doctor，这一说法没有任何第一方来源支持，本站不把它当作事实延续下去。',
          ],
        },
        {
          heading: '已确认事实与解读的分界',
          paragraphs: [
            '在整个角色群中，Doctor 页面上的同人材料相对于官方材料的比例最高，主要原因正是他没有路线，因此也就没有第一方叙事来描述这条路线。',
          ],
          list: [
            '开发者已确认：身高为五人最高、年龄顺序第 2 位、力量排名第 4 位，以及他没有路线。',
            '来自当前版本：他的外形、场景，以及他镇定状态被打破的方式。',
            '源自粉丝：归于他帐篷的实验与标本、他的个人经历，以及关于其喜好的角色趣闻。',
          ],
        },
      ],
      faq: [
        { question: 'Doctor 身高多少？', answer: '207 cm，约 6 英尺 9.5 英寸——五位角色中最高，比 Pierrot 高 9 cm。' },
        { question: 'Doctor 是最年长的吗？', answer: '他排第二年长。官方年龄顺序（由大到小）为 Ticket Taker、Doctor、Pierrot、Jester、Harlequin。' },
        { question: 'Doctor 最强吗？', answer: '不是。他在开发者力量列表中列第 4，位于 Pierrot、Harlequin 与 Jester 之后。' },
        { question: 'Doctor 有路线吗？', answer: '没有。开发者已确认不存在 Doctor 路线。' },
        { question: 'Doctor 有好结局吗？', answer: '没有。当前版本中 Doctor 既无路线也无结局，唯一存在的结局是 Day 1 的 "Missing" 恶性结局。' },
        { question: 'Doctor 有 "Clean Hands" 结局吗？', answer: '没有。该说法出现在部分粉丝页面，但没有任何第一方来源支持，本站不将其列为事实。' },
        { question: 'Doctor 和 Harlequin 是什么关系？', answer: '同人 Wiki 记录 Harlequin 在 Doctor 身边感到安全，且 Doctor 是他在马戏团里最喜欢的人。这属于粉丝侧的性格描述，而非开发者声明。' },
        { question: 'Doctor 为什么有俄罗斯口音？', answer: '这是配音演员与创作者之间的刻意玩笑，同人 Wiki 附有配音演员本人的 Tumblr 引用；角色群其他成员则是巴西背景。' },
        { question: '可以和 Doctor 恋爱吗？', answer: '目前不行。开发者表示让其余角色成为恋爱对象是他想探索但无法承诺的可能性。' },
      ],
    }),
    'ticket-taker': profile('ticket-taker', {
      role: '门槛的守望者，也是五人中年龄最长的',
      intro:
        'Ticket Taker 是你最先遇到的角色，也是年龄记录最确凿的一位——开发者公布的年龄顺序把他排在最前。他同时也是最常被安上一条并不存在恋爱路线的角色，这让他成为检验粉丝材料可信度的一个好例子。',
      sections: [
        {
          heading: '速览',
          paragraphs: [
            'Ticket Taker 身高 183 cm，是五位已登场角色中最矮的，在开发者年龄顺序中列第 1 位，即年龄最长。他在力量排名中排在最后。他没有路线也没有结局，这一点开发者已直接确认。',
          ],
        },
        {
          heading: 'Ticket Taker 是谁',
          paragraphs: [
            '他在故事中处于一个天然的边界位置：站在马戏团入口，与许可、门槛以及这场演出的运作机制相连。同人 Wiki 描述他顺从而忠于马戏团的旨意，成熟而专业，专注于整洁与秩序，并给出他的原则：在这里，没有人会破坏角色。',
            '最后这句才是他作为角色而非单纯"看门人"成立的原因。在一个靠表演运转的故事里，一个职责是维持"观众与表演者"边界的角色，必须自己相信这场表演。',
          ],
        },
        {
          heading: '身高与外形',
          paragraphs: [
            `开发者身高表将 Ticket Taker 列为 ${formatHeight(chartFor('ticket-taker')).metric}，约 ${formatHeight(chartFor('ticket-taker')).imperial}——五人中最低，比 Doctor 矮 24 cm。`,
            '同人 Wiki 描述他深蓝色短发、白黑各半的分割面具、带金边饰的深蓝燕尾服、金色领巾与礼帽，并指出他双眼颜色不同——左白右蓝。这一角色的葡语名 Bilheteiro 也出现在同一份材料中。',
          ],
        },
        {
          heading: '五人中最年长',
          paragraphs: [
            '这是关于 Ticket Taker 最扎实的一条既定事实。他位居开发者公布的年龄顺序之首：Ticket Taker、Doctor、Pierrot、Jester、Harlequin。作为群体中最年长者、又负责维持秩序，他的年龄与角色定位相互印证。',
            '与所有角色一样，官方未公布具体年龄，而网上流传的他的生日是粉丝指派的。',
          ],
        },
        {
          heading: '力量排名',
          paragraphs: [
            '他在开发者力量列表中列第 5，位于 Doctor 之后。配上最矮的体型，他成了这个群体里最具生理压迫感最弱的一位——这与一个权威完全来自程序与规矩的角色完全一致。',
          ],
        },
        {
          heading: '门票系统',
          paragraphs: [
            '开发者已确认门票共有 8 种。粉色低于主要角色层级，红与绿表示主角做出的选择，而粉色加红色的组合意味着 Ticket Taker 会自动取走红色选项。这是游戏里较为具体的一条官方机制信息，也解释了为什么 Ticket Taker 虽无自己的路线，却对分支结构如此重要。',
            '同人 Wiki 补充说，在咖啡馆给主角粉色门票的"未知男子"就是 Ticket Taker 的伪装。这同样是同人侧的说法，但它直接连向版本中真正存在的那一个结局。',
          ],
        },
        {
          heading: '路线与结局状态',
          paragraphs: [
            'Ticket Taker 没有路线也没有结局。开发者已说明路线选项为 Pierrot、Harlequin、两者或都不选，其余角色是否会有路线，最可能以追加内容或 DLC 形式出现，而且尚无定论。',
            '需要直说的是：一些长期存在的粉丝攻略描述了一条需要"坚持与细致对话"才能解锁的可恋爱 Ticket Taker 路线。公开版本中并不存在这样的路线。',
          ],
        },
        {
          heading: '已确认事实与解读的分界',
          paragraphs: [
            '对一个配角而言，Ticket Taker 在官方材料中的记录意外地充分，主要因为门票系统是少数被确认的机制之一。',
          ],
          list: [
            '开发者已确认：身高为五人最矮、年龄顺序第 1 位、力量排名最后、门票共 8 种，以及他没有路线。',
            '来自当前版本：他的外形、场景，以及主角在 Day 1 会得到一张粉色门票这件事。',
            '源自粉丝：咖啡馆"未知男子"的伪装身份、"现实操纵者"这一称号，以及他与 Columbina 之间的经历细节。',
          ],
        },
      ],
      faq: [
        { question: 'Ticket Taker 身高多少？', answer: '183 cm，约 6 英尺 0 英寸——五位角色中最矮，比 Doctor 矮 24 cm。' },
        { question: 'Ticket Taker 是最年长的吗？', answer: '是。他位居官方年龄顺序之首：Ticket Taker、Doctor、Pierrot、Jester、Harlequin。' },
        { question: 'Ticket Taker 最强吗？', answer: '不是。他在开发者力量列表中列最后。' },
        { question: '可以和 Ticket Taker 恋爱吗？', answer: '不可以。开发者已确认不存在 Ticket Taker 路线，选项只有 Pierrot、Harlequin、两者或都不选。' },
        { question: 'Ticket Taker 有路线或结局吗？', answer: '都没有。他在整个故事中作为权威人物出现，但没有任何路线或结局属于他。' },
        { question: '门票有几种？', answer: '开发者已确认共 8 种。粉色低于主要角色层级，红与绿表示主角的选择，粉色加红则意味着 Ticket Taker 会自动取走红色选项。' },
        { question: '红色门票是什么？', answer: '红与绿是标记"由主角做出选择"的颜色。粉色加红的组合意味着 Ticket Taker 会替主角取走红色选项。' },
        { question: 'Ticket Taker 就是咖啡馆那位男子吗？', answer: '同人 Wiki 把给主角粉色门票的咖啡馆"未知男子"认定为 Ticket Taker 的伪装。这属于同人侧认定，而同一张粉色门票正是 "Missing" 结局的开端。' },
        { question: 'Ticket Taker 没有路线，为什么还重要？', answer: '他掌控门票系统——这是游戏中少数被确认的机制之一；他也是确立"主角是访客还是参与者"这一边界的角色。' },
      ],
    }),
  },
};

export function getCharacterProfile(locale: EditorialLocale, slug: CharacterSlug) {
  return characterProfiles[locale]?.[slug];
}

export { characterSlugs };
