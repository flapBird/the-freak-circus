import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import GameCard from '@/components/games/GameCard';
import GamePlayer from '@/components/games/GamePlayer';
import SafeImage from '@/components/SafeImage';
import SchemaMarkup from '@/components/SchemaMarkup';
import {
  getGameBySlug,
  getGameSlug,
  getRelatedGames,
  getGameIframeSrc,
} from '@/data/games';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string; slug: string } };

export function generateMetadata({ params: { locale, slug } }: Props): Metadata {
  const game = getGameBySlug(slug);
  if (!game) return {};

  const path = `/games/${getGameSlug(game)}`;

  return buildMetadata({
    title: game.title,
    description: game.summary,
    canonical: `${SITE_URL}${locale === 'en' ? path : `/${locale}${path}`}`,
    ...(game.coverImage ? { ogImage: `${SITE_URL}${game.coverImage}` } : {}),
  });
}

function statusLabel(playable: boolean, zh: boolean) {
  if (playable) return zh ? '可在本站游玩' : 'Playable here';
  return zh ? '游戏资源待配置' : 'Game files pending';
}

export default function GameDetailPage({ params: { locale, slug } }: Props) {
  const game = getGameBySlug(slug);
  if (!game) notFound();

  const related = getRelatedGames(game);
  const iframeSrc = getGameIframeSrc(game);
  const prefix = locale === 'en' ? '' : `/${locale}`;
  const zh = locale === 'zh';
  const canonicalPath = `${prefix}/games/${getGameSlug(game)}`;

  return (
    <>
      <SchemaMarkup
        type="VideoGame"
        data={{
          name: game.title,
          description: game.summary,
          genre: game.genres,
          creator: { '@type': 'Organization', name: game.developer },
          url: `${SITE_URL}${canonicalPath}`,
          applicationCategory: 'Game',
          ...(game.coverImage ? { image: `${SITE_URL}${game.coverImage}` } : {}),
        }}
      />

      <main className="catalog-game-detail-page">
        <div className="page-container">
          <nav className="blog-breadcrumb catalog-breadcrumb" aria-label={zh ? '面包屑导航' : 'Breadcrumb'}>
            <Link href={prefix || '/'}>{zh ? '首页' : 'Home'}</Link>
            <span>/</span>
            <Link href={`${prefix}/games`}>{zh ? '游戏合集' : 'Games'}</Link>
            <span>/</span>
            <span>{game.title}</span>
          </nav>

          <section className="catalog-game-detail-grid">
            <GamePlayer
              title={game.title}
              cover={game.coverImage}
              iframeSrc={iframeSrc}
              aspectRatio={game.gameAspectRatio}
              locale={locale}
            />

            <aside className={`catalog-game-summary accent-${game.accent}`}>
              <span className="catalog-status">{statusLabel(Boolean(iframeSrc), zh)}</span>
              <h1>{game.title}</h1>
              <p>{game.summary}</p>
              <dl className="catalog-game-facts">
                <div>
                  <dt>{zh ? '开发者' : 'Developer'}</dt>
                  <dd>{game.developer}</dd>
                </div>
                <div>
                  <dt>{zh ? '游玩方式' : 'Availability'}</dt>
                  <dd>{statusLabel(Boolean(iframeSrc), zh)}</dd>
                </div>
              </dl>
              <div className="catalog-genre-list" aria-label={zh ? '游戏类型' : 'Genres'}>
                {game.genres.map((genre) => <span key={genre}>{genre}</span>)}
              </div>
            </aside>
          </section>

          <div className="catalog-game-content-layout">
            <article className="catalog-game-article">
              <section>
                <span className="section-kicker">{zh ? '游戏介绍' : 'ABOUT THE GAME'}</span>
                <h2>{zh ? `关于 ${game.title}` : `About ${game.title}`}</h2>
                {game.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </section>

              {game.features?.length ? (
                <section>
                  <span className="section-kicker">{zh ? '体验重点' : 'WHAT TO EXPECT'}</span>
                  <h2>{zh ? '主要特点' : 'Key features'}</h2>
                  <div className="catalog-feature-grid">
                    {game.features.map((feature, index) => (
                      <article key={feature.title}>
                        <span>0{index + 1}</span>
                        <h3>{feature.title}</h3>
                        <p>{feature.description}</p>
                      </article>
                    ))}
                  </div>
                </section>
              ) : null}

              {game.screenshots?.length ? (
                <section>
                  <span className="section-kicker">{zh ? '游戏画面' : 'GALLERY'}</span>
                  <h2>{zh ? '截图' : 'Screenshots'}</h2>
                  <div className="catalog-screenshot-grid">
                    {game.screenshots.map((screenshot, index) => (
                      <SafeImage
                        key={screenshot}
                        src={screenshot}
                        alt={`${game.title} ${zh ? '游戏截图' : 'screenshot'} ${index + 1}`}
                        width={960}
                        height={600}
                      />
                    ))}
                  </div>
                </section>
              ) : null}
            </article>

            <aside className="catalog-game-sidebar">
              <section className="reference-card">
                <span className="section-kicker">{zh ? '游玩说明' : 'PLAYING THIS GAME'}</span>
                <h2>{zh ? '当前状态' : 'Current availability'}</h2>
                <p>{iframeSrc
                  ? (zh ? '浏览器版本会直接在上方播放器中运行。需要重新开始时，可以使用播放器右下角的重新加载按钮。' : 'The browser build runs directly in the player above. Use the Reload control when you need to restart it.')
                  : (zh ? '浏览器游戏文件尚未上传。配置 gameResourcePath 后，播放器会自动加载游戏，无需增加站外按钮。' : 'The browser game files have not been uploaded yet. Once gameResourcePath is configured, the player will load the game automatically without an external button.')}
                </p>
              </section>
              <section className="reference-card catalog-curation-note">
                <span className="section-kicker">{zh ? '收录原则' : 'CURATION NOTE'}</span>
                <h2>{zh ? '少而明确' : 'Small and transparent'}</h2>
                <p>
                  {zh
                    ? '本站不会伪造评分或玩家评论；链接、可用方式和 iframe 状态都会明确标注。'
                    : 'This collection does not invent ratings or player reviews. Links, availability, and iframe status are labelled clearly.'}
                </p>
              </section>
            </aside>
          </div>

          <section className="catalog-related-section" aria-labelledby="related-games-heading">
            <div className="section-heading-row">
              <div className="section-heading">
                <span className="section-kicker">{zh ? '继续探索' : 'KEEP EXPLORING'}</span>
                <h2 id="related-games-heading">{zh ? '更多叙事游戏' : 'More narrative games'}</h2>
              </div>
              <Link className="text-link" href={`${prefix}/games`}>{zh ? '查看全部游戏' : 'View all games'} →</Link>
            </div>
            <div className="catalog-related-grid">
              {related.map((item) => <GameCard key={getGameSlug(item)} game={item} locale={locale} compact />)}
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
