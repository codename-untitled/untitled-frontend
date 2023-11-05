import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

type Props = {
  children: React.ReactNode | JSX.Element | JSX.Element[];
};

function ScrollToTop({ children }: Props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <div>{children}</div>;
}

export default ScrollToTop;
