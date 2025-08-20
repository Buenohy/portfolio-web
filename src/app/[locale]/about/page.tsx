import type { Metadata } from 'next';
import AboutSection from '@/components/Sections/AboutSection';
import { getTranslations } from 'next-intl/server';
import { useTranslations } from 'next-intl';

type Props = {
  params: { locale: string };
};

// --- Geração de Metadados (SEO) ---
export async function generateMetadata({
  params: { locale },
}: Props): Promise<Metadata> {
  // Usamos 'await getTranslations' aqui porque é uma função do lado do servidor
  const t = await getTranslations({ locale, namespace: 'AboutPage' });
  return {
    title: t('metaTitle'), // Ex: "Sobre Mim | Portfólio"
  };
}

// --- Componente da Página ---
export default async function AboutPage({ params: { locale } }: Props) {
  // Buscamos as traduções para a página
  const t = await getTranslations({ locale, namespace: 'AboutPage' });

  // Usamos t.rich para os parágrafos que podem conter HTML (como <strong>)
  // Isso é necessário por causa do tipo 'React.ReactNode' que você usou
  const tRich = await getTranslations({ locale, namespace: 'AboutPage.rich' });

  return (
    <main>
      <AboutSection
        // Agora passamos a prop 'translations' com todas as chaves necessárias
        translations={{
          sectionTitle: t('sectionTitle'),
          mainHeading: t('mainHeading'),
          // Usamos t.rich para os parágrafos
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
