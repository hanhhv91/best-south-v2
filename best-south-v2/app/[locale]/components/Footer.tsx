'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';

export default function Footer() {
  const t = useTranslations('footer');
  const params = useParams();
  const currentLocale = params.locale as string;

  return (
    <footer className="bg-surface-gray border-t-2 border-border-light">
      <div className="max-w-[1280px] mx-auto px-8 py-16 flex flex-col md:flex-row justify-between items-start gap-8">
        <div className="max-w-xs">
          <div className="text-lg font-bold text-slate-gray uppercase mb-4">{t('companyName')}</div>
          <p className="font-body-md text-on-surface-variant leading-relaxed mb-6">
            {t('description')}
          </p>
          <div className="flex gap-4">
            <a className="text-outline hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">language</span></a>
            <a className="text-outline hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
            <a className="text-outline hover:text-primary transition-colors" href="#"><span className="material-symbols-outlined">mail</span></a>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-navy">{t('sections.resources.title')}</span>
            <Link className="font-label-caps text-sm font-medium tracking-widest uppercase text-on-surface-variant hover:text-slate-gray transition-colors" href="#">{t('sections.resources.services')}</Link>
            <Link className="font-label-caps text-sm font-medium tracking-widest uppercase text-on-surface-variant hover:text-slate-gray transition-colors" href="#">{t('sections.resources.projects')}</Link>
            <Link className="font-label-caps text-sm font-medium tracking-widest uppercase text-on-surface-variant hover:text-slate-gray transition-colors" href="#">{t('sections.resources.certifications')}</Link>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-caps text-navy">{t('sections.activities.title')}</span>
            <Link className="font-label-caps text-sm font-medium tracking-widest uppercase text-on-surface-variant hover:text-slate-gray transition-colors" href="#">{t('sections.activities.recruitment')}</Link>
            <Link className="font-label-caps text-sm font-medium tracking-widest uppercase text-on-surface-variant hover:text-slate-gray transition-colors" href="#">{t('sections.activities.policies')}</Link>
            <Link className="font-label-caps text-sm font-medium tracking-widest uppercase text-on-surface-variant hover:text-slate-gray transition-colors underline underline-offset-4 text-primary" href={`/${currentLocale}/contact`}>{t('sections.activities.support')}</Link>
          </div>
          <div className="hidden lg:flex flex-col gap-4">
            <span className="font-label-caps text-navy">{t('sections.headOffice.title')}</span>
            <address className="not-italic font-body-md text-on-surface-variant leading-loose">
              {t('sections.headOffice.address')}
            </address>
          </div>
        </div>
      </div>
    </footer>
  );
}