import { getTranslations } from 'next-intl/server';
import type { Metadata } from 'next';
import ServicesClient from './ServicesClient';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('services.title'),
    description: t('services.description'),
  };
}

export default function Services() {
  return <ServicesClient />;
}