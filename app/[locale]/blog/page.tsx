import { tMsg, rawMsg } from '@/lib/messages';
import Link from 'next/link';
import SidebarLayout from '@/components/SidebarLayout';
import { getBlogPosts } from '@/lib/blog-posts';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { locale: string } };

export async function generateMetadata({ params: { locale } }: Props) {
  const path = '/blog';
  return buildMetadata({
    title: tMsg(locale, 'meta.blogTitle'),
    description: tMsg(locale, 'meta.blogDesc'),
    canonical: `${SITE_URL}${locale === 'en' ? path : `/${locale}${path}`}`,
  });
}

export default async function BlogPage({ params: { locale } }: Props) {
  const p = locale === 'en' ? '' : `/${locale}`;
  const sorted = [...getBlogPosts(locale)].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <SidebarLayout>
      <div className="mb-8">
        <h1 className="font-display text-circus-white text-3xl mb-3">{tMsg(locale, 'blog.title')}</h1>
        <p className="text-circus-muted font-body italic">{tMsg(locale, 'blog.subtitle')}</p>
      </div>

      <div className="space-y-5">
        {sorted.map((post) => {
          const dateDisplay = new Date(post.date).toLocaleDateString(locale === 'en' ? 'en-US' : locale, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          });

          return (
            <article
              key={post.slug}
              className="border border-circus-border bg-circus-card/30 p-5 rounded-sm hover:border-circus-gold/30 transition-all group"
            >
              <Link href={`${p}/blog/${post.slug}`} className="block">
                <div className="flex flex-wrap gap-2 mb-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-1.5 py-0.5 border border-circus-border text-circus-muted font-display tracking-wider uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                  <time dateTime={post.date} className="text-[10px] text-circus-muted/60 ml-auto">
                    {dateDisplay}
                  </time>
                </div>
                <h2 className="font-display text-circus-text text-base mb-2 group-hover:text-circus-gold transition-colors leading-snug">
                  {post.title}
                </h2>
                <p className="text-circus-muted text-sm leading-relaxed">{post.description}</p>
              </Link>
            </article>
          );
        })}
      </div>
    </SidebarLayout>
  );
}
