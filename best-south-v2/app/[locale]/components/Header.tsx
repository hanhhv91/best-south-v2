"use client";

import { useMemo } from 'react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { useParams } from 'next/navigation';

export default function Header() {
  const t = useTranslations('header');
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const currentLocale = params.locale as string;
  const localeOptions = useMemo(
    () => [
      { value: 'vi', label: `🇻🇳 ${t('languages.vi')}` },
      { value: 'en', label: `🇺🇸 ${t('languages.en')}` },
      { value: 'zh', label: `🇨🇳 ${t('languages.zh')}` }
    ],
    [t]
  );

  const switchLanguage = (newLocale: string) => {
    // Remove the current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/';
    // Redirect to the new locale
    router.push(`/${newLocale}${pathWithoutLocale}`);
  };

  return (
    <header className="bg-white border-b border-border-light sticky top-0 z-50 shadow-sm">
      <nav className="max-w-[1280px] mx-auto px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4 h-20">
        <div className="flex items-center gap-6">
          <div className="text-lg font-black tracking-tighter text-slate-gray uppercase">{t('companyName')}</div>
          <div className="hidden lg:flex items-center gap-6 text-sm uppercase tracking-[0.18em] font-semibold">
            <Link href={`/${currentLocale}`} className="text-navy border-b-2 border-primary pb-1">{t('nav.products')}</Link>
            <Link href={`/${currentLocale}/about`} className="text-on-surface-variant hover:text-primary transition-colors duration-200">{t('nav.industrials')}</Link>
            <Link href={`/${currentLocale}/services`} className="text-on-surface-variant hover:text-primary transition-colors duration-200">{t('nav.rd')}</Link>
            <Link href={`/${currentLocale}/news`} className="text-on-surface-variant hover:text-primary transition-colors duration-200">{t('nav.certifications')}</Link>
            <Link href={`/${currentLocale}/contact`} className="text-on-surface-variant hover:text-primary transition-colors duration-200">{t('nav.technicalSupport')}</Link>
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end gap-4 min-w-[240px]">
          <div className="relative hidden xl:block w-[280px]">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-sm">search</span>
            <input
              className="w-full rounded-none border border-border-light bg-surface-container px-10 py-3 text-xs font-label-caps uppercase text-on-surface focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={t('search.placeholder')}
              type="text"
            />
          </div>

          <div className="hidden lg:flex items-center">
            <label htmlFor="locale-switcher" className="sr-only">Language</label>
            <select
              id="locale-switcher"
              value={currentLocale}
              onChange={(e) => switchLanguage(e.target.value)}
              className="rounded-md border border-border-light bg-surface-container px-3 py-2 text-sm font-semibold text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {localeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>

          <Link
            href={`/${currentLocale}/contact`}
            className="bg-primary text-white px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] hover:bg-primary-container transition-colors"
          >
            Request Quote
          </Link>
        </div>
      </nav>
    </header>
  );
}
