import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';

export const locales = ['en', 'pt-br'];

export default getRequestConfig(async ({ locale }) => {
  if (!locales.includes(locale)) {
    notFound();
  }

  return {
    locale,
    messages: (await import(`./src/messages/${locale}.json`)).default,
  };
});
