import { permanentRedirect } from 'next/navigation';

type Props = { params: { locale: string } };

export default function LegacyNewsPage({ params: { locale } }: Props) {
  permanentRedirect(`${locale === 'en' ? '' : `/${locale}`}/updates`);
}
