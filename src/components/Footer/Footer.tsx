import Link from 'next/link';
import YinYangIcon from '../YinYangIcon/YinYangIcon';

import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');
  return (
    <footer className="dark:bg-dark-black mb-20 bg-transparent px-5 text-center md:mb-0 lg:px-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-4 py-10 md:flex md:flex-row md:justify-between">
        <p className="text-dark-black my-3 flex items-center justify-evenly gap-2 text-xs font-light md:flex md:gap-1 dark:text-white">
          <YinYangIcon
            className="h-8 w-8 animate-[spin_5000ms_linear_infinite]"
            aria-label="Icon Yin Yang"
          />
          {t('createdBy')}
          <Link href="#about" className="text-main text-xs font-bold">
            {t('nameCreator')}
          </Link>
        </p>
        <p className="text-dark-black dark:text-white-pure my-3 text-xs font-light">
          {t('copyright')}
        </p>
      </div>
    </footer>
  );
}
