import type { Metadata } from 'next';
import ServicesSection from '@/components/Sections/ServicesSection';
import { getTranslations, setRequestLocale } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ServicesPage' });

  return {
    title: t('title'),
  };
}

export default async function ServicesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'ServicesSection' });

  const translations = {
    sectionTitle: t('sectionTitle'),
    mainHeading: t.rich('mainHeading', {
      br: () => <br />,
    }),
    subHeading: t.rich('subHeading', {
      br: () => <br />,
    }),
    cards: t.raw('cards'),
  };

  return <ServicesSection translations={translations} />;
}
