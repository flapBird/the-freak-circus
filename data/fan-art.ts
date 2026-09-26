import type { CharacterSlug } from '@/lib/site-content';

export type FanArtwork = {
  id: string;
  character: CharacterSlug;
  creator: string;
  sourceUrl: string;
  image: string;
  title: string;
};

// Curated from the artists' public Tumblr posts, checked 2026-09-26.
// Keep each image paired with its original post and artist; never substitute
// official sprites, unrelated characters, or duplicate images to fill a row.
const artwork = (character: CharacterSlug, creator: string, post: string, title: string, paths: string[]): FanArtwork[] =>
  paths.map((path, index) => ({
    id: `${creator}-${post}-${index + 1}`, character, creator, title,
    sourceUrl: `https://www.tumblr.com/${creator}/${post}`,
    image: `https://64.media.tumblr.com/${path}`,
  }));

export const FAN_ART: readonly FanArtwork[] = [
  ...artwork('pierrot', 'ikuramachi', '810612329160065024', 'May I love you forever?', [
    '296e95680fd4ae64c44ab42cf5d863c4/637017ed696d55c9-23/s640x960/c896f46b29c72ea0682488d836a77d8c6010b185.pnj',
  ]),
  ...artwork('harlequin', 'maboroshiiro', '817520936522743808', 'Harlequin birthday art', [
    '32b590b0357feb63034b38fafcb0f6a7/47db3c6e770cd2b5-db/s640x960/d68f82589b426fae7cc6b91bcdae59bf93a07e0c.pnj',
    'b9e28671d0da452c60f8b420fe16e466/47db3c6e770cd2b5-b5/s640x960/4a10bab4b26aa53fb7041f03c5377c2e7aa7a3ed.pnj',
  ]),
  ...artwork('jester', 'nnvicky', '824296640015958016', 'Mama Jester', [
    '84f10c99a0af540f5688a176b18c4572/680819a6cfa69020-4a/s640x960/1a7e23dd3b9eb9c128b7ec898f9d6bf17ad3baf5.pnj',
    '899008ec5d275c6553acfe27229c65a1/680819a6cfa69020-ad/s640x960/43241537349af816eac325b77c8bc1d1b7263e2c.pnj',
  ]),
  ...artwork('ticket-taker', 'nightcalss', '820889281845411840', 'Happy birthday, Ticket Taker', [
    '14271fb0b1ae44b6845c5dddf88607b8/d9cdcd154ccddf88-4d/s640x960/f72be2dbfce81b934e1cef852971afb15a044c7f.pnj',
    '6b4d23cdfa4cab7a65b6827fbbd94e16/d9cdcd154ccddf88-f6/s640x960/e88ef5038dceb88ce573f54955c39c779cf44cb8.pnj',
    '724f924c9efe45ebc076c457fafabc17/d9cdcd154ccddf88-97/s640x960/70f6b31cd9ac02345e57fedc833991a8253d7343.pnj',
    'f281695e5e53d915fdcc57dc8739af91/d9cdcd154ccddf88-ed/s640x960/caa78fefdcd9645675fc34d02b35431de5c12ac9.pnj',
  ]),
  ...artwork('pierrot', 'nazus', '818900550649249792', 'Bro is not so innocent', [
    'ffe80c6135e3902996688daba0dde8d1/22de6b0e80e08d25-b6/s640x960/0e3109d8a7472382bed2db45d20dc315d4bb97ed.pnj',
  ]),
  ...artwork('harlequin', 'mokitobear', '812653812991000576', 'Harlequin & MC', [
    'd1526eb13724290cd9ab63931528d357/8f6bd1279dba7800-66/s640x960/922fb7459b15ebce4504c91639e8c6d363a34b65.pnj',
  ]),
  ...artwork('harlequin', 'cynira', '820805030289555456', 'Harlequin illustration', [
    '808f9845af4805d304ce6dd5f3b4886f/d52c873f8441bf92-b4/s640x960/b5bb1c0e2f7e9396312fc5ac2cd48832d36adf78.jpg',
  ]),
  ...artwork('pierrot', 'alleyway221', '819655545584861184', 'Chocolate Kisses — comic panel', [
    '886dd256b0e62a263fe3c76835510d48/96d853db5d65fee5-69/s640x960/7dc99a38145876f68508d0c91c48d22829691fe7.jpg',
    '5f7dc9bb600c4b9222445c150902fa41/96d853db5d65fee5-11/s640x960/e6f8940c66d0e7c4f5642e09547cde0f809081bc.jpg',
  ]),
];

export function getFanArt(character?: CharacterSlug) {
  return character ? FAN_ART.filter((item) => item.character === character) : [...FAN_ART];
}

// Interleave characters so the home preview represents the whole gallery.
export function getFeaturedFanArt(limit = 8) {
  const groups = ['pierrot', 'harlequin', 'jester', 'the-doctor', 'ticket-taker'] as const;
  return [0, 1, 2, 3].flatMap((index) => groups.flatMap((slug) => getFanArt(slug).slice(index, index + 1))).slice(0, limit);
}
