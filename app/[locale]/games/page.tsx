import GameCard from '@/components/games/GameCard';
import { getGames, getGameSlug } from '@/data/games';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import { editorialLocale } from '@/lib/site-content';

export function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  return buildMetadata({ title: zh ? '热门叙事游戏' : 'Hot Narrative Games', description: zh ? '为视觉小说玩家收集的热门叙事游戏。' : 'A collection of popular narrative games for visual novel fans.', canonical: `${SITE_URL}${locale === 'en' ? '' : `/${locale}`}/games` });
}

export default function GamesPage({ params: { locale } }: { params: { locale: string } }) {
  const zh = editorialLocale(locale) === 'zh';
  const games = getGames();

  return (
    <main className="catalog-page">
      <header className="page-hero catalog-hero">
        <div className="page-container">
          <h1>{zh ? '热门叙事游戏' : 'Hot Narrative Games'}</h1>
          <p className="page-hero-lead">
            {zh
              ? '我们为视觉小说玩家收集相关的热门叙事游戏。'
              : 'A collection of popular narrative games for visual novel fans.'}
          </p>
        </div>
      </header>
      <section className="page-section page-container" aria-label={zh ? '叙事游戏合集' : 'Narrative game collection'}>
        <div className="catalog-game-grid">
          {games.map((game) => <GameCard key={getGameSlug(game)} game={game} locale={locale} />)}
        </div>
      </section>
    </main>
  );
}
