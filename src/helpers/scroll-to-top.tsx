import { ReactNode, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  children: Element | ReactNode | Element[];
};

function ScrollToTop({ children }: Props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return { children };
}

export default ScrollToTop;
