import './globals.css';
import { Poppins } from 'next/font/google';
import { Providers } from './providers';

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={params.locale} suppressHydrationWarning>
      <body className={`${poppins.variable}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
