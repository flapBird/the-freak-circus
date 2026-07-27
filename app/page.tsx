import { tMsg } from '@/lib/messages';
import { buildMetadata, SITE_URL } from '@/lib/seo';
import PageShell from '@/components/PageShell';
import HomeContent from '@/components/HomeContent';

export async function generateMetadata() {
  return buildMetadata({
    title: tMsg('en', 'meta.homeTitle'),
    description: tMsg('en', 'meta.homeDesc'),
    canonical: SITE_URL,
  });
}

export default function RootPage() {
  return (
    <PageShell locale="en">
      <HomeContent locale="en" />
    </PageShell>
  );
}
