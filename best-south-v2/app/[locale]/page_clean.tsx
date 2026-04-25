import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('home.title'),
    description: t('home.description'),
  };
}

export default function Home() {
  return <HomeClient />;
}