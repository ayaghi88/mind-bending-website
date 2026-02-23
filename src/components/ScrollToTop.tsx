import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top on desktop where sidebar nav is used
    // On mobile, the fixed top nav is always accessible so no need to scroll
    const isDesktop = window.matchMedia('(min-width: 768px)').matches;
    if (isDesktop) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
