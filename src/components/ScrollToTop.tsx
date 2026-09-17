import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

/** Resets window scroll on route change (Lenis on home can leave a deep scroll offset). */
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
};
