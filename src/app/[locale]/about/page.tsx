import AboutSection from '@/components/Sections/AboutSection';
import { getTranslations } from 'next-intl/server';

type Props = {
  params: {
    locale: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const { locale } = params;
  const t = await getTranslations({ locale, namespace: 'AboutPage' });

  return {
    title: t('title'),
  };
}

export default function AboutPage() {
  return <AboutSection />;
}
