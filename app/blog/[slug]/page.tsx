import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import SchemaMarkup from '@/components/SchemaMarkup';
import SidebarLayout from '@/components/SidebarLayout';
import { getAllSlugs, getPostBySlug } from '@/lib/blog-posts';
import { buildMetadata, SITE_URL } from '@/lib/seo';

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  return buildMetadata({
    title: post.title,
    description: post.description,
    canonical: `${SITE_URL}/blog/${post.slug}`,
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const dateISO = new Date(post.date).toISOString();
  const dateDisplay = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <>
      <SchemaMarkup
        type="Article"
        data={{
          headline: post.title,
          description: post.description,
          datePublished: dateISO,
          dateModified: dateISO,
          url: `${SITE_URL}/blog/${post.slug}`,
          publisher: {
            '@type': 'Organization',
            name: 'thefreakcircus.help',
            url: SITE_URL,
          },
          about: {
            '@type': 'VideoGame',
            name: 'The Freak Circus',
          },
        }}
      />

      <SidebarLayout>
        <nav className="mb-6 text-xs text-circus-muted">
          <Link href="/blog" className="hover:text-circus-gold transition-colors">
            Back to all articles
          </Link>
        </nav>

        <header className="mb-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-[10px] px-1.5 py-0.5 border border-circus-border text-circus-muted font-display tracking-wider uppercase"
              >
                {tag}
              </span>
            ))}
          </div>
          <h1 className="font-display text-circus-white text-2xl md:text-3xl mb-3 leading-tight">
            {post.title}
          </h1>
          <p className="text-circus-muted text-sm font-body italic">{post.description}</p>
          <time dateTime={dateISO} className="block mt-2 text-xs text-circus-muted/60">
            Published {dateDisplay}
          </time>
        </header>

        <div className="divider-ornament mb-8">
          <span className="font-display text-[10px] text-circus-gold/40 tracking-widest">TFC</span>
        </div>

        <div className="prose-circus" dangerouslySetInnerHTML={{ __html: post.content }} />

        <div className="mt-12 pt-6 border-t border-circus-border">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-circus-gold hover:text-circus-gold-light
                       font-display text-xs tracking-widest uppercase transition-colors"
          >
            Play The Freak Circus Online
          </Link>
        </div>
      </SidebarLayout>
    </>
  );
}
