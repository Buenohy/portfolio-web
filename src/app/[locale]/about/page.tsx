import type { Metadata } from 'next';
import AboutSection from '@/components/Sections/AboutSection';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl';

type Props = {
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'AboutPage' });
  return {
    title: t('metaTitle'),
  };
}

export default async function AboutPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'AboutPage' });
  const tRich = await getTranslations({ locale, namespace: 'AboutPage.rich' });

  return (
    <main>
      <AboutSection
        translations={{
          sectionTitle: t('sectionTitle'),
          mainHeading: t('mainHeading'),
          paragraph1: tRich.rich('paragraph1', {
            strong: (chunks) => <strong>{chunks}</strong>,
          }),
          paragraph2: tRich.rich('paragraph2', {
            strong: (chunks) => <strong>{chunks}</strong>,
          }),
          paragraph3: tRich.rich('paragraph3', {
            strong: (chunks) => <strong>{chunks}</strong>,
          }),
          contactButton: t('contactButton'),
          linkedinButton: t('linkedinButton'),
        }}
      />
    </main>
  );
}
