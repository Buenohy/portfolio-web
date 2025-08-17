import ContactSection from '@/components/Sections/ContactSection';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: 'ContactPage' });

  return {
    title: t('title'),
  };
}

export default function ContactPage() {
  return <ContactSection />;
}
