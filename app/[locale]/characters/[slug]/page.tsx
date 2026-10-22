import FanArtSection from '@/components/FanArtSection';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { buildMetadata, SITE_URL } from '@/lib/seo';
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
    ? (zh ? '并列第 2 位' : 'Joint second')
    : (zh ? `第 ${profile.strengthRank} 位` : `Rank ${profile.strengthRank}`);
  const hasRoute = current === 'pierrot' || current === 'harlequin';

  return (
    <main className="character-profile-page">
      <header className="page-hero character-profile-hero">
        <div className="page-container">
          <h1>{ch.name}</h1>
          <p className="page-hero-lead">{profile.intro}</p>
          <div className="page-hero-actions">
            <Link className="button-secondary" href={`${p}/characters`}>
              ← {zh ? '返回全部角色' : 'Back to all characters'}
            </Link>
            <Link className="button-primary" href={`${p}/#play`}>
              {zh ? '进入故事' : 'Enter the story'}
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
              <dt>{zh ? '官方身高' : 'Official height'}</dt>
              <dd>{height.metric} · {height.imperial}</dd>
            </div>
            <div>
              <dt>{zh ? '年龄顺序' : 'Age order'}</dt>
              <dd>{agePosition}</dd>
            </div>
            <div>
              <dt>{zh ? '力量排名' : 'Strength rank'}</dt>
              <dd>{strengthPosition}</dd>
            </div>
            <div>
              <dt>{zh ? '登场版本' : 'Introduced'}</dt>
              <dd>0.2 Prototype</dd>
            </div>
            <div>
              <dt>{zh ? '路线状态' : 'Route status'}</dt>
              <dd>
                {hasRoute
                  ? (zh ? '计划中，尚未实装' : 'Planned, not implemented')
                  : (zh ? '无路线' : 'No route')}
              </dd>
            </div>
          </dl>
          <Link className="text-link" href={`${p}/characters/heights`}>
            {zh ? '查看完整身高与排名表' : 'See the full height and ranking chart'} →
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
            <h2>{zh ? '常见问题' : 'Frequently asked questions'}</h2>
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
            <h2>{zh ? '路线与结局边界' : 'Route and ending boundary'}</h2>
            <p>{ch.scope}</p>
            <p>
              {zh
                ? '这里把已发布剧情与开发计划分开：人物登场、暗示或分支画面都不能自动证明一条完整路线已经存在。当前版本唯一实装的结局是 Day 1 的 "Missing" 恶性结局，其余均已公布但尚未实装。'
                : 'Released scenes and future plans are kept separate here. An introduction, implication, or branch-specific appearance does not by itself prove that a complete route exists. The only ending implemented in the current build is the "Missing" bad ending on Day 1; the rest are announced but not yet shipped.'}
            </p>
          </section>

          <section className="character-siblings">
            <h2>{zh ? '马戏团里的其他角色' : 'The rest of the circus'}</h2>
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
                        {otherProfile.cm} cm · {zh ? `年龄第 ${otherProfile.ageOrder} 位` : `age ${otherProfile.ageOrder} of 5`}
                      </small>
                    </Link>
                  );
                })}
            </div>
          </section>

          <nav className="character-reading" aria-label={zh ? '继续阅读' : 'Continue reading'}>
            <h2>{zh ? '继续深入马戏团' : 'Go deeper into the circus'}</h2>
            <div>
              <Link href={`${p}/wiki`}>
                <span>Wiki</span>
                <small>{zh ? '世界观与版本事实' : 'World and build facts'} →</small>
              </Link>
              <Link href={`${p}/endings`}>
                <span>{zh ? '结局与路线' : 'Endings and routes'}</span>
                <small>{zh ? '已实装与计划中的区分' : 'Implemented vs planned'} →</small>
              </Link>
              <Link href={`${p}/characters/heights`}>
                <span>{zh ? '身高与排名' : 'Heights and rankings'}</span>
                <small>{zh ? '官方完整数据' : 'The full official chart'} →</small>
              </Link>
              <Link href={`${p}/day-3`}>
                <span>Day 3</span>
                <small>{zh ? '下一章当前状态' : 'Next-chapter status'} →</small>
              </Link>
              <Link href={`${p}/updates`}>
                <span>{zh ? '更新记录' : 'Updates'}</span>
                <small>{zh ? '按时间核对进度' : 'Follow verified progress'} →</small>
              </Link>
            </div>
          </nav>
        </article>
      </section>
      <FanArtSection locale={locale} character={current} />
    </main>
  );
}
