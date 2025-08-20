import type { Metadata } from 'next'; // 1. Importe o tipo Metadata
import AboutSection from '@/components/Sections/AboutSection';
import { getTranslations } from 'next-intl/server';

// 2. Defina um tipo mais completo para as props, incluindo searchParams
type Props = {
  params: { locale: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

// 3. Aplique o tipo 'Props' e também o tipo de retorno 'Promise<Metadata>'
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const t = await getTranslations({
    locale: params.locale,
    namespace: 'AboutPage',
  });

  return {
    title: t('title'),
  };
}

export default function AboutPage() {
  return <AboutSection />;
}
