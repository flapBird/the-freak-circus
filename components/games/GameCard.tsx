import Link from 'next/link';
import SafeImage from '@/components/SafeImage';
import { GameRecord, getGameSlug } from '@/data/games';

type Props = {
  game: GameRecord;
  locale: string;
  compact?: boolean;
};

function initials(title: string) {
  return title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase();
}

export default function GameCard({ game, locale, compact = false }: Props) {
  const p = locale === 'en' ? '' : `/${locale}`;
  const zh = locale === 'zh';
  const slug = getGameSlug(game);
  const releaseDate = new Intl.DateTimeFormat(zh ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${game.releaseDate}T00:00:00Z`));

  return (
    <article className={`catalog-game-card accent-${game.accent}${compact ? ' catalog-game-card-compact' : ''}`}>
      <Link href={`${p}/games/${slug}`} className="catalog-game-card-link">
        <div className="catalog-game-card-media">
          {game.coverImage ? (
            <SafeImage src={game.coverImage} alt={`${game.title} cover`} width={760} height={470} />
          ) : (
            <div className="catalog-game-placeholder" aria-hidden="true">
              <span>{initials(game.title)}</span>
              <small>{zh ? '封面待添加' : 'Cover coming soon'}</small>
            </div>
          )}
        </div>
        <div className="catalog-game-card-body">
          <div className="catalog-game-card-topline">
            <small>{game.eyebrow}</small>
            <span>{game.status === 'playable' ? (zh ? '可游玩' : 'Playable') : (zh ? '站外游戏' : 'External')}</span>
          </div>
          <h2>{game.title}</h2>
          <p>{game.summary}</p>
          <div className="catalog-game-card-footer">
            <time dateTime={game.releaseDate}>{releaseDate}</time>
            <strong>{zh ? '立即游玩' : 'Play Now'} →</strong>
          </div>
        </div>
      </Link>
    </article>
  );
}
