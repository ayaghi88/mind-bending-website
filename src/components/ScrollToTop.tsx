import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { scrollPageToTop } from '@/lib/navigation-scroll';

const ScrollToTop = () => {
  const { key } = useLocation();

  useEffect(() => {
    scrollPageToTop(window);
  }, [key]);

  return null;
};

export default ScrollToTop;
