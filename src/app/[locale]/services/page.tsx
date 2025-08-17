import ServicesSection from '@/components/Sections/ServicesSection';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'ServicesPage' });

  return {
    title: t('title'),
  };
}

export default function ServicesPage() {
  return <ServicesSection />;
}
