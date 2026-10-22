import FanArtSection from '@/components/FanArtSection';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { tMsg } from '@/lib/messages';
import { characterCopy, characterSlugs, editorialLocale, type CharacterSlug } from '@/lib/site-content';
import { getLocalizedCharacter, characterLocales } from '@/lib/editorial-content';
import { formatHeight } from '@/lib/game-facts';

type Props = { params: { locale: string; slug: string } };

export const dynamicParams = false;

export function generateStaticParams() {
  return characterSlugs.map((slug) => ({ slug }));
}

export function generateMetadata({ params: { locale, slug } }: Props) {
  if (!characterSlugs.includes(slug as CharacterSlug)) return {};
  const lang = editorialLocale(locale);
  const ch = characterCopy[lang][slug as CharacterSlug];
  const profile = getLocalizedCharacter(locale, slug as CharacterSlug)
    ?? getLocalizedCharacter('en', slug as CharacterSlug)!;
  const height = formatHeight({ cm: profile.cm, feet: profile.feet, inches: profile.inches });
  const description = lang === 'zh'
    ? `${ch.summary} 官方身高 ${profile.cm} 厘米（${height.imperial}），${ch.name} 在 The Freak Circus 中的性格、故事与人物关系。`
    : `${ch.summary} Listed at ${profile.cm} cm (${height.imperial}), ${ch.name}'s personality, story, and relationships in The Freak Circus.`;
  return buildMetadata({
    title: `${ch.name} — The Freak Circus Character`,
    description,
    canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/characters/${slug}`,
    ogImage: `${SITE_URL}${ch.image}`,
    availableLocales: characterLocales(slug),
    locale,
  });
}

export default function CharacterPage({ params: { locale, slug } }: Props) {
  if (!characterSlugs.includes(slug as CharacterSlug)) notFound();
  const current = slug as CharacterSlug;
  const lang = editorialLocale(locale);
  const zh = lang === 'zh';
  const ch = characterCopy[lang][current];
  const profile = getLocalizedCharacter(locale, current)
    ?? getLocalizedCharacter('en', current)!;
  const p = locale === 'en' ? '' : `/${locale}`;

  const height = formatHeight({ cm: profile.cm, feet: profile.feet, inches: profile.inches });
  const agePosition = zh
    ? `第 ${profile.ageOrder} 位（共 5 人，由大到小）`
    : `Position ${profile.ageOrder} of 5, oldest first`;
  const strengthPosition = profile.strengthRank === 2
    ? tMsg(locale, 'character.jointSecond')
    : tMsg(locale, 'character.rank').replace('{n}', String(profile.strengthRank));
  const hasRoute = current === 'pierrot' || current === 'harlequin';

  return (
    <main className="character-profile-page">
      <header className="page-hero character-profile-hero">
        <div className="page-container">
          <h1>{ch.name}</h1>
          <p className="page-hero-lead">{profile.intro}</p>
          <div className="page-hero-actions">
            <Link className="button-secondary" href={`${p}/characters`}>
              ← {tMsg(locale, 'character.backToAll')}
            </Link>
            <Link className="button-primary" href={`${p}/#play`}>
              {tMsg(locale, 'character.enterStory')}
            </Link>
          </div>
        </div>
      </header>

      <section className="page-section page-container profile-layout character-profile-layout">
        <aside className="profile-visual-column">
          <div className="profile-art">
            <SafeImage src={ch.image} alt={`${ch.name} in The Freak Circus`} width={740} height={940} />
          </div>
          <dl className="character-fact-list">
            <div>
              <dt>{tMsg(locale, 'character.officialHeight')}</dt>
              <dd>{height.metric} · {height.imperial}</dd>
            </div>
            <div>
              <dt>{tMsg(locale, 'character.ageOrder')}</dt>
              <dd>{agePosition}</dd>
            </div>
            <div>
              <dt>{tMsg(locale, 'character.strengthRank')}</dt>
              <dd>{strengthPosition}</dd>
            </div>
            <div>
              <dt>{tMsg(locale, 'character.introduced')}</dt>
              <dd>0.2 Prototype</dd>
            </div>
            <div>
              <dt>{tMsg(locale, 'character.routeStatus')}</dt>
              <dd>
                {hasRoute
                  ? tMsg(locale, 'character.planned')
                  : tMsg(locale, 'character.noRoute')}
              </dd>
            </div>
          </dl>
          <Link className="text-link" href={`${p}/characters/heights`}>
            {tMsg(locale, 'character.seeHeightChart')} →
          </Link>
        </aside>

        <article className="character-story">
          {profile.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul className="character-evidence-list">
                  {section.list.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="character-faq">
            <h2>{tMsg(locale, 'guide.faq')}</h2>
            <dl className="guide-faq-list">
              {profile.faq.map((item) => (
                <div key={item.question}>
                  <dt>{item.question}</dt>
                  <dd>{item.answer}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="character-boundary">
            <h2>{tMsg(locale, 'character.boundaryTitle')}</h2>
            <p>{ch.scope}</p>
            <p>
              {tMsg(locale, 'character.boundary')}
            </p>
          </section>

          <section className="character-siblings">
            <h2>{tMsg(locale, 'character.restOfCircus')}</h2>
            <div>
              {characterSlugs
                .filter((other) => other !== current)
                .map((other) => {
                  const otherProfile = getLocalizedCharacter(locale, other)
                    ?? getLocalizedCharacter('en', other)!;
                  return (
                    <Link key={other} href={`${p}/characters/${other}`}>
                      <span>{characterCopy[lang][other].name}</span>
                      <small>
                        {otherProfile.cm} cm · {tMsg(locale, 'character.agePosition').replace('{n}', String(otherProfile.ageOrder))}
                      </small>
                    </Link>
                  );
                })}
            </div>
          </section>

          <nav className="character-reading" aria-label={tMsg(locale, 'guide.continueReading')}>
            <h2>{tMsg(locale, 'character.goDeeper')}</h2>
            <div>
              <Link href={`${p}/wiki`}>
                <span>Wiki</span>
                <small>{tMsg(locale, 'character.worldFacts')} →</small>
              </Link>
              <Link href={`${p}/endings`}>
                <span>{tMsg(locale, 'character.endingsRoutes')}</span>
                <small>{tMsg(locale, 'character.implementedVsPlanned')} →</small>
              </Link>
              <Link href={`${p}/characters/heights`}>
                <span>{tMsg(locale, 'character.heightsRankings')}</span>
                <small>{tMsg(locale, 'character.fullChart')} →</small>
              </Link>
              <Link href={`${p}/day-3`}>
                <span>Day 3</span>
                <small>{tMsg(locale, 'character.nextChapter')} →</small>
              </Link>
              <Link href={`${p}/updates`}>
                <span>{tMsg(locale, 'character.updates')}</span>
                <small>{tMsg(locale, 'character.followProgress')} →</small>
              </Link>
            </div>
          </nav>
        </article>
      </section>
      <FanArtSection locale={locale} character={current} />
    </main>
  );
}
