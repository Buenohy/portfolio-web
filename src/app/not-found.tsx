import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function NotFound() {
  const t = useTranslations('NotFound');
  return (
    <section className="flex flex-col items-center justify-center px-5 text-center">
      <h1 className="animate-shake my-4 text-6xl font-semibold text-black dark:text-white">
        {t('title')}
      </h1>
      <h2 className="my-1 text-xl font-normal text-black dark:text-white">
        {t('subTitle')}
      </h2>
      <p className="my-5 text-base font-light text-[#0c1c2599] dark:text-[#fbfbff99]">
        {t('description')}
      </p>
      <Link href="/" className="button-primary mx-auto my-10">
        {t('buttonHomePage')}
      </Link>
    </section>
  );
}
