import AboutSection from '@/components/Sections/AboutSection';

export async function generateMetadata({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'AboutPage' });
  return {
    title: t('title'),
  };
}

export default function AboutPage() {
  return <AboutSection />;
}
