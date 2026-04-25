import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['vi', 'en', 'zh'] as const;
export type Locale = (typeof locales)[number];

export default getRequestConfig(async ({ locale }) => {
  const defaultLocale: Locale = 'vi';

  // Validate that the incoming `locale` parameter is valid
  const selectedLocale: Locale = locales.includes(locale as any)
    ? (locale as Locale)
    : defaultLocale;

  return {
    locale: selectedLocale,
    messages: (await import(`../messages/${selectedLocale}.json`)).default
  };
});