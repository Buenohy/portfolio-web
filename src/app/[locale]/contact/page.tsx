import ContactSection from '@/components/Sections/ContactSection';
import { getTranslations } from 'next-intl/server';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'ContactPage' });

  return {
    title: t('title'),
  };
}

export default function ContactPage() {
  return <ContactSection />;
}
