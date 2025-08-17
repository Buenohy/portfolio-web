'use client';

import {
  createContext,
  useState,
  useContext,
  useEffect,
  useRef,
  type FC,
  type ReactNode,
  useCallback,
} from 'react';

interface HeaderVisibilityContextType {
  isVisible: boolean;
  hideHeaderForScroll: () => void;
  showAndUnlockHeader: () => void;
}

const HeaderVisibilityContext = createContext<
  HeaderVisibilityContextType | undefined
>(undefined);

export const HeaderVisibilityProvider: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isVisible, setIsVisibleState] = useState(true);
  const lastScrollY = useRef(0);
  const scrollUpAccumulator = useRef(0);

  const isScrollLocked = useRef(false);

  const autoHideTimer = useRef<NodeJS.Timeout | null>(null);
  const AUTO_HIDE_DELAY = 3000;
  const SCROLL_UP_THRESHOLD = 150;

  const resetAutoHideTimer = useCallback(() => {
    if (autoHideTimer.current) {
      clearTimeout(autoHideTimer.current);
    }
    autoHideTimer.current = setTimeout(() => {
      if (window.scrollY > 10 && !isScrollLocked.current) {
        setIsVisibleState(false);
      }
    }, AUTO_HIDE_DELAY);
  }, []);

  const hideHeaderForScroll = useCallback(() => {
    setIsVisibleState(false);
    isScrollLocked.current = true;
  }, []);

  const showAndUnlockHeader = useCallback(() => {
    setIsVisibleState(true);
    isScrollLocked.current = false;
    resetAutoHideTimer();
  }, [resetAutoHideTimer]);

  useEffect(() => {
    const handleScroll = () => {
      if (isScrollLocked.current) {
        return;
      }

      if (isVisible) {
        resetAutoHideTimer();
      }

      const currentScrollY = window.scrollY;
      const scrollDelta = lastScrollY.current - currentScrollY;

      if (currentScrollY <= 10) {
        setIsVisibleState(true);
      } else if (scrollDelta < 0) {
        if (currentScrollY > 100) {
          setIsVisibleState(false);
        }
        scrollUpAccumulator.current = 0;
      } else if (scrollDelta > 0 && !isVisible) {
        scrollUpAccumulator.current += scrollDelta;

        if (scrollUpAccumulator.current > SCROLL_UP_THRESHOLD) {
          setIsVisibleState(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (autoHideTimer.current) {
        clearTimeout(autoHideTimer.current);
      }
    };
  }, [isVisible, resetAutoHideTimer]);

  const value = {
    isVisible,
    hideHeaderForScroll,
    showAndUnlockHeader,
  };

  return (
    <HeaderVisibilityContext.Provider value={value}>
      {children}
    </HeaderVisibilityContext.Provider>
  );
};

export const useHeaderVisibility = (): HeaderVisibilityContextType => {
  const context = useContext(HeaderVisibilityContext);
  if (!context) {
    throw new Error(
      'useHeaderVisibility must be used within a HeaderVisibilityProvider'
    );
  }
  return context;
};
