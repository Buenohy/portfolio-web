import ContactSection from '@/components/Sections/ContactSection';
import { getTranslations } from 'next-intl/server';
import { setRequestLocale } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ContactSection' });

  return {
    title: t('title'),
  };
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  setRequestLocale(locale);

  const t = await getTranslations({ locale, namespace: 'ContactSection' });

  return (
    <ContactSection
      translations={{
        mainHeading: t('mainHeading'),
        subHeading: t('subHeading'),
        description: t('description'),
        ctaButton: t('ctaButton'),
        emailAddress: t('emailAddress'),
      }}
    />
  );
}
