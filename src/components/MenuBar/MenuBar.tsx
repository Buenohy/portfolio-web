'use client';

import type { FC } from 'react';
import { usePathname } from '@/i18n/navigation';
import { Link as ScrollLink } from 'react-scroll';
import { NAV_ITEMS, type NavItem } from '@/lib/nav-item';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { Link as NextIntlLink } from '@/i18n/navigation';
import { useHeaderVisibility } from '@/components/HeaderVisibilityContext/HeaderVisibilityContext';

const MenuItemContent: FC<{ item: NavItem }> = ({ item }) => {
  const { Icon } = item;
  const t = useTranslations('MenuBar');

  const iconStyles = clsx(
    'w-6 h-6 text-icon-menu dark:text-tag-dark transition-all duration-300',
    'group-[.active]:text-dark-black group-[.active]:dark:text-white-pure'
  );

  const textStyles = clsx(
    'text-[10px] font-normal text-icon-menu dark:text-tag-dark transition-all duration-300',
    'group-[.active]:font-semibold group-[.active]:text-dark-black group-[.active]:dark:text-white-pure'
  );

  return (
    <div className="relative flex h-full w-10 flex-col items-center justify-center px-2 pt-4">
      <span className="group-[.active]:bg-main absolute top-[1px] left-1/2 mb-1 h-1 w-8 -translate-x-1/2 rounded-full bg-transparent transition-all duration-400" />
      <div className="flex flex-grow flex-col items-center justify-center gap-1 pt-1">
        <div>
          <Icon className={iconStyles} />
        </div>
        <span className={textStyles}>{t(item.id)}</span>
      </div>
    </div>
  );
};

const MenuBar: FC = () => {
  const pathname = usePathname();
  const { hideHeaderForScroll, showAndUnlockHeader } = useHeaderVisibility();

  return (
    <nav className="bg-white-pure dark:bg-dark-black fixed bottom-0 left-0 z-50 h-20 w-full border-t border-gray-200 sm:hidden dark:border-gray-800">
      <ul className="flex items-center justify-between px-4 pb-4">
        {NAV_ITEMS.map((item) => {
          const isOnCurrentPage = item.pageRoute === pathname;

          return (
            <li key={item.id} className="flex h-full items-center">
              {isOnCurrentPage ? (
                <ScrollLink
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={item.id === 'contact' ? 0 : -100}
                  duration={500}
                  activeClass="active"
                  className="group cursor-pointer"
                  onClick={hideHeaderForScroll}
                  onSetActive={showAndUnlockHeader}
                >
                  <MenuItemContent item={item} />
                </ScrollLink>
              ) : (
                <NextIntlLink
                  href={item.pageRoute}
                  className="group cursor-pointer"
                >
                  <MenuItemContent item={item} />
                </NextIntlLink>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default MenuBar;
