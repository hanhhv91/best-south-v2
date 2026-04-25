'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function HomeClient() {
  const t = useTranslations('home');
  const params = useParams();
  const currentLocale = params.locale as string;

  return (
    <div className="min-h-screen bg-surface-gray">
      <section className="relative overflow-hidden text-white">
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1800&q=80"
          alt="Industrial manufacturing line"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0c2d52]/80" />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-20 lg:py-28">
          <p className="text-[11px] tracking-[0.24em] uppercase text-primary-fixed mb-4">{t('hero.certified')}</p>
          <h1 className="text-[38px] md:text-[58px] font-bold leading-[1.05] max-w-3xl">{t('hero.title')}</h1>
          <p className="mt-5 text-primary-fixed max-w-2xl text-[15px] md:text-[17px] leading-relaxed">{t('hero.description')}</p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href={`/${currentLocale}/services`} className="bg-white text-primary px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] hover:bg-primary-fixed transition-colors">
              {t('hero.buttons.technicalSolutions')}
            </Link>
            <Link href={`/${currentLocale}/contact`} className="border border-primary-fixed px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] hover:bg-white/10 transition-colors">
              {t('hero.buttons.sdsDatabase')}
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-14 lg:py-16">
        <h2 className="text-[32px] font-semibold text-slate-gray mb-8">{t('products.title')}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <article className="border border-border-light bg-white">
            <img
              src="https://images.unsplash.com/photo-1610016302534-6f67f1c968d8?auto=format&fit=crop&w=1200&q=80"
              alt="Industrial adhesives product"
              className="h-56 w-full object-cover"
            />
            <div className="p-6 lg:p-7">
              <h3 className="text-[30px] leading-tight font-semibold text-slate-gray mb-2">{t('products.cards.industrial.title')}</h3>
              <p className="text-on-surface-variant mb-5 text-[15px] leading-relaxed">{t('products.cards.industrial.description')}</p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div><span className="block text-outline uppercase">{t('products.cards.industrial.spec1Label')}</span><span>{t('products.cards.industrial.spec1Value')}</span></div>
                <div><span className="block text-outline uppercase">{t('products.cards.industrial.spec2Label')}</span><span>{t('products.cards.industrial.spec2Value')}</span></div>
              </div>
            </div>
          </article>
          <article className="border border-border-light bg-white">
            <img
              src="https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=1200&q=80"
              alt="Advanced resins product"
              className="h-56 w-full object-cover"
            />
            <div className="p-6 lg:p-7">
              <h3 className="text-[30px] leading-tight font-semibold text-slate-gray mb-2">{t('products.cards.resins.title')}</h3>
              <p className="text-on-surface-variant mb-5 text-[15px] leading-relaxed">{t('products.cards.resins.description')}</p>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div><span className="block text-outline uppercase">{t('products.cards.resins.spec1Label')}</span><span>{t('products.cards.resins.spec1Value')}</span></div>
                <div><span className="block text-outline uppercase">{t('products.cards.resins.spec2Label')}</span><span>{t('products.cards.resins.spec2Value')}</span></div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="bg-surface-container py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-xs tracking-[0.2em] uppercase text-outline mb-3">{t('rd.eyebrow')}</p>
            <h2 className="text-[44px] leading-[1.1] font-semibold text-slate-gray mb-4">{t('rd.title')}</h2>
            <p className="text-on-surface-variant leading-relaxed mb-8 text-[15px]">{t('rd.description')}</p>
            <div className="flex gap-8 mb-8">
              <div>
                <p className="text-3xl font-semibold text-navy">{t('rd.stat1Value')}</p>
                <p className="text-sm text-outline uppercase">{t('rd.stat1Label')}</p>
              </div>
              <div>
                <p className="text-3xl font-semibold text-navy">{t('rd.stat2Value')}</p>
                <p className="text-sm text-outline uppercase">{t('rd.stat2Label')}</p>
              </div>
            </div>
            <Link href={`/${currentLocale}/about`} className="inline-block border border-primary px-6 py-3 text-primary text-sm font-semibold uppercase tracking-[0.14em] hover:bg-primary hover:text-white transition-colors">
              {t('rd.button')}
            </Link>
          </div>
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1200&q=80"
            alt="Research and development laboratory"
            className="h-[320px] w-full object-cover border border-border-light"
          />
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16 text-center">
        <h2 className="text-[36px] font-semibold text-slate-gray">{t('compliance.title')}</h2>
        <p className="text-on-surface-variant mt-3 mb-8 text-[15px]">{t('compliance.subtitle')}</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {['iso', 'astm', 'reach', 'msds', 'rohs'].map((item) => (
            <div key={item} className="bg-white border border-border-light py-6 px-3">
              <div className="w-10 h-10 rounded-full bg-surface-container mx-auto mb-3" />
              <p className="text-xs uppercase tracking-[0.14em] text-on-surface-variant">{t(`compliance.items.${item}`)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-navy text-white py-16">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-primary-fixed">{t('industries.eyebrow')}</p>
              <h2 className="text-[42px] font-semibold mt-2">{t('industries.title')}</h2>
            </div>
            <p className="text-primary-fixed">{t('industries.note')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {['automotive', 'construction', 'assembly', 'aerospace', 'energy', 'medical'].map((item) => (
              <article key={item} className="border border-[#2e5585] bg-[#0f3c6f] p-5">
                <h3 className="text-xl font-semibold mb-2">{t(`industries.cards.${item}.title`)}</h3>
                <p className="text-sm text-primary-fixed leading-relaxed">{t(`industries.cards.${item}.description`)}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-[1280px] mx-auto px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 border border-border-light">
          <div className="bg-[#efeff5] p-10">
            <h2 className="text-[36px] leading-tight font-semibold text-slate-gray mb-4">{t('partner.title')}</h2>
            <p className="text-on-surface-variant text-[15px] leading-relaxed">{t('partner.description')}</p>
          </div>
          <div className="p-10 bg-white flex flex-col sm:flex-row gap-3 items-start sm:items-center">
            <Link href={`/${currentLocale}/contact`} className="bg-primary text-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] hover:bg-primary-container transition-colors">
              {t('partner.primaryButton')}
            </Link>
            <Link href={`/${currentLocale}/services`} className="border border-border-light text-slate-gray px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] hover:bg-surface-container transition-colors">
              {t('partner.secondaryButton')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}