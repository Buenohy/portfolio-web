import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { HeaderVisibilityProvider } from '@/components/HeaderVisibilityContext/HeaderVisibilityContext';
import Header from '@/components/Header/Header';
import MenuBar from '@/components/MenuBar/MenuBar';
import Footer from '@/components/Footer/Footer';

import type { Metadata } from 'next';
// Importe o 'getMessages' para carregar as traduções
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import { hasLocale } from 'next-intl/server'; // Importe 'hasLocale' do server

export async function generateMetadata({
  params: { locale }, // Forma correta de receber o locale
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'Metadata' });
  return {
    title: t('title'),
    description: t('description'),
  };
}

// Corrija a assinatura da função para receber o locale diretamente
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Verifique se o locale é válido
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // 1. Carregue as mensagens para o locale atual
  let messages;
  try {
    messages = await getMessages();
  } catch (error) {
    // Se não encontrar mensagens, navega para a página 404
    notFound();
  }

  return (
    // 2. Passe as mensagens para o provider usando a prop 'messages'
    <NextIntlClientProvider locale={locale} messages={messages}>
      <HeaderVisibilityProvider>
        <Header />
        <main>{children}</main>
        <MenuBar />
        <Footer />
      </HeaderVisibilityProvider>
    </NextIntlClientProvider>
  );
}
