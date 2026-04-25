import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { locales } from '../../i18n';
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export async function generateMetadata({ params }: { params: { locale: string } }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: t('home.title'),
    description: t('home.description'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        'vi': '/vi',
        'en': '/en',
        'zh': '/zh',
      },
    },
  };
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${inter.variable} h-full antialiased`}
    >
      <head>
        <link rel="alternate" hrefLang="vi" href="/vi" />
        <link rel="alternate" hrefLang="en" href="/en" />
        <link rel="alternate" hrefLang="zh" href="/zh" />
        <link rel="alternate" hrefLang="x-default" href="/vi" />
      </head>
      <body className="min-h-full flex flex-col font-body-md text-on-surface bg-surface">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
