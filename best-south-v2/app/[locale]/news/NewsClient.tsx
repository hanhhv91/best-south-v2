'use client';

import { useTranslations } from 'next-intl';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function NewsClient() {
  const t = useTranslations('news');
  const params = useParams();
  const currentLocale = params.locale as string;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* News Item 1 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {t('items.1.date')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t('items.1.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('items.1.excerpt')}
                </p>
                <Link
                  href={`/${currentLocale}/news/1`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {t('readMore')}
                </Link>
              </div>
            </article>

            {/* News Item 2 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {t('items.2.date')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t('items.2.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('items.2.excerpt')}
                </p>
                <Link
                  href={`/${currentLocale}/news/2`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {t('readMore')}
                </Link>
              </div>
            </article>

            {/* News Item 3 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {t('items.3.date')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t('items.3.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('items.3.excerpt')}
                </p>
                <Link
                  href={`/${currentLocale}/news/3`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {t('readMore')}
                </Link>
              </div>
            </article>

            {/* News Item 4 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {t('items.4.date')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t('items.4.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('items.4.excerpt')}
                </p>
                <Link
                  href={`/${currentLocale}/news/4`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {t('readMore')}
                </Link>
              </div>
            </article>

            {/* News Item 5 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {t('items.5.date')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t('items.5.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('items.5.excerpt')}
                </p>
                <Link
                  href={`/${currentLocale}/news/5`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {t('readMore')}
                </Link>
              </div>
            </article>

            {/* News Item 6 */}
            <article className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="text-sm text-blue-600 font-medium mb-2">
                  {t('items.6.date')}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {t('items.6.title')}
                </h3>
                <p className="text-gray-600 mb-4">
                  {t('items.6.excerpt')}
                </p>
                <Link
                  href={`/${currentLocale}/news/6`}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  {t('readMore')}
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}