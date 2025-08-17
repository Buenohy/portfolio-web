'use client';

import React, { useState, useRef, useEffect, useTransition } from 'react';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';
import { BR, US } from 'country-flag-icons/react/3x2';
import { useHeaderVisibility } from '@/components/HeaderVisibilityContext/HeaderVisibilityContext';

interface LanguageItem {
  id: number;
  flagComponent: React.ElementType;
  title: string;
  alt: string;
  locale: 'pt' | 'en';
}

const languageItems: LanguageItem[] = [
  {
    id: 1,
    flagComponent: BR,
    title: 'POR',
    alt: 'Português - Brasil',
    locale: 'pt',
  },
  {
    id: 2,
    flagComponent: US,
    title: 'ENG',
    alt: 'English - USA',
    locale: 'en',
  },
];

export default function MenuLang() {
  const [mounted, setMounted] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const { isVisible } = useHeaderVisibility();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isVisible) {
      setIsMenuOpen(false);
    }
  }, [isVisible]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLanguageChange = (newLocale: 'pt' | 'en') => {
    if (newLocale === locale || isPending) return;

    startTransition(() => {
      router.push(pathname, {
        locale: newLocale,
        scroll: false,
      });
      setIsMenuOpen(false);
    });
  };

  if (!mounted) {
    return <div className="h-8 w-[58px] rounded-xl" />;
  }

  return (
    <div className="relative z-50" ref={menuRef}>
      <button
        onClick={toggleMenu}
        disabled={isPending}
        className="text-white-pure bg-main active:bg-main focus:bg-main flex h-8 cursor-pointer items-center justify-center rounded-xl px-4 py-1 text-sm font-medium transition-opacity disabled:opacity-50"
        aria-haspopup="true"
        aria-expanded={isMenuOpen}
        aria-label="Change language"
      >
        Lang
      </button>

      {isMenuOpen && (
        <div className="bg-white-pure dark:bg-bg-gray absolute top-full right-0 z-50 mt-2 flex w-fit flex-col gap-1 rounded-xl p-2 shadow-xl">
          {languageItems.map((item) => {
            const FlagComponent = item.flagComponent;
            const isSelected = locale === item.locale;
            return (
              <div
                key={item.id}
                onClick={() => handleLanguageChange(item.locale)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleLanguageChange(item.locale);
                  }
                }}
                role="button"
                tabIndex={0}
                aria-disabled={isSelected || isPending}
                className="text-dark-black dark:text-white-pure hover:bg-main focus:bg-main hover:text-white-pure focus:text-white-pure active:text-white-pure flex cursor-pointer items-center gap-2 rounded-lg p-2 transition-colors focus:outline-none data-[disabled=true]:cursor-not-allowed data-[disabled=true]:opacity-50"
                data-disabled={isSelected || isPending}
              >
                <FlagComponent title={item.alt} className="w-6 rounded-sm" />
                <span className="text-base font-normal">{item.title}</span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
