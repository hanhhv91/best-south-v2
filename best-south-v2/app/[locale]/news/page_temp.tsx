import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import NewsClient from './NewsClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('news.title'),
    description: t('news.description'),
  };
}

export default function News() {
  return <NewsClient />;
}